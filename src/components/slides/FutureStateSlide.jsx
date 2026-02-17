export default function FutureStateSlide() {
    const steps = [
        { label: 'Submit info online', icon: '📱' },
        { label: 'System brief', icon: '🤖' },
        { label: 'Adv. Review', icon: '📋' },
        { label: 'Prepared Arrival', icon: '✅' },
        { label: 'Focused discussion', icon: '💬' },
        { label: 'Target resolution', icon: '🎯' },
    ]

    const improvements = [
        { icon: '✅', text: 'Submit at own pace, in preferred language/format' },
        { icon: '✅', text: 'Officers receive structured brief before session' },
        { icon: '✅', text: 'Pre-coordination with relevant agencies possible' },
        { icon: '✅', text: 'Session focuses on resolution, not fact-finding' },
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 md:px-8 md:py-16">
            <div className="max-w-6xl w-full">
                {/* Section label */}
                <div className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-green-500/20 text-green-400 text-xs md:text-sm font-medium mb-4 md:mb-6 animate-fade-in">
                    Future State
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4 animate-fade-in-up">
                    With Digital Pre-Engagement
                </h2>
                <p className="text-base md:text-xl text-white/60 mb-8 md:mb-12 animate-fade-in-up stagger-1">
                    A New Experience
                </p>

                {/* Flow diagram */}
                <div className="glass-card p-4 md:p-8 mb-8 md:mb-12 animate-fade-in-up stagger-2">
                    <div className="grid grid-cols-3 md:flex md:flex-row items-start md:items-center justify-items-center md:justify-center gap-y-8 gap-x-2 md:gap-6">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-row items-center gap-2 md:gap-4">
                                <div className="flex flex-col items-center gap-1 md:gap-2">
                                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl bg-green-500/20 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                                        <span className="text-xl md:text-3xl">{step.icon}</span>
                                    </div>
                                    <span className="text-white/80 text-[10px] md:text-sm text-center max-w-[60px] md:max-w-24 font-medium leading-tight">{step.label}</span>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className={`text-green-500/50 my-auto ${index === 2 ? 'hidden md:block' : ''}`}>
                                        <svg className="w-4 h-4 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Improvements */}
                <h3 className="text-lg md:text-xl font-semibold text-green-400 mb-4 md:mb-6 animate-fade-in-up stagger-3">
                    Key Improvements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {improvements.map((item, index) => (
                        <div
                            key={index}
                            className={`glass-card p-4 md:p-6 flex items-start gap-3 md:gap-4 border-l-4 border-green-500 animate-fade-in-up stagger-${index + 3} hover:bg-white/5 transition-colors`}
                        >
                            <span className="text-xl md:text-2xl text-green-400 mt-0.5 flex-shrink-0">{item.icon}</span>
                            <span className="text-white/80 text-xs md:text-sm font-medium leading-relaxed">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
