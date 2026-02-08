
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="flex flex-col bg-slate-50 min-h-screen">
            {/* Header */}
            <section className="bg-white border-b border-slate-200 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">About Manna Study Centre</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Leading the way in personalized education and childcare for over 10 years.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg bg-slate-200">
                            <Image
                                src="/images/daycare.png"
                                alt="About Us"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Founded on Trust</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Manna Study Centre was founded by a team of passionate educators who realized that parents needed a reliable, single destination for both academic excellence and supervised care.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                We started with a small batch of 5 students and have grown into a community of hundreds of happy families. Our mission remains simple: to treat every child as our own.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                            <p className="text-slate-600">
                                To provide affordable, high-quality educational and child-care services that empower children to reach their full potential in a safe environment.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                            <p className="text-slate-600">
                                To become the most trusted educational hub for parents, setting new standards in child development and academic success.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 md:p-12 mb-20 shadow-sm border border-slate-200">
                        <div className="flex flex-col md:flex-row items-center gap-10">
                            <div className="md:w-1/3">
                                <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-slate-100 shadow-md">
                                    {/* Replace src with actual founder image later if available */}
                                    <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 text-5xl font-bold">
                                        F
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-2/3 text-center md:text-left">
                                <h2 className="text-3xl font-bold text-slate-900 mb-2">Meet the Founder</h2>
                                <h3 className="text-xl text-brand-500 font-bold mb-6">Mrs. Founder Name</h3>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    "I started Manna Study Centre with a simple belief: every child deserves a space where they are not just taught, but understood. Over the last decade, we have strived to create an environment that blends academic rigor with the warmth of a second home."
                                </p>
                                <div className="inline-flex items-center gap-2 text-slate-900 font-bold">
                                    <span>Educationalist & Child Care Expert</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12">Our Core Values</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "Integrity", icon: "🤝" },
                                { title: "Excellence", icon: "⭐" },
                                { title: "Empathy", icon: "❤️" },
                                { title: "Safety", icon: "🛡️" }
                            ].map((value, i) => (
                                <div key={i} className="p-6 bg-white rounded-lg border border-slate-200 shadow-sm">
                                    <div className="text-4xl mb-4">{value.icon}</div>
                                    <h4 className="font-bold text-slate-900">{value.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
