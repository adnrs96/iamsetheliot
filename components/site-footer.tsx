import Link from "next/link"
import { Instagram, Linkedin, Facebook, ShoppingCart } from "lucide-react"

export function SiteFooter() {
    return (
        <footer className="bg-black/90 border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-white mb-2 tracking-tighter">SETH ELIOT SANTORO</h2>
                        <p className="text-gray-400">Intuitive Guide | Speaker | Psychic Bridge</p>
                    </div>

                    <div className="flex gap-6">
                        <Link href="#" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300">
                            <Instagram className="h-6 w-6" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300">
                            <Linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300">
                            <Facebook className="h-6 w-6" />
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300">
                            <ShoppingCart className="h-6 w-6" />
                            <span className="sr-only">Amazon</span>
                        </Link>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Seth Eliot Santoro. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
