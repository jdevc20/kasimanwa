import Link from "next/link";

export default function GrammarPage() {
  return (
    <div className="p-10 m-10">
      <h1 className="text-3xl font-semibold">Introduction to the Hiligaynon Language</h1>
      <p className="mt-4 leading-loose">
        Hiligaynon is an Austronesian language spoken primarily in the Philippines, particularly in the Western Visayas region. It is one of the major languages spoken in the Visayan islands and is known for its rich linguistic history and cultural significance. Often referred to as <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded">Ilonggo</span> in some parts of the Philippines, it serves as the mother tongue of millions of people, especially in the provinces of <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded">Iloilo</span>, <span className="bg-green-200 text-green-800 px-2 py-1 rounded">Negros Occidental</span>, and <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded">Capiz</span>, as well as in parts of <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded">Mindanao</span>.

        Hiligaynon belongs to the <span className="bg-indigo-200 text-indigo-800 px-2 py-1 rounded">Visayan language family (Bisaya/Binisaya)</span>, which includes other languages such as <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Cebuano</span> and <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Waray</span>. Despite being closely related to Cebuano, Hiligaynon has distinct phonological, grammatical, and lexical features that set it apart. It is one of the official languages of the Philippines, spoken by a large community not only in the Philippines but also by Filipino expatriates abroad.
      </p>

      <h1 className="text-3xl font-semibold mt-8">Characteristics of Hiligaynon</h1>
      <p className="mt-4 leading-loose">
        Hiligaynon is a <span className="bg-pink-200 text-pink-800 px-2 py-1 rounded">synthetic language</span>, meaning that it relies on <span className="bg-teal-200 text-teal-800 px-2 py-1 rounded">affixes</span> (prefixes, infixes, suffixes) to convey meanings and grammatical relationships. One of the key features of Hiligaynon grammar is its use of <span className="bg-lime-200 text-lime-800 px-2 py-1 rounded">verb focus</span> or <span className="bg-amber-200 text-amber-800 px-2 py-1 rounded">voice</span>, which affects how the verb and its arguments (subject, object) are structured in a sentence.

        Additionally, Hiligaynon is known for its melodious and fluid intonation, which is why it is often described as one of the <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">sweetest-sounding languages</span> in the Philippines. The language also features a variety of <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded">honorifics</span> and <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded">polite forms</span>, making it a language that places importance on respect and social hierarchy in communication.
      </p>

      {/* Flex container for horizontal tiles */}
      <div className="flex space-x-4 mt-8">
        <Link className="flex-1 aspect-w-1 aspect-h-1 p-4 border grammar-tile gradient" href="/grammar/test">
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="text-xl font-semibold">Sentence Structure</h2>
            <p>Explanation or content for Topic 1 goes here.</p>
          </div>
        </Link>
        <Link className="flex-1 aspect-w-1 aspect-h-1 p-4 border grammar-tile gradient" href="/grammar/test">
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="text-xl font-semibold">Sentence Structure</h2>
            <p>Explanation or content for Topic 2 goes here.</p>
          </div>
        </Link>
        <Link className="flex-1 aspect-w-1 aspect-h-1 p-4 border grammar-tile gradient" href="/grammar/test">
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="text-xl font-semibold">Sentence Structure</h2>
            <p>Explanation or content for Topic 3 goes here.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
