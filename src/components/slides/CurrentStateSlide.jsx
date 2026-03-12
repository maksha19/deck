export default function CurrentStateSlide() {
    const steps = [
        { label: 'Citizen arrives', icon: '🚶' },
        { label: 'Waits 20-40mins', icon: '⏰' },
        { label: '5–10mins session', icon: '💬' },
        { label: 'Officer documenting', icon: '📝' },
        { label: '10-15mins waiting', icon: '⏰' },
        { label: 'Minister Meetup', icon: '👥' },
    ]

    const painPoints = [
        { icon: '⏰', text: 'Extended waiting with no preparation' },
        { icon: '📝', text: 'Limited time to explain complex situations' },
        { icon: '🔄', text: 'Multiple follow-ups to gather complete information' },
        { icon: '📅', text: 'Delayed case resolution' },
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 md:px-8 md:py-16">
            <div className="max-w-6xl w-full">
                {/* Section label */}
                <div className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-red-500/20 text-red-400 text-xs md:text-lg font-medium mb-4 md:mb-6 animate-fade-in">
                    Current State
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

                {/* Pain points */}
                <h3 className="text-lg md:text-xl font-semibold text-red-400 mb-4 md:mb-6 animate-fade-in-up stagger-3">
                    Pain Points Highlighted
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {painPoints.map((point, index) => (
                        <div
                            key={index}
                            className={`glass-card p-4 md:p-6 flex items-start gap-3 md:gap-4 border-l-4 border-red-500 animate-fade-in-up stagger-${index + 3}`}
                        >
                            <span className="text-xl md:text-2xl mt-0.5 flex-shrink-0">{point.icon}</span>
                            <span className="text-white/80 text-xs md:text-lg font-medium">{point.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
