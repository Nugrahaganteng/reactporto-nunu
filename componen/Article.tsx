import Link from 'next/link'
import React, { Component } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { motion } from 'framer-motion'

export class Article extends Component {
    articles = [
      {
        title: 'Perjalanan di SMP Daar El-Qolam',
        desc: 'Aku memulai perjalanan pendidikanku di SMP Islam Daar El-Qolam. Di sana aku belajar hidup mandiri, memperdalam ilmu agama, dan menanamkan kedisiplinan. Aku juga sempat meraih juara dalam lomba bahasa Arab tingkat kota.',
        likes: 120,
      },
      {
        title: 'Langkah Awal di Dunia IT',
        desc: 'Setelah lulus dari pesantren, aku melanjutkan pendidikan ke SMK Informatika Pesat Bogor. Di sinilah aku mulai mendalami bidang RPL (Rekayasa Perangkat Lunak), mulai dari HTML, CSS, hingga UI/UX.',
        likes: 190,
      },
      {
        title: 'Berkembang di Dunia Digital',
        desc: 'Selama di SMK, aku mengembangkan minat di dunia digital art dan desain UI. Aku mulai menjual ilustrasi digital dan menerima jasa pembuatan desain UI/UX, sebagai langkah awal membangun karier.',
        likes: 220,
      }
    ]

    render() {
      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {this.articles.map((article, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              key={i}
              className="bg-[#161211] dark:bg-[#161211] bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[300px] w-full border border-gray-200 dark:border-gray-800"
            >
              <div className="space-y-4">
                <motion.h3 
                  whileHover={{ x: 5 }}
                  className="text-gray-800 dark:text-white text-xl sm:text-2xl font-bold mb-3 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  {article.title}
                </motion.h3>
                <p className="text-gray-600 dark:text-[#989898] text-sm sm:text-base leading-relaxed">{article.desc}</p>
              </div>
              <div className="mt-8 flex items-center justify-between flex-wrap sm:flex-nowrap gap-4">
                <motion.div
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href="#"
                    className="text-gray-800 dark:text-white text-sm font-semibold relative group border-b-2 border-b-gray-300 dark:border-b-gray-600 hover:border-b-gray-800 dark:hover:border-b-white transition-all duration-300 py-1"
                  >
                    <span className="relative z-10">Continue reading</span>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-800 dark:bg-white transition-all group-hover:w-full duration-300"></span>
                  </Link>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <FaRegHeart className="text-red-500 text-xl hover:text-red-600" />
                  <span className="text-gray-600 dark:text-[#989898] text-sm font-medium">{article.likes}</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      )
    }
}

export default Article
