import Link from "next/link"
import { Instagram, Linkedin, Facebook, ShoppingCart } from "lucide-react"

export function SiteFooter() {
    return (
        <footer className="bg-secondary/30 border-t border-primary/10 pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <h2 className="text-2xl font-bold text-foreground mb-2 tracking-tight font-heading">SETH ELIOT SANTORO</h2>
                        <p className="text-muted-foreground font-light">Intuitive Guide | Speaker | Psychic Bridge</p>
                    </div>

                    <div className="flex gap-6">
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110">
                            <Instagram className="h-5 w-5" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110">
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110">
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110">
                            <ShoppingCart className="h-5 w-5" />
                            <span className="sr-only">Amazon</span>
                        </Link>
                    </div>
                </div>

                <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground/80 font-light">
                    <p>&copy; {new Date().getFullYear()} Seth Eliot Santoro. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
