import { useState } from 'react';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';
import { Icon } from '@/components/Icon';
import { ARSIP_DATA, ARSIP_KATEGORI } from '@/data/arsip';

const TIPE_ICON: Record<string, string> = {
  pdf: 'FileType',
  doc: 'FileText',
  img: 'FileImage',
  xls: 'FileSpreadsheet',
};

const TIPE_COLOR: Record<string, string> = {
  pdf: 'bg-brand-50 text-brand-600',
  doc: 'bg-blue-50 text-blue-600',
  img: 'bg-emerald-50 text-emerald-600',
  xls: 'bg-amber-50 text-amber-600',
};

export function ArsipPage() {
  const [search, setSearch] = useState('');
  const [filterKategori, setFilterKategori] = useState('Semua');
  const [uploadOpen, setUploadOpen] = useState(false);
  const [dragging, setDragging] = useState(false);

  const filtered = ARSIP_DATA.filter((a) => {
    const matchSearch = a.namaFile.toLowerCase().includes(search.toLowerCase());
    const matchKategori = filterKategori === 'Semua' || a.kategori === filterKategori;
    return matchSearch && matchKategori;
  });

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
            placeholder="Cari nama dokumen arsip..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus-ring bg-white"
          />
        </div>
        <select
          value={filterKategori}
          onChange={(e) => setFilterKategori(e.target.value)}
          className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 bg-white focus-ring cursor-pointer"
        >
          <option>Semua</option>
          {ARSIP_KATEGORI.map((k) => <option key={k}>{k}</option>)}
        </select>
        <Button className="lg:ml-auto" icon={<Icon name="Upload" className="w-4 h-4" />} onClick={() => setUploadOpen(true)}>
          Upload Dokumen
        </Button>
      </div>

      {/* Stats strip */}
      <div className="flex flex-wrap gap-3">
        {ARSIP_KATEGORI.map((k) => {
          const count = ARSIP_DATA.filter((a) => a.kategori === k).length;
          return (
            <button
              key={k}
              onClick={() => setFilterKategori(filterKategori === k ? 'Semua' : k)}
              className={`px-4 py-2 rounded-xl text-sm font-medium border transition-colors ${
                filterKategori === k ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
            >
              {k} <span className="text-xs opacity-70">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((a) => (
          <Card key={a.id} className="p-5 group hover:shadow-elevated transition-shadow cursor-pointer">
            <div className="flex items-start justify-between">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${TIPE_COLOR[a.tipe]}`}>
                <Icon name={TIPE_ICON[a.tipe]} className="w-6 h-6" />
              </div>
              <button className="p-1.5 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-500 transition-colors opacity-0 group-hover:opacity-100">
                <Icon name="MoreVertical" className="w-4 h-4" />
              </button>
            </div>
            <h3 className="font-semibold text-gray-900 mt-4 leading-snug line-clamp-2">{a.namaFile}</h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">{a.kategori}</span>
              <span className="text-xs text-gray-400 uppercase">{a.tipe}</span>
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50 text-xs text-gray-400">
              <span className="flex items-center gap-1"><Icon name="Calendar" className="w-3.5 h-3.5" /> {formatDate(a.tanggal)}</span>
              <span>{a.ukuran}</span>
            </div>
          </Card>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center py-16 text-gray-400">
            <Icon name="Archive" className="w-12 h-12 mx-auto mb-3 text-gray-300" />
            <p className="text-sm">Tidak ada arsip ditemukan</p>
          </div>
        )}
      </div>

      {/* Upload Modal */}
      <Modal
        open={uploadOpen}
        onClose={() => setUploadOpen(false)}
        title="Upload Dokumen Baru"
        subtitle="Unggah file untuk disimpan di arsip digital"
        size="lg"
        footer={
          <>
            <Button variant="secondary" onClick={() => setUploadOpen(false)}>Batal</Button>
            <Button icon={<Icon name="Upload" className="w-4 h-4" />} onClick={() => setUploadOpen(false)}>Upload</Button>
          </>
        }
      >
        <div className="space-y-4">
          <div
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => { e.preventDefault(); setDragging(false); }}
            className={`border-2 border-dashed rounded-2xl py-12 text-center transition-colors cursor-pointer ${
              dragging ? 'border-brand-500 bg-brand-50' : 'border-gray-200 hover:border-brand-300 hover:bg-gray-50'
            }`}
          >
            <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mx-auto mb-4">
              <Icon name="FileUp" className="w-7 h-7 text-brand-600" />
            </div>
            <p className="text-sm font-semibold text-gray-700">Tarik & lepas file di sini, atau <span className="text-brand-600">pilih file</span></p>
            <p className="text-xs text-gray-400 mt-1">Mendukung PDF, DOCX, XLSX, JPG, PNG — maksimal 50MB</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nama Dokumen</label>
              <input type="text" placeholder="Nama dokumen arsip" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus-ring" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Kategori</label>
              <select className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus-ring bg-white cursor-pointer">
                {ARSIP_KATEGORI.map((k) => <option key={k}>{k}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Deskripsi (opsional)</label>
            <textarea rows={2} placeholder="Keterangan dokumen..." className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus-ring resize-none" />
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
