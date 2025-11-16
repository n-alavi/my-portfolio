"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <div id="intro">
      {/* profile picture */}

      <div className="flex items-center justify-center mt-14">
        <div className="flex items-center justify-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <Image
                src="/assets/profile.svg"
                alt="profile-picture"
                width={192}
                height={192}
                quality={95}
                priority={true}
                className="h-32 w-32 rounded-full border-[0.3rem] border-white
            object-cover object-[50%_0%] shadow-xl"
              />
            </motion.div>
            <motion.span
              className="absolute bottom-0 right-0 text-4xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </div>
        </div>
      </div>

      {/* introduction  container */}
      <motion.div
        className="px-4 text-lg font-medium sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >

        <h1 className="mt-4">
          <span className="font-bold">
            Results-driven Frontend Developer with proven commercial experience building production-ready web applications using React.js and Next.js. Currently expanding expertise as a Backend Developer Trainee at Mother Technology Innovation Center, working with modern technologies including Elysia/Bun, PostgreSQL, and Prisma ORM.
          </span>

        </h1>
      </motion.div>
    </div>
  );
}
