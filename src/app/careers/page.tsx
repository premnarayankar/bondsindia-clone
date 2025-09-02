export default function CareersPage() {
  return (
    <main className="text-slate-800 bg-white">
      <section className="bg-gradient-to-r from-teal-400 via-teal-600 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Elevate your career journey with us!
          </h1>
          <p className="mt-3 text-base md:text-lg text-teal-100/90">
            Join us as we revolutionize the landscape of investment for a
            brighter future!
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="text-center">
          <p className="uppercase text-slate-400 tracking-[0.15em] text-xs">
            We Value Talent
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold">
            Why work in <span className="text-orange-500">BondsIndia?</span>
          </h2>
          <p className="mt-3 text-slate-600">
            Simply because there is no limit to what you can achieve here.
          </p>
          <p className="mt-1 text-slate-500">
            Discover a work environment characterized by support, positivity,
            and camaraderie.
          </p>
        </div>

        <div className="mt-8 rounded-2xl bg-orange-50 ring-1 ring-orange-100 p-4 md:p-6">
          <div className="grid gap-4 md:gap-6 md:grid-cols-3">
            {[
              "Step into a workplace renowned for its vibrant and supportive culture, fostering growth and collaboration among all.",
              "Discover the freedom and adaptability of our flexible work arrangements, designed to empower you to thrive both personally and professionally.",
              "At BondsIndia, your work matters. Whether you’re aiding clients’ financial goals or innovating in the industry, your efforts impact lives across India.",
            ].map((text, i) => (
              <div
                key={i}
                className="rounded-xl bg-white/70 shadow-sm p-6 flex flex-col items-center text-center"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  {/* simple user/star/target-ish icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="currentColor"
                  >
                    <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm-9 9a9 9 0 1 1 18 0z" />
                  </svg>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-orange-50 ring-1 ring-orange-200 p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="uppercase text-[10px] tracking-[0.2em] text-slate-400">
                Our Values
              </p>
              <h3 className="text-base md:text-lg font-semibold text-slate-800">
                Managing tasks,{" "}
                <span className="text-orange-500">progress & success!</span>
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                We efficiently manage our clients’ tasks while empowering their
                journey toward success.
              </p>
            </div>
            <div className="self-start md:self-auto">
              <div className="h-14 w-14 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 items-start">
          <div className="rounded-2xl bg-white shadow-sm p-6 md:p-8">
            <p className="text-slate-700 leading-relaxed">
              In my experience, a company’s essence is defined by its
              receptiveness to employee feedback and proactive approach to
              addressing concerns. While challenges abound, it’s our resilience
              and adaptability that set us apart. Within the confines of this
              organization, I’ve found a haven of structured support, where
              pressure is managed with ease.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-slate-200" />
              <div>
                <p className="font-semibold text-slate-800 leading-tight">
                  Abhishek Birla
                </p>
                <p className="text-xs text-slate-500">
                  Technology & Development
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-orange-50 ring-1 ring-orange-100 p-6 text-center md:text-left">
            <h4 className="text-lg font-semibold text-slate-800">
              See what our employees{" "}
              <span className="text-orange-500">Are Saying</span>
            </h4>
            <div className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 shadow">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-slate-950 to-neutral-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-center text-2xl md:text-3xl font-semibold">
            Open <span className="text-orange-400">Positions</span>
          </h2>
          <p className="mt-2 text-center text-slate-300 text-sm">
            We’re searching for people who pursue innovation, show genuine
            passion, and commit to excellence.
          </p>

          <div className="mt-10 space-y-6">
            {[
              {
                dept: "Support Function",
                title: "Business Growth Executive",
                meta: "Permanent | 0 – 2 years of experience | Mumbai",
              },
              {
                dept: "Trade Desk",
                title: "Fixed Income Associate",
                meta: "Permanent | 2 – 4 years of experience | Mumbai",
              },
              {
                dept: "Digital Marketing",
                title: "Head – Digital Marketing",
                meta: "Permanent | 5 – 10 years of experience | Mumbai",
              },
            ].map((j, i) => (
              <div
                key={i}
                className="rounded-2xl bg-neutral-950/90 ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    {j.dept}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold">{j.title}</h3>
                  <p className="text-slate-400 text-sm">{j.meta}</p>
                </div>
                <div className="mt-4 md:mt-0 flex gap-3">
                  <button className="px-5 py-2 rounded-full border border-white/70 text-white hover:bg-white hover:text-black transition">
                    Know More
                  </button>
                  <button className="px-5 py-2 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black transition">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <h3 className="text-xl font-semibold text-white">
              Oops, nothing to go with?
            </h3>
            <p className="mt-2 text-slate-300">
              No problem! We’re looking for your talent. Send your resume to{" "}
              <span className="text-orange-400">hr@bondsindia.com</span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Running out of time?{" "}
            <span className="text-orange-500">Stay in the Loop!</span>
          </h2>
          <p className="mt-2 text-slate-600">
            Make sure to subscribe for the latest updates before anybody else.
          </p>
          <form className="mt-6 mx-auto max-w-xl flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-full bg-amber-50 border border-amber-200 text-slate-800 placeholder-slate-400 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-r-full bg-sky-500 hover:bg-sky-600 text-white font-medium transition"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
