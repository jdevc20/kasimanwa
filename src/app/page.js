import Image from "next/image";
import SearchBar from "./components/SearchBar";
import HomeCard from "./components/HomeCard";
import Link from "next/link";
import Landing from "./components/Landing";
import Paraw from "./components/Paraw";

export default function Home() {
  return (
    <div className="grid min-h-screen gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col">
        <Landing/>
        <SearchBar />
        <div className="flex items-center justify-center space-x-4">
          <Link href="/grammar" className="flex items-center p-4 bg-yellow-100 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            {/* <Image className="dark:invert inline-block mr-2" src="/grammar.svg" alt="Grammatika logo" width={38} height={38} priority /> */}
            📝 Grammatika
          </Link>
          <Link href="/grammar" className="flex items-center p-4 bg-blue-100 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            {/* <Image className="dark:invert inline-block mr-2" src="/hampang.svg" alt="Hampang logo" width={38} height={38} priority /> */}
            🛝Hampang
          </Link>
          <Link href="/grammar" className="flex items-center p-4 bg-green-100 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            {/* <Image className="dark:invert inline-block mr-2" src="/archives.svg" alt="Katilingban logo" width={38} height={38} priority /> */}
            📑Katilingban
          </Link>
        </div>

        <Paraw/>


      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* Footer content */}
      </footer>
    </div>

  );
}
