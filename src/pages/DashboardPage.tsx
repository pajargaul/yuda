import { Card, CardHeader } from '@/components/Card';
import { Icon } from '@/components/Icon';
import { STATS, CHART_DATA, AKTIVITAS_DATA } from '@/data/dashboard';

export function DashboardPage() {
  const maxVal = Math.max(...CHART_DATA.flatMap((d) => [d.masuk, d.keluar]));

  const aktivitasIcon: Record<string, string> = {
    surat: 'Mail',
    siswa: 'Users',
    arsip: 'Archive',
    disposisi: 'Share2',
  };

  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <div className="relative overflow-hidden rounded-2xl bg-brand-700 text-white p-6 lg:p-8">
        <div className="absolute top-0 right-0 w-64 h-64 batik-bg-dark opacity-[0.08] pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative">
          <p className="text-white/70 text-sm">Selamat datang kembali,</p>
          <h2 className="text-2xl font-bold mt-1">Admin TU 👋</h2>
          <p className="text-white/70 text-sm mt-2 max-w-lg">
            Anda memiliki <span className="font-semibold text-white">5 surat</span> yang perlu ditindaklanjuti
            dan <span className="font-semibold text-white">3 disposisi</span> menunggu hari ini.
          </p>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {STATS.map((stat) => (
          <Card key={stat.label} className="p-5 hover:shadow-elevated transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center">
                <Icon name={stat.icon} className="w-5 h-5 text-brand-600" />
              </div>
              {stat.trend === 'up' && (
                <span className="flex items-center gap-0.5 text-xs font-semibold text-emerald-600">
                  <Icon name="ArrowUpRight" className="w-3.5 h-3.5" /> naik
                </span>
              )}
              {stat.trend === 'down' && (
                <span className="flex items-center gap-0.5 text-xs font-semibold text-brand-600">
                  <Icon name="ArrowDownRight" className="w-3.5 h-3.5" /> turun
                </span>
              )}
            </div>
            <p className="text-3xl font-extrabold text-gray-900 mt-4">{stat.value}</p>
            <p className="text-sm font-medium text-gray-600 mt-1">{stat.label}</p>
            <p className="text-xs text-gray-400 mt-0.5">{stat.sublabel}</p>
          </Card>
        ))}
      </div>

      {/* Chart + Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <Card className="lg:col-span-2">
          <CardHeader title="Statistik Surat per Bulan" subtitle="Tahun 2026 — Surat masuk vs keluar" />
          <div className="p-6">
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-brand-600" />
                <span className="text-sm text-gray-600">Surat Masuk</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-gray-300" />
                <span className="text-sm text-gray-600">Surat Keluar</span>
              </div>
            </div>
            <div className="flex items-end justify-between gap-2 sm:gap-3 h-56">
              {CHART_DATA.map((d) => (
                <div key={d.bulan} className="flex-1 flex flex-col items-center gap-1.5 group">
                  <div className="w-full flex items-end justify-center gap-1 h-48">
                    <div
                      className="w-1/2 bg-brand-600 rounded-t-md transition-all duration-300 group-hover:bg-brand-700 relative"
                      style={{ height: `${(d.masuk / maxVal) * 100}%` }}
                      title={`${d.masuk} surat masuk`}
                    >
                      <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-bold text-brand-700 opacity-0 group-hover:opacity-100 transition-opacity">{d.masuk}</span>
                    </div>
                    <div
                      className="w-1/2 bg-gray-300 rounded-t-md transition-all duration-300 group-hover:bg-gray-400 relative"
                      style={{ height: `${(d.keluar / maxVal) * 100}%` }}
                      title={`${d.keluar} surat keluar`}
                    >
                      <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">{d.keluar}</span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400 font-medium">{d.bulan}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Activity */}
        <Card>
          <CardHeader title="Aktivitas Terbaru" subtitle="Log aktivitas pengguna" />
          <div className="p-4 space-y-1 max-h-96 overflow-y-auto">
            {AKTIVITAS_DATA.map((a) => (
              <div key={a.id} className="flex gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                  <Icon name={aktivitasIcon[a.tipe]} className="w-4 h-4 text-brand-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-800 leading-snug">
                    <span className="font-semibold">{a.user}</span> {a.aksi.toLowerCase()}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5 truncate">{a.detail}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{a.waktu}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
