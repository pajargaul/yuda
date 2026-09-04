import { useState } from 'react';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { Badge, statusBadge } from '@/components/Badge';
import { Modal } from '@/components/Modal';
import { Icon } from '@/components/Icon';
import { SISWA_DATA, KELAS_OPTIONS, STATUS_SISWA } from '@/data/siswa';
import type { Siswa } from '@/data/siswa';

export function SiswaPage() {
  const [search, setSearch] = useState('');
  const [filterKelas, setFilterKelas] = useState('Semua');
  const [filterStatus, setFilterStatus] = useState('Semua');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingSiswa, setEditingSiswa] = useState<Siswa | null>(null);

  const filtered = SISWA_DATA.filter((s) => {
    const matchSearch = s.nama.toLowerCase().includes(search.toLowerCase()) || s.nis.includes(search);
    const matchKelas = filterKelas === 'Semua' || s.kelas === filterKelas;
    const matchStatus = filterStatus === 'Semua' || s.status === filterStatus;
    return matchSearch && matchKelas && matchStatus;
  });

  const openAdd = () => { setEditingSiswa(null); setModalOpen(true); };
  const openEdit = (s: Siswa) => { setEditingSiswa(s); setModalOpen(true); };

  return (
    <div className="space-y-5">
      {/* Toolbar */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-3">
        <div className="relative flex-1 max-w-md">
          <Icon name="Search" className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari nama atau NIS siswa..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus-ring bg-white"
          />
        </div>
        <div className="flex items-center gap-3">
          <select
            value={filterKelas}
            onChange={(e) => setFilterKelas(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 bg-white focus-ring cursor-pointer"
          >
            <option>Semua</option>
            {KELAS_OPTIONS.map((k) => <option key={k}>{k}</option>)}
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 bg-white focus-ring cursor-pointer"
          >
            <option>Semua</option>
            {STATUS_SISWA.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div className="flex items-center gap-2 lg:ml-auto">
          <Button variant="secondary" icon={<Icon name="Upload" className="w-4 h-4" />}>Import Excel</Button>
          <Button icon={<Icon name="Plus" className="w-4 h-4" />} onClick={openAdd}>Tambah Siswa</Button>
        </div>
      </div>

      {/* Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3.5">NIS</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3.5">Nama</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3.5">Kelas</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3.5">L/P</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3.5">Orang Tua/Wali</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3.5">Status</th>
                <th className="text-right text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3.5">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((s) => (
                <tr key={s.nis} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-3.5 text-sm font-mono text-gray-600">{s.nis}</td>
                  <td className="px-6 py-3.5 text-sm font-semibold text-gray-900">{s.nama}</td>
                  <td className="px-6 py-3.5 text-sm text-gray-600">{s.kelas}</td>
                  <td className="px-6 py-3.5 text-sm text-gray-600">{s.jenisKelamin === 'L' ? 'Laki-laki' : 'Perempuan'}</td>
                  <td className="px-6 py-3.5 text-sm text-gray-600">{s.namaOrangTua}</td>
                  <td className="px-6 py-3.5"><Badge variant={statusBadge(s.status)}>{s.status}</Badge></td>
                  <td className="px-6 py-3.5">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-2 rounded-lg text-gray-400 hover:bg-brand-50 hover:text-brand-600 transition-colors" title="Lihat">
                        <Icon name="Eye" className="w-4 h-4" />
                      </button>
                      <button onClick={() => openEdit(s)} className="p-2 rounded-lg text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition-colors" title="Edit">
                        <Icon name="Edit" className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg text-gray-400 hover:bg-brand-50 hover:text-brand-600 transition-colors" title="Hapus">
                        <Icon name="Trash2" className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-sm text-gray-400">Tidak ada data siswa yang ditemukan.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-6 py-3 border-t border-gray-100">
          <p className="text-sm text-gray-500">Menampilkan {filtered.length} dari {SISWA_DATA.length} siswa</p>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 transition-colors"><Icon name="ChevronLeft" className="w-4 h-4" /></button>
            <button className="w-8 h-8 rounded-lg bg-brand-600 text-white text-sm font-semibold">1</button>
            <button className="w-8 h-8 rounded-lg text-gray-600 hover:bg-gray-100 text-sm font-semibold">2</button>
            <button className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 transition-colors"><Icon name="ChevronRight" className="w-4 h-4" /></button>
          </div>
        </div>
      </Card>

      {/* Add/Edit Modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingSiswa ? 'Edit Data Siswa' : 'Tambah Data Siswa'}
        subtitle={editingSiswa ? `NIS: ${editingSiswa.nis}` : 'Lengkapi data siswa baru di bawah ini'}
        size="xl"
        footer={
          <>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>Batal</Button>
            <Button icon={<Icon name="Save" className="w-4 h-4" />} onClick={() => setModalOpen(false)}>Simpan Data</Button>
          </>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="NIS" value={editingSiswa?.nis ?? ''} placeholder="Contoh: 2021013" />
          <Field label="NISN" value={editingSiswa?.nisn ?? ''} placeholder="10 digit NISN" />
          <Field label="Nama Lengkap" value={editingSiswa?.nama ?? ''} placeholder="Nama lengkap siswa" full />
          <Field label="Tempat Lahir" value={editingSiswa?.tempatLahir ?? ''} placeholder="Kota kelahiran" />
          <Field label="Tanggal Lahir" type="date" value={editingSiswa?.tanggalLahir ?? ''} />
          <SelectField label="Kelas" value={editingSiswa?.kelas ?? ''} options={KELAS_OPTIONS} />
          <SelectField label="Jenis Kelamin" value={editingSiswa?.jenisKelamin ?? ''} options={['L', 'P']} labels={['Laki-laki', 'Perempuan']} />
          <Field label="Alamat" value={editingSiswa?.alamat ?? ''} placeholder="Alamat lengkap" full />
          <Field label="Nama Orang Tua/Wali" value={editingSiswa?.namaOrangTua ?? ''} placeholder="Nama wali siswa" />
          <Field label="No. HP Orang Tua" value={editingSiswa?.noHp ?? ''} placeholder="08xxxxxxxxxx" />
          <SelectField label="Status" value={editingSiswa?.status ?? 'Aktif'} options={[...STATUS_SISWA]} />
        </div>
      </Modal>
    </div>
  );
}

function Field({ label, value, placeholder, type = 'text', full = false }: { label: string; value?: string; placeholder?: string; type?: string; full?: boolean }) {
  return (
    <div className={full ? 'sm:col-span-2' : ''}>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{label}</label>
      <input
        type={type}
        defaultValue={value}
        placeholder={placeholder}
        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus-ring"
      />
    </div>
  );
}

function SelectField({ label, value, options, labels }: { label: string; value: string; options: string[]; labels?: string[] }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{label}</label>
      <select
        defaultValue={value}
        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus-ring bg-white cursor-pointer"
      >
        {options.map((o, i) => (
          <option key={o} value={o}>{labels ? labels[i] : o}</option>
        ))}
      </select>
    </div>
  );
}
