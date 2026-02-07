import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";

const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: '--font-jakarta',
});

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: "Manna Study Centre | Excellence in Education & Care",
    description: "Providing high-quality tuition and safe daycare services for children. Your partner in childhood education and care at Manna Study Centre.",
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
            <body className="font-sans">
                {/* Header */}
                <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
                    <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-8">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center text-white font-bold transition-transform group-hover:rotate-6 shadow-lg shadow-brand-500/20">
                                M
                            </div>
                            <span className="text-xl font-extrabold tracking-tight text-slate-900">
                                Manna <span className="text-brand-500 font-medium">Study Centre</span>
                            </span>
                        </Link>

                        <nav className="hidden lg:flex items-center space-x-10 text-sm font-bold text-slate-600">
                            <Link href="/" className="transition-colors hover:text-brand-500">Home</Link>
                            <Link href="/tuition" className="transition-colors hover:text-brand-500">Tuition</Link>
                            <Link href="/daycare" className="transition-colors hover:text-brand-500">Daycare</Link>
                            <Link href="/about" className="transition-colors hover:text-brand-500">About Us</Link>
                            <Link href="/contact" className="transition-colors hover:text-brand-500">Contact</Link>
                        </nav>

                        <div className="flex items-center space-x-4">
                            <a href="tel:+919941455373" className="hidden sm:flex items-center space-x-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-all shadow-md active:scale-95">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                <span>Call Center</span>
                            </a>
                            <MobileMenu />
                        </div>
                    </div>
                </header>

                <main className="min-h-screen pt-24">
                    {children}
                </main>

                {/* Footer */}
                <footer className="bg-slate-50 text-slate-600 pt-16 pb-8 border-t border-slate-200">
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
                            <div className="text-center md:text-left">
                                <Link href="/" className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                                    <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center text-white font-bold">M</div>
                                    <span className="text-xl font-extrabold tracking-tight text-slate-900">Manna Study Centre</span>
                                </Link>
                                <p className="text-slate-500 max-w-sm text-sm">
                                    Nurturing the next generation through academic excellence and compassionate care.
                                </p>
                            </div>
                            <div className="flex gap-8 text-sm font-medium">
                                <Link href="/tuition" className="hover:text-brand-500 transition-colors">Tuition</Link>
                                <Link href="/daycare" className="hover:text-brand-500 transition-colors">Daycare</Link>
                                <Link href="/about" className="hover:text-brand-500 transition-colors">About</Link>
                                <Link href="/contact" className="hover:text-brand-500 transition-colors">Contact</Link>
                            </div>
                        </div>
                        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
                            <p>© {new Date().getFullYear()} Manna Study Centre. All rights reserved.</p>
                            <p> chennaituition@gmail.com | +91 99414 55373 </p>
                            <p className="mt-2 md:mt-0">TRA-2, TOG Rd, South Kalamassery, Kochi</p>
                        </div>
                    </div>
                </footer>

                {/* Floating Call-to-actions */}
                <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-50">
                    <a
                        href="https://wa.me/919941455373"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center w-16 h-16 bg-emerald-500 text-white rounded-2xl shadow-2xl hover:bg-emerald-600 transition-all hover:scale-110 active:scale-95"
                        aria-label="Chat on WhatsApp"
                    >
                        <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.744-2.834-2.512-2.922-2.628-.088-.116-.719-.955-.719-1.819 0-.864.444-1.289.605-1.457.144-.15.312-.191.417-.191.104 0 .207.001.299.006.103.004.241-.039.377.291.144.348.496 1.21.541 1.3.045.09.075.195.015.315-.059.12-.09.195-.181.299-.091.104-.199.233-.284.314-.099.098-.203.204-.087.404.116.2.518.854 1.112 1.384.767.683 1.41.895 1.612.996.199.103.315.088.432-.05.116-.137.502-.584.636-.784.134-.199.268-.168.452-.102.184.066 1.168.552 1.372.654.204.101.341.15.39.234.05.084.05.485-.094.89zM12 2C6.477 2 2 6.477 2 12c0 1.891.528 3.655 1.446 5.161L2 22l4.991-1.313C8.421 21.587 10.133 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.724 0-3.32-.483-4.673-1.319l-.335-.207-2.964.78.794-2.899-.226-.361C3.783 14.629 3.273 13.365 3.273 12c0-4.812 3.915-8.727 8.727-8.727 4.812 0 8.727 3.915 8.727 8.727 0 4.812-3.915 8.727-8.727 8.727z"></path>
                        </svg>
                    </a>
                </div>
            </body>
        </html >
    );
}
