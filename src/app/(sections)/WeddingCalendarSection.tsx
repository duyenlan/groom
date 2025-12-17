"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { RippleButton } from "../components/RippleButton";
import Image from "next/image";

const weddingDate = new Date("2026-01-04T11:00:00");

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      // ease: "easeOut",
    },
  }),
};

const flowerFloat = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: [0, -6, 0],
    transition: {
      opacity: { duration: 1.2 },
      y: {
        duration: 14,
        repeat: Infinity,
        // ease: "easeInOut",
      },
    },
  },
};

const fadeUpSoft = {
  hidden: { opacity: 0, y: 16 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      // ease: "easeOut",
    },
  }),
};

const imageFloat = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      // ease: "easeOut",
    },
  },
};

export const WeddingCalendarSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // January 2026
  const daysInMonth = 31;
  const startDay = 3;

  const weddingDay = 4;

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -12]);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const diff = weddingDate.getTime() - now;

      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative mt-48 mb-24 px-6 text-center bg-bg font-sf"
    >
      <div className="relative mx-auto w-72 aspect-square">
        {/* IMAGE INSIDE MASK */}
        <motion.img
          src="/gallary/15x21-01-circle.png"
          alt="couple"
          variants={imageFloat}
          initial="hidden"
          whileInView="show"
          style={{ y: imageY }}
          viewport={{ once: true }}
          className="pt-14"
        />
      </div>

      <motion.img
        src="/svg/khung.svg"
        alt="flower"
        variants={fadeUpSoft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{
          delay: 0.6,
        }}
        className="
          pointer-events-none
          absolute
          left-0 -top-48
          rotate-180
        "
      />

      <motion.img
        src="/svg/khung.svg"
        alt="flower"
        variants={fadeUpSoft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{
          delay: 0.6,
        }}
        className="
          pointer-events-none
          absolute
          right-0 -top-48
          -rotate-90
        "
      />

      <motion.img
        src="/gifs/Red-Gold-Illustration.gif"
        alt="flower"
        variants={flowerFloat}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{
          delay: 0.6,
        }}
        className="
          pointer-events-none
          absolute
          left-0 md:left-0 -top-20
        "
      />
      {/* TITLE */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={0}
        className="mt-16 text-xs tracking-[0.45em] uppercase text-primary-dark opacity-80"
      >
        Lịch tháng
      </motion.p>

      {/* MONTH */}
      <motion.h3
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={0.1}
        className="relative mt-4 text-xl tracking-widest text-text"
      >
        Tháng 01
        <motion.img
          src="/images/flower-03.png"
          alt="flower"
          variants={flowerFloat}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
          pointer-events-none
          absolute
          left-[33%] top-0
          w-[35%] md:w-[22%]
          opacity-90
        "
        />
      </motion.h3>

      {/* WEEK DAYS */}
      <div className="mt-10 grid grid-cols-7 gap-2 text-md uppercase tracking-widest text-text/70">
        {["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map((d) => (
          <div key={d} className="text-center">
            {d}
          </div>
        ))}
      </div>

      {/* CALENDAR GRID */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={0.2}
        className="relative mt-4 grid grid-cols-7 gap-2"
      >
        {/* YEAR DECOR */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.25}
          className="
            absolute mt-10
            text-[72px] md:text-[120px]
            font-script
            select-none
            pointer-events-none
            left-[53%] -translate-x-1/2
            top-[30%] -translate-y-1/2
            z-2
            text-primary/20
            tracking-[0.3em]
          "
        >
          2026
        </motion.div>

        {/* DECOR FLOWERS */}
        <motion.img
          src="/images/flower-01.png"
          alt="flower"
          variants={flowerFloat}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            pointer-events-none
            absolute
            -left-8 md:-left-10 -bottom-20
            w-[35%] md:w-[22%]
            opacity-90
          "
        />

        {/* Empty cells */}
        {Array.from({ length: startDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {/* Days */}
        {days.map((day) => {
          const isWeddingDay = day === weddingDay;

          return (
            <div
              key={day}
              className={`
                relative h-12 flex items-center justify-center
                text-md
                ${isWeddingDay ? `text-white font-semibold` : "text-text"}
              `}
            >
              <span className="z-10">{day}</span>

              {/* Flower icon */}
              {isWeddingDay && (
                <img
                  className="
                    absolute
                    top-1/2 left-1/2
                    -translate-x-1/2 -translate-y-1/2
                    w-10
                  "
                  alt="heart"
                  src="/images/calen_heart.png"
                />
              )}
            </div>
          );
        })}
      </motion.div>

      {/* NOTE */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={0.3}
        className="mt-18 flex justify-center gap-6 md:gap-14"
      >
        {[
          { label: "Ngày", value: timeLeft.days },
          { label: "Giờ", value: timeLeft.hours },
          { label: "Phút", value: timeLeft.minutes },
          { label: "Giây", value: timeLeft.seconds },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            variants={fadeUp}
            custom={0.35 + index * 0.08}
            className="
               rounded-2xl
              bg-white
              border border-primary/50
              py-3 px-2
            "
          >
            <p className="text-4xl md:text-3xl lg:text-6xl font-semibold text-primary">
              {String(item.value).padStart(2, "0")}
            </p>
            <p className="mt-1 text-sm tracking-widest text-text">
              {item.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUpSoft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={0.4}
        className="flex justify-center mt-16"
      >
        <RippleButton
          href="https://khoatruong-kieuloan-061225.vercel.app/"
          target="_blank"
          variant="outline"
          size="md"
        >
          Xem thiệp nhà gái →
        </RippleButton>
      </motion.div>
    </section>
  );
};
