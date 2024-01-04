"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaChevronRight,
  FaDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
function Intro() {
  const { ref } = useSectionInView("Home");
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={
                "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="Elena"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            ></Image>
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">{`Hello, I'm Elena.`}</span> {`I'm a `}
        <span className="font-bold">{`front end developer`}</span> {`with `}
        <span className="font-bold">{`8 years`}</span>
        {`of experience. I enjoy
        building `}
        <span className="italic">{`sites & apps`}</span>
        {`. My focus is `}
        <span className="underline">{`React (Next.js)`}</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href={"#contact"}
          className="group cursor-pointer bg-gray-900 text-white p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-800 active:scale-105 transition"
        >
          Contact me here
          <FaChevronRight className="opacity-75 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="cursor-pointer border border-black/10 bg-white p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition"
          download
          href="/dummy.pdf"
        >
          Download CV <FaDownload className="opacity-60" />
        </a>
        <a
          className="cursor-pointer text-gray-700 border border-black/10 bg-white p-4 flex items-center  rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  active:scale-105 transition"
          href="https://linkedin.com"
          target="_black"
        >
          <FaLinkedin />
        </a>
        <a
          className="cursor-pointer text-gray-700 border-black/10 bg-white p-4 flex items-center  rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  active:scale-105 transition"
          href="https://github.com"
          target="_black"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
