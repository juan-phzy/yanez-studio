"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function HomePage() {
    const heroBlob = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            heroBlob.current,
            { y: -100, x: -50 },
            {
                y: 100,
                x: 50,
                scrollTrigger: {
                    trigger: heroBlob.current,
                    start: "top top",
                    end: "bottom center",
                    scrub: true,
                    markers: true,
                },
            }
        );

        ScrollTrigger.refresh();
    }, []);

    return (
        <main className="relative min-h-[600px] min-w-[400px] overflow-x-hidden">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-6 bg-white/80 dark:bg-black/80 backdrop-blur-lg z-50">
                <div className="text-xl font-bold">Yanez Studio</div>
                <div className="hidden md:flex gap-6 text-sm font-semibold">
                    <Link href="#home">Home</Link>
                    <Link href="#services">Services</Link>
                    <Link href="#about">About</Link>
                    <Link href="#portfolio">Portfolio</Link>
                    <Link href="#contact">Contact</Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section
                id="home"
                className="h-screen flex flex-col justify-center items-center relative bg-black text-white"
            >
                <div
                    ref={heroBlob}
                    className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-purple-400 via-pink-300 to-blue-400 rounded-full blur-3xl opacity-30"
                />
                <h1 className="text-4xl md:text-6xl font-extrabold text-center z-10">
                    Capture Your World
                </h1>
                <p className="text-center max-w-md mt-4 text-lg z-10">
                    Luxury aerial and ground photography & videography for
                    unforgettable moments.
                </p>
            </section>

            {/* Services Section */}
            <section
                id="services"
                className="min-h-[600px] bg-gray-100 dark:bg-neutral-900 flex flex-col justify-center items-center px-8 text-center"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Our Services
                </h2>
                <p className="max-w-2xl mb-10">
                    From cinematic drone shots to stunning event captures, we
                    bring your vision to life with world-class artistry and
                    precision.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-md">
                        Luxury Real Estate
                    </div>
                    <div className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-md">
                        Events & Special Occasions
                    </div>
                    <div className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-md">
                        Creative Commercials
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section
                id="about"
                className="min-h-[600px] bg-white dark:bg-black flex flex-col justify-center items-center px-8 text-center relative overflow-hidden"
            >
                <div className="absolute top-[-200px] right-[-200px] w-[400px] h-[400px] bg-gradient-to-br from-blue-400 via-pink-300 to-purple-400 rounded-full blur-3xl opacity-20" />
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    About Us
                </h2>
                <p className="max-w-2xl">
                    Yanez Studio is your premier partner for capturing the
                    moments that matter most — blending passion, creativity, and
                    technology into visual masterpieces that tell your story
                    from new heights.
                </p>
            </section>

            {/* Footer */}
            <footer
                id="contact"
                className="flex flex-col md:flex-row justify-between items-center px-8 py-6 bg-black text-white"
            >
                <div className="text-center md:text-left">
                    &copy; {new Date().getFullYear()} Yanez Studio. All Rights
                    Reserved.
                </div>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <Link href="#" className="hover:text-purple-300">
                        Instagram
                    </Link>
                    <Link href="#" className="hover:text-purple-300">
                        Facebook
                    </Link>
                    <Link href="#" className="hover:text-purple-300">
                        YouTube
                    </Link>
                </div>
            </footer>
        </main>
    );
}
