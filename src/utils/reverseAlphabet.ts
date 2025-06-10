export default function ReverseAlphabet({ input }: { input: string }) {
    const letters = input.replace(/[0-9]/g, ""); // Ambil hanya huruf
    const numbers = input.replace(/[^0-9]/g, ""); // Ambil hanya angka
    const reversedLetters = letters.split("").reverse().join(""); // Reverse huruf
    return reversedLetters + numbers;
}