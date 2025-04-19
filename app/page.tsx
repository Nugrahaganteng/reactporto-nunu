// pages/index.js
"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import TrustedLogos from '@/componen/TrustedLogos';
import SelectedWork from '@/componen/SelectedWork';
export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio Website</title>
        <meta name="description" content="Frontend Web Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed top-0 w-full z-50">
        <div className="flex justify-end p-5 px-30 pt-10">
          <button className=" font-bold block ml-auto border border-[#333] w-[132px] py-2 rounded-full text-white bg-[#1a1a1a] cursor-pointer">MENU</button>
        </div>
      </header>

      <main>
        {/* Hero Section with fixed background */}
        <section className="relative h-[110vh]">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>

          <div className="fixed inset-0 bg-gray-300">
            <Image
              src="/image/hero/headerBG.png"
              alt="Hero background"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blac/70 to-gray-200" />
          </div>

          <div className="relative z-20 flex items-center h-full">
            <div className="container mx-auto px-6">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Hi, I'm nugraha algeio<br />
                  Frontend Web Developer
                </h1>
                <p className="text-[#989898] mb-8 font-normal text-xl">
                  Seorang insinyur perangkat lunak frontend dan perancang
                  antarmuka yang membangun situs web yang seperti UI UX,
                  mudah diakses, dan berkinerja tinggi.
                </p>
                <div className="flex gap-4">
                  <a href="#contact">
                    <div className="relative inline-block group">
                      <div className="absolute inset-0 bg-gray-400 rounded-lg scale-0 group-hover:scale-120 transition-transform duration-300 ease-out -z-10" />

                      <button className="bg-white text-black px-14 py-5 font-bold rounded-lg hover:cursor-pointer relative z-10">
                        see me
                      </button>
                    </div>
                  </a>
                  <a href="#work">
                    <button className="hover:cursor-pointer border border-gray-500 hover:border-white text-white px-17 py-5 font-bold rounded-lg">
                      See my work
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
          <section className="relative bg-[#0c0a0a] py-20 z-30 rounded-t-[70px] -mt-16 pt-20">
            <div className="container mx-auto px-6 py-20">
              <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">
                Trusted by
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center justify-items-center py-10">
                {[...Array(4)].map((_, i) => (
                  <TrustedLogos
                    key={i}
                    startFrom={Math.floor(Math.random() * 1000)}
                    intervalMs={Math.floor(Math.random() * 2000) + 2000}
                  />
                ))}
              </div>

            </div>
          
          {/* Selected Work Section */}
          <section className="bg-[#0c0a0a] pb-25" id="work">
            <div className="container mx-auto px-2">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
                Selected my Work
              </h2>
              <SelectedWork />
            </div>
          </section>
          </section>
        </main>
      </>
      );
}