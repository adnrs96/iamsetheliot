"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
    return (
        <section className="relative min-h-[95vh] flex items-center bg-background overflow-hidden relative">
            {/* Soft Organic Background Shape */}
            <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-secondary/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-60" />

            <div className="container-wide grid md:grid-cols-12 gap-12 items-center relative z-10 w-full mb-12">

                {/* Text Content - Spacious Editorial Layout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="md:col-span-6 flex flex-col justify-center space-y-8 pl-4 lg:pl-12"
                >
                    <div className="space-y-4">
                        <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">Intuitive Leadership</span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] text-balance">
                            Release Your Truth. <br />
                            <span className="text-primary italic font-light">Lead to Serve.</span>
                        </h1>
                    </div>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed font-light">
                        I help corporate leaders and entrepreneurs bridge the gap between resilience and intuition. Release what holds you back. Lead with quiet confidence.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 pt-4">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-10 py-7 rounded-full transition-all shadow-sm hover:shadow-md tracking-wide" asChild>
                            <Link href="/workwithme">Start Here</Link>
                        </Button>
                        <Button size="lg" variant="ghost" className="text-foreground hover:bg-secondary/30 text-base px-8 py-7 rounded-full transition-all" asChild>
                            <Link href="/about">My Story</Link>
                        </Button>
                    </div>
                </motion.div>

                {/* Editorial Portrait */}
                <div className="md:col-span-6 relative h-[600px] md:h-[85vh] w-full flex items-end justify-center md:justify-end">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        className="relative h-full w-full max-w-[600px] overflow-hidden"
                    >
                        <Image
                            src="/seth-hero-calm.png"
                            alt="Seth Eliot Santoro - Calm Authority"
                            fill
                            className="object-cover object-top rounded-t-[200px] md:rounded-t-none md:rounded-tl-[300px] shadow-none"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
