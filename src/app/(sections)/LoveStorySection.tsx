'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: d,
      // ease: 'ease: [0.16, 1, 0.3, 1],,
    },
  }),
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const revealLeft = {
  hidden: { opacity: 0, x: -30, scale: 0.98 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      // ease: 'ease: [0.16, 1, 0.3, 1],,
    },
  },
};

const revealRight = {
  hidden: { opacity: 0, x: 30, scale: 0.98 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      // ease: 'ease: [0.16, 1, 0.3, 1],,
    },
  },
};

const textBreath = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      // ease: 'ease: [0.16, 1, 0.3, 1],,
    },
  },
};


export const LoveStorySection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -6]);

  return (
    <section
      ref={ref}
      className="relative mt-32 px-6 bg-bg"
    >

      <div className="mb-16">
        <h3 className="font-sf uppercase text-center text-3xl text-italic">Welcome to our wedding</h3>
      </div>
      {/* TOP TEXT */}
      <motion.div
        style={{ y: textY }}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-md mb-8"
      >
        <motion.div
          variants={textBreath}
          className='text-primary text-2xl font-halimun'
        >

          A Quiet Promise,
        </motion.div>
        <p className="mt-2 text-base font-sf text-text/80 leading-relaxed">
          In the ordinary rhythm of life, we found each other — and chose to stay
          {/* Giữa những khoảnh khắc bình dị của cuộc sống,
          chúng tôi tìm thấy nhau – và chọn ở lại. */}
        </p>
      </motion.div>

      {/* IMAGE GRID */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-6 relative"
      >
        {/* IMAGE 1 */}
        <div className='relative'>
          <motion.img
            src="/gallary/story-01.webp"
            variants={revealLeft}
            className="w-full object-cover"
          />
          <motion.p
            variants={revealLeft}
            className="font-sf tracking-[0.1em] absolute text-primary uppercase text-md md:text-lg bottom-8 -right-8 rotate-90"
          >
            Wedding
          </motion.p>
        </div>

        {/* IMAGE 2 */}
        <div className='relative'>
          <motion.img
            src="/gallary/story-02.webp"
            variants={revealRight}
            className="w-full object-cover mt-24"
          />

          <motion.p variants={revealRight} className='font-sf tracking-normal absolute text-primary text-md md:text-lg text-right top-12 md:top-14 right-0'>Our story begins here</motion.p>
        </div>
      </motion.div>

      {/* SIDE TEXT */}
      <motion.div
        style={{ y: textY }}
        variants={revealLeft}
        custom={0.3}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="my-8 max-w-md font-sf mr-auto text-left"
      >
        <p className="text-md text-text leading-relaxed">
        <span className="mr-4 text-primary text-xl">
          Trường & Loan
        </span>  With love, always
        </p>
      </motion.div>


      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-[3fr_2fr] gap-2 md:gap-6 relative"
      >
        {/* IMAGE 1 */}
        <motion.img
          src="/gallary/story-03.jpg"
          alt="story"
          variants={revealLeft}
          custom={0.1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full object-cover"
        />

        <div className="flex flex-col justify-center items-center relative">
          <motion.p variants={revealRight} className='font-sf tracking-normal absolute text-primary text-md md:text-2xl top-12 -right-13 md:-right-18 rotate-90'>I love you 3000</motion.p>
          <motion.p variants={revealRight} className='font-sf tracking-[0.1em] uppercase text-sm md:text-md mr-3 md:mr-0'>Chú rể</motion.p>
          <motion.p variants={revealRight} className='font-sf tracking-normal text-primary text-sm md:text-lg top-12 right-0 box leading-4 mt-1 mr-3 md:mr-0'>Khoa Trường</motion.p>
        </div>
      </motion.div>

      <div className="grid grid-cols-[2fr_3fr] gap-6 relative mt-8 h-40">
        <div className="flex flex-col justify-center items-center relative">
        <motion.p variants={fadeUp} className='font-sf tracking-[0.1em] absolute text-primary uppercase text-md md:text-2xl bottom-20 -left-10 md:-left-13 rotate-90'>Wedding</motion.p>
          <motion.p variants={revealRight} className='font-sf tracking-[0.1em] uppercase text-sm md:text-md ml-3 md:ml-0'>Cô dâu</motion.p>
          <motion.p variants={revealRight} className='font-sf tracking-normal text-primary text-sm md:text-lg top-12 right-0 box leading-4 mt-1 ml-3 md:ml-0'>Kiều Loan</motion.p>
        </div>

        {/* IMAGE 1 */}
        <motion.img
          src="/gallary/story-04.jpg"
          alt="story"
          variants={revealRight}
          custom={0.1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CTA */}
      {/* <motion.div
        variants={fadeUp}
        custom={0.4}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-20 flex justify-center"
      >
        <RippleButton
          href="#contact"
          variant="outline"
          size="md"
        >
          Liên hệ gia đình →
        </RippleButton>
      </motion.div> */}
    </section>
  );
};
