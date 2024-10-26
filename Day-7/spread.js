const favorites = [
    'Seafood',
    'Salad',
    'Nugget',
    'Soup',
    'Sashimi',
    'Steak',
]
console.log(...favorites)
console.log(favorites[0], favorites[1], favorites[2], favorites[3], favorites[4], favorites[5])
console.log(favorites)

console.log("============================================")

const akteKelahiranBudi = {
    nama: 'Budi',
    tempatLahir: 'Jakarta',
    tanggalLahir: '01-01-2000',
    alamat: 'Jl. Jendral Sudirman No. 10',
}

const keluargaBudi = {
    ayah : 'Ahmad',
    ibu : 'Siti',
    adik : 'Joko',
}
const informasi = {
    ...akteKelahiranBudi, 
    ...keluargaBudi
}

const informasiBudi2 = {
    nama: akteKelahiranBudi.nama,
    tempatLahir: akteKelahiranBudi.tempatLahir,
    tanggalLahir: akteKelahiranBudi.tanggalLahir,
    alamat: akteKelahiranBudi.alamat,
    ayah : keluargaBudi.ayah,
    ibu : keluargaBudi.ibu,
    adik : keluargaBudi.adik
}

console.log(informasi)
console.log(informasiBudi2)

console.log("============================================")

const keluargaBudiArray = [
    'Budi',
    'Ahmad',
    'Siti',
    'Joko'
]
const keluargaAndi = [
    'Andi',
    'Tia',
    'Dini'
]

const keluargaAndiBudi = [...keluargaBudiArray, ...keluargaAndi]
const duplicateKeluargaAndi = [...keluargaAndi]
duplicateKeluargaAndi[2] = 'Erik'

console.log('duplicateKeluargaAndi: ', duplicateKeluargaAndi)
console.log('keluargaAndiBudi: ', keluargaAndiBudi)