export type PageKey =
  | 'dashboard'
  | 'siswa'
  | 'surat'
  | 'buat-surat'
  | 'template'
  | 'disposisi'
  | 'arsip';

export interface NavItem {
  key: PageKey;
  label: string;
  icon: string;
  badge?: number;
}

export const NAV_ITEMS: NavItem[] = [
  { key: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
  { key: 'siswa', label: 'Buku Induk Siswa', icon: 'Users' },
  { key: 'surat', label: 'Surat Masuk & Keluar', icon: 'Mail', badge: 5 },
  { key: 'buat-surat', label: 'Pembuatan Surat', icon: 'FileText' },
  { key: 'template', label: 'Kelola Template', icon: 'FileStack' },
  { key: 'disposisi', label: 'Disposisi Digital', icon: 'Share2', badge: 3 },
  { key: 'arsip', label: 'Digitalisasi Arsip', icon: 'Archive' },
];
