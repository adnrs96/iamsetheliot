"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { href: "/about", label: "About" },
        { href: "/books", label: "Books" },
        { href: "/speaker", label: "Speaker" },
        { href: "/services", label: "Services" },
    ]

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
                ? "translate-y-0 opacity-100 bg-background/95 backdrop-blur-md border-b border-border/50 py-4 shadow-sm"
                : "-translate-y-4 opacity-0 pointer-events-none py-6"
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-foreground font-heading">
                    SETH ELIOT SANTORO
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button
                        asChild
                        className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tracking-wider shadow-none hover:shadow-md transition-all rounded-full px-6"
                    >
                        <Link href="/workwithme">Work With Me</Link>
                    </Button>
                </nav>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-foreground">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-background border-l border-border text-foreground">
                            <div className="flex flex-col space-y-8 mt-10">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="text-2xl font-bold hover:text-primary transition-colors font-heading"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <Button className="w-full bg-primary text-primary-foreground rounded-full" asChild>
                                    <Link href="/workwithme">Work With Me</Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
