export default function ContactPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-64 bg-gray-800 flex items-center justify-center text-center text-white">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg">Just say hello, Well do the rest!</p>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-12 px-6 md:px-20 bg-white">
        <h2 className="text-center text-gray-400 uppercase tracking-wider text-sm">
          Our Locations
        </h2>
        <h3 className="text-center text-xl font-semibold mt-1 text-black">
          We are located <span className="text-orange-500 font-bold">here</span>
        </h3>

        <div className="bg-sky-50 rounded-lg p-6 mt-6 max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed">
            <strong>Registered Office:</strong> <br />
            601/602, Express Building, 14 E Road, Churchgate, Mumbai – 400020
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-orange-50 rounded-lg p-6 text-center shadow-sm">
          <p className="text-gray-600">Call us</p>
          <p className="mt-2 font-bold text-gray-800">+91-8882-200-300</p>
        </div>
        <div className="bg-orange-50 rounded-lg p-6 text-center shadow-sm">
          <p className="text-gray-600">Any Queries & Suggestions</p>
          <p className="mt-2 font-bold text-gray-800">info@bondsindia.com</p>
        </div>
        <div className="bg-orange-50 rounded-lg p-6 text-center shadow-sm">
          <p className="text-gray-600">KYC / Transaction Queries</p>
          <p className="mt-2 font-bold text-gray-800">trades@bondsindia.com</p>
        </div>
      </section>

      {/* Write to Us Form */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-center text-2xl font-semibold text-gray-800">
          You can <span className="text-orange-500">write to us</span>
        </h2>
        <p className="text-center text-gray-500 text-sm mt-1">
          We will respond at the earliest.
        </p>

        <div className="bg-sky-50 rounded-lg p-8 mt-8 max-w-4xl mx-auto">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <input
              type="text"
              placeholder="Name *"
              className="p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <input
              type="email"
              placeholder="Email *"
              className="p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <input
              type="tel"
              placeholder="Phone Number *"
              className="p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400 md:col-span-2"
            />
            <textarea
              placeholder="Message *"
              className="p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400 md:col-span-2 h-32"
            ></textarea>
            <div className="md:col-span-2 flex justify-center">
              <button className="bg-sky-600 text-white px-8 py-3 rounded font-medium hover:bg-sky-700 transition">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="bg-gray-50 rounded-lg p-8 max-w-5xl mx-auto">
          <h2 className="text-center text-2xl font-semibold text-gray-800">
            Join in <span className="text-orange-500">our team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="font-semibold text-gray-800">
                Come, let’s build the new era of investments!
              </h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                Explore exciting career opportunities at BondsIndia, where you
                can collaborate with talented professionals in delivering
                financial products and services.
              </p>
            </div>
            <div className="p-6 bg-orange-50 rounded-lg shadow-sm border flex flex-col items-center justify-center text-center">
              <p className="text-gray-700 font-medium">
                Choose a career that embraces your passion while making a
                meaningful impact.
              </p>
              <button className="mt-4 px-6 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white transition">
                See Opportunities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-50 py-16 px-6 md:px-20 text-center">
        <h2 className="text-xl font-semibold text-gray-800">
          Running out of time?{" "}
          <span className="text-orange-500">Stay in the Loop!</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Make sure to subscribe for the latest updates before anybody else.
        </p>
        <div className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 w-64 rounded-l border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 text-gray-700"
          />
          <button className="bg-sky-600 text-white px-6 rounded-r hover:bg-sky-700 transition">
            Subscribe Now
          </button>
        </div>
      </section>
    </div>
  );
}
