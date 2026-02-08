import Link from "next/link";
import Image from "next/image";

export default function TuitionPage() {
    return (
        <div className="flex flex-col bg-slate-50 min-h-screen">
            {/* Header Section */}
            <section className="bg-white border-b border-slate-200 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Tuition & Academic Support</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Our bespoke tutoring programs are designed to bridge learning gaps and accelerate potential through evidence-based teaching methodologies.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 mb-20">
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg bg-slate-200">
                            <Image
                                src="/images/tuition.png"
                                alt="Classroom"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Our Tuition?</h2>
                            <ul className="space-y-4">
                                {[
                                    "Experienced Faculty with 12+ Years Average",
                                    "Small Batch Sizes (8-12 Students)",
                                    "Concept-First Approach",
                                    "Regular Progress Tracking",
                                    "Distinction-Level Results"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-brand-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm mb-20">
                        <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Programs Offered</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { grade: "Early Years (Pre-Nursery - UKG)", subjects: "Foundational Guidance, Phonics", icon: "🌱" },
                                { grade: "Primary & High School (1-10)", subjects: "All Subjects Covered", icon: "🚀" },
                                { grade: "Higher Secondary (+1 & +2)", subjects: "All Subjects & Streams", icon: "🎓" },
                                { grade: "Language Skills", subjects: "Spoken English, Writing", icon: "✍️" }
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-slate-50 rounded-lg border border-slate-100 hover:border-brand-300 transition-colors">
                                    <div className="text-3xl mb-4">{item.icon}</div>
                                    <h4 className="font-bold text-slate-900 mb-2">{item.grade}</h4>
                                    <p className="text-sm text-slate-600">{item.subjects}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-brand-600 text-white rounded-xl p-12 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Enroll?</h2>
                        <p className="text-brand-100 mb-8 max-w-xl mx-auto">Join us to give your child the academic advantage they deserve.</p>
                        <Link href="/contact" className="inline-block px-8 py-3 bg-white text-brand-600 font-bold rounded-lg hover:bg-slate-100 transition-colors">
                            Contact Us Today
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
