

let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
let resultFiltered1 = data_array.filter(x => x == 5);
console.log(resultFiltered1); 

let resultFiltered2 = data_array.filter((value, index, fullArrayNya) => {
    console.log('value = ', value, ', index = ', index, ', fullArrayNya = ', fullArrayNya);

    return value === 1;
});


console.log(resultFiltered2);
