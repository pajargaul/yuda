import { useState } from 'react';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { SISWA_DATA } from '@/data/siswa';

interface LetterType {
  id: string;
  nama: string;
  deskripsi: string;
  icon: string;
  fields: { key: string; label: string; type: string; placeholder?: string }[];
}

const LETTER_TYPES: LetterType[] = [
  {
    id: 'keterangan-aktif',
    nama: 'Surat Keterangan Aktif',
    deskripsi: 'Keterangan bahwa siswa masih aktif belajar',
    icon: 'CheckCircle2',
    fields: [
      { key: 'siswa', label: 'Pilih Siswa', type: 'select' },
      { key: 'keperluan', label: 'Keperluan', type: 'text', placeholder: 'Contoh: Mengurus BPJS' },
      { key: 'tanggal', label: 'Tanggal Surat', type: 'date' },
    ],
  },
  {
    id: 'surat-tugas',
    nama: 'Surat Tugas',
    deskripsi: 'Penugasan guru/staf untuk kegiatan tertentu',
    icon: 'ClipboardList',
    fields: [
      { key: 'siswa', label: 'Pilih Guru/Staf', type: 'select' },
      { key: 'kegiatan', label: 'Nama Kegiatan', type: 'text', placeholder: 'Contoh: Pembinaan LCC' },
      { key: 'lokasi', label: 'Lokasi', type: 'text', placeholder: 'Contoh: Aula SMA Negeri 3' },
      { key: 'tanggal', label: 'Tanggal Tugas', type: 'date' },
    ],
  },
  {
    id: 'panggilan-ortu',
    nama: 'Surat Panggilan Orang Tua',
    deskripsi: 'Memanggil orang tua/wali siswa',
    icon: 'Mail',
    fields: [
      { key: 'siswa', label: 'Pilih Siswa', type: 'select' },
      { key: 'keperluan', label: 'Tujuan Panggilan', type: 'text', placeholder: 'Contoh: Konsultasi akademik' },
      { key: 'tanggal', label: 'Tanggal Pertemuan', type: 'date' },
    ],
  },
  {
    id: 'surat-pengantar',
    nama: 'Surat Pengantar',
    deskripsi: 'Pengantar resmi untuk urusan administrasi',
    icon: 'FileText',
    fields: [
      { key: 'siswa', label: 'Pilih Siswa', type: 'select' },
      { key: 'tujuan', label: 'Instansi Tujuan', type: 'text', placeholder: 'Contoh: Dinas Pendidikan' },
      { key: 'keperluan', label: 'Keperluan', type: 'text', placeholder: 'Contoh: Mengurus persyaratan' },
      { key: 'tanggal', label: 'Tanggal Surat', type: 'date' },
    ],
  },
  {
    id: 'surat-keluar-umum',
    nama: 'Surat Keluar Umum',
    deskripsi: 'Surat keluar untuk keperluan umum',
    icon: 'Send',
    fields: [
      { key: 'tujuan', label: 'Tujuan Surat', type: 'text', placeholder: 'Instansi tujuan' },
      { key: 'perihal', label: 'Perihal', type: 'text', placeholder: 'Subjek surat' },
      { key: 'isi', label: 'Isi Ringkas', type: 'textarea', placeholder: 'Isi surat...' },
      { key: 'tanggal', label: 'Tanggal Surat', type: 'date' },
    ],
  },
];

