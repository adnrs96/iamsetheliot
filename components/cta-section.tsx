"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

export function CtaSection() {
    const [isMuted, setIsMuted] = useState(true)

    const toggleMute = () => {
        setIsMuted(!isMuted)
    }

    return (
        <section className="py-32 relative overflow-hidden bg-background">

            {/* Video Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" /> {/* Overlay for readability */}
                <iframe
                    key={isMuted ? "muted" : "unmuted"} // Key change forces re-render to apply mute param immediately
                    className="w-full h-[150%] md:h-full w-[150%] md:w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover min-w-full min-h-full pointer-events-none"
                    src={`https://www.youtube.com/embed/exd1_sRTsxg?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&loop=1&playlist=exd1_sRTsxg&playsinline=1&showinfo=0&rel=0`}
                    title="Calm Nature Background"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>

            {/* Sound Control Button */}
            <div className="absolute bottom-8 right-8 z-30">
                <Button
                    variant="outline"
                    size="icon"
                    className="bg-black/20 border-white/20 text-white hover:bg-black/40 hover:text-white rounded-full backdrop-blur-sm"
                    onClick={toggleMute}
                >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                    <span className="sr-only">{isMuted ? "Unmute Video" : "Mute Video"}</span>
                </Button>
            </div>

            {/* Decorative Lines */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-20" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-20" />

            <div className="container mx-auto px-4 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter mix-blend-overlay">
                        Ready to <span className="text-white">Evolve?</span>
                    </h2>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 font-light leading-relaxed drop-shadow-md">
                        It’s time to bridge the gap between where you are and where you are meant to be.
                        Let's unlock your true potential together.
                    </p>

                    <Button
                        size="lg"
                        className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-8 rounded-full shadow-lg transition-all duration-500 scale-100 hover:scale-105"
                        asChild
                    >
                        <Link href="/workwithme">Start Your Journey</Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
