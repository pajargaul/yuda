export interface Aktivitas {
  id: string;
  user: string;
  aksi: string;
  detail: string;
  waktu: string;
  tipe: 'surat' | 'siswa' | 'arsip' | 'disposisi';
}

export const AKTIVITAS_DATA: Aktivitas[] = [
  { id: '1', user: 'Admin TU', aksi: 'Mendaftarkan surat masuk', detail: 'No. 421/189/Disdik/2026 — Dinas Pendidikan', waktu: '5 menit lalu', tipe: 'surat' },
  { id: '2', user: 'Budi Santoso, S.Pd', aksi: 'Menyelesaikan disposisi', detail: 'Surat tugas pembinaan lomba Cerdas Cermat', waktu: '22 menit lalu', tipe: 'disposisi' },
  { id: '3', user: 'Admin TU', aksi: 'Mengupload arsip', detail: 'Dokumen Akreditasi Sekolah 2025.pdf', waktu: '1 jam lalu', tipe: 'arsip' },
  { id: '4', user: 'Siti Aminah, S.Pd', aksi: 'Mengedit data siswa', detail: 'Nadia Safira Amelia — X IPA 1', waktu: '2 jam lalu', tipe: 'siswa' },
  { id: '5', user: 'Admin TU', aksi: 'Membuat surat keluar', detail: 'Keterangan Mahasiswa PKL untuk Polresta', waktu: '3 jam lalu', tipe: 'surat' },
  { id: '6', user: 'Kepala Sekolah', aksi: 'Memberikan disposisi', detail: 'Undangan Rapat Koordinasi — Dinas Pendidikan', waktu: '5 jam lalu', tipe: 'disposisi' },
];

export const CHART_DATA = [
  { bulan: 'Jan', masuk: 32, keluar: 18 },
  { bulan: 'Feb', masuk: 28, keluar: 22 },
  { bulan: 'Mar', masuk: 45, keluar: 30 },
  { bulan: 'Apr', masuk: 38, keluar: 25 },
  { bulan: 'Mei', masuk: 52, keluar: 35 },
  { bulan: 'Jun', masuk: 41, keluar: 28 },
  { bulan: 'Jul', masuk: 60, keluar: 42 },
  { bulan: 'Agu', masuk: 55, keluar: 38 },
  { bulan: 'Sep', masuk: 27, keluar: 19 },
];

export const STATS = [
  { label: 'Surat Masuk Bulan Ini', value: '27', sublabel: '+5 dari bulan lalu', icon: 'Inbox', trend: 'up' as const },
  { label: 'Surat Keluar Bulan Ini', value: '19', sublabel: '+2 dari bulan lalu', icon: 'Send', trend: 'up' as const },
  { label: 'Siswa Aktif', value: '842', sublabel: 'Dari total 910 siswa', icon: 'Users', trend: 'neutral' as const },
  { label: 'Perlu Disposisi', value: '5', sublabel: '3 mendesak', icon: 'AlertCircle', trend: 'down' as const },
];
