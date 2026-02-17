export default function SuccessSlide() {
    const quantitative = [
        { metric: 'Citizen adoption rate', threshold: '≥ 40% scale' },
        { metric: 'Waiting time reduction', threshold: '≥ 20% ↓' },
        { metric: 'Off. prep rating', threshold: '≥ 80% ↑' },
        { metric: 'System uptime', threshold: '≥ 99.5%' },
    ]

    const qualitative = [
        'Positive citizen feedback on ease',
        'Officer testimonials on prep',
        'No data or security incidents',
    ]

    const evaluation = [
        'Pre/post surveys',
        'Session observation',
        'Analytics dashboard',
        'GovTech review',
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 md:px-8 md:py-16">
            <div className="max-w-6xl w-full">
                {/* Section label */}
                <div className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-green-500/20 text-green-400 text-xs md:text-sm font-medium mb-4 md:mb-6 animate-fade-in">
                    Success Criteria
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-8 md:mb-12 animate-fade-in-up">
                    How We Measure Success
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {/* Quantitative */}
                    <div className="glass-card p-4 md:p-6 animate-fade-in-up stagger-1">
                        <h3 className="text-base md:text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <span className="text-gov-sky">📊</span>
                            Quantitative
                        </h3>
                        <div className="space-y-3">
                            {quantitative.map((item, index) => (
                                <div key={index} className="border-b border-white/10 pb-3 md:pb-4 last:border-0 last:pb-0">
                                    <p className="text-white/70 text-[10px] md:text-xs mb-0.5 md:mb-1">{item.metric}</p>
                                    <p className="text-green-400 font-bold text-base md:text-lg">{item.threshold}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Qualitative */}
                    <div className="glass-card p-4 md:p-6 animate-fade-in-up stagger-2">
                        <h3 className="text-base md:text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <span className="text-gov-gold">💬</span>
                            Qualitative
                        </h3>
                        <ul className="space-y-2 md:space-y-3">
                            {qualitative.map((item, index) => (
                                <li key={index} className="flex items-start gap-2 md:gap-3 text-white/80 text-[11px] md:text-sm leading-relaxed">
                                    <span className="text-gov-gold mt-0.5 flex-shrink-0">•</span>
                                    <span className="flex-1">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Evaluation */}
                    <div className="glass-card p-4 md:p-6 animate-fade-in-up stagger-3">
                        <h3 className="text-base md:text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <span className="text-purple-400">🔍</span>
                            Evaluation
                        </h3>
                        <ul className="space-y-2 md:space-y-3">
                            {evaluation.map((item, index) => (
                                <li key={index} className="flex items-start gap-2 md:gap-3 text-white/80 text-[11px] md:text-sm leading-relaxed">
                                    <span className="text-purple-400 mt-0.5 flex-shrink-0">•</span>
                                    <span className="flex-1">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
