// 1. SearchThree
// [INSTRUCTIONS]
// - Anda diminta untuk membuat sebuah function untuk mencari angka yang mengandung angka 3 dari data dibawah
// - kemudian jumlahkan berapa banyak angka 3 tersebut
console.log(
  SearchThree([
    [10, 20, 30, 40, 50],
    [30, 11, 3, 13, 24],
    [12, 13, 44, 93, 21],
    [[11, 20], [33], [3]],
  ])
);
// output: Dari data tersebut terdapat angka 3 berjumlah 9 character
console.log(
  SearchThree([
    [[1133, 210], [50]],
    [13, 2, 3, 77, 60],
    [23, 1, 4, 3, 55],
    [[3, 200], [333]],
  ])
);
// output: Dari data tersebut terdapat angka 3 berjumlah 10 character
console.log(SearchThree([[31, 20, 98, 36, 333]]));
// output: Dari data tersebut terdapat angka 3 berjumlah 5 character
console.log(SearchThree([]));
// output: Data kosong!

function SearchThree (data) {
  if (!Array.isArray(data) || data.length < 1) return "Data kosong!";

  let threeTotal = 0;
  const loopData = (array) => {
    for (const numb of array) {
      if (Array.isArray(numb)) {
        loopData(numb);
      } else {
        const numbToString = String(numb);
        const numbToArray = [...numbToString];

        for (const element of numbToArray) {
          if (element === "3") {
            threeTotal++;
          }
        }
      }
    }

    return threeTotal;
  };

  return `Dari data tersebut terdapat angka 3 berjumlah ${loopData(
    data
  )} character`;
};

