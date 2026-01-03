"use client"

import { motion } from "framer-motion"
import { ArrowRight, Brain, Heart, Sparkles, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
    {
        title: "Intuitive Leader",
        description: "Eight steps to become a more intuitive leader and take ownership of your life.",
        icon: Brain,
        className: "md:col-span-2 md:row-span-2",
    },
    {
        title: "S.M.I.L.E. Method",
        description: "Healing from current losses or traumas. Smile... You've Got This.",
        icon: Heart,
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "G.R.A.C.E. Method",
        description: "Healing your past to align with your true purpose (From Grief to Grace).",
        icon: Sparkles,
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Psychic Bridge",
        description: "Bridging the gap between pain and resilience through intuitive guidance.",
        icon: Zap,
        className: "md:col-span-2 md:row-span-1",
    },
]

export function FeaturesSection() {
    return (
        <section className="py-32 bg-[#EAE2D6]/30 relative overflow-hidden">
            <div className="container-wide relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-primary text-xs font-semibold tracking-widest uppercase mb-4 block">Our Methodology</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-primary">
                        Empower Your <span className="italic text-primary">Soul</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        Discover the tools and methods designed to help you release your truth and lead with intuition.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                            className={`${feature.className} group`}
                        >
                            <Card className="h-full bg-card border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[1.5rem] p-4 group-hover:-translate-y-1">
                                <CardHeader className="pb-2">
                                    <div className="p-3 bg-secondary/30 w-fit rounded-full mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-2xl text-foreground font-serif">
                                        {feature.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-muted-foreground text-base leading-relaxed mb-6">
                                        {feature.description}
                                    </CardDescription>
                                    <div className="flex items-center text-primary font-medium text-sm tracking-wide opacity-60 group-hover:opacity-100 transition-opacity">
                                        Read More <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
