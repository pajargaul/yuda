import { useState } from 'react';
import { Card, CardHeader } from '@/components/Card';
import { Button } from '@/components/Button';
import { Badge, statusBadge } from '@/components/Badge';
import { Icon } from '@/components/Icon';
import { SURAT_DATA, DISPOSISI_RIWAYAT } from '@/data/surat';

export function DisposisiPage() {
  const surat = SURAT_DATA.filter((s) => s.jenis === 'masuk')[0];
  const [tujuan, setTujuan] = useState('');
  const [catatan, setCatatan] = useState('');
  const [riwayat, setRiwayat] = useState(DISPOSISI_RIWAYAT);

  const handleDisposisi = () => {
    if (!tujuan || !catatan) return;
    setRiwayat([
      ...riwayat,
      {
        id: `D${riwayat.length + 1}`,
        dari: 'Admin TU',
        kepada: tujuan,
        catatan,
        tanggal: new Date().toISOString().slice(0, 16).replace('T', ' '),
        status: 'Menunggu',
      },
    ]);
    setTujuan('');
    setCatatan('');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Surat detail */}
      <div className="lg:col-span-2 space-y-5">
        <Card>
          <CardHeader title="Detail Surat Masuk" subtitle={`Nomor: ${surat.nomorSurat}`} action={<Badge variant={statusBadge(surat.status)}>{surat.status}</Badge>} />
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <DetailItem icon="FileText" label="Nomor Surat" value={surat.nomorSurat} />
              <DetailItem icon="Calendar" label="Tanggal" value={formatDate(surat.tanggal)} />
              <DetailItem icon="Building2" label="Asal Surat" value={surat.asalTujuan} />
              <DetailItem icon="Mail" label="Perihal" value={surat.perihal} />
            </div>

            <div className="pt-4 border-t border-gray-100">
              <p className="text-sm font-semibold text-gray-700 mb-2">Ringkasan Isi Surat</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Sehubungan dengan akan diadakannya Rapat Koordinasi Kepala Sekolah se-Kota Bandung,
                kami mengundang Bapak/Ibu Kepala Sekolah untuk hadir pada acara tersebut. Rapat akan
                dilaksanakan pada hari Kamis, 10 September 2026 pukul 09.00 WIB di Aula Dinas Pendidikan
                Kota Bandung. Mohon konfirmasi kehadiran paling lambat tanggal 8 September 2026.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
              <Button variant="secondary" icon={<Icon name="Eye" className="w-4 h-4" />}>Lihat Dokumen</Button>
              <Button variant="secondary" icon={<Icon name="Download" className="w-4 h-4" />}>Unduh</Button>
              <Button variant="ghost" icon={<Icon name="Printer" className="w-4 h-4" />}>Cetak</Button>
            </div>
          </div>
        </Card>

        {/* Timeline */}
        <Card>
          <CardHeader title="Riwayat Disposisi" subtitle={`${riwayat.length} catatan disposisi`} />
          <div className="p-6">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gray-200" />
              {riwayat.map((d, i) => (
                <div key={d.id} className="relative flex gap-4 pb-6 last:pb-0">
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center ring-4 ring-white z-10 ${
                    d.status === 'Selesai' ? 'bg-emerald-100' : d.status === 'Menunggu' ? 'bg-amber-100' : 'bg-brand-100'
                  }`}>
                    <Icon name={d.status === 'Selesai' ? 'Check' : 'Share2'} className={`w-4 h-4 ${
                      d.status === 'Selesai' ? 'text-emerald-600' : d.status === 'Menunggu' ? 'text-amber-600' : 'text-brand-600'
                    }`} />
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <p className="text-sm font-semibold text-gray-900">{d.dari} → {d.kepada}</p>
                      <Badge variant={d.status === 'Selesai' ? 'selesai' : d.status === 'Menunggu' ? 'diproses' : 'baru'}>{d.status}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{d.catatan}</p>
                    <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                      <Icon name="Clock" className="w-3 h-3" /> {d.tanggal}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Disposisi form */}
      <div className="lg:col-span-1">
        <Card className="p-6 lg:sticky lg:top-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
              <Icon name="Share2" className="w-5 h-5 text-brand-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Disposisi Baru</h3>
              <p className="text-xs text-gray-500">Teruskan surat ke penerima</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Tujuan Disposisi</label>
              <select
                value={tujuan}
                onChange={(e) => setTujuan(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus-ring bg-white cursor-pointer"
              >
                <option value="">Pilih penerima...</option>
                <option>Waka Kurikulum</option>
                <option>Waka Kesiswaan</option>
                <option>Waka Sarana</option>
                <option>Bendahara</option>
                <option>Koord. MGMP</option>
                <option>Guru BK</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Catatan / Arahan</label>
              <textarea
                rows={4}
                value={catatan}
                onChange={(e) => setCatatan(e.target.value)}
                placeholder="Tuliskan arahan atau instruksi..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus-ring resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Prioritas</label>
              <div className="flex gap-2">
                {['Normal', 'Penting', 'Mendesak'].map((p, i) => (
                  <button
                    key={p}
                    className={`flex-1 px-3 py-2 rounded-xl text-sm font-medium border transition-colors ${
                      i === 0 ? 'border-brand-300 bg-brand-50 text-brand-700' : 'border-gray-200 text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <Button className="w-full" icon={<Icon name="Send" className="w-4 h-4" />} onClick={handleDisposisi}>
              Kirim Disposisi
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

function DetailItem({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
        <Icon name={icon} className="w-4 h-4 text-gray-400" />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-gray-400 font-medium">{label}</p>
        <p className="text-sm font-semibold text-gray-800 mt-0.5 break-words">{value}</p>
      </div>
    </div>
  );
}

function formatDate(d: string) {
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  const [y, m, day] = d.split('-');
  return `${parseInt(day)} ${months[parseInt(m) - 1]} ${y}`;
}
