export default function ClosingSlide() {
    const benefits = [
        {
            category: 'Citizens',
            items: ['Convenience', 'Better interaction', 'Fast resolution'],
            icon: '👥',
        },
        {
            category: 'Officers',
            items: ['Preparation', 'Efficiency', 'Reduced pressure'],
            icon: '👔',
        },
        {
            category: 'Singapore',
            items: ['Smart Nation', 'Centricity', 'WOG collaboration'],
            icon: '🇸🇬',
        },
    ]

    const readiness = [
        'Prototype validated',
        'Risks managed',
        'Pilot ready',
        'National alignment',
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 md:px-8 md:py-16 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gov-sky/10 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-gov-gold/10 rounded-full blur-3xl opacity-50" />

            <div className="max-w-6xl w-full relative z-10">
                {/* Section label */}
                <div className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-gov-gold/20 text-gov-gold text-xs md:text-lg font-medium mb-4 md:mb-6 animate-fade-in">
                    Closing
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-8 md:mb-12 animate-fade-in-up">
                    A Better Way to Serve
                </h2>

                {/* Benefits grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
                    {benefits.map((item, index) => (
                        <div
                            key={index}
                            className={`glass-card p-4 md:p-6 animate-fade-in-up stagger-${index + 1}`}
                        >
                            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                                <span className="text-2xl md:text-3xl">{item.icon}</span>
                                <h3 className="font-semibold text-white text-base md:text-xl">{item.category}</h3>
                            </div>
                            <ul className="space-y-1.5 md:space-y-2">
                                {item.items.map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-2 text-white/80 text-xs md:text-lg leading-relaxed">
                                        <span className="text-green-400 mt-0.5 flex-shrink-0">•</span>
                                        <span className="flex-1">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Key takeaway */}
                <div className="glass-card p-4 md:p-6 mb-8 md:mb-12 animate-fade-in-up stagger-4 border-l-4 border-gov-gold">
                    <h3 className="text-sm md:text-xl font-semibold text-gov-gold mb-2 md:mb-3">Key Takeaway</h3>
                    <p className="text-white/90 text-sm md:text-xl leading-relaxed">
                        This platform <span className="font-semibold text-white">supports officers and empowers citizens</span>—enabling more meaningful engagement while preserving human accountability.
                    </p>
                </div>

                {/* Readiness */}
                {/* <div className="glass-card p-4 md:p-6 mb-8 md:mb-12 animate-fade-in-up stagger-5">
                    <h3 className="text-sm md:text-xl font-semibold text-white mb-3 md:mb-4">Ready for Your Decision</h3>
                    <div className="flex flex-wrap gap-2 md:gap-4">
                        {readiness.map((item, index) => (
                            <div key={index} className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-green-500/20">
                                <span className="text-green-400 text-xs md:text-lg">✅</span>
                                <span className="text-white/90 text-[10px] md:text-lg">{item}</span>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* Thank you */}
                <div className="text-center animate-fade-in-up stagger-6">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4 md:mb-6">
                        Thank You, Shanmugam Manikandan
                    </h2>
                    <p className="text-white/60 text-xs md:text-lg">
                        Pre-Engagement Platform | 2026
                    </p>
                </div>
            </div>
        </div>
    )
}
