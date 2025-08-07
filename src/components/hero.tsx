"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { useRouter } from "next/navigation";
import { imageConfig } from "@/lib/imageUtils";

export function Hero() {
  const images = imageConfig.hero.images;
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.2,
        duration: 0.6
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section id="hero" aria-label="Hero section - Welcome to Ilkka Healthcare">
      <ImagesSlider className="h-[100vh]" images={images}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="z-50 flex flex-col justify-center items-center h-full px-4"
        >
          <motion.header
            variants={itemVariants}
            className="text-center mb-8"
          >
            <motion.h1 
              className="font-bold text-4xl md:text-7xl lg:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60 mb-4 leading-tight"
              variants={itemVariants}
            >
              Wellbeing at Every Step
            </motion.h1>
            <motion.h2 
              className="font-extrabold text-3xl md:text-5xl lg:text-6xl text-center text-primary drop-shadow-2xl"
              variants={itemVariants}
            >
              WE CARE
            </motion.h2>
          </motion.header>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl text-center text-white/90 mb-8 max-w-3xl leading-relaxed drop-shadow-lg"
            role="banner"
          >
            Your trusted partner in healthcare, providing quality medical supplies and equipment across Ethiopia and Somaliland
          </motion.p>

          <motion.nav
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="flex flex-col sm:flex-row gap-4 max-w-[60vw]"
            aria-label="Main navigation buttons"
          >
            <motion.button 
              onClick={() => router.push("/#about")} 
              className="px-4 py-2  bg-primary text-primary-foreground font-semibold rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-300 md:3xs lg:text-lg"
              aria-label="Learn more about Ilkka Healthcare"
            >
              Learn More About Us
            </motion.button>
            <motion.button 
              onClick={() => router.push("/#products")} 
              className="px-8 py-4 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-lg"
              aria-label="View our medical products and equipment"
            >
              View Our Products
            </motion.button>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            role="complementary"
            aria-label="Scroll indicator"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center text-white/70"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </ImagesSlider>
    </section>
  );
}
