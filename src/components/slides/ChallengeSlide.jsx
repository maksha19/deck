export default function ChallengeSlide() {
    const steps = [
        { label: 'Citizen arrives', icon: '🚶' },
        { label: 'Waits 20mins-40mins', icon: '⏰' },
        { label: '5–10mins session', icon: '💬' },
        { label: 'Officer docs', icon: '📝' },
        { label: '10-15mins waiting', icon: '⏰' },
        { label: 'Minister Meetup', icon: '👥' },
    ]

    const citizenChallenges = [
        { challenge: 'Long waiting times', impact: 'Inconvenience for seniors & families', icon: '⏰' },
        { challenge: 'Limited time to explain', impact: 'Complex cases may be overlooked', icon: '⏳' },
        { challenge: 'Anxiety & uncertainty', impact: 'Stressful experience for vulnerable groups', icon: '😰' },
        { challenge: 'One chance to explain', impact: 'Difficult for non-native speakers', icon: '🗣️' },
    ]

    const officerChallenges = [
        { challenge: 'No advance case info', impact: 'Reactive handling', icon: '📋' },
        { challenge: 'Unable to pre-coordinate', impact: 'Delayed resolution', icon: '🔄' },
        { challenge: 'Documentation during session', impact: 'Split attention', icon: '📝' },
        { challenge: 'Follow-ups required', impact: 'Extended case timelines', icon: '📅' },
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 md:px-8 md:py-16">
            <div className="max-w-7xl w-full">
                {/* Section label */}
                <div className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-red-500/20 text-red-400 text-xs md:text-lg font-medium mb-4 md:mb-6 animate-fade-in">
                    The Challenge Today
                </div>
                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4 animate-fade-in-up">
                    The Citizen Journey Today
                </h2>
                <p className="text-base md:text-xl text-white/60 mb-8 md:mb-12 animate-fade-in-up stagger-1">
                    Session Day Experience
                </p>

                {/* Flow diagram */}
                <div className="glass-card p-4 md:p-8 mb-8 md:mb-12 animate-fade-in-up stagger-2">
                    <div className="grid grid-cols-3 md:flex md:flex-row items-start md:items-center justify-items-center md:justify-center gap-y-8 gap-x-2 md:gap-6">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-row items-center gap-2 md:gap-4">
                                <div className="flex flex-col items-center gap-1 md:gap-2">
                                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl bg-red-500/20 flex items-center justify-center shadow-lg">
                                        <span className="text-xl md:text-3xl">{step.icon}</span>
                                    </div>
                                    <span className="text-white/80 text-[10px] md:text-lg text-center max-w-[60px] md:max-w-24 font-medium leading-tight">{step.label}</span>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className={`text-red-500/50 my-auto ${index === 2 ? 'hidden md:block' : ''}`}>
                                        <svg className="w-4 h-4 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Title */}
                <h4 className="text-2xl md:text-5xl font-bold text-white mb-6 md:mb-12 animate-fade-in-up">
                    Current Pain Points
                </h4>

                {/* Split layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Citizens column */}
                    <div className="animate-slide-left">
                        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gov-sky/30 flex items-center justify-center">
                                <span className="text-xl md:text-2xl">👥</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white">For Citizens</h3>
                        </div>
                        <div className="space-y-3 md:space-y-4">
                            {citizenChallenges.map((item, index) => (
                                <div
                                    key={index}
                                    className="glass-card p-4 md:p-6 flex items-start gap-3 md:gap-4 hover:bg-white/10 transition-all hover:scale-105"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                                        <span className="text-2xl md:text-3xl">{item.icon}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-semibold text-white text-sm md:text-lg mb-1 md:mb-1.5">{item.challenge}</h4>
                                        <p className="text-white/70 text-[11px] md:text-lg leading-relaxed">{item.impact}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Officers column */}
                    <div className="animate-slide-right">
                        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gov-gold/30 flex items-center justify-center">
                                <span className="text-xl md:text-2xl">👔</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white">For Officers</h3>
                        </div>
                        <div className="space-y-3 md:space-y-4">
                            {officerChallenges.map((item, index) => (
                                <div
                                    key={index}
                                    className="glass-card p-4 md:p-6 flex items-start gap-3 md:gap-4 hover:bg-white/10 transition-all hover:scale-105"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                                        <span className="text-2xl md:text-3xl">{item.icon}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-semibold text-white text-sm md:text-lg mb-1 md:mb-1.5">{item.challenge}</h4>
                                        <p className="text-white/70 text-[11px] md:text-lg leading-relaxed">{item.impact}</p>
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
