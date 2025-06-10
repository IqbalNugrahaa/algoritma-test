export default function FindLongestText({
    input,
}: {
    input: string;
}) {
    const words = input.split(" "); // Pisahkan kalimat menjadi kata-kata

    const longestWord = words.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");

    return longestWord;
}