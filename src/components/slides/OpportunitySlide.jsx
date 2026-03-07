export default function OpportunitySlide() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 md:px-8 md:py-16 relative">
            <div className="max-w-7xl w-full">
                {/* Section label */}
                <div className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-gov-sky/20 text-gov-sky text-xs md:text-lg font-medium mb-4 md:mb-6 animate-fade-in">
                    The Opportunity
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Content */}
                    <div className="order-2 lg:order-1">
                        {/* Title */}
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8 animate-fade-in-up">
                            Reimagining How We Serve Citizens
                        </h2>

                        {/* Quote */}
                        <div className="glass-card p-4 md:p-8 mb-6 md:mb-8 animate-fade-in-up stagger-1">
                            <blockquote className="quote-block text-base sm:text-lg md:text-2xl text-white/90">
                                "What if residents could share their story before they arrive—so officers can be ready, and meetings can deliver faster?"
                            </blockquote>
                        </div>

                        {/* Key points */}
                        <div className="space-y-3 md:space-y-4">
                            <div className="glass-card p-4 md:p-6 animate-fade-in-up stagger-2 hover:scale-105 transition-transform flex items-start gap-3 md:gap-4">
                                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gov-sky/20 flex items-center justify-center">
                                    <span className="text-xl md:text-2xl">🏛️</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-base md:text-xl font-semibold text-white mb-1">Cornerstone</h3>
                                    <p className="text-white/70 text-xs md:text-lg leading-relaxed">MPS is a cornerstone of Singapore's participatory governance</p>
                                </div>
                            </div>

                            <div className="glass-card p-4 md:p-6 animate-fade-in-up stagger-3 hover:scale-105 transition-transform flex items-start gap-3 md:gap-4">
                                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gov-gold/20 flex items-center justify-center">
                                    <span className="text-xl md:text-2xl">🔧</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-base md:text-xl font-semibold text-white mb-1">Enhancement</h3>
                                    <p className="text-white/70 text-xs md:text-lg leading-relaxed">Technology can enhance—not replace—this trusted channel</p>
                                </div>
                            </div>

                            <div className="glass-card p-4 md:p-6 animate-fade-in-up stagger-4 hover:scale-105 transition-transform flex items-start gap-3 md:gap-4">
                                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <span className="text-xl md:text-2xl">⚡</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-base md:text-xl font-semibold text-white mb-1">Better Service</h3>
                                    <p className="text-white/70 text-xs md:text-lg leading-relaxed">Opportunity to deliver faster, more accessible, and prepared service</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="order-1 lg:order-2 animate-fade-in-up stagger-2 mb-6 lg:mb-0">
                        <div className="slide-image">
                            <img
                                src="/deck/images/citizens_digital_engagement.png"
                                alt="Citizens engaging with digital government platform"
                                className="w-full h-auto max-w-lg mx-auto lg:max-w-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
