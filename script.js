function tentukanStausStok(stok) {
    if (stok > 0) {
        return "Habis";
    } else if (stok <15) {
        return "Menipis";
    } else {
        return "Aman";
    }
}

console.log(tentukanStausStok(0)); // Habis
console.log(tentukanStausStok(3)); // Menipis
console.log(tentukanStausStok(15)); // Aman