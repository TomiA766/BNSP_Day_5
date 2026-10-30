// 1. Data barang
const daftarBarang = [
  {
    kode: "INV-001",
    nama: "Laptop",
    stok: 10,
    harga: 7500000
  },
  {
    kode: "INV-002",
    nama: "Mouse",
    stok: 3,
    harga: 150000
  },
  {
    kode: "INV-003",
    nama: "Keyboard",
    stok: 0,
    harga: 300000
  },
  {
    kode: "INV-004",
    nama: "Monitor",
    stok: 7,
    harga: 1800000
  }
];

// 2. Fungsi menentukan status stok
function tentukanStatus(stok) {
  if (stok === 0) {
    return "Habis";
  } else if (stok < 5) {
    return "Menipis";
  } else {
    return "Aman";
  }
}

// 3. Fungsi menghitung nilai satu barang
function hitungNilaiBarang(harga, stok) {
  return harga * stok;
}

// 4. Variabel untuk ringkasan
let totalStok = 0;
let totalNilai = 0;

// 5. Menampilkan data setiap barang
console.log("=== DATA INVENTARIS ===");

for (const barang of daftarBarang) {
  const status = tentukanStatus(barang.stok);
  const nilai = hitungNilaiBarang(
    barang.harga,
    barang.stok
  );

  console.log("------------------------");
  console.log("Kode:", barang.kode);
  console.log("Nama:", barang.nama);
  console.log("Stok:", barang.stok);
  console.log("Harga:", barang.harga);
  console.log("Status:", status);
  console.log("Nilai stok:", nilai);

  totalStok += barang.stok;
  totalNilai += nilai;
}

// 6. Ringkasan
console.log("========================");
console.log("TOTAL JENIS BARANG:", daftarBarang.length);
console.log("TOTAL UNIT STOK:", totalStok);
console.log("TOTAL NILAI INVENTARIS:", totalNilai);