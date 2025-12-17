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
      // ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const GroomMapSection = () => {
  return (
    <section className="relative mt-32 px-6 bg-bg text-center font-sf">
      {/* TITLE */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-xs tracking-[0.45em] uppercase text-primary-dark/80"
      >
        Địa điểm
      </motion.p>

      <motion.h3
        variants={fadeUp}
        custom={0.1}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-4 font-script text-3xl text-primary"
      >
        Nhà Trai
      </motion.h3>

      {/* ADDRESS */}
      <motion.p
        variants={fadeUp}
        custom={0.2}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-4 max-w-md font-work-sans mx-auto text-md text-text/80 leading-relaxed tracking-widest"
      >
        Nhà hàng sông Hương <br/> (Phú Diễn Ngoài, Hoà Thịnh, Đắk Lắk)
      </motion.p>

      {/* MAP */}
      <motion.div
        variants={fadeUp}
        custom={0.3}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          relative
          mt-10
          w-full
          h-[320px]
          rounded-3xl
          overflow-hidden
          shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)]
        "
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19406.045892549973!2d109.22840353167258!3d12.981835607348659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316fe70021d0e121%3A0xecdd88a02a39f608!2zbmjDoCBow6BuZyBTw7RuZyBIxrDGoW5n!5e0!3m2!1svi!2s!4v1765976754806!5m2!1svi!2s"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19406.045892549973!2d109.22840353167258!3d12.981835607348659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316fe70021d0e121%3A0xecdd88a02a39f608!2zbmjDoCBow6BuZyBTw7RuZyBIxrDGoW5n!5e0!3m2!1svi!2s!4v1765976754806!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" /> */}
      </motion.div>

      {/* OPEN MAP BUTTON */}
      <motion.a
        variants={fadeUp}
        custom={0.4}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        href="https://maps.app.goo.gl/ETngtzuyMujPkbkz5"
        target="_blank"
        className="
          inline-block
          mt-6
          text-xs
          tracking-widest
          uppercase
          text-primary
        "
      >
        Mở Google Maps →
      </motion.a>
    </section>
  );
};
