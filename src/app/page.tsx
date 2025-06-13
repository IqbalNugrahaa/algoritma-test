import CalculateMatch from "@/utils/calculateMatch";
import CountDiagonalSum from "@/utils/countDiagonalSum";
import FindLongestText from "@/utils/findLongestText";
import ReverseAlphabet from "@/utils/reverseAlphabet";

export default function Home() {
  const inputNumber1 = "NEGIE1";
  const outputNumber1 = ReverseAlphabet({ input: inputNumber1 });

  const inputNumber2 = "Saya sangat senang mengerjakan soal algoritma";
  const outputNumber2 = FindLongestText({ input: inputNumber2 });

  const inputNumber3 = ['xc', 'dz', 'bbb', 'dz'];
  const queryNumber3 = ['bbb', 'ac', 'dz'];
  const outputNumber3 = CalculateMatch({
    input: inputNumber3,
    query: queryNumber3,
  });

  const inputNumber4 = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const outputNumber4 = CountDiagonalSum({ matrix: inputNumber4 });

  return (
    <div className="h-screen flex flex-col bg-white px-[150px] py-[200px] gap-4">
      {/* SOAL NO 1 */}
      <div>
        <p className="text-base text-black font-medium">
          1. Terdapat string <code>NEGIE1</code>, silakan reverse hurufnya dengan angka tetap di akhir.
          Hasil = <code>EIGEN1</code>
        </p>
        <p className="text-sm text-black font-normal">
          Output: <span className="text-gray-500">{outputNumber1}</span>
        </p>
      </div>

      {/* SOAL NO 2 */}
      <div>
        <p className="text-base text-black font-medium">
          2. Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu
        </p>
        <p className="text-sm text-black font-normal">
          Input: {inputNumber2}
        </p>
        <p className="text-sm text-black font-normal">
          Output: <span className="text-gray-500">{`${outputNumber2}: ${outputNumber2.length} character`}</span>
        </p>
      </div>

      {/* SOAL NO 3 */}
      <div>
        <p className="text-base text-black font-medium">
          3. Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT
        </p>
        <p className="text-sm text-black font-normal">
          Input: {`[${inputNumber3.map((item) => `'${item}'`).join(", ")}]`}
        </p>
        <p className="text-sm text-black font-normal">
          Query: {`[${queryNumber3.map((item) => `'${item}'`).join(", ")}]`}
        </p>
        <p className="text-sm text-black font-normal">
          Output: <span className="text-gray-500">{`[${outputNumber3.map((item) => `'${item.count}'`).join(", ")}], Karena ${outputNumber3.map((item) => `${item.textOutput}`).join(", ")}`}</span>
        </p>
      </div>

      {/* SOAL NO 4 */}
      <div>
        <p className="text-base text-black font-medium">
          4. Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:
        </p>
        <p className="text-sm text-black font-normal">
          Input: {`[${inputNumber4.map((item) => `[${item}]`).join(", ")}]`}
        </p>
        <p className="text-sm text-black font-normal">
          Diagonal Pertama: <span className="text-gray-500">
            {`${outputNumber4.angkaDiagonalPertama.map((item) => `${item}`).join("+")} = ${outputNumber4.diagonalPertama}`}
          </span>
        </p>
        <p className="text-sm text-black font-normal">
          Diagonal Kedua: <span className="text-gray-500">
            {`${outputNumber4.angkaDiagonalKedua.map((item) => `${item}`).join("+")} = ${outputNumber4.diagonalKedua}`}
          </span>
        </p>
        <p className="text-sm text-black font-normal">
          Maka hasilnya adalah <span className="text-gray-500">
            {`${outputNumber4.diagonalPertama} - ${outputNumber4.diagonalKedua} = ${outputNumber4.diagonalPertama - outputNumber4.diagonalKedua}`}
          </span>
        </p>
      </div>
    </div>
  );
}
