const _ = require("lodash"); // Pastikan lodash sudah terinstall

// Array data rapor 10 siswa
const dataRaporSekolah = [
  {
    nama: "John",
    kelas: "10A",
    nilaiUjian: {
      matematika: 90,
      ipa: 87,
      ips: 80,
      bahasa: 100,
      komputer: 90,
    },
    nilaiRataUjian: 0,
    naikKelas: true,
    ranking: 0,
  },
  {
    nama: "Rafi",
    kelas: "10A",
    nilaiUjian: {
      matematika: 40,
      ipa: 30,
      ips: 20,
      bahasa: 50,
      komputer: 60,
    },
    nilaiRataUjian: 0,
    naikKelas: false,
    ranking: 0,
  },
  {
    nama: "Siti",
    kelas: "10A",
    nilaiUjian: {
      matematika: 45,
      ipa: 35,
      ips: 25,
      bahasa: 55,
      komputer: 65,
    },
    nilaiRataUjian: 0,
    naikKelas: false,
    ranking: 0,
  },
  {
    nama: "Budi",
    kelas: "10A",
    nilaiUjian: {
      matematika: 50,
      ipa: 40,
      ips: 30,
      bahasa: 60,
      komputer: 70,
    },
    nilaiRataUjian: 0,
    naikKelas: false,
    ranking: 0,
  },
  {
    nama: "Rina",
    kelas: "10A",
    nilaiUjian: {
      matematika: 95,
      ipa: 90,
      ips: 85,
      bahasa: 95,
      komputer: 90,
    },
    nilaiRataUjian: 0,
    naikKelas: true,
    ranking: 0,
  },
  {
    nama: "Tia",
    kelas: "10A",
    nilaiUjian: {
      matematika: 100,
      ipa: 95,
      ips: 90,
      bahasa: 100,
      komputer: 95,
    },
    nilaiRataUjian: 0,
    naikKelas: true,
    ranking: 0,
  },
  {
    nama: "Dodi",
    kelas: "10A",
    nilaiUjian: {
      matematika: 98,
      ipa: 93,
      ips: 88,
      bahasa: 98,
      komputer: 93,
    },
    nilaiRataUjian: 0,
    naikKelas: true,
    ranking: 0,
  },
  {
    nama: "Siti",
    kelas: "10A",
    nilaiUjian: {
      matematika: 92,
      ipa: 88,
      ips: 83,
      bahasa: 92,
      komputer: 88,
    },
    nilaiRataUjian: 0,
    naikKelas: true,
    ranking: 0,
  },
  {
    nama: "Risma",
    kelas: "10A",
    nilaiUjian: {
      matematika: 85,
      ipa: 80,
      ips: 75,
      bahasa: 85,
      komputer: 80,
    },
    nilaiRataUjian: 0,
    naikKelas: true,
    ranking: 0,
  },
  {
    nama: "Reni",
    kelas: "10A",
    nilaiUjian: {
      matematika: 80,
      ipa: 75,
      ips: 70,
      bahasa: 80,
      komputer: 75,
    },
    nilaiRataUjian: 0,
    naikKelas: true,
    ranking: 0,
  },
];

// Menghitung nilai rata-rata ujian menggunakan Lodash
_.map(dataRaporSekolah, (siswa) => {
  const nilaiUjian = siswa.nilaiUjian;
  const totalNilai =
    nilaiUjian.matematika +
    nilaiUjian.ipa +
    nilaiUjian.ips +
    nilaiUjian.bahasa +
    nilaiUjian.komputer;
  const nilaiRata = totalNilai / Object.keys(nilaiUjian).length;
  siswa.nilaiRataUjian = nilaiRata;
});

// Mengurutkan siswa berdasarkan nilai rata-rata dari yang tertinggi ke terendah dengan sort()
dataRaporSekolah.sort((a, b) => b.nilaiRataUjian - a.nilaiRataUjian);

// Menetapkan ranking berdasarkan urutan
dataRaporSekolah.forEach((siswa, index) => {
  siswa.ranking = index + 1; // Ranking dimulai dari 1
});

dataRaporSekolah.forEach((siswa) => {
  console.log(`Rapor Sekolah ${siswa.nama}`);
  console.log(`Kelas: ${siswa.kelas}`);
  console.log("NILAI UJIAN");
  console.log(`matematika: ${siswa.nilaiUjian.matematika}`);
  console.log(`ipa: ${siswa.nilaiUjian.ipa}`);
  console.log(`ips: ${siswa.nilaiUjian.ips}`);
  console.log(`bahasa: ${siswa.nilaiUjian.bahasa}`);
  console.log(`komputer: ${siswa.nilaiUjian.komputer}`);
  console.log(`NILAI RATA RATA: ${siswa.nilaiRataUjian.toFixed(2)}`);

  if (siswa.nilaiRataUjian >= 50) {
    console.log("NAIK KELAS: YA");
  } else {
    console.log("NAIK KELAS: TIDAK");
  }

  console.log(`RANKING: ${siswa.ranking}`);
  console.log("================================================"); // Biar ouputnya enak diliat
});
