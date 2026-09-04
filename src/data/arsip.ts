export interface ArsipItem {
  id: string;
  namaFile: string;
  kategori: string;
  tanggal: string;
  ukuran: string;
  tipe: 'pdf' | 'doc' | 'img' | 'xls';
}

export const ARSIP_DATA: ArsipItem[] = [
  { id: 'A001', namaFile: 'SK Pembagian Tugas Mengajar 2026', kategori: 'Kepegawaian', tanggal: '2026-01-15', ukuran: '2.4 MB', tipe: 'pdf' },
  { id: 'A002', namaFile: 'Daftar Nilai Ujian Nasional 2025', kategori: 'Akademik', tanggal: '2026-05-10', ukuran: '1.8 MB', tipe: 'xls' },
  { id: 'A003', namaFile: 'Notulen Rapat Komite Sekolah', kategori: 'Rapat', tanggal: '2026-08-20', ukuran: '340 KB', tipe: 'doc' },
  { id: 'A004', namaFile: 'Foto Kegiatan Bakti Sosial', kategori: 'Kegiatan', tanggal: '2026-08-17', ukuran: '12.5 MB', tipe: 'img' },
  { id: 'A005', namaFile: 'Laporan Tahunan Sekolah 2025', kategori: 'Laporan', tanggal: '2026-01-30', ukuran: '5.2 MB', tipe: 'pdf' },
  { id: 'A006', namaFile: 'Surat Keputusan OSIS Periode 2026', kategori: 'Kesiswaan', tanggal: '2026-02-01', ukuran: '890 KB', tipe: 'pdf' },
  { id: 'A007', namaFile: 'Jadwal Pelajaran Semester Ganjil', kategori: 'Akademik', tanggal: '2026-07-15', ukuran: '1.1 MB', tipe: 'xls' },
  { id: 'A008', namaFile: 'Proposal Bakti Sosial 2026', kategori: 'Kegiatan', tanggal: '2026-08-05', ukuran: '1.5 MB', tipe: 'doc' },
  { id: 'A009', namaFile: 'Dokumen Akreditasi Sekolah 2025', kategori: 'Akreditasi', tanggal: '2026-03-22', ukuran: '8.7 MB', tipe: 'pdf' },
  { id: 'A010', namaFile: 'Foto Wisuda Siswa Kelas XII', kategori: 'Kegiatan', tanggal: '2026-06-25', ukuran: '24.3 MB', tipe: 'img' },
  { id: 'A011', namaFile: 'Data Induk Siswa 2026-2027', kategori: 'Kesiswaan', tanggal: '2026-07-01', ukuran: '3.6 MB', tipe: 'xls' },
  { id: 'A012', namaFile: 'SK Pemberhentian Guru Pensiun', kategori: 'Kepegawaian', tanggal: '2026-04-10', ukuran: '780 KB', tipe: 'pdf' },
];

export const ARSIP_KATEGORI = ['Kepegawaian', 'Akademik', 'Rapat', 'Kegiatan', 'Laporan', 'Kesiswaan', 'Akreditasi'];

export interface TemplateSurat {
  id: string;
  nama: string;
  jenis: string;
  terakhirDiubah: string;
  jumlahField: number;
}

export const TEMPLATE_DATA: TemplateSurat[] = [
  { id: 'T001', nama: 'Surat Keterangan Aktif Siswa', jenis: 'Keterangan', terakhirDiubah: '2026-08-15', jumlahField: 6 },
  { id: 'T002', nama: 'Surat Tugas Guru', jenis: 'Tugas', terakhirDiubah: '2026-07-20', jumlahField: 5 },
  { id: 'T003', nama: 'Surat Panggilan Orang Tua', jenis: 'Panggilan', terakhirDiubah: '2026-08-30', jumlahField: 4 },
  { id: 'T004', nama: 'Surat Pengantar Beasiswa', jenis: 'Pengantar', terakhirDiubah: '2026-06-12', jumlahField: 7 },
  { id: 'T005', nama: 'Surat Keterangan Kelakuan Baik', jenis: 'Keterangan', terakhirDiubah: '2026-09-01', jumlahField: 5 },
  { id: 'T006', nama: 'Surat Izin Tidak Masuk Sekolah', jenis: 'Izin', terakhirDiubah: '2026-08-25', jumlahField: 3 },
];
