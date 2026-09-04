import { Icon } from '@/components/Icon';

interface LoginPageProps {
  onLogin: () => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-brand-50">
      {/* Batik accent — top right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] batik-bg opacity-[0.07] pointer-events-none" />
      {/* Batik accent — bottom left */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] batik-bg opacity-[0.05] pointer-events-none" />
      {/* Red accent shapes */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md animate-slide-up">
        {/* School header / kop */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-brand-600 text-white shadow-elevated mb-4 ring-4 ring-white">
            <Icon name="GraduationCap" className="w-10 h-10" />
          </div>
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">SIPADU</h1>
          <p className="text-sm text-gray-500 mt-1">Sistem Persuratan & Kearsipan Digital</p>
          <p className="text-xs text-gray-400 mt-0.5">SMA Negeri 1 Bandung</p>
        </div>

        {/* Login card */}
        <div className="bg-white rounded-2xl shadow-elevated border border-gray-100 p-8">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-900">Masuk ke Akun</h2>
            <p className="text-sm text-gray-500 mt-0.5">Silakan masuk menggunakan akun sekolah Anda</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nama Pengguna</label>
              <div className="relative">
                <Icon name="User" className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  defaultValue="admin"
                  placeholder="Masukkan nama pengguna"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus-ring transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Kata Sandi</label>
              <div className="relative">
                <Icon name="ShieldCheck" className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  defaultValue="password"
                  placeholder="Masukkan kata sandi"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus-ring transition-colors"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500" defaultChecked />
                <span className="text-gray-600">Ingat saya</span>
              </label>
              <a href="#" className="font-semibold text-brand-600 hover:text-brand-700">Lupa sandi?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-xl transition-all duration-150 active:scale-[0.98] shadow-sm hover:shadow-md"
            >
              Masuk
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-400">© 2026 SMA Negeri 1 Bandung. Dinas Pendidikan Kota Bandung.</p>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Butuh bantuan? Hubungi <span className="font-semibold text-gray-500">admin@sman1bdg.sch.id</span>
        </p>
      </div>
    </div>
  );
}
