import Image from "next/image";
import hero from './../../public/hero-img.png';

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          {/* Left Content */}
          <div>
            <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Live chat support <br /> for your customers.
            </h1>

            <p className="mt-6 max-w-lg text-gray-600">
              Create custom landing pages with Shades that convert more visitors
              than any website—no coding required.
            </p>

            {/* Email Form */}
            <div className="mt-8 flex max-w-md flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full placeholder-gray-400 rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-[#1290a4] focus:outline-none focus:ring-2 focus:ring-[#1290a4]/40"
              />
              <button className="rounded-md bg-[#1290a4] px-6 w-40 py-3 text-sm font-medium text-white transition hover:bg-[#0f7a8b]">
                Get Started
              </button>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Already using Shades?{" "}
              <span className="cursor-pointer font-medium text-[#1290a4] hover:underline">
                Sign In
              </span>
            </p>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <Image
              src={hero}
              alt="Live chat illustration"
              width={500}
              height={420}
              className="w-full max-w-md"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
