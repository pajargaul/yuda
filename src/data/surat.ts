export interface Surat {
  id: string;
  nomorSurat: string;
  tanggal: string;
  asalTujuan: string;
  perihal: string;
  status: 'Baru' | 'Diproses' | 'Selesai';
  jenis: 'masuk' | 'keluar';
}

export const SURAT_DATA: Surat[] = [
  { id: 'SM001', nomorSurat: '421/189/Disdik/2026', tanggal: '2026-09-01', asalTujuan: 'Dinas Pendidikan Kota Bandung', perihal: 'Undangan Rapat Koordinasi Kepala Sekolah', status: 'Baru', jenis: 'masuk' },
  { id: 'SM002', nomorSurat: '045/B/IX/2026', tanggal: '2026-09-02', asalTujuan: 'SMA Negeri 5 Bandung', perihal: 'Permohonan Tukar Jadwal Pertandingan', status: 'Diproses', jenis: 'masuk' },
  { id: 'SM003', nomorSurat: 'B-123/UM/2026', tanggal: '2026-08-28', asalTujuan: 'Kapolsek Sukajadi', perihal: 'Undangan Sosialisasi Bahaya Narkoba', status: 'Selesai', jenis: 'masuk' },
  { id: 'SM004', nomorSurat: '07/PID/2026', tanggal: '2026-09-03', asalTujuan: 'Pengadilan Negeri Bandung', perihal: 'Panggilan Saksi Sidang', status: 'Baru', jenis: 'masuk' },
  { id: 'SM005', nomorSurat: '293/SMP/2026', tanggal: '2026-08-25', asalTujuan: 'SMP Negeri 12 Bandung', perihal: 'Permohonan Data Alumni', status: 'Selesai', jenis: 'masuk' },
  { id: 'SK001', nomorSurat: '421/SMA-1/SK/2026', tanggal: '2026-09-02', asalTujuan: 'Kepala Dinas Pendidikan', perihal: 'Laporan Kegiatan OSIS Semester Ganjil', status: 'Selesai', jenis: 'keluar' },
  { id: 'SK002', nomorSurat: '421/SMA-1/UND/2026', tanggal: '2026-09-03', asalTujuan: 'Wali Murid Kelas XII', perihal: 'Undangan Pertemuan Wali Murid', status: 'Diproses', jenis: 'keluar' },
  { id: 'SK003', nomorSurat: '421/SMA-1/TUG/2026', tanggal: '2026-08-30', asalTujuan: 'Budi Santoso, S.Pd', perihal: 'Surat Tugas Pembinaan Lomba Cerdas Cermat', status: 'Selesai', jenis: 'keluar' },
  { id: 'SK004', nomorSurat: '421/SMA-1/KET/2026', tanggal: '2026-09-04', asalTujuan: 'Kepala Polresta Bandung', perihal: 'Keterangan Mahasiswa PKL', status: 'Baru', jenis: 'keluar' },
  { id: 'SM006', nomorSurat: '56/KOM/2026', tanggal: '2026-09-04', asalTujuan: 'Komite Sekolah', perihal: 'Usulan Program Bakti Sosial Tahun Ajaran Baru', status: 'Baru', jenis: 'masuk' },
];

export interface DisposisiEntry {
  id: string;
  dari: string;
  kepada: string;
  catatan: string;
  tanggal: string;
  status: 'Diteruskan' | 'Selesai' | 'Menunggu';
}

export const DISPOSISI_RIWAYAT: DisposisiEntry[] = [
  { id: 'D1', dari: 'Kepala Sekolah', kepada: 'Waka Kurikulum', catatan: 'Mohon ditindaklanjuti terkait jadwal pelaksanaan rapat koordinasi.', tanggal: '2026-09-01 09:15', status: 'Selesai' },
  { id: 'D2', dari: 'Waka Kurikulum', kepada: 'Koord. MGMP', catatan: 'Siapkan materi rapat dan koordinasikan dengan dinas.', tanggal: '2026-09-01 11:30', status: 'Selesai' },
  { id: 'D3', dari: 'Koord. MGMP', kepada: 'Bendahara', catatan: 'Siapkan transportasi dan konsumsi untuk peserta rapat.', tanggal: '2026-09-02 08:00', status: 'Menunggu' },
];
