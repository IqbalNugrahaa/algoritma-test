export default function CountDiagonalSum({
    matrix,
}: {
    matrix: number[][];
}) {
    let diagonalPertama = 0;
    let diagonalKedua = 0;
    let angkaDiagonalPertama: number[] = [];
    let angkaDiagonalKedua: number[] = [];
    const n = matrix.length; // Ukuran matriks (N)

    for (let i = 0; i < n; i++) {
        // 1. Menjumlahkan diagonal pertama (dari kiri atas ke kanan bawah)
        // Indeks baris dan kolomnya selalu sama (matriks[0][0], matriks[1][1], dst.)
        diagonalPertama += matrix[i][i];

        // 2. Menjumlahkan diagonal kedua (dari kanan atas ke kiri bawah)
        // Indeks baris (i) bertambah, sementara indeks kolom (n - 1 - i) berkurang.
        diagonalKedua += matrix[i][n - 1 - i];

        angkaDiagonalPertama = matrix.map((_, i) => matrix[i][i]);
        angkaDiagonalKedua = matrix.map((_, i) => matrix[i][n - 1 - i]);
    }

    return { diagonalPertama, diagonalKedua, angkaDiagonalPertama, angkaDiagonalKedua };
}