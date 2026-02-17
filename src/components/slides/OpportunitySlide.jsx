export default function OpportunitySlide() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16 relative">
            <div className="max-w-7xl w-full">
                {/* Section label */}
                <div className="inline-block px-4 py-2 rounded-full bg-gov-sky/20 text-gov-sky text-sm font-medium mb-6 animate-fade-in">
                    Slide 2 — The Opportunity
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Content */}
                    <div>
                        {/* Title */}
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in-up">
                            Reimagining How We Serve Citizens
                        </h2>

                        {/* Quote */}
                        <div className="glass-card p-8 mb-8 animate-fade-in-up stagger-1">
                            <blockquote className="quote-block text-xl md:text-2xl text-white/90">
                                "What if residents could share their story before they arrive—so officers can be ready, and meetings can be meaningful?"
                            </blockquote>
                        </div>

                        {/* Key points */}
                        <div className="space-y-4">
                            <div className="glass-card p-6 animate-fade-in-up stagger-2 hover:scale-105 transition-transform flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gov-sky/20 flex items-center justify-center">
                                    <span className="text-2xl">🏛️</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-semibold text-white mb-1.5">Cornerstone of Governance</h3>
                                    <p className="text-white/70 text-sm leading-relaxed">Meet-the-People Sessions are a cornerstone of Singapore's participatory governance</p>
                                </div>
                            </div>

                            <div className="glass-card p-6 animate-fade-in-up stagger-3 hover:scale-105 transition-transform flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gov-gold/20 flex items-center justify-center">
                                    <span className="text-2xl">🔧</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-semibold text-white mb-1.5">Technology Enhancement</h3>
                                    <p className="text-white/70 text-sm leading-relaxed">Technology can enhance—not replace—this trusted channel</p>
                                </div>
                            </div>

                            <div className="glass-card p-6 animate-fade-in-up stagger-4 hover:scale-105 transition-transform flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <span className="text-2xl">⚡</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-semibold text-white mb-1.5">Better Service Delivery</h3>
                                    <p className="text-white/70 text-sm leading-relaxed">Opportunity to deliver faster, more accessible, and better-prepared service</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className=" stagger-2">
                        <div className="slide-image">
                            <img
                                src="/images/citizens_digital_engagement.png"
                                alt="Citizens engaging with digital government platform"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
