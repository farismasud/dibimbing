/*
    Menghitung summary data nilai siswa
*/

// helper function, silahkan digunakan, jika perlu
const roundTwoDecimal = (num) => {
    return Math.round(num*100) / 100;
}

const average = (arrNum) => {
    return arrNum.reduce((acc, v) => acc + v) / arrNum.length;
}
// end of helper function

const showSummary = (rawData) => {

    // tulis code di sini
    let groupingKelas= {'A': {jumlahSiswa: 1, nilai: [90]}, 'B': {jumlahSiswa: 2, nilai: [80, 85]}, 'C': {jumlahSiswa: 1, nilai: [83]}}
    for (let i = 0; i < rawData.length; i++) {

        //if key not exist
        if (!groupingKelas[rawData[i].kelas]) {
            groupingKelas[rawData[i].kelas] = {
                jumlahSiswa: 0,
                nilai: [],
            }
        } 
        // add data to key
        groupingKelas[rawData[i].kelas].jumlahSiswa++;
        groupingKelas[rawData[i].kelas].nilai.push(rawData[i].nilai);
    }
    // console.log(groupingKelas)

    // tahap perhitungan rata rata tiap key objectnya (a,b,c)
    for (const kelas in groupingKelas) {
        groupingKelas[kelas].rataRata = roundTwoDecimal(average(groupingKelas[kelas].nilai));
    }

    // show datanya
    let no = 1;
    for (const kelas in groupingKelas) {
        console.log(`${no}. Kelas = ${kelas} | Jumlah Siswa = ${groupingKelas[kelas].jumlahSiswa} | Nilai Rata-rata = ${groupingKelas[kelas].rataRata}`);
        no++;
    }
    // console.log(groupingKelas)
};

const rawData = [
    {nama: "siswa 1", kelas : 'A', nilai : 90},
    {nama: "siswa 2", kelas : 'B', nilai : 80},
    {nama: "siswa 3", kelas : 'A', nilai : 85},
    {nama: "siswa 4", kelas : 'B', nilai : 85},
    {nama: "siswa 5", kelas : 'B', nilai : 80},
    {nama: "siswa 6", kelas : 'B', nilai : 80},
    {nama: "siswa 7", kelas : 'A', nilai : 85},
    {nama: "siswa 8", kelas : 'C', nilai : 83},
    {nama: "siswa 9", kelas : 'C', nilai : 80},
];

showSummary(rawData);
/*
    Expected output:
    - Akan melakukan console.log() data seperti berikut:
    - nilai rata2, maksimal dalam 2 desimal

    1. Kelas = A | Jumlah Siswa = 3 | Nilai Rata-rata = 86.67
    2. Kelas = B | Jumlah Siswa = 4 | Nilai Rata-rata = 81.25
    3. Kelas = C | Jumlah Siswa = 2 | Nilai Rata-rata = 81.5
*/