export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-gradient-to-r from-sky-400 to-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">About Company</h1>
          <p className="mt-2 text-lg">It’s all about PEOPLE!</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Embracing future of{" "}
              <span className="text-orange-500">investments</span>
            </h2>
            <p className="mt-4 text-gray-600">
              Introducing a cutting-edge Online Bond Platform paving the way for
              fixed-income securities investment, offering investors streamlined
              and efficient avenues to access bond market.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "91788+", label: "Users" },
              { value: "16936+", label: "Bonds" },
              { value: "32+", label: "IPOs" },
              { value: "₹ 230 Cr", label: "Investment Experience" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-orange-50 rounded-xl p-4 text-center shadow"
              >
                <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-gray-900">Mission</h3>
            <p className="mt-4 text-gray-600">
              We target the fixed income side of the portfolio with an
              all-inclusive, trustworthy digital platform for selling and
              investing in fixed-income securities, through reasonable and
              objective guidance.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-gray-900">Vision</h3>
            <p className="mt-4 text-gray-600">
              Our vision is to streamline and democratize fixed-income
              investments for the diverse populace of the country through
              cutting-edge technology, innovation and transparency.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900">
            What we <span className="text-orange-500">believe</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              "Bonds Simplified",
              "Seamless Online KYC",
              "Informed Investment Decisions",
              "Dynamic Team",
              "Structured & Transparent Workflow",
              "News & Insights",
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-xl shadow">
                <h3 className="text-lg font-semibold text-gray-900">
                  0{idx + 1} {item}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  facilisi.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            The <span className="text-orange-500">Leadership</span>
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-12">
            {[
              { name: "Puneet Aggarwal", role: "Co-Founder" },
              { name: "Ankit Gupta", role: "Co-Founder" },
            ].map((leader) => (
              <div key={leader.name} className="bg-white rounded-xl p-8 shadow">
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full" />
                <h3 className="mt-6 text-lg font-semibold">{leader.name}</h3>
                <p className="text-sm text-gray-600">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-semibold text-white">
              #BondsSimplified
            </h3>
            <p className="mt-2 text-sm">
              BondsIndia is a brand name of Launchpad Fintech Private Limited.
              We streamline fixed-income investments to provide quality
              real-time solutions to users.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Products</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Bonds</li>
              <li>IPO</li>
              <li>GSEC STRIPS</li>
              <li>SGB Bonds</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>FAQ</li>
              <li>Reports</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} BondsIndia. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
