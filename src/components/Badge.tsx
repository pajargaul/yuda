import type { ReactNode } from 'react';

type BadgeVariant = 'baru' | 'diproses' | 'selesai' | 'aktif' | 'lulus' | 'pindah' | 'tidak-aktif' | 'default';

const STYLES: Record<BadgeVariant, string> = {
  baru: 'bg-brand-50 text-brand-700 ring-brand-200',
  diproses: 'bg-amber-50 text-amber-700 ring-amber-200',
  selesai: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  aktif: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  lulus: 'bg-blue-50 text-blue-700 ring-blue-200',
  pindah: 'bg-purple-50 text-purple-700 ring-purple-200',
  'tidak-aktif': 'bg-gray-100 text-gray-600 ring-gray-300',
  default: 'bg-gray-100 text-gray-700 ring-gray-300',
};

export function Badge({ variant = 'default', children }: { variant?: BadgeVariant; children: ReactNode }) {
  const v = (variant as string) in STYLES ? variant : 'default';
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${STYLES[v]}`}>
      {children}
    </span>
  );
}

export function statusBadge(status: string): BadgeVariant {
  const map: Record<string, BadgeVariant> = {
    'Baru': 'baru',
    'Diproses': 'diproses',
    'Selesai': 'selesai',
    'Aktif': 'aktif',
    'Lulus': 'lulus',
    'Pindah': 'pindah',
    'Tidak Aktif': 'tidak-aktif',
  };
  return map[status] ?? 'default';
}
