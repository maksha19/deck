export default function VisionSlide() {
    const phases = [
        {
            phase: 'Phase 1: Pilot',
            duration: '6 months',
            description: 'Single constituency. Validate impact and refine approach.',
            icon: '🚀',
            active: true,
        },
        {
            phase: 'Phase 2: Expansion',
            duration: 'Year 1–2',
            description: 'Scale to additional constituencies. Incorporate lessons learned. Enhance platform capabilities.',
            icon: '📈',
            active: false,
        },
        {
            phase: 'Phase 3: WOG',
            duration: 'Year 2–3',
            description: 'Adapt for other citizen engagement channels. Agency-specific implementations. Establish as national digital infrastructure.',
            icon: '🌐',
            active: false,
        },
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 md:px-8 md:py-16 relative">
            {/* Background decorations */}
            <div className="absolute top-1/4 right-0 w-64 h-64 md:w-96 md:h-96 bg-gov-sky/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 md:w-96 md:h-96 bg-gov-gold/10 rounded-full blur-3xl" />

            <div className="max-w-6xl w-full relative z-10">
                {/* Section label */}
                <div className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-gov-sky/20 text-gov-sky text-xs md:text-sm font-medium mb-4 md:mb-6 animate-fade-in">
                    Long-Term Vision
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-8 md:mb-12 animate-fade-in-up">
                    Beyond the Pilot
                </h2>

                {/* Roadmap */}
                <div className="relative mb-12 md:mb-16">
                    {/* Connection line */}
                    <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-gov-sky via-gov-gold to-green-500 rounded-full" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {phases.map((item, index) => (
                            <div
                                key={index}
                                className={`glass-card p-4 md:p-6 relative animate-fade-in-up stagger-${index + 1} ${item.active ? 'ring-2 ring-gov-sky' : ''}`}
                            >
                                {/* Icon */}
                                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 md:mb-4 ${item.active ? 'bg-gov-sky/30' : 'bg-white/10'}`}>
                                    <span className="text-2xl md:text-3xl">{item.icon}</span>
                                </div>

                                <h3 className="font-semibold text-white text-base md:text-lg mb-1 md:mb-2">{item.phase}</h3>
                                <p className="text-gov-sky text-xs md:text-sm mb-2 md:mb-3 font-medium">{item.duration}</p>
                                <p className="text-white/70 text-xs md:text-sm leading-relaxed">{item.description}</p>

                                {item.active && (
                                    <div className="absolute top-3 right-3 md:top-4 md:right-4 px-2 py-0.5 md:px-2 md:py-1 rounded-full bg-gov-sky/20 text-gov-sky text-[10px] md:text-xs font-medium">
                                        Current
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Vision Statement */}
                <div className="glass-card p-6 md:p-8 text-center animate-fade-in-up stagger-4 animate-pulse-glow">
                    <h3 className="text-base md:text-lg font-semibold text-gov-gold mb-3 md:mb-4">Vision Statement</h3>
                    <blockquote className="text-xl sm:text-2xl md:text-3xl text-white font-light italic">
                        "Every citizen engagement—prepared, personalised, and purposeful."
                    </blockquote>
                </div>
            </div>
        </div>
    )
}
