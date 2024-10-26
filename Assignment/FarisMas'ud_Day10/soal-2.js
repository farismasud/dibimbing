// 2. graduates
// [INSTRUCTIONS]
// Anda diminta untuk membuat sebuah function untuk menentukan dan mengelompokan kelulusan, dengan ketentuan sebagai berikut
// - dikempokan berdasarkan kelas
// - data yang ditampilkan yang memiliki nilai minimal 75
// - jika data tidak ada, maka return  kosong

// TEST CASE
console.log(
  graduates([
    { name: "Luffi", score: 90, class: "2A" },
    { name: "Sanji", score: 85, class: "2C" },
    { name: "Zoro", score: 74, class: "2A" },
    { name: "Usop", score: 78, class: "2C" },
    { name: "Chopper", score: 89, class: "2C" },
  ])
);
//OUTPUT
// Dari kelas 2A terdapat 1 orang yang dinyatakan Lulus yaitu Luffi
// Dari kelas 2C terdapat 3 orang yang dinyatakan Lulus yaitu Sanji, Usop dan Chopper

console.log(
  graduates([
    { name: "Naruto", score: 100, class: "ninja" },
    { name: "Sarada", score: 76, class: "berkebun" },
    { name: "Sasuke", score: 92, class: "ninja" },
    { name: "Lee", score: 71, class: "olahraga" },
    { name: "Shikamaru", score: 80, class: "catur" },
  ])
);
//OUTPUT
// Dari kelas ninja terdapat 2 orang yang dinyatakan Lulus yaitu Naruto dan sasuke
// Dari kelas olahraga terdapat 1 orang yang dinyatakan Lulus yaitu Sarada
// Dari kelas catur terdapat 1 orang yang dinyatakan Lulus yaitu Shikamaru

console.log(graduates([]));
//OUTPUT
// Data kosong!!

function graduates(dataStudent) {
  // here your code
  if (dataStudent.length === 0) {
    return "Data kosong!!";
  }
  let result = {}; // object kosong untuk menyimpan hasil

  // gunakan looping untuk mengelompokkan data student
  for (let i = 0; i < dataStudent.length; i++) {
    let student = dataStudent[i];

    if (student.score >= 75) { 
      if (!result[student.class]) {
        result[student.class] = { count: 0, name: "" }; // untuk menginisialisasi sebuah object kelas
      }
      result[student.class].count++; // tambahkan jumlah siswa

      // tambahkan nama siswa
      if (result[student.class].name === "") {
        result[student.class].name = student.name;
      } else {
        result[student.class].name += ", " + student.name; 
      }
    }
  }
  // mengembalikan object result yang berisi data yang lulus
  let result2 = "";
  for (let className in result) {
    result2 += `Dari kelas ${className} terdapat ${result[className].count} orang yang dinyatakan Lulus yaitu ${result[className].name}\n`;
  }
  return result2;
}