export interface Siswa {
  nis: string;
  nisn: string;
  nama: string;
  kelas: string;
  jenisKelamin: 'L' | 'P';
  tempatLahir: string;
  tanggalLahir: string;
  alamat: string;
  namaOrangTua: string;
  noHp: string;
  status: 'Aktif' | 'Lulus' | 'Pindah' | 'Tidak Aktif';
}

export const SISWA_DATA: Siswa[] = [
  { nis: '2021001', nisn: '0098234561', nama: 'Ahmad Fauzi Rahman', kelas: 'XII IPA 1', jenisKelamin: 'L', tempatLahir: 'Bandung', tanggalLahir: '2006-03-15', alamat: 'Jl. Merdeka No. 12, Bandung', namaOrangTua: 'Budi Rahman', noHp: '081234567890', status: 'Aktif' },
  { nis: '2021002', nisn: '0098234562', nama: 'Siti Nurhaliza', kelas: 'XII IPA 1', jenisKelamin: 'P', tempatLahir: 'Jakarta', tanggalLahir: '2006-05-22', alamat: 'Jl. Sudirman No. 45, Jakarta', namaOrangTua: 'Hendra Wijaya', noHp: '081298765432', status: 'Aktif' },
  { nis: '2021003', nisn: '0098234563', nama: 'Muhammad Rizki Hidayat', kelas: 'XII IPS 2', jenisKelamin: 'L', tempatLahir: 'Surabaya', tanggalLahir: '2006-01-10', alamat: 'Jl. Diponegoro No. 8, Surabaya', namaOrangTua: 'Sutrisno Hidayat', noHp: '081345678901', status: 'Aktif' },
  { nis: '2021004', nisn: '0098234564', nama: 'Dewi Lestari Putri', kelas: 'XI IPA 2', jenisKelamin: 'P', tempatLahir: 'Yogyakarta', tanggalLahir: '2007-07-18', alamat: 'Jl. Malioboro No. 33, Yogyakarta', namaOrangTua: 'Agus Setiawan', noHp: '081456789012', status: 'Aktif' },
  { nis: '2021005', nisn: '0098234565', nama: 'Bayu Pratama Wibowo', kelas: 'XI IPS 1', jenisKelamin: 'L', tempatLahir: 'Semarang', tanggalLahir: '2007-09-03', alamat: 'Jl. Pemuda No. 20, Semarang', namaOrangTua: 'Eko Wibowo', noHp: '081567890123', status: 'Aktif' },
  { nis: '2021006', nisn: '0098234566', nama: 'Nadia Safira Amelia', kelas: 'X IPA 1', jenisKelamin: 'P', tempatLahir: 'Bandung', tanggalLahir: '2008-11-25', alamat: 'Jl. Asia Afrika No. 15, Bandung', namaOrangTua: 'Rudi Amelia', noHp: '081678901234', status: 'Aktif' },
  { nis: '2021007', nisn: '0098234567', nama: 'Fajar Nugroho Adi', kelas: 'X IPA 2', jenisKelamin: 'L', tempatLahir: 'Solo', tanggalLahir: '2008-02-14', alamat: 'Jl. Slamet Riyadi No. 50, Solo', namaOrangTua: 'Joko Nugroho', noHp: '081789012345', status: 'Aktif' },
  { nis: '2021008', nisn: '0098234568', nama: 'Putri Ayu Lestari', kelas: 'XII IPA 2', jenisKelamin: 'P', tempatLahir: 'Medan', tanggalLahir: '2006-06-30', alamat: 'Jl. Gatot Subroto No. 7, Medan', namaOrangTua: 'Mulyadi Lestari', noHp: '081890123456', status: 'Lulus' },
  { nis: '2021009', nisn: '0098234569', nama: 'Reza Ananta Pratama', kelas: 'XI IPA 1', jenisKelamin: 'L', tempatLahir: 'Bekasi', tanggalLahir: '2007-04-12', alamat: 'Jl. Ahmad Yani No. 18, Bekasi', namaOrangTua: 'Tono Pratama', noHp: '081901234567', status: 'Pindah' },
  { nis: '2021010', nisn: '0098234570', nama: 'Indira Maharani Dewi', kelas: 'X IPS 1', jenisKelamin: 'P', tempatLahir: 'Bogor', tanggalLahir: '2008-08-19', alamat: 'Jl. Raya Pajajaran No. 22, Bogor', namaOrangTua: 'Hendro Dewi', noHp: '082012345678', status: 'Aktif' },
  { nis: '2021011', nisn: '0098234571', nama: 'Galih Saputra Nugraha', kelas: 'XII IPS 1', jenisKelamin: 'L', tempatLahir: 'Tasikmalaya', tanggalLahir: '2006-12-05', alamat: 'Jl. Sutisna Senjaya No. 4, Tasikmalaya', namaOrangTua: 'Wawan Nugraha', noHp: '082123456789', status: 'Aktif' },
  { nis: '2021012', nisn: '0098234572', nama: 'Kartika Sari Handayani', kelas: 'XI IPA 3', jenisKelamin: 'P', tempatLahir: 'Cirebon', tanggalLahir: '2007-10-28', alamat: 'Jl. Siliwangi No. 31, Cirebon', namaOrangTua: 'Dadan Handayani', noHp: '082234567890', status: 'Aktif' },
];

export const KELAS_OPTIONS = ['X IPA 1', 'X IPA 2', 'X IPS 1', 'XI IPA 1', 'XI IPA 2', 'XI IPA 3', 'XI IPS 1', 'XI IPS 2', 'XII IPA 1', 'XII IPA 2', 'XII IPS 1', 'XII IPS 2'];
export const STATUS_SISWA = ['Aktif', 'Lulus', 'Pindah', 'Tidak Aktif'] as const;
