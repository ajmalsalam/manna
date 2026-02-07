"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="lg:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-700 focus:outline-none"
                aria-label="Toggle Menu"
            >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    )}
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl z-50 p-6 flex flex-col space-y-4">
                    <Link href="/" onClick={() => setIsOpen(false)} className="text-slate-700 font-bold hover:text-brand-500 text-lg">Home</Link>
                    <Link href="/tuition" onClick={() => setIsOpen(false)} className="text-slate-700 font-bold hover:text-brand-500 text-lg">Tuition</Link>
                    <Link href="/daycare" onClick={() => setIsOpen(false)} className="text-slate-700 font-bold hover:text-brand-500 text-lg">Daycare</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)} className="text-slate-700 font-bold hover:text-brand-500 text-lg">About</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)} className="text-slate-700 font-bold hover:text-brand-500 text-lg">Contact</Link>
                    <div className="pt-4 border-t border-slate-100">
                        <a href="tel:+919941455373" className="block w-full bg-brand-500 text-white text-center py-3 rounded-lg font-bold hover:bg-brand-600 transition-colors">Call Now</a>
                    </div>
                </div>
            )}
        </div>
    );
}
