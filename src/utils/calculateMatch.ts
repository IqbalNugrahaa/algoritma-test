export default function CalculateMatch({
    input,
    query,
}: {
    input: string[];
    query: string[];
}) {
    return query.map(wordQuery => {
        let textOutput = "";
        const count = input.filter(wordInput => wordInput === wordQuery).length;

        if (count > 0) {
            // Jika kata ditemukan, buat kalimat ini
            textOutput = `kata "${wordQuery}" terdapat ${count} kali pada INPUT`;
        } else {
            // Jika kata tidak ditemukan (jumlah = 0), buat kalimat ini
            textOutput = `kata "${wordQuery}" tidak ada atau terdapat 0 kali pada INPUT`;
        }
        return { count, textOutput };
    })
}