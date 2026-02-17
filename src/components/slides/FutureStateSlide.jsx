export default function FutureStateSlide() {
    const steps = [
        { label: 'Citizen submits info online', icon: '📱' },
        { label: 'System creates brief', icon: '🤖' },
        { label: 'Officer reviews in advance', icon: '📋' },
        { label: 'Citizen arrives prepared', icon: '✅' },
        { label: 'Focused discussion', icon: '💬' },
        { label: 'Faster resolution', icon: '🎯' },
    ]

    const improvements = [
        { icon: '✅', text: 'Submit at own pace, in preferred language/format' },
        { icon: '✅', text: 'Officers receive structured brief before session' },
        { icon: '✅', text: 'Pre-coordination with relevant agencies possible' },
        { icon: '✅', text: 'Session focuses on resolution, not fact-finding' },
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
            <div className="max-w-6xl w-full">
                {/* Section label */}
                <div className="inline-block px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-medium mb-6 animate-fade-in">
                    Slide 5 — Future State
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
                    With Digital Pre-Engagement
                </h2>
                <p className="text-xl text-white/60 mb-12 animate-fade-in-up stagger-1">
                    A New Experience
                </p>

                {/* Flow diagram */}
                <div className="glass-card p-8 mb-12 animate-fade-in-up stagger-2">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col md:flex-row items-center gap-4">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-16 h-16 rounded-xl bg-green-500/20 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                                        <span className="text-3xl">{step.icon}</span>
                                    </div>
                                    <span className="text-white/80 text-sm text-center max-w-24 font-medium leading-tight">{step.label}</span>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="text-green-500/50 transform rotate-90 md:rotate-0 my-2 md:my-0">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Improvements */}
                <h3 className="text-xl font-semibold text-green-400 mb-6 animate-fade-in-up stagger-3">
                    Key Improvements
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                    {improvements.map((item, index) => (
                        <div
                            key={index}
                            className={`glass-card p-6 flex items-start gap-4 border-l-4 border-green-500 animate-fade-in-up stagger-${index + 3} hover:bg-white/5 transition-colors`}
                        >
                            <span className="text-2xl text-green-400 mt-0.5 flex-shrink-0">{item.icon}</span>
                            <span className="text-white/80 font-medium leading-relaxed">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
