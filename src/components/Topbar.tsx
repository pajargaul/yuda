import { useState } from 'react';
import { Icon } from './Icon';
import type { PageKey } from '@/data/navigation';

const PAGE_TITLES: Record<PageKey, { title: string; subtitle: string }> = {
  dashboard: { title: 'Dashboard', subtitle: 'Ringkasan aktivitas persuratan hari ini' },
  siswa: { title: 'Buku Induk Siswa', subtitle: 'Kelola data induk seluruh siswa' },
  surat: { title: 'Surat Masuk & Keluar', subtitle: 'E-Agenda persuratan sekolah' },
  'buat-surat': { title: 'Pembuatan Surat Otomatis', subtitle: 'Generate surat resmi sekolah' },
  template: { title: 'Kelola Template Surat', subtitle: 'Atur templat dokumen persuratan' },
  disposisi: { title: 'Disposisi Digital', subtitle: 'Tindak lanjuti surat masuk secara digital' },
  arsip: { title: 'Digitalisasi Arsip', subtitle: 'Pusat dokumen dan arsip digital sekolah' },
};

interface TopbarProps {
  current: PageKey;
  onToggleMobile: () => void;
  onLogout: () => void;
}

export function Topbar({ current, onToggleMobile, onLogout }: TopbarProps) {
  const [notifOpen, setNotifOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const info = PAGE_TITLES[current];

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-gray-200 h-16 flex items-center px-4 lg:px-6 gap-4">
      <button onClick={onToggleMobile} className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100">
        <Icon name="Menu" className="w-5 h-5" />
      </button>

      <div className="flex-1 min-w-0">
        <h1 className="font-bold text-gray-900 text-lg leading-tight truncate">{info.title}</h1>
        <p className="text-xs text-gray-500 leading-tight truncate hidden sm:block">{info.subtitle}</p>
      </div>

      {/* Search */}
      <div className="hidden md:flex items-center bg-gray-100 rounded-xl px-3 py-2 w-64">
        <Icon name="Search" className="w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Cari surat, siswa, arsip..."
          className="bg-transparent border-0 outline-none text-sm px-2 flex-1 placeholder:text-gray-400"
        />
      </div>

      {/* Notifications */}
      <div className="relative">
        <button
          onClick={() => { setNotifOpen(!notifOpen); setUserOpen(false); }}
          className="relative p-2 rounded-xl text-gray-500 hover:bg-gray-100 transition-colors"
        >
          <Icon name="Bell" className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-brand-500 ring-2 ring-white" />
        </button>
        {notifOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setNotifOpen(false)} />
            <div className="absolute right-0 top-12 z-20 w-80 bg-white rounded-2xl shadow-elevated border border-gray-100 animate-scale-in overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="font-bold text-sm text-gray-900">Notifikasi</p>
              </div>
              <div className="max-h-72 overflow-y-auto">
                {[
                  { text: 'Surat masuk baru dari Dinas Pendidikan', time: '5 menit lalu', unread: true },
                  { text: 'Disposisi menunggu dari Kepala Sekolah', time: '1 jam lalu', unread: true },
                  { text: 'Upload arsip berhasil — Akreditasi 2025', time: '2 jam lalu', unread: false },
                ].map((n, i) => (
                  <div key={i} className={`px-4 py-3 border-b border-gray-50 hover:bg-gray-50 cursor-pointer ${n.unread ? 'bg-brand-50/40' : ''}`}>
                    <p className="text-sm text-gray-700 leading-snug">{n.text}</p>
                    <p className="text-xs text-gray-400 mt-1">{n.time}</p>
                  </div>
                ))}
              </div>
              <button className="w-full px-4 py-2.5 text-sm font-semibold text-brand-600 hover:bg-gray-50">
                Tandai semua dibaca
              </button>
            </div>
          </>
        )}
      </div>

      {/* User */}
      <div className="relative">
        <button
          onClick={() => { setUserOpen(!userOpen); setNotifOpen(false); }}
          className="flex items-center gap-2.5 p-1 pr-2 rounded-xl hover:bg-gray-100 transition-colors"
        >
          <div className="w-9 h-9 rounded-lg bg-brand-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
            AD
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-sm font-semibold text-gray-800 leading-tight">Admin TU</p>
            <p className="text-xs text-gray-400 leading-tight">Tata Usaha</p>
          </div>
          <Icon name="ChevronDown" className="w-4 h-4 text-gray-400 hidden sm:block" />
        </button>
        {userOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setUserOpen(false)} />
            <div className="absolute right-0 top-12 z-20 w-56 bg-white rounded-2xl shadow-elevated border border-gray-100 animate-scale-in overflow-hidden py-1">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="font-semibold text-sm text-gray-900">Admin TU</p>
                <p className="text-xs text-gray-400">admin@sman1bdg.sch.id</p>
              </div>
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50">
                <Icon name="User" className="w-4 h-4" /> Profil Saya
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50">
                <Icon name="Settings" className="w-4 h-4" /> Pengaturan
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50">
                <Icon name="HelpCircle" className="w-4 h-4" /> Bantuan
              </button>
              <div className="border-t border-gray-100 my-1" />
              <button onClick={onLogout} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-brand-600 hover:bg-brand-50">
                <Icon name="LogOut" className="w-4 h-4" /> Keluar
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
