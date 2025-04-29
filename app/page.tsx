"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";

export default function Home() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("home");

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isMenuOpen]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    return (
        <main className="overflow-x-hidden bg-white text-black dark:bg-black dark:text-white relative">
            {/* Navbar */}
            <nav
                className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 transition-all duration-300 ${
                    scrolled
                        ? "bg-white/80 dark:bg-black/80 backdrop-blur"
                        : "bg-transparent"
                }`}
            >
                <div className="text-2xl font-bold">Yanez Studio</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 text-sm font-semibold uppercase">
                    {["about", "work", "services", "contact"].map((id) => (
                        <Link
                            key={id}
                            href={`#${id}`}
                            className={`hover:text-gray-500 transition ${
                                activeSection === id ? "text-purple-500" : ""
                            }`}
                        >
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </Link>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-2xl focus:outline-none"
                >
                    ☰
                </button>
            </nav>

            {/* Mobile Slide Menu */}
            <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    x: isMenuOpen ? "0%" : "100%",
                }}
                transition={{ type: "tween", duration: 0.4 }}
                className="fixed top-0 right-0 w-3/4 h-full bg-white/70 dark:bg-black/70 backdrop-blur-lg z-[999] p-8 flex flex-col gap-8 text-black dark:text-white text-lg font-semibold md:hidden"
            >
                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="self-end text-3xl focus:outline-none"
                >
                    ✕
                </button>
                {["about", "work", "services", "contact"].map((id) => (
                    <Link
                        key={id}
                        href={`#${id}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {id.charAt(0).toUpperCase() + id.slice(1)}
                    </Link>
                ))}
            </motion.div>

            {/* Hero */}
            <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-8 pt-32 md:pt-0 relative overflow-hidden">
                {/* Blobs */}
                <div className="absolute top-[-150px] left-[-150px] w-[350px] h-[350px] blur-md bg-gradient-to-tr from-purple-400 via-pink-300 to-blue-300 rounded-full opacity-30 animate-float will-change-transform" />
                <div className="absolute top-[300px] right-[-100px] w-[300px] h-[300px] blur-md bg-gradient-to-tr from-blue-400 via-pink-400 to-purple-400 rounded-full opacity-30 animate-float-reverse will-change-transform" />

                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex-1 flex flex-col gap-6 text-center md:text-left z-10"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Capture Your
                        <br />
                        Perfect Shot
                    </h1>
                    <p className="text-lg md:text-xl max-w-md mx-auto md:mx-0">
                        Capturing the moment from above and on the ground,
                        blending art and storytelling into every frame.
                    </p>
                    <div>
                        <Link
                            href="#work"
                            className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition"
                        >
                            Explore My Work
                        </Link>
                    </div>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex-2 relative w-full h-[400px] md:h-[600px] z-10"
                >
                    <Image
                        src="/backgrounds/skyline.jpg"
                        alt="Skyline"
                        fill
                        className="object-cover rounded-2xl shadow-xl"
                        priority
                    />
                </motion.div>
            </section>

            {/* About / Work / Services / Contact sections remain same */}
            {/* I can paste those next if you want, just say the word */}
        </main>
    );
}
