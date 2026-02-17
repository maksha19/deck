export default function ChallengeSlide() {
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

    const citizenChallenges = [
        { challenge: 'Long waiting times', impact: 'Inconvenience, especially for seniors & families', icon: '⏰' },
        { challenge: 'Limited time to explain', impact: 'Complex cases may be overlooked', icon: '⏳' },
        { challenge: 'Anxiety & uncertainty', impact: 'Stressful experience for vulnerable groups', icon: '😰' },
        { challenge: 'One chance to explain', impact: 'Difficult for non-native speakers', icon: '🗣️' },
    ]

    const officerChallenges = [
        { challenge: 'No advance case information', impact: 'Reactive handling', icon: '📋' },
        { challenge: 'Unable to pre-coordinate', impact: 'Delayed resolution', icon: '🔄' },
        { challenge: 'Documentation during session', impact: 'Split attention', icon: '📝' },
        { challenge: 'Follow-ups required', impact: 'Extended case timelines', icon: '📅' },
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
            <div className="max-w-7xl w-full">
                {/* Section label */}
                <div className="inline-block px-4 py-2 rounded-full bg-red-500/20 text-red-400 text-sm font-medium mb-6 animate-fade-in">
                    Slide 3 — The Challenge Today
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

                {/* Title */}
                <h4 className="text-4xl md:text-5xl font-bold text-white mb-12 animate-fade-in-up">
                    Current Pain Points
                </h4>

                {/* Split layout */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Citizens column */}
                    <div className="animate-slide-left">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gov-sky/30 flex items-center justify-center">
                                <span className="text-2xl">👥</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-white">For Citizens</h3>
                        </div>
                        <div className="space-y-4">
                            {citizenChallenges.map((item, index) => (
                                <div
                                    key={index}
                                    className="glass-card p-6 flex items-start gap-4 hover:bg-white/10 transition-all hover:scale-105"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                                        <span className="text-3xl">{item.icon}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-semibold text-white mb-1.5">{item.challenge}</h4>
                                        <p className="text-white/70 text-sm leading-relaxed">{item.impact}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Officers column */}
                    <div className="animate-slide-right">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gov-gold/30 flex items-center justify-center">
                                <span className="text-2xl">👔</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-white">For Officers</h3>
                        </div>
                        <div className="space-y-4">
                            {officerChallenges.map((item, index) => (
                                <div
                                    key={index}
                                    className="glass-card p-6 flex items-start gap-4 hover:bg-white/10 transition-all hover:scale-105"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                                        <span className="text-3xl">{item.icon}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-semibold text-white mb-1.5">{item.challenge}</h4>
                                        <p className="text-white/70 text-sm leading-relaxed">{item.impact}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
