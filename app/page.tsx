"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
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
                <div className="hidden md:flex space-x-8 text-sm font-semibold uppercase">
                    <Link
                        href="#about"
                        className="hover:text-gray-500 transition"
                    >
                        About
                    </Link>
                    <Link
                        href="#work"
                        className="hover:text-gray-500 transition"
                    >
                        Work
                    </Link>
                    <Link
                        href="#services"
                        className="hover:text-gray-500 transition"
                    >
                        Services
                    </Link>
                    <Link
                        href="#contact"
                        className="hover:text-gray-500 transition"
                    >
                        Contact
                    </Link>
                </div>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-8 pt-32 md:pt-0 relative overflow-hidden">
                {/* Abstract Background Blur */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.3, scale: 1 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "mirror",
                    }}
                    className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-tr from-purple-400 via-pink-300 to-blue-300 rounded-full blur-3xl opacity-50"
                />

                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex-1 flex flex-col gap-6 text-center md:text-left z-10"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Elevate Your Brand
                        <br />
                        Through Creative Vision
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
                    className="flex-1 relative w-full h-[400px] md:h-[600px] z-10"
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

            {/* About */}
            <section
                id="about"
                className="min-h-[60vh] flex flex-col justify-center items-center text-center px-8 py-20 relative overflow-hidden"
            >
                {/* Abstract wave */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-200 to-pink-200 blur-2xl"
                />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-3xl z-10"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        About Me
                    </h2>
                    <p className="text-base md:text-lg">
                        I’m a solo creator passionate about capturing the
                        moments that matter — whether it’s the sweeping beauty
                        of a luxury property, the adrenaline of a drift
                        competition, or the personal joy of a graduation. I
                        bring cinematic storytelling to life through drone and
                        handheld videography.
                    </p>
                </motion.div>
            </section>

            {/* Featured Work */}
            <section
                id="work"
                className="px-8 py-20 bg-gray-100 dark:bg-neutral-900 relative overflow-hidden"
            >
                {/* Floating Blobs */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 2 }}
                    className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 rounded-full blur-2xl"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 2 }}
                    className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] bg-gradient-to-tr from-blue-200 via-purple-300 to-pink-300 rounded-full blur-2xl"
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative z-10"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
                        Featured Work
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: "Drift", image: "/backgrounds/drift.jpg" },
                            {
                                title: "Supercar",
                                image: "/backgrounds/supercar.jpg",
                            },
                            {
                                title: "Graduation",
                                image: "/backgrounds/grad.jpg",
                            },
                            { title: "DJ Promo", image: "/backgrounds/dj.jpg" },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="relative group rounded-2xl overflow-hidden shadow-lg"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={800}
                                    height={600}
                                    className="object-cover w-full h-80 group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-4 text-xl font-bold">
                                    {item.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Services */}
            <section
                id="services"
                className="flex flex-col md:flex-row items-center justify-center gap-8 px-8 py-20 relative overflow-hidden"
            >
                {/* Color blob */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.2, scale: 1 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "mirror",
                    }}
                    className="absolute left-[-150px] top-1/2 w-[300px] h-[300px] bg-gradient-to-tr from-purple-300 via-blue-300 to-pink-300 rounded-full blur-2xl"
                />

                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex-1 text-center md:text-left z-10"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Services
                    </h2>
                    <ul className="space-y-4 text-base md:text-lg">
                        <li>Drone Cinematography</li>
                        <li>Luxury Real Estate Shoots</li>
                        <li>Creative Event Coverage</li>
                        <li>Personal Portraits & Graduations</li>
                        <li>Club & DJ Promos</li>
                    </ul>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex-1 relative w-full h-[400px] md:h-[500px] z-10"
                >
                    <Image
                        src="/backgrounds/infiniti.jpg"
                        alt="Services Image"
                        fill
                        className="object-cover rounded-2xl shadow-xl"
                    />
                </motion.div>
            </section>

            {/* Contact */}
            <section
                id="contact"
                className="min-h-[50vh] flex flex-col justify-center items-center text-center px-8 py-20 bg-black text-white relative overflow-hidden"
            >
                {/* Gradient Fade */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ duration: 2 }}
                    className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-10"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative z-10 max-w-2xl"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">{`Let's Work Together`}</h2>
                    <p className="text-base md:text-lg mb-8">
                        {`Ready to bring your project to life? Reach out and let's create something unforgettable.`}
                    </p>
                    <Link
                        href="mailto:youremail@example.com"
                        className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold text-sm hover:bg-gray-200 transition"
                    >
                        Contact Me
                    </Link>
                </motion.div>
            </section>
        </main>
    );
}
