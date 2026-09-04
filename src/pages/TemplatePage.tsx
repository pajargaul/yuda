import { useState } from 'react';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';
import { Icon } from '@/components/Icon';
import { TEMPLATE_DATA } from '@/data/arsip';

export function TemplatePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">Daftar templat surat yang tersedia untuk pembuatan otomatis</p>
        <Button icon={<Icon name="Plus" className="w-4 h-4" />} onClick={() => setModalOpen(true)}>Tambah Template</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {TEMPLATE_DATA.map((t) => (
          <Card key={t.id} className="p-5 hover:shadow-elevated transition-shadow group">
            <div className="flex items-start justify-between">
              <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center">
                <Icon name="FileStack" className="w-5 h-5 text-brand-600" />
              </div>
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 rounded-lg text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition-colors" title="Edit">
                  <Icon name="Edit" className="w-4 h-4" />
                </button>
                <button className="p-1.5 rounded-lg text-gray-400 hover:bg-brand-50 hover:text-brand-600 transition-colors" title="Duplikat">
                  <Icon name="Copy" className="w-4 h-4" />
                </button>
                <button className="p-1.5 rounded-lg text-gray-400 hover:bg-brand-50 hover:text-brand-600 transition-colors" title="Hapus">
                  <Icon name="Trash2" className="w-4 h-4" />
                </button>
              </div>
            </div>
            <h3 className="font-bold text-gray-900 mt-4">{t.nama}</h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">{t.jenis}</span>
              <span className="text-xs text-gray-400">{t.jumlahField} field</span>
            </div>
            <div className="flex items-center gap-1.5 mt-4 pt-4 border-t border-gray-50 text-xs text-gray-400">
              <Icon name="Clock" className="w-3.5 h-3.5" />
              Diperbarui {formatDate(t.terakhirDiubah)}
            </div>
          </Card>
        ))}
      </div>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Tambah Template Surat"
        subtitle="Buat templat baru untuk pembuatan surat otomatis"
        size="lg"
        footer={
          <>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>Batal</Button>
            <Button icon={<Icon name="Save" className="w-4 h-4" />} onClick={() => setModalOpen(false)}>Simpan Template</Button>
          </>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nama Template</label>
            <input type="text" placeholder="Contoh: Surat Keterangan Pindah Sekolah" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus-ring" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Jenis Surat</label>
              <select className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus-ring bg-white cursor-pointer">
                <option>Keterangan</option>
                <option>Tugas</option>
                <option>Panggilan</option>
                <option>Pengantar</option>
                <option>Izin</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Jumlah Field</label>
              <input type="number" defaultValue={5} className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus-ring" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Isi Template</label>
            <textarea
              rows={6}
              placeholder="Tulis isi surat. Gunakan {{nama_siswa}}, {{kelas}}, {{tanggal}} untuk variabel otomatis..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus-ring resize-none font-mono"
            />
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
