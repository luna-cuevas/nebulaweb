import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      {/* Hero section */}
      <section className="flex border-none  relative h-[calc(100vh-100px)] bg-gradient-to-b from-blue-900 to-blue-300">
        <div className="xl:max-w-6xl mx-auto px-[5%] mt-[150px] h-fit w-full relative  lg:px-4  flex">
          <div className="flex z-50 gap-4  flex-col max-w-[500px] ">
            <h1 className="text-5xl font-bold text-white">
              Small Business Web Design + Development
            </h1>
            <p className="text-lg text-left leading-snug text-gray-300">
              No page builders or WordPress - We offer 100% hand-coded websites
              with superior results starting at $150/mo.{" "}
            </p>
            <div className="flex gap-4 mt-4">
              <button className="bg-white text-blue-900 px-4 py-2 rounded-md">
                Get Started
              </button>
              <button className="bg-transparent text-white px-4 py-2 rounded-md border border-white">
                Learn More
              </button>
            </div>
          </div>
          <div className="absolute object-cover w-[500px]  transition-all lg:w-[650px] lg:h-[500px] duration-150 xl:w-[700px] lg:top-1/3 z-50 h-[400px] xl:h-[550px] right-0 top-full xl:top-0 ">
            <Image
              src="/device-frames.png"
              alt="Nebula Logo"
              className="w-full h-full"
              fill
            />
          </div>
        </div>
        <svg
          className="absolute -bottom-1 z-20"
          data-name="Layer 1"
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          <path
            d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
            className="shape-fill"></path>
        </svg>
      </section>
      {/* What We Do */}

      <section className="flex flex-col items-center justify-start mt-20 border-none min-h-screen">
        <h2 className="text-4xl font-bold text-center">What We Do</h2>
        <p className="text-lg text-center text-gray-500 max-w-[650px] mt-4">
          We specialize in small business web design and development for clients
          anywhere in the US. Every line of code is written by hand to ensure
          the best performance, which helps bring in more customers to your site
          and bring more revenue to your business. LEARN MORE
        </p>
      </section>
    </main>
  );
}
