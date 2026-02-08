import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-slate-50 py-20 md:py-32">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                            Excellence in <span className="text-brand-500">Education</span> & <span className="text-emerald-500">Care</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                            Manna Study Centre provides expert tuition and nurturing daycare services.
                            We focus on building strong foundations and a safe environment for your child's growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact" className="px-8 py-3 bg-brand-500 text-white font-bold rounded-lg hover:bg-brand-600 transition-colors text-center">
                                Book a Consultation
                            </Link>
                            <Link href="/tuition" className="px-8 py-3 bg-white border border-slate-300 text-slate-700 font-bold rounded-lg hover:border-brand-500 hover:text-brand-500 transition-colors text-center">
                                Our Programs
                            </Link>
                        </div>
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/images/tuition.png"
                            alt="Manna Study Centre"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Services</h2>
                        <p className="text-slate-600">Tailored solutions to meet the educational and care needs of your family.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-brand-200 transition-colors">
                            <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">Academic Tuition</h3>
                            <p className="text-slate-600 mb-6">
                                Experienced tutors providing personalized attention to help students master their subjects and achieve academic success.
                            </p>
                            <Link href="/tuition" className="text-brand-600 font-semibold hover:text-brand-700 flex items-center gap-1">
                                Learn more <span>&rarr;</span>
                            </Link>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-brand-200 transition-colors">
                            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">Nurture Daycare</h3>
                            <p className="text-slate-600 mb-6">
                                A safe, engaging, and hygienic environment where children can play, learn, and grow under professional supervision.
                            </p>
                            <Link href="/daycare" className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center gap-1">
                                Learn more <span>&rarr;</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Parents Trust Manna</h2>
                            <ul className="space-y-6">
                                {[
                                    { title: "Safety First", desc: "Secure entry systems and vigilant supervision." },
                                    { title: "Qualified Staff", desc: "Trained teachers and certified caregivers." },
                                    { title: "Holistic Approach", desc: "Focus on both academic and emotional development." },
                                    { title: "Transparent Updates", desc: "Regular feedback on your child's progress." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 mt-1">
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                                            <p className="text-slate-600 text-sm">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-slate-200">
                            <Image
                                src="/images/daycare.png"
                                alt="Why Choose Us"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Simple Testimonials */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">What Parents Say</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="p-8 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="flex items-center gap-1 mb-4 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                ))}
                            </div>
                            <p className="text-slate-700 italic mb-6">"My daughter has improved so much in her studies. The teachers are very dedicated."</p>
                            <p className="font-bold text-slate-900">- Sarah M.</p>
                        </div>
                        <div className="p-8 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="flex items-center gap-1 mb-4 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                ))}
                            </div>
                            <p className="text-slate-700 italic mb-6">"Very clean and safe environment for daycare. I feel at peace leaving my son here."</p>
                            <p className="font-bold text-slate-900">- David L.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-brand-600 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Join Manna Study Centre?</h2>
                    <p className="text-blue-100 mb-10 max-w-xl mx-auto">Contact us today to learn more about our admissions and available slots.</p>
                    <Link href="/contact" className="inline-block px-8 py-4 bg-white text-brand-600 font-bold rounded-lg hover:bg-slate-100 transition-colors shadow-lg">
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
}
