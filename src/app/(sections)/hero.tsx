'use client';

import { motion } from 'framer-motion';

const slowLoop = {
  duration: 14,
  // ease: 'easeInOut',
  repeat: Infinity,
  repeatType: 'mirror' as const,
};

const fadeBlock = {
  hidden: {
    opacity: 0,
    filter: 'blur(2px)',
  },
  show: (delay = 0) => ({
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1.8,
      delay,
      // ease: 'ease: [0.16, 1, 0.3, 1],,
    },
  }),
};

/* ================= COMPONENT ================= */

export const Hero = () => {
  return (
    <section className="relative h-[110vh] w-full overflow-hidden bg-[#f8f3ed]">
      {/* ================= PARALLAX SCENE ================= */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
      >
        {/* BACKGROUND */}
        <motion.img
          src="/images/bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover backdrop-opacity-[.15] "
          animate={{ scale: [1, 1.06] }}
          transition={slowLoop}
        />

        {/* MAIN ILLUSTRATION */}
        <motion.img
          src="/images/tt.png"
          alt="Wedding illustration"
          className="absolute bottom-2 left-[40%] -translate-x-1/2 w-[60%] md:w-[35%] max-w-xl"
          animate={{ y: [0, -25] }}
          transition={slowLoop}
        />
      </motion.div>

      {/* ================= BIRDS ================= */}
      {/* LEFT BIRD */}
      <motion.img
        src="/images/bird-left.png"
        alt="Bird left"
        className="absolute left-2 md:left-8 top-[35%] w-24 opacity-80 z-30 pointer-events-none"
        initial={{ opacity: 0, x: -80 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -14, 0],
        }}
        transition={{
          opacity: { duration: 3 },
          x: { duration: 3.8 },
          y: {
            duration: 8,
            ease: 'easeInOut',
            repeat: Infinity,
          },
        }}
      />

      {/* RIGHT BIRD */}
      <motion.img
        src="/images/bird-right.png"
        alt="Bird right"
        className="absolute right-2 md:right-8 top-[45%] md:top-[38%] w-24 opacity-80 z-30 pointer-events-none"
        initial={{ opacity: 0, x: 80 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -18, 0],
        }}
        transition={{
          opacity: { duration: 3 },
          x: { duration: 4.2 },
          y: {
            duration: 9,
            ease: 'easeInOut',
            repeat: Infinity,
          },
        }}
      />


      {/* ================= TEXT LAYER ================= */}
      <div className="relative z-20 flex h-full flex-col items-center px-4 pt-14 md:pt-20 text-center">
        {/* BLOCK 1 */}
        <motion.div
          variants={fadeBlock}
          initial="hidden"
          animate="show"
          custom={0.3}
          className="space-y-2"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gray-700">
            Together <br /> with their families
          </p>
        </motion.div>

        {/* BLOCK 2 */}
        <motion.div
          variants={fadeBlock}
          initial="hidden"
          animate="show"
          custom={0.7}
          className="mt-8 font-halimun"
        >
          <h1 className="font-halimun text-3xl md:text-4xl text-[#2f3e2e]">
            Trường & Loan
          </h1>
        </motion.div>

        {/* BLOCK 3 */}
        <motion.div
          variants={fadeBlock}
          initial="hidden"
          animate="show"
          custom={1.1}
          className="mt-6 text-center"
        >
          <p className="text-sm tracking-[0.1em] uppercase text-[#14240f]">
            Trân trọng kính mời <br/><span className="mt-3 text-md font-work-sans font-bold tracking-wide text-primary">Bạn</span>
          </p>

          <p className="mt-1 font-script text-xs uppercase text-[#14240f] tracking-[0.1em]">
            Đến chung vui trong ngày cưới
          </p>
        </motion.div>


        {/* BLOCK 4 – DATE */}
        <motion.div
          variants={fadeBlock}
          initial="hidden"
          animate="show"
          custom={1.5}
          className="mt-6 flex items-center gap-6 -ml-2"
        >
          <div className="text-sm font-semibold tracking-widest uppercase border-t border-b py-2 px-4">Chủ nhật</div>

          <div className="flex flex-col items-center">
            <span className="text-sm font-semibold tracking-widest uppercase">Tháng 01</span>
            <span className="text-5xl font-semibold py-2">04</span>
            <span className="text-sm font-semibold tracking-widest uppercase">2026</span>
          </div>

          <div className="text-sm font-semibold tracking-widest uppercase border-t border-b py-2 px-6">11 giờ</div>
        </motion.div>

        <motion.div
          variants={fadeBlock}
          initial="hidden"
          animate="show"
          custom={1.5}
          className="text-gray-700 text-sm mt-2"
        >(Nhằm ngày 16 tháng 11 năm Ất Tỵ)</motion.div>

        {/* BLOCK 5 */}
        <motion.div
          variants={fadeBlock}
          initial="hidden"
          animate="show"
          custom={1.9}
          className="mt-8 space-y-2"
        >
          <p className="text-xs tracking-widest font-bold uppercase text-gray-700">
            Tây Hoà, Đắk Lắk (Phú Yên)
          </p>

          <p className="mt-4 font-halimun text-sm text-gray-600">
            Reception to follow
          </p>
        </motion.div>
      </div>
    </section>
  );
};
