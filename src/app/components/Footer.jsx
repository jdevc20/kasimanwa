export default function Footer() {
    return (
      <footer className="w-full py-8 px-4 sm:px-10 mt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Culture Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">🎭 Culture & Heritage</h2>
            <p className=" text-reg"> 
              Experience the vibrant traditions of Western Visayas—from MassKara Festival to Ati-Atihan. Discover our dances, music, and art.
            </p>
          </div>
  
          {/* Language Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">📝 Language & Literature</h2>
            <p className=" text-reg">
              Learn Hiligaynon, Kinaray-a, and Aklanon. Preserve our rich oral traditions, proverbs, and written history.
            </p>
          </div>
  
          {/* Community Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">🤝 Community & Stories</h2>
            <p className="text-reg">
              Engage with fellow Western Visayans. Share stories, legends, and history that connect us all.
            </p>
          </div>
        </div>
  
        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>
  
        {/* Bottom Footer */}
        <div className="text-center  text-sm">
          © {new Date().getFullYear()} Kasimanwa. A tribute to the Western Visayan spirit.  
        </div>
      </footer>
    );
  }
  