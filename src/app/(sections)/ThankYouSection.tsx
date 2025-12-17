'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
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

export const ThankYouSection = () => {
  return (
    <section className="relative mt-32 mb-8 px-6 text-center font-sf">
      {/* TITLE */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-xs tracking-[0.45em] uppercase text-primary-dark/80"
      >
        With love
      </motion.p>

      <motion.h3
        variants={fadeUp}
        custom={0.1}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-4 font-script text-4xl md:text-5xl text-primary"
      >
        Thank You
      </motion.h3>
      

      {/* CONTENT */}
      <motion.p
        variants={fadeUp}
        custom={0.2}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          mt-8
          max-w-md
          mx-auto
          text-sm
          text-text/80
          leading-relaxed
          tracking-widest
        "
      >
        Chân thành cảm ơn sự hiện diện,
tình cảm và những lời chúc tốt đẹp của bạn.
Sự đồng hành của bạn là niềm hạnh phúc
lớn lao đối với chúng tôi.
      </motion.p>

      {/* SIGNATURE */}
      <motion.p
        variants={fadeUp}
        custom={0.3}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-10 font-script text-2xl text-primary"
      >
        Trường & Loan
      </motion.p>

      {/* DECOR */}
      <motion.img
        src="/images/Red-and-White-Illustrated.png"
        alt="flower"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          pointer-events-none
          opacity-80
        "
      />

      {/* CLOSING LINE */}
      <motion.p
        variants={fadeUp}
        custom={0.4}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-6 text-xs tracking-widest uppercase text-text/60"
      >
        January 2026
      </motion.p>
    </section>
  );
};
