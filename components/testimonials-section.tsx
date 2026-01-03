"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
    {
        quote: "Seth helped me find my voice in a corporate world that often tries to silence intuition. His guidance is grounded, practical, and deeply transformative.",
        author: "Sarah J.",
        role: "Executive Director",
    },
    {
        quote: "I was skeptical about 'psychic' guidance, but Seth's approach is refreshing. No crystal balls, just clear, actionable insight that shifted my entire business strategy.",
        author: "Mark T.",
        role: "Tech Entrepreneur",
    },
    {
        quote: "The S.M.I.L.E. method isn't just a catchy acronym; it's a lifeline. Seth gave me the tools to navigate grief and come out stronger on the other side.",
        author: "Elena R.",
        role: "HR Professional",
    },
]

export function TestimonialsSection() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-xs font-semibold tracking-widest uppercase mb-4 block">
                        Voices of Change
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading">
                        Trusted by Leaders
                    </h2>
                </motion.div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="border-none shadow-none bg-secondary/20 hover:bg-secondary/40 transition-colors duration-300 h-full">
                                        <CardContent className="flex flex-col items-start p-8 h-full">
                                            <Quote className="h-8 w-8 text-primary/40 mb-6" />
                                            <p className="text-muted-foreground text-lg leading-relaxed italic mb-8 flex-1">
                                                "{testimonial.quote}"
                                            </p>
                                            <div className="mt-auto">
                                                <p className="text-foreground font-semibold text-base">
                                                    {testimonial.author}
                                                </p>
                                                <p className="text-primary text-sm font-medium uppercase tracking-wider">
                                                    {testimonial.role}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="hidden md:block">
                        <CarouselPrevious className="border-primary/20 hover:bg-primary hover:text-white" />
                        <CarouselNext className="border-primary/20 hover:bg-primary hover:text-white" />
                    </div>
                </Carousel>
            </div>
        </section>
    )
}
