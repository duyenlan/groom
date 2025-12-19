'use client';

import { motion } from 'framer-motion';
// import Image from "next/image";
import { CopyAccountButton } from '../components/CopyAccountButton';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: d,
      // ease: 'ease: [0.16, 1, 0.3, 1],,
    },
  }),
};

export const QRSection = () => {
  return (
    <section className="relative mt-32 px-6 text-center bg-bg font-sf">
      {/* TITLE */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-3xl tracking-[0.2em] uppercase text-primary-dark/80"
      >
        Mừng Cưới Online
      </motion.p>

      <motion.h3
        variants={fadeUp}
        custom={0.1}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-4 text-xl font-script text-primary"
      >
        Mừng cưới cô dâu & chú rể
      </motion.h3>

      {/* QR GRID */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
        {/* GROOM */}
        <motion.div
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            bg-white
            rounded-3xl
            p-4
            border
            border-grey-600
            border-dashed
            shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)]
          "
        >
          <img
            src="/images/qr-groom.jpg"
            alt="QR chú rể"
          
            className="mx-auto w-40 h-40 rounded-2xl"
          />

          <p className="mt-6 text-sm text-text/70">
            Chú rể
          </p>

          <p className="mt-2 uppercase font-script text-xl text-primary">
            Vo Khoa Truong
          </p>

          <p className="mt-2 text-sm tracking-widest uppercase text-text/60">
            Vietcombank - 1013359643
          </p>

          <CopyAccountButton
            value="1013359643"
            label="Copy số tài khoản"
          />
        </motion.div>

        {/* BRIDE */}
        <motion.div
          variants={fadeUp}
          custom={0.3}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            bg-white
            rounded-3xl
            p-4
            border
            border-grey-600
            border-dashed
            shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)]
          "
        >
          <img
            src="/images/qr-bride.jpg"
            alt="QR cô dâu"
            
            className="mx-auto w-40 h-40 rounded-2xl"
          />

          <p className="mt-6 text-sm text-text/70">
            Cô dâu
          </p>

          <p className="mt-2 uppercase font-script text-xl text-primary">
            Vu Thi Kieu Loan
          </p>

          <p className="mt-2 text-sm tracking-widest uppercase text-text/60">
            Vietcombank - 0091000637857
          </p>

          <CopyAccountButton
            value="0091000637857"
            label="Copy số tài khoản"
          />
        </motion.div>
      </div>
    </section>
  );
};
