import Image from "next/image";
import Link from "next/link";

export default function DaycarePage() {


    return (
        <div className="flex flex-col bg-slate-50 min-h-screen">
            {/* Header */}
            <section className="bg-white border-b border-slate-200 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Daycare & Wellness</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        A home away from home where professional care meets early-childhood development. Safe, loving, and engaging.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 mb-20">
                        <div className="flex flex-col justify-center order-2 md:order-1">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Nurturing Environment</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                We prioritize safety and hygiene above all else. Our facility is designed to be child-friendly, with designated zones for play, learning, and rest.
                            </p>
                            <div className="space-y-4">
                                <div className="flex gap-4 p-4 bg-white rounded-lg border border-slate-200">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold shrink-0">
                                        2-10
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Age Group</h4>
                                        <p className="text-sm text-slate-600">Years Old</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 bg-white rounded-lg border border-slate-200">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold shrink-0">
                                        10h
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Open Hours</h4>
                                        <p className="text-sm text-slate-600">8:30 AM - 6:30 PM (Mon-Sat)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg bg-slate-200 order-1 md:order-2">
                            <Image
                                src="/images/daycare.png"
                                alt="Daycare"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>



                    <div className="bg-emerald-600 text-white rounded-xl p-12 text-center">
                        <h2 className="text-3xl font-bold mb-4">Book a Campus Tour</h2>
                        <p className="text-emerald-100 mb-8 max-w-xl mx-auto">See our facilities firsthand and meet our caregivers.</p>
                        <Link href="/contact" className="inline-block px-8 py-3 bg-white text-emerald-600 font-bold rounded-lg hover:bg-slate-100 transition-colors">
                            Schedule Visit
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
