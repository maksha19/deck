export default function ClosingSlide() {
    const benefits = [
        {
            category: 'For Citizens',
            items: ['Convenience & accessibility', 'More meaningful interactions', 'Faster resolution'],
            icon: '👥',
        },
        {
            category: 'For Officers',
            items: ['Better preparation', 'Improved efficiency', 'Reduced workload pressure'],
            icon: '👔',
        },
        {
            category: 'For Singapore',
            items: ['Smart Nation leadership', 'Citizen-centric governance', 'WOG collaboration'],
            icon: '🇸🇬',
        },
    ]

    const readiness = [
        'Prototype validated',
        'Risks assessed and mitigated',
        'Pilot plan ready',
        'Aligned with national priorities',
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gov-sky/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gov-gold/10 rounded-full blur-3xl" />

            <div className="max-w-6xl w-full relative z-10">
                {/* Section label */}
                <div className="inline-block px-4 py-2 rounded-full bg-gov-gold/20 text-gov-gold text-sm font-medium mb-6 animate-fade-in">
                    Slide 17 — Closing
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 animate-fade-in-up">
                    A Better Way to Serve
                </h2>

                {/* Benefits table */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {benefits.map((item, index) => (
                        <div
                            key={index}
                            className={`glass-card p-6 animate-fade-in-up stagger-${index + 1}`}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl">{item.icon}</span>
                                <h3 className="font-semibold text-white text-lg">{item.category}</h3>
                            </div>
                            <ul className="space-y-2">
                                {item.items.map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-2 text-white/80 text-sm leading-relaxed">
                                        <span className="text-green-400 mt-0.5 flex-shrink-0">•</span>
                                        <span className="flex-1">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Key takeaway */}
                <div className="glass-card p-6 mb-12 animate-fade-in-up stagger-4 border-l-4 border-gov-gold">
                    <h3 className="text-lg font-semibold text-gov-gold mb-3">Key Takeaway</h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                        This platform <span className="font-semibold text-white">supports officers and empowers citizens</span>—enabling more meaningful engagement while preserving human judgement and accountability.
                    </p>
                </div>

                {/* Readiness */}
                <div className="glass-card p-6 mb-12 animate-fade-in-up stagger-5">
                    <h3 className="text-lg font-semibold text-white mb-4">Ready for Your Decision</h3>
                    <div className="flex flex-wrap gap-4">
                        {readiness.map((item, index) => (
                            <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20">
                                <span className="text-green-400">✅</span>
                                <span className="text-white/90 text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Thank you */}
                <div className="text-center animate-fade-in-up stagger-6">
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                        Thank You
                    </h2>
                    <p className="text-white/60">
                        Digital Pre-Engagement Platform | January 2026
                    </p>
                </div>
            </div>
        </div>
    )
}
