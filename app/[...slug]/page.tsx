import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export async function generateStaticParams() {
    return [
        { slug: ['about'] },
        { slug: ['books'] },
        { slug: ['services'] },
        { slug: ['speaker'] },
        { slug: ['workwithme'] },
    ]
}

export default async function CatchAllPage({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            <SiteHeader />
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen" />

                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 relative z-10">
                    Coming Soon
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg mb-8 relative z-10 font-light">
                    The <span className="text-primary font-medium">{slug ? slug.join(' / ') : 'page'}</span> is currently being updated with our new 2026 aesthetic.
                </p>
            </div>
            <SiteFooter />
        </main>
    )
}
