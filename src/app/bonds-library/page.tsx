import NextImage from "next/image";

const bonds = [
  {
    tag: "SELLING FAST",
    trending: false,
    new: false,
    deal: false,
    logo: "/logo-placeholder.svg",
    name: "14.20% SML 30 AP...",
    isin: "INE982X08091",
    price: "1,03,065.40",
    coupon: "14.20%",
    yield: "14.20%",
    freq: "MONTHLY",
    maturity: "30 Apr 2029",
    type: "NCD TA...",
    rating: "BBB-",
    color: "#ffefe6",
    tagColor: "#ff4d4f",
  },
  {
    tag: "TRENDING",
    trending: true,
    new: false,
    deal: false,
    logo: "/logo-placeholder.svg",
    name: "12.00% VCCL 23 J...",
    isin: "INE04HY07278",
    price: "98,113.00",
    coupon: "12.00%",
    yield: "12.00%",
    freq: "MONTHLY",
    maturity: "23 Jul 2029",
    type: "NCD TA...",
    rating: "AA",
    color: "#e6f7ff",
    tagColor: "#36cfc9",
  },
  {
    tag: "",
    trending: false,
    new: false,
    deal: false,
    logo: "/logo-placeholder.svg",
    name: "8.35% SAMMANCAP...",
    isin: "INE148I080298",
    price: "93,778.40",
    coupon: "8.35%",
    yield: "11.60%",
    freq: "ANNUAL",
    maturity: "8 Sep 2027",
    type: "NCD TA...",
    rating: "AA",
    color: "#e6f7ff",
    tagColor: "#36cfc9",
  },
  // ...add more bonds as needed for the grid
];

const filters = [
  "YIELD (% RETURN)",
  "COUPON (% RETURN)",
  "BALANCE TENURE",
  "FREQUENCY",
  "CREDIT RATING",
  "FACE VALUE",
  "ISSUER TYPE",
  "TAXATION",
  "BOND PRICE LEVEL",
];

export default function BondsLibraryPage() {
  return (
    <div className="w-full bg-[#f8fafc] pb-10 text-[#1a2233]">
      {/* Breadcrumb and Search */}
      <section className="w-full bg-[#fff6ee] border-b border-[#e0e0e0] py-6 px-2 md:px-0">
        <div className="max-w-6xl mx-auto flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[#ff9900] text-base font-semibold mb-2">
            <span>Home</span>
            <span className="text-[#bdbdbd]">/</span>
            <span>Portfolio</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1a2233] mb-2">
            Looking for a specific bond?
          </h1>
          <div className="flex items-center w-full max-w-xl mt-2">
            <input
              type="text"
              placeholder="Search Issuer, ISIN, Security Name"
              className="flex-1 border border-[#ff9900] rounded-l-full px-5 py-3 text-base outline-none text-[#1a2233] font-semibold placeholder-[#bdbdbd]"
            />
            <button className="bg-[#fff] border border-l-0 border-[#ff9900] rounded-r-full px-6 py-3 text-[#ff9900] font-bold">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 mt-8 px-2 md:px-0">
        {/* Filter Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0 mb-6 md:mb-0">
          <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-4 text-[#1a2233]">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-[#1a2233]">FILTER CRITERIA</span>
              <button className="text-[#ff9900] text-xs font-bold">
                Clear All
              </button>
            </div>
            {filters.map((f) => (
              <div
                key={f}
                className="border-b last:border-b-0 border-[#e0e0e0] py-2"
              >
                <button className="w-full text-left text-[#1a2233] font-semibold flex items-center justify-between">
                  {f}
                  <svg
                    className="w-4 h-4 ml-2 text-[#bdbdbd]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </aside>
        {/* Bond Cards Grid */}
        <main className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <div className="text-[#1a2233] font-bold text-lg">
              Bonds (9 / 21)
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-[#f8fafc] border border-[#e0e0e0] rounded px-3 py-1 text-[#1a2233] font-bold">
                Grid View
              </button>
              <button className="bg-[#fff] border border-[#e0e0e0] rounded px-3 py-1 text-[#1a2233] font-bold">
                List View
              </button>
              <select className="border border-[#e0e0e0] rounded px-2 py-1 text-[#222] font-medium">
                <option>Yield : High to Low</option>
                <option>Yield : Low to High</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bonds.map((bond, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-4 flex flex-col gap-2 border-t-4 text-[#1a2233]"
                style={{
                  borderTopColor: bond.tagColor || "#e0e0e0",
                  background: bond.color,
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {bond.tag && (
                      <span className="bg-[#fff] text-xs font-bold px-2 py-1 rounded text-[#ff4d4f] border border-[#ff4d4f]">
                        {bond.tag}
                      </span>
                    )}
                    {bond.trending && (
                      <span className="bg-[#fff] text-xs font-bold px-2 py-1 rounded text-[#36cfc9] border border-[#36cfc9]">
                        TRENDING
                      </span>
                    )}
                    {bond.new && (
                      <span className="bg-[#fff] text-xs font-bold px-2 py-1 rounded text-[#1ec0e6] border border-[#1ec0e6]">
                        NEW
                      </span>
                    )}
                    {bond.deal && (
                      <span className="bg-[#fff] text-xs font-bold px-2 py-1 rounded text-[#ff9900] border border-[#ff9900]">
                        DEAL OF THE DAY
                      </span>
                    )}
                  </div>
                  <NextImage
                    src={bond.logo}
                    alt="Logo"
                    width={32}
                    height={32}
                    className="rounded"
                  />
                </div>
                <div className="font-extrabold text-[#1a2233] text-lg mb-1">
                  {bond.name}
                </div>
                <div className="text-xs text-[#bdbdbd] mb-1">
                  ISIN {bond.isin}
                </div>
                <div className="flex flex-wrap gap-2 items-center mb-2">
                  <div className="text-[#1a2233] text-base font-bold">
                    Price <span className="text-[#1ec0e6]">₹ {bond.price}</span>
                  </div>
                  <div className="bg-[#fff] text-xs font-bold px-2 py-1 rounded text-[#ff9900] border border-[#ff9900]">
                    {bond.rating}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 items-center text-xs mb-2 text-[#1a2233] font-semibold">
                  <span>
                    Coupon <span className="font-bold">{bond.coupon}</span>
                  </span>
                  <span>
                    Yield <span className="font-bold">{bond.yield}</span>
                  </span>
                  <span>
                    IP Frequency <span className="font-bold">{bond.freq}</span>
                  </span>
                  <span>
                    Maturity Date{" "}
                    <span className="font-bold">{bond.maturity}</span>
                  </span>
                </div>
                <div className="text-xs text-[#bdbdbd] mb-2">
                  Type of Bond{" "}
                  <span className="font-bold text-[#1a2233]">{bond.type}</span>
                </div>
                <button className="bg-[#1ec0e6] text-white rounded-full px-6 py-2 font-bold mt-2 self-start">
                  Know More
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button className="bg-[#fff] border border-[#ff9900] text-[#ff9900] rounded-full px-8 py-2 font-bold">
              Load More
            </button>
          </div>
          {/* Disclaimers */}
          <div className="mt-8 text-xs text-[#bdbdbd]">
            <div className="font-bold text-[#1a2233] mb-1">Disclaimers</div>
            <ol className="list-decimal pl-5 space-y-1">
              <li>
                Seniority – At the time of displaying seniority of the bonds, it
                depicts as "NA"; this indicates that the ranking of the bonds is
                Non-Senior or other than senior.
              </li>
              <li>
                Yield – Yield indicates Yield to maturity/Yield to Call,
                Contingent on the classification and category of the bonds.
              </li>
              <li>
                Disclaimer on Conflict of Interest – BondsIndia hereby
                discloses/display potential conflict of interest with its group
                companies or affiliates. Users are advised to read and
                understand details mentioned in the order receipt shared with
                the user(s) to know the details of the counter party. Quantity,
                Amount and other details before buying/selling securities on the
                platform.
              </li>
            </ol>
          </div>
        </main>
      </section>

      {/* Info Section */}
      <section className="max-w-6xl mx-auto mt-10 px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 text-[#1a2233]">
            <div className="font-bold text-[#1a2233] text-lg mb-2">
              WHERE YOU CAN INVEST?
            </div>
            <div className="text-[#1a2233] text-base">
              Our verticals includes
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="text-[#ff9900] font-bold">Bonds</span>
              <span className="text-[#ff9900] font-bold">IPO</span>
              <span className="text-[#ff9900] font-bold">GSEC Strips</span>
              <span className="text-[#ff9900] font-bold">54EC Bonds</span>
            </div>
          </div>
          <div className="bg-[#e6f7ff] rounded-xl p-6 flex flex-col gap-2 items-start justify-center">
            <div className="font-bold text-[#1a3c6b] text-lg mb-2">
              Got more questions?
            </div>
            <div className="text-[#222] text-base mb-2">
              Book 5 Minutes Discussion with our Financial Expert
            </div>
            <button className="bg-[#1ec0e6] text-white rounded-full px-8 py-2 font-bold">
              Schedule a Discussion
            </button>
            <button className="bg-white border border-[#1ec0e6] text-[#1ec0e6] rounded-full px-8 py-2 font-bold mt-2 flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="#1ec0e6"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                <path d="M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8" />
              </svg>
              Contact Us
            </button>
            <div className="text-[#1a3c6b] font-bold mt-2">
              +91-8882-200-300
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="w-full bg-[#f8fafc] py-10 mt-10 border-t border-[#e0e0e0]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-2 md:px-0">
          <div className="text-[#1a3c6b] text-2xl font-bold">
            Running out of time?{" "}
            <span className="text-[#ff9900]">Stay in the Loop!</span>
          </div>
          <form className="flex items-center gap-2 w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border border-[#e0e0e0] rounded-l-full px-5 py-3 text-base outline-none"
            />
            <button className="bg-[#ff9900] text-white rounded-r-full px-8 py-3 font-bold">
              SUBSCRIBE NOW
            </button>
          </form>
        </div>
      </section>

      {/* Footer Info Section */}
      <section className="max-w-6xl mx-auto mt-10 px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <div className="font-bold text-[#1a2233] text-lg mb-2">
              #BondsSimplified
            </div>
            <div className="text-[#1a2233] text-base">
              BondsIndia is a brand name of Launchpad Fintech Private Limited,
              an e-business platform for Fixed income securities that uses
              technology as a means to provide quality & real-time financial
              solutions to users.
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-bold text-[#1a2233] text-lg mb-2">
              Products
            </div>
            <div className="text-[#1a2233] text-base">
              Bonds, IPO, GSEC Strips, 54EC Bonds
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-bold text-[#1a2233] text-lg mb-2">
              Resources
            </div>
            <div className="text-[#1a2233] text-base">
              Blog, FD Calculator, Reports, FAQs, Contact us
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2 text-xs text-[#bdbdbd]">
          <span>Classifications:</span>
          <span>Public Sector Bonds</span>
          <span>Corporate Bonds</span>
          <span>Tax Free Bonds</span>
          <span>Government Bonds</span>
          <span>Zero Coupon Bonds</span>
          <span>Convertible Bonds</span>
          <span>Sovereign Gold Bonds</span>
          <span>Perpetual Bonds</span>
          <span>Green Bonds</span>
          <span>Covered Bonds</span>
          <span>State Development Loans</span>
          <span>Market Linked Debenture</span>
          <span>Debt Mutual Fund</span>
          <span>Non-Convertible Debenture</span>
          <span>What are Bonds</span>
        </div>
      </section>
    </div>
  );
}
