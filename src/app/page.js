import Image from "next/image";
import SearchBar from "./components/SearchBar";
import HomeCard from "./components/HomeCard";
import Link from "next/link";
import Landing from "./components/Landing";
import Paraw from "./components/Paraw";
import Message from "./components/Message";
import Polaroid from "./components/Polaroid";
import Phone from "./components/Phone";

export default function Home() {
  return (
    <div className="grid min-h-screen gap-8 sm:gap-16 sm:p-10 lg:p-20 max-w-full">     
      <main className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          <Polaroid caption="Bacolod City" image="/Bacolod.webp" comment="Land of Sweet Surpises 🎭" />
          <Polaroid caption="Iloilo City" image="/Iloilo.jpg" comment="Where the past is always present 💖" />
          <Polaroid caption="Capiz" image="/Capiz.jpg" comment="Land of the Aswang kuno 👻" />
          <Polaroid caption="Antique" image="/Antique.jpg" comment="Where mountains meet the sea 🌄" />
          <Polaroid caption="Aklan" image="/Aklan.png" comment="Musyun sa Akean, Feel Alive, Feel Aklan ⛵" />
          <Polaroid caption="Guimaras" image="/Guimaras.webp" comment="World's sweetest Mango 🥭" />
        </div>
        <br />
        <Landing />
        <SearchBar />
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8 p-2">
          <Link
            href="/grammar"
            className="flex items-center p-4 bg-yellow-100 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300  sm:w-auto"
          >
            {/* <Image className="dark:invert inline-block mr-2" src="/grammar.svg" alt="Grammatika logo" width={38} height={38} priority /> */}
            <div>🛟</div>
            📝 Grammatika
          </Link>
          <Link
            href="/grammar"
            className="flex items-center p-4 bg-blue-100 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300  sm:w-auto"
          >
            {/* <Image className="dark:invert inline-block mr-2" src="/hampang.svg" alt="Hampang logo" width={38} height={38} priority /> */}
            <div>🛟</div>
            🛝 Hampang
          </Link>
          <Link
            href="/grammar"
            className="flex items-center p-4 bg-green-100 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300  sm:w-auto"
          >
            {/* <Image className="dark:invert inline-block mr-2" src="/archives.svg" alt="Katilingban logo" width={38} height={38} priority /> */}
            <div>🛟</div>
            📑 Katilingban
          </Link>
          <Link
            href="/grammar"
            className="flex items-center p-4 bg-red-100 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300  sm:w-auto"
          >
            {/* <Image className="dark:invert inline-block mr-2" src="/archives.svg" alt="Katilingban logo" width={38} height={38} priority /> */}
            <div>🛟</div>
            🗞️ Balita
          </Link>
          <Link
            href="/dictionary"
            className="flex items-center p-4 bg-red-100 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300  sm:w-auto"
          >
            {/* <Image className="dark:invert inline-block mr-2" src="/archives.svg" alt="Katilingban logo" width={38} height={38} priority /> */}
            <div>🛟</div>
            📚 Dictionary
          </Link>
        </div>


        {/* <Paraw/> */}
        <Phone />
        {/* <Message/> */}
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center py-4 mt-12">
        {/* Footer content */}
      </footer>
    </div>
  );
}
