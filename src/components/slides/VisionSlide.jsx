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
        <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16 relative">
            {/* Background decorations */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-gov-sky/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gov-gold/10 rounded-full blur-3xl" />

            <div className="max-w-6xl w-full relative z-10">
                {/* Section label */}
                <div className="inline-block px-4 py-2 rounded-full bg-gov-sky/20 text-gov-sky text-sm font-medium mb-6 animate-fade-in">
                    Slide 16 — Long-Term Vision
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 animate-fade-in-up">
                    Beyond the Pilot
                </h2>

                {/* Roadmap */}
                <div className="relative mb-16">
                    {/* Connection line */}
                    <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-gov-sky via-gov-gold to-green-500 rounded-full" />

                    <div className="grid md:grid-cols-3 gap-6">
                        {phases.map((item, index) => (
                            <div
                                key={index}
                                className={`glass-card p-6 relative animate-fade-in-up stagger-${index + 1} ${item.active ? 'ring-2 ring-gov-sky' : ''}`}
                            >
                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${item.active ? 'bg-gov-sky/30' : 'bg-white/10'}`}>
                                    <span className="text-3xl">{item.icon}</span>
                                </div>

                                <h3 className="font-semibold text-white text-lg mb-2">{item.phase}</h3>
                                <p className="text-gov-sky text-sm mb-3 font-medium">{item.duration}</p>
                                <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>

                                {item.active && (
                                    <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-gov-sky/20 text-gov-sky text-xs font-medium">
                                        Current
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Vision Statement */}
                <div className="glass-card p-8 text-center animate-fade-in-up stagger-4 animate-pulse-glow">
                    <h3 className="text-lg font-semibold text-gov-gold mb-4">Vision Statement</h3>
                    <blockquote className="text-2xl md:text-3xl text-white font-light italic">
                        "Every citizen engagement—prepared, personalised, and purposeful."
                    </blockquote>
                </div>
            </div>
        </div>
    )
}
