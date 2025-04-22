// pages/index.js
"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import TrustedLogos from '@/componen/TrustedLogos';
import SelectedWork from '@/componen/SelectedWork';
import CertificateShowcase from '@/componen/CertificateShowcase';
import Toolkit from '@/componen/Toolkit';
import Testimonials from '@/componen/Testimonials';
import ContactSection from '@/componen/ContactSection';
import Footer from '@/componen/Footer';
import Article from '@/componen/Article';
import {motion} from 'framer-motion';
import Menu from '@/componen/Menu';
export default function Home() {
  const [, setScrolled] = useState(false);

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
      <Menu />

      <main>
        {/* Hero Section with fixed background */}
        <section className="relative h-[110vh]" id='home'>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-transparent z-10 dark:from-black"></div>

          <div className="fixed inset-0 bg-gray-300">
  <Image
    src="/image/hero/headerBG.png"
    alt="Hero background"
    layout="fill"
    objectFit="cover"
    priority
    className="transition-opacity duration-500 mobile-header-bg"
    style={{
      objectPosition: '80% center'
    }}
  />
  <div className="absolute inset-0 bg-gradient-to-b dark:from-black/70 dark:to-gray-200 from-gray-800/50 to-gray-100" />
</div>

          <div className="relative z-20 flex items-center h-full">
            <div className="container mx-auto px-4 sm:px-6">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-xl"
              >
                <motion.h1 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 dark:text-gray-100 mb-4 leading-tight"
                >
                  Hi, I&apos;m nugraha algeio<br />
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Frontend Web Developer
                  </motion.span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-gray-200 dark:text-[#989898] mb-8 font-normal text-lg sm:text-xl"
                >
                  Seorang insinyur perangkat lunak frontend dan perancang
                  antarmuka yang membangun situs web yang seperti UI UX,
                  mudah diakses, dan berkinerja tinggi.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.a 
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="relative inline-block group">
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-400 dark:to-gray-500 rounded-lg scale-0 group-hover:scale-110 transition-transform duration-300 ease-out -z-10" />
                      <button className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-200 dark:to-gray-300 text-gray-800 dark:text-gray-900 px-8 sm:px-14 py-4 sm:py-5 font-bold rounded-lg hover:cursor-pointer relative z-10 w-full sm:w-auto text-center transition-colors duration-300">
                        see me
                      </button>
                    </div>
                  </motion.a>
                  <motion.a 
                    href="#work"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto"
                  >
                    <button className="w-full sm:w-auto hover:cursor-pointer border-2 border-gray-400 dark:border-gray-500 hover:border-gray-600 dark:hover:border-gray-300 text-gray-200 dark:text-gray-100 px-8 sm:px-17 py-4 sm:py-5 font-bold rounded-lg transition-colors duration-300">
                      See my work
                    </button>
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Trusted By Section */}
        <section className="section-override relative bg-gray-100 dark:bg-[#0c0a0a] z-30 rounded-t-[70px] -mt-16 pt-20">
          <div className="container mx-auto px-6 py-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 text-center mb-16">
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
          <section className="bg-gray-100 dark:bg-[#0c0a0a] pb-25" id="my-work">
            <div className="container mx-auto px-2">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-16 text-center">
                Selected my Work
              </h2>
              <SelectedWork />
            </div>
          </section>
          {/* Certificates Section */}
          <section className="bg-gray-100 dark:bg-[#0c0a0a] pb-25" id="see-certificate">
            <div className="container mx-auto px-2">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-16 text-center">
                My certificate and experience
              </h2>
              <CertificateShowcase />
              <Article />
            </div>
          </section>
          {/* Toolkit Section */}
          <section className="bg-gray-100 dark:bg-[#0c0a0a] pb-25" id="my-skills">
            <div className="container mx-auto px-2">
              <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 dark:text-gray-100 mb-16">
                My Toolkit
              </h2>
              <Toolkit />
            </div>
          </section>
          {/* Testimonials Section */}
          <section className="bg-gray-100 dark:bg-[#0c0a0a] pb-25" id="testimonials">
            <div className="container mx-auto px-2">
              <h2 className="text-3xl md:text-5xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-4">
                Testimonials
              </h2>
              <Testimonials />
            </div>
          </section>
          {/* Contact Section */}
          <section className="bg-gray-100 dark:bg-[#0c0a0a] pb-15" id="contact">
            <div className="container mx-auto ">
              <h2 className="text-3xl md:text-6xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-24">
                Send Message
              </h2>
              <ContactSection />
            </div>
          </section>
          <Footer />
        </section>
      </main>

    </>
  );
}