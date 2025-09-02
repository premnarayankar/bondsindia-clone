import NextImage from "next/image";

export default function HowItWorksPage() {
  return (
    <div className="w-full bg-[#f8fafc] pb-10">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-[#e6f7ff] to-[#fff6ee] border-b border-[#e0e0e0] py-8 md:py-12 px-2 md:px-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="flex-1 flex flex-col gap-2 md:gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a3c6b] mb-2">
              Bonds: Definition, Types and Benefits of Bonds
            </h1>
            <div className="flex flex-wrap gap-2 items-center text-[#ff9900] text-base font-semibold">
              <span>Home</span>
              <span className="text-[#bdbdbd]">/</span>
              <span>Bonds</span>
            </div>
          </div>
          <div className="flex-shrink-0 flex items-center gap-2">
            <NextImage
              src="/mascot-placeholder.svg"
              alt="Mascot"
              width={80}
              height={80}
              className="rounded-full bg-[#ffe1cf] border border-[#ff6600]"
            />
          </div>
        </div>
      </section>

      {/* What are Bonds & Why Invest */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 px-2 md:px-0">
        <div className="md:col-span-2 bg-white rounded-xl shadow p-6 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-[#1a3c6b]">What are bonds?</h2>
          <p className="text-[#222] text-base">
            A bond is a fixed income instrument that represents a loan made by
            an investor to a borrower (typically corporate or governmental). A
            bond could be thought of as an agreement between the lender and
            borrower that includes the details of the loan and its payments.
            Bonds are used by companies, municipalities, states, and sovereign
            governments to finance projects and operations.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-[#f8fafc] rounded-lg p-4 flex flex-col gap-2 border border-[#e0e0e0]">
              <div className="flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-[#1ec0e6]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#1ec0e6"
                    strokeWidth="2"
                    fill="#e6f7ff"
                  />
                  <path d="M10 8l6 4-6 4V8z" fill="#1ec0e6" />
                </svg>
                <span className="font-semibold text-[#1a3c6b]">Key Point</span>
              </div>
              <p className="text-[#222] text-sm">
                Bonds typically pay periodic interest payments called coupon
                payments and return the principal at maturity.
              </p>
            </div>
            <div className="flex-1 bg-[#f8fafc] rounded-lg p-4 flex flex-col gap-2 border border-[#e0e0e0]">
              <div className="flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-[#ff9900]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#ff9900"
                    strokeWidth="2"
                    fill="#fff6ee"
                  />
                  <path
                    d="M12 8v4l3 3"
                    stroke="#ff9900"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-semibold text-[#ff9900]">
                  Did you know?
                </span>
              </div>
              <p className="text-[#222] text-sm">
                Bonds are generally considered less risky than stocks and can
                provide steady income.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-3">
            <h3 className="text-lg font-bold text-[#1a3c6b] mb-2">
              Why Invest in Bonds?
            </h3>
            <ul className="list-disc pl-5 text-[#222] text-sm flex flex-col gap-1">
              <li>Steady income</li>
              <li>Lower risk than stocks</li>
              <li>Diversification</li>
              <li>Capital preservation</li>
            </ul>
            <button className="bg-[#ff9900] text-white rounded-full px-6 py-2 font-bold mt-2 self-start">
              Start Investing
            </button>
          </div>
          <div className="bg-[#e6f7ff] rounded-xl p-4 flex flex-col gap-2">
            <div className="font-semibold text-[#1a3c6b]">Get in touch now</div>
            <input
              type="text"
              placeholder="Name"
              className="border border-[#e0e0e0] rounded px-3 py-2 text-sm mb-2 text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-[#e0e0e0] rounded px-3 py-2 text-sm mb-2 text-black"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="border border-[#e0e0e0] rounded px-3 py-2 text-sm mb-2 text-black"
            />
            <button className="bg-[#1ec0e6] text-white rounded-full px-6 py-2 font-bold mt-2">
              Request Call
            </button>
          </div>
        </div>
      </section>

      {/* The Basics of Bonds */}
      <section className="max-w-6xl mx-auto mt-10 px-2 md:px-0">
        <h2 className="text-xl font-bold text-[#1a3c6b] mb-4">
          The Basics of Bonds
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 items-center text-center">
            <div className="text-[#1ec0e6] text-2xl font-bold mb-2">Type</div>
            <p className="text-[#222] text-sm">
              A variety of bonds are available, including government, corporate,
              and municipal bonds.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 items-center text-center border-2 border-[#ff9900] relative">
            <div className="absolute -top-8 right-4">
              <NextImage
                src="/mascot-placeholder.svg"
                alt="Mascot"
                width={48}
                height={48}
                className="rounded-full bg-[#ffe1cf] border border-[#ff6600]"
              />
            </div>
            <div className="text-[#ff9900] text-2xl font-bold mb-2">Return</div>
            <p className="text-[#222] text-sm">
              Bonds pay interest at fixed intervals and return the principal at
              maturity.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 items-center text-center">
            <div className="text-[#1a3c6b] text-2xl font-bold mb-2">
              Expectations
            </div>
            <p className="text-[#222] text-sm">
              Investors expect steady income and lower risk compared to stocks.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Bonds */}
      <section className="max-w-6xl mx-auto mt-10 px-2 md:px-0">
        <h2 className="text-xl font-bold text-[#1a3c6b] mb-4">
          Types of bonds
        </h2>
        <ul className="list-disc pl-5 text-[#222] text-base flex flex-col gap-1">
          <li>Government Bonds</li>
          <li>Corporate Bonds</li>
          <li>Tax-Free Bonds</li>
          <li>Convertible Bonds</li>
          <li>Zero Coupon Bonds</li>
          <li>Inflation-Linked Bonds</li>
          <li>Perpetual Bonds</li>
        </ul>
      </section>

      {/* Different Types of Bonds Grid */}
      <section className="max-w-6xl mx-auto mt-10 px-2 md:px-0">
        <h2 className="text-xl font-bold text-[#1a3c6b] mb-4">
          Different types of bonds
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            {
              title: "Government Bonds",
              desc: "Issued by the government, considered low risk.",
            },
            {
              title: "Corporate Bonds",
              desc: "Issued by companies to raise capital.",
            },
            {
              title: "Tax-Free Bonds",
              desc: "Interest earned is exempt from tax.",
            },
            {
              title: "Convertible Bonds",
              desc: "Can be converted into shares of the issuing company.",
            },
            {
              title: "Zero Coupon Bonds",
              desc: "Do not pay periodic interest, issued at a discount.",
            },
            {
              title: "Inflation-Linked Bonds",
              desc: "Interest and principal are indexed to inflation.",
            },
            {
              title: "Perpetual Bonds",
              desc: "No maturity date, pay interest indefinitely.",
            },
            {
              title: "Sovereign Gold Bonds",
              desc: "Issued by government, linked to gold prices.",
            },
            {
              title: "RBI Bonds",
              desc: "Issued by Reserve Bank of India, safe investment.",
            },
          ].map((bond) => (
            <div
              key={bond.title}
              className="bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb] rounded-xl p-4 shadow text-white flex flex-col gap-2"
            >
              <div className="font-bold text-lg">{bond.title}</div>
              <div className="text-sm">{bond.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How do bonds work? */}
      <section className="max-w-6xl mx-auto mt-10 px-2 md:px-0">
        <h2 className="text-xl font-bold text-[#1a3c6b] mb-4">
          How do bonds work?
        </h2>
        <div className="bg-[#f8fafc] rounded-xl border border-[#e0e0e0] p-6 flex flex-col gap-3">
          <p className="text-[#222] text-base">
            A person who buys a bond is lending money to the issuer in exchange
            for periodic interest payments and the return of principal at
            maturity. Bonds are traded in the secondary market and their prices
            fluctuate based on interest rates and credit risk.
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-center mt-2">
            <div className="flex-1 flex flex-col gap-2">
              <div className="bg-white rounded-lg border border-[#e0e0e0] p-4 flex flex-col gap-2 items-center">
                <span className="font-bold text-[#1a3c6b]">Did you know?</span>
                <span className="text-[#222] text-sm">
                  You can buy and sell bonds before maturity in the secondary
                  market.
                </span>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2 items-center">
              <button className="bg-[#1ec0e6] text-white rounded-full px-8 py-3 font-bold mt-2">
                Start Investing Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of investing in bonds */}
      <section className="max-w-6xl mx-auto mt-10 px-2 md:px-0">
        <h2 className="text-xl font-bold text-[#1a3c6b] mb-4">
          Benefits of investing in bonds
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
            <div className="font-bold text-[#1ec0e6] text-lg mb-2">
              Steady Income
            </div>
            <p className="text-[#222] text-sm">
              Bonds provide regular interest payments, making them a reliable
              source of income.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
            <div className="font-bold text-[#ff9900] text-lg mb-2">
              Capital Preservation
            </div>
            <p className="text-[#222] text-sm">
              Bonds are less volatile than stocks and help preserve your
              capital.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
            <div className="font-bold text-[#1a3c6b] text-lg mb-2">
              Portfolio Diversification
            </div>
            <p className="text-[#222] text-sm">
              Adding bonds to your portfolio can reduce overall risk and improve
              returns.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
            <div className="font-bold text-[#1ec0e6] text-lg mb-2">
              Easy to Invest
            </div>
            <p className="text-[#222] text-sm">
              Bonds can be bought and sold easily through brokers or online
              platforms.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto mt-10 px-2 md:px-0">
        <h2 className="text-xl font-bold text-[#1a3c6b] mb-4">
          Frequently Asked Questions
        </h2>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
          {[
            {
              q: "What are bonds?",
              a: "Bonds are fixed income instruments representing a loan made by an investor to a borrower.",
            },
            {
              q: "How do I buy bonds?",
              a: "You can buy bonds through brokers, banks, or online investment platforms.",
            },
            {
              q: "Are bonds safe?",
              a: "Bonds are generally considered safer than stocks, but they do carry some risk.",
            },
            {
              q: "What is a coupon payment?",
              a: "A coupon payment is the periodic interest paid to the bondholder during the life of the bond.",
            },
            {
              q: "Can I sell bonds before maturity?",
              a: "Yes, bonds can be sold in the secondary market before maturity.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="border-b last:border-b-0 border-[#e0e0e0] pb-4"
            >
              <div className="font-bold text-[#1a3c6b] mb-1">{faq.q}</div>
              <div className="text-[#222] text-sm">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-6xl mx-auto mt-10 px-2 md:px-0">
        <div className="bg-gradient-to-r from-[#1ec0e6] to-[#ff9900] rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-2xl font-bold">
            Ready to invest in bonds?
          </div>
          <button className="bg-white text-[#ff9900] rounded-full px-10 py-3 font-bold text-lg shadow hover:bg-orange-100 transition">
            Start Now
          </button>
        </div>
      </section>
    </div>
  );
}
