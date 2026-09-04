import { useState } from 'react';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { Badge, statusBadge } from '@/components/Badge';
import { Modal } from '@/components/Modal';
import { Icon } from '@/components/Icon';
import { SURAT_DATA } from '@/data/surat';
import type { Surat } from '@/data/surat';

type Tab = 'masuk' | 'keluar';

export function SuratPage() {
  const [tab, setTab] = useState<Tab>('masuk');
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('Semua');
  const [modalOpen, setModalOpen] = useState(false);

  const filtered = SURAT_DATA.filter((s) => {
    const matchTab = s.jenis === tab;
    const matchSearch = s.nomorSurat.toLowerCase().includes(search.toLowerCase()) ||
      s.asalTujuan.toLowerCase().includes(search.toLowerCase()) ||
      s.perihal.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === 'Semua' || s.status === filterStatus;
    return matchTab && matchSearch && matchStatus;
  });

  const counts = {
    masuk: SURAT_DATA.filter((s) => s.jenis === 'masuk').length,
    keluar: SURAT_DATA.filter((s) => s.jenis === 'keluar').length,
  };

  return (
    <div className="space-y-5">
      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-gray-200">
        <button
          onClick={() => setTab('masuk')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors -mb-px ${
            tab === 'masuk' ? 'border-brand-600 text-brand-700' : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          <Icon name="Inbox" className="w-4 h-4" />
          Surat Masuk
          <span className={`text-xs px-2 py-0.5 rounded-full ${tab === 'masuk' ? 'bg-brand-100 text-brand-700' : 'bg-gray-100 text-gray-500'}`}>{counts.masuk}</span>
        </button>
        <button
          onClick={() => setTab('keluar')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors -mb-px ${
            tab === 'keluar' ? 'border-brand-600 text-brand-700' : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          <Icon name="Send" className="w-4 h-4" />
          Surat Keluar
          <span className={`text-xs px-2 py-0.5 rounded-full ${tab === 'keluar' ? 'bg-brand-100 text-brand-700' : 'bg-gray-100 text-gray-500'}`}>{counts.keluar}</span>
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-3">
        <div className="relative flex-1 max-w-md">
          <Icon name="Search" className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari nomor surat, asal/tujuan, perihal..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus-ring bg-white"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 bg-white focus-ring cursor-pointer"
        >
          <option>Semua</option>
          <option>Baru</option>
          <option>Diproses</option>
          <option>Selesai</option>
        </select>
        <Button className="lg:ml-auto" icon={<Icon name="Plus" className="w-4 h-4" />} onClick={() => setModalOpen(true)}>
          Tambah Surat
        </Button>
      </div>

      {/* Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3.5">Nomor Surat</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3.5">Tanggal</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3.5">{tab === 'masuk' ? 'Asal' : 'Tujuan'}</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3.5">Perihal</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3.5">Status</th>
                <th className="text-right text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3.5">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((s: Surat) => (
                <tr key={s.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-3.5 text-sm font-mono font-semibold text-gray-900">{s.nomorSurat}</td>
                  <td className="px-6 py-3.5 text-sm text-gray-600">{formatDate(s.tanggal)}</td>
                  <td className="px-6 py-3.5 text-sm text-gray-600 max-w-[200px] truncate">{s.asalTujuan}</td>
                  <td className="px-6 py-3.5 text-sm text-gray-700 max-w-[240px] truncate">{s.perihal}</td>
                  <td className="px-6 py-3.5"><Badge variant={statusBadge(s.status)}>{s.status}</Badge></td>
                  <td className="px-6 py-3.5">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-2 rounded-lg text-gray-400 hover:bg-brand-50 hover:text-brand-600 transition-colors" title="Lihat">
                        <Icon name="Eye" className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition-colors" title="Edit">
                        <Icon name="Edit" className="w-4 h-4" />
                      </button>
                      {tab === 'masuk' && (
                        <button className="p-2 rounded-lg text-gray-400 hover:bg-amber-50 hover:text-amber-600 transition-colors" title="Disposisi">
                          <Icon name="Share2" className="w-4 h-4" />
                        </button>
                      )}
                      <button className="p-2 rounded-lg text-gray-400 hover:bg-brand-50 hover:text-brand-600 transition-colors" title="Hapus">
                        <Icon name="Trash2" className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-sm text-gray-400">Tidak ada surat ditemukan.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Add Modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={`Tambah ${tab === 'masuk' ? 'Surat Masuk' : 'Surat Keluar'}`}
        subtitle="Lengkapi data surat di bawah ini"
        size="lg"
        footer={
          <>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>Batal</Button>
            <Button icon={<Icon name="Save" className="w-4 h-4" />} onClick={() => setModalOpen(false)}>Simpan</Button>
          </>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nomor Surat</label>
            <input type="text" placeholder="Contoh: 421/190/Disdik/2026" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus-ring" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Tanggal</label>
            <input type="date" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus-ring" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Status</label>
            <select className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus-ring bg-white cursor-pointer">
              <option>Baru</option>
              <option>Diproses</option>
              <option>Selesai</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">{tab === 'masuk' ? 'Asal Surat' : 'Tujuan Surat'}</label>
            <input type="text" placeholder={tab === 'masuk' ? 'Instansi pengirim' : 'Instansi tujuan'} className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus-ring" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Perihal</label>
            <input type="text" placeholder="Subjek surat" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus-ring" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Ringkasan / Catatan</label>
            <textarea rows={3} placeholder="Catatan tambahan..." className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus-ring resize-none" />
          </div>
        </div>
      </Modal>
    </div>
  );
}

function formatDate(d: string) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  const [y, m, day] = d.split('-');
  return `${parseInt(day)} ${months[parseInt(m) - 1]} ${y}`;
}