export function BuatSuratPage() {
  const [selectedType, setSelectedType] = useState<LetterType | null>(null);
  const [selectedSiswa, setSelectedSiswa] = useState(SISWA_DATA[0]);
  const [formValues, setFormValues] = useState<Record<string, string>>({});

  if (!selectedType) {
    return (
      <div className="space-y-5">
        <div className="text-sm text-gray-500">Pilih jenis surat untuk mulai membuat dokumen</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {LETTER_TYPES.map((lt) => (
            <button
              key={lt.id}
              onClick={() => { setSelectedType(lt); setFormValues({}); }}
              className="group bg-white rounded-2xl border border-gray-100 shadow-card p-6 text-left hover:shadow-elevated hover:border-brand-200 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center group-hover:bg-brand-600 transition-colors">
                <Icon name={lt.icon} className="w-6 h-6 text-brand-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 mt-4">{lt.nama}</h3>
              <p className="text-sm text-gray-500 mt-1 leading-snug">{lt.deskripsi}</p>
              <div className="flex items-center gap-1 mt-4 text-sm font-semibold text-brand-600 group-hover:gap-2 transition-all">
                Buat surat <Icon name="ChevronRight" className="w-4 h-4" />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Back button */}
      <button
        onClick={() => setSelectedType(null)}
        className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-brand-600 transition-colors"
      >
        <Icon name="ArrowLeft" className="w-4 h-4" /> Pilih jenis surat lain
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Form */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
              <Icon name={selectedType.icon} className="w-5 h-5 text-brand-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">{selectedType.nama}</h3>
              <p className="text-sm text-gray-500">{selectedType.deskripsi}</p>
            </div>
          </div>

          <div className="space-y-4">
            {selectedType.fields.map((f) => {
              if (f.type === 'select') {
                return (
                  <div key={f.key}>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">{f.label}</label>
                    <select
                      value={f.key === 'siswa' ? selectedSiswa.nis : formValues[f.key] ?? ''}
                      onChange={(e) => {
                        if (f.key === 'siswa') {
                          const found = SISWA_DATA.find((s) => s.nis === e.target.value);
                          if (found) setSelectedSiswa(found);
                        } else {
                          setFormValues({ ...formValues, [f.key]: e.target.value });
                        }
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus-ring bg-white cursor-pointer"
                    >
                      {SISWA_DATA.map((s) => (
                        <option key={s.nis} value={s.nis}>{s.nama} — {s.kelas}</option>
                      ))}
                    </select>
                  </div>
                );
              }
              if (f.type === 'textarea') {
                return (
                  <div key={f.key}>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">{f.label}</label>
                    <textarea
                      rows={4}
                      placeholder={f.placeholder}
                      value={formValues[f.key] ?? ''}
                      onChange={(e) => setFormValues({ ...formValues, [f.key]: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus-ring resize-none"
                    />
                  </div>
                );
              }
              return (
                <div key={f.key}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">{f.label}</label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    value={formValues[f.key] ?? ''}
                    onChange={(e) => setFormValues({ ...formValues, [f.key]: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus-ring"
                  />
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-100">
            <Button icon={<Icon name="Download" className="w-4 h-4" />}>Unduh PDF</Button>
            <Button variant="secondary" icon={<Icon name="FileText" className="w-4 h-4" />}>Unduh Word</Button>
            <Button variant="ghost" icon={<Icon name="Printer" className="w-4 h-4" />} className="ml-auto">Cetak</Button>
          </div>
        </Card>

        {/* Preview */}
        <Card className="p-0 overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50">
            <span className="text-sm font-semibold text-gray-600">Preview Surat</span>
            <Icon name="Eye" className="w-4 h-4 text-gray-400" />
          </div>
          <div className="p-8 bg-white max-h-[600px] overflow-y-auto">
            {/* Kop surat */}
            <div className="text-center border-b-2 border-gray-800 pb-4 mb-6">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-14 h-14 rounded-lg bg-brand-600 text-white flex items-center justify-center">
                  <Icon name="GraduationCap" className="w-7 h-7" />
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold text-gray-900 leading-tight">PEMERINTAH PROVINSI JAWA BARAT</p>
                  <p className="text-lg font-bold text-gray-900 leading-tight">DINAS PENDIDIKAN</p>
                  <p className="text-xl font-extrabold text-gray-900 leading-tight">SMA NEGERI 1 BANDUNG</p>
                </div>
              </div>
              <p className="text-xs text-gray-500">Jl. Ir. H. Juanda No. 112, Bandung 40124 · Telp. (022) 423-5678 · Email: info@sman1bdg.sch.id</p>
            </div>

            {/* Body */}
            <div className="text-center mb-6">
              <h3 className="font-bold text-base uppercase underline text-gray-900">{selectedType.nama}</h3>
              <p className="text-sm text-gray-600 mt-1">Nomor: 421/SMA-1/{selectedType.id.slice(0, 3).toUpperCase()}/2026</p>
            </div>

            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
              <p>Yang bertanda tangan di bawah ini, Kepala SMA Negeri 1 Bandung, dengan ini menerangkan bahwa:</p>

              <div className="pl-6 space-y-1">
                <p>Nama <span className="font-semibold">: {selectedSiswa.nama}</span></p>
                <p>NIS / NISN <span className="font-semibold">: {selectedSiswa.nis} / {selectedSiswa.nisn}</span></p>
                <p>Kelas <span className="font-semibold">: {selectedSiswa.kelas}</span></p>
                <p>Tempat, Tgl Lahir <span className="font-semibold">: {selectedSiswa.tempatLahir}, {formatDate(selectedSiswa.tanggalLahir)}</span></p>
              </div>

              <p>
                Adalah benar-benar siswa/siswi yang masih aktif belajar di sekolah ini pada tahun ajaran 2026/2027.
                Surat keterangan ini dibuat untuk keperluan <span className="font-semibold">{formValues.keperluan || formValues.kegiatan || formValues.tujuan || '...'}</span>.
              </p>

              <p>Demikian surat keterangan ini dibuat untuk dapat dipergunakan sebagaimana mestinya.</p>
            </div>

            {/* Signature */}
            <div className="flex justify-end mt-8">
              <div className="text-center">
                <p className="text-sm text-gray-700">Bandung, {formatDate(formValues.tanggal || new Date().toISOString().slice(0, 10))}</p>
                <p className="text-sm text-gray-700 mt-1">Kepala Sekolah,</p>
                <div className="h-20 flex items-center justify-center">
                  <div className="w-24 h-16 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-300">TTD</div>
                </div>
                <p className="text-sm font-bold text-gray-900 underline">Dr. H. Sutrisno, M.Pd.</p>
                <p className="text-sm text-gray-600">NIP. 196505121990031005</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function formatDate(d: string) {
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  const [y, m, day] = d.split('-');
  return `${parseInt(day)} ${months[parseInt(m) - 1]} ${y}`;
}
