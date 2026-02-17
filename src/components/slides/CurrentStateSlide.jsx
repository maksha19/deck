export default function CurrentStateSlide() {
    const steps = [
        { label: 'Citizen arrives', icon: '🚶' },
        { label: 'Waits 30mins to 1 hour', icon: '⏰' },
        { label: '5–10 min session', icon: '💬' },
        { label: 'Officer documents', icon: '📝' },
        { label: 'Another 10-15 mins waiting', icon: '⏰' },
        { label: 'Meetup with Minister', icon: '👥' },
    ]

    const painPoints = [
        { icon: '⏰', text: 'Extended waiting with no preparation' },
        { icon: '📝', text: 'Limited time to explain complex situations' },
        { icon: '🔄', text: 'Multiple follow-ups to gather complete information' },
        { icon: '📅', text: 'Delayed case resolution' },
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
            <div className="max-w-6xl w-full">
                {/* Section label */}
                <div className="inline-block px-4 py-2 rounded-full bg-red-500/20 text-red-400 text-sm font-medium mb-6 animate-fade-in">
                    Slide 4 — Current State
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
                    The Citizen Journey Today
                </h2>
                <p className="text-xl text-white/60 mb-12 animate-fade-in-up stagger-1">
                    Session Day Experience
                </p>

                {/* Flow diagram */}
                <div className="glass-card p-8 mb-12 animate-fade-in-up stagger-2">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col md:flex-row items-center gap-4">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-16 h-16 rounded-xl bg-red-500/20 flex items-center justify-center shadow-lg">
                                        <span className="text-3xl">{step.icon}</span>
                                    </div>
                                    <span className="text-white/80 text-sm text-center max-w-24 font-medium leading-tight">{step.label}</span>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="text-red-500/50 transform rotate-90 md:rotate-0 my-2 md:my-0">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pain points */}
                <h3 className="text-xl font-semibold text-red-400 mb-6 animate-fade-in-up stagger-3">
                    Pain Points Highlighted
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                    {painPoints.map((point, index) => (
                        <div
                            key={index}
                            className={`glass-card p-6 flex items-start gap-4 border-l-4 border-red-500 animate-fade-in-up stagger-${index + 3}`}
                        >
                            <span className="text-2xl mt-0.5 flex-shrink-0">{point.icon}</span>
                            <span className="text-white/80 font-medium">{point.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
