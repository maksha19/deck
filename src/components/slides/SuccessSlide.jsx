export default function SuccessSlide() {
    const quantitative = [
        { metric: 'Citizen adoption rate', threshold: '≥ 40% of scheduled appointments' },
        { metric: 'Waiting time reduction', threshold: '≥ 20%' },
        { metric: 'Officer preparedness rating', threshold: '≥ 80% positive' },
        { metric: 'System uptime', threshold: '≥ 99.5%' },
        { metric: 'PDPA compliance', threshold: '100%' },
    ]

    const qualitative = [
        'Positive citizen feedback on ease of use',
        'Officer testimonials on improved preparation',
        'No major data or security incidents',
        'Operational process improvements documented',
    ]

    const evaluation = [
        'Pre/post surveys (citizens and officers)',
        'Session observation studies',
        'Data analytics dashboard',
        'Independent review by GovTech',
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
            <div className="max-w-6xl w-full">
                {/* Section label */}
                <div className="inline-block px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-medium mb-6 animate-fade-in">
                    Slide 14 — Success Criteria
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 animate-fade-in-up">
                    How We Will Measure Success
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Quantitative */}
                    <div className="glass-card p-8 animate-fade-in-up stagger-1">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <span className="text-gov-sky">📊</span>
                            Quantitative Measures
                        </h3>
                        <div className="space-y-3">
                            {quantitative.map((item, index) => (
                                <div key={index} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                                    <p className="text-white/70 text-sm mb-1">{item.metric}</p>
                                    <p className="text-green-400 font-bold text-lg">{item.threshold}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Qualitative */}
                    <div className="glass-card p-6 animate-fade-in-up stagger-2">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <span className="text-gov-gold">💬</span>
                            Qualitative Measures
                        </h3>
                        <ul className="space-y-3">
                            {qualitative.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
                                    <span className="text-gov-gold mt-0.5 flex-shrink-0">•</span>
                                    <span className="flex-1">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Evaluation */}
                    <div className="glass-card p-6 animate-fade-in-up stagger-3">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <span className="text-purple-400">🔍</span>
                            Evaluation Approach
                        </h3>
                        <ul className="space-y-3">
                            {evaluation.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
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
