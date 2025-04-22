'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegHeart } from 'react-icons/fa';

type CertificateData = {
  title: string;
  description: string;
  image: string;
  likeCount: number;
};

export default class CertificateShowcase extends React.Component {
  // Data disimpan dalam array
  certificates: CertificateData[] = [
    {
      title: 'Certificate yang saya dapat dari web hotel',
      description:
        'Note: Saya membuat ini dengan sangat asik dan seru karena dikerjakan bersama teman-teman. Saya sangat terkesan karena ini adalah pengalaman terbaik saya mendapatkan certificate.',
      image: '/image/certificate/sertifikat1.png',
      likeCount: 416,
    },
    {
        title: 'certificate yang saya dapat dari web landing page html dan css',
        description:
          'Note: saya membuat nya dengan html dan css banyak rintangan yang saya dapat dari web landing page html dan css ini tapi ada nya tekad dan niat akhir nya saya mendapatkan certificate yang saya',
        image: '/image/certificate/sertifikat 2.png',
        likeCount: 416,
      },
    // Tambahkan lebih banyak data kalau mau
  ];

  render() {
    return (
        <>{this.certificates.map((cert, index) => (
        
      <div key={index} className="w-full bg-white dark:bg-[#161211] p-2 rounded-xl shadow-md my-14">
        <div className="max-w-6xl mx-auto">
          
            <div
              
              className="flex flex-col md:flex-row gap-8 items-center"
            >
              {/* Kiri - Deskripsi */}
              <div className="md:w-3/6 flex flex-col justify-between space-y-6">
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 leading-tight hover:text-gray-700 transition-colors">
                    {cert.title}
                  </h2>
                  <p className="text-gray-700 dark:text-[#989898] text-xl leading-relaxed mb-6 hover:text-gray-600 transition-colors">
                    {cert.description}
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <Link
                    href="#"
                    className="text-white font-semibold relative group border-b-2 border-b-gray-500 hover:border-b-white transition-all duration-300"
                  >
                    <span className="relative z-10 text-gray-700 dark:text-white">Continue reading</span>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black dark:bg-white transition-all group-hover:w-full duration-300"></span>
                  </Link>
                  <div className="flex items-center gap-2 hover:transform hover:scale-105 transition-transform cursor-pointer">
                    <FaRegHeart className="text-red-500 text-xl hover:text-red-600" />
                    <p className="text-[#989898] text-sm">{cert.likeCount}</p>
                  </div>
                </div>
              </div>

              {/* Kanan - Gambar */}
              <div className="md:w-1/2">
                <div className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-4">
                  <Image
                    width={1000}
                    height={1000}
                    src={cert.image}
                    alt="Competency Certificate"
                    className="w-full object-contain hover:scale-105 transition-transform duration-300 rounded-lg"
                  />
                </div>
              </div>
            </div>
          
        </div>
      </div>
      ))}
      </>
    );
  }
}
