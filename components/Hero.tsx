'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-sky">
      {/* Animated clouds background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 left-10 w-64 h-32 bg-white rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-48 bg-white rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-80 h-40 bg-white rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Filipino Web3
            <span className="block text-cloud-dark">Development</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Building the future of decentralized applications with a unique retro aesthetic inspired by Philippine culture
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#services"
              className="px-8 py-4 bg-white text-primary font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Our Services
            </a>
            <a
              href="#case-studies"
              className="px-8 py-4 bg-primary-dark text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-32 h-32"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full bg-white/30 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  )
}