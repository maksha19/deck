export default function RiskSlide() {
    const risks = [
        { risk: 'Low citizen adoption', likelihood: 'Medium', impact: 'Medium', mitigation: 'Assisted submission, education', color: 'yellow' },
        { risk: 'Technical issues', likelihood: 'Low', impact: 'Medium', mitigation: 'Phased rollout, dedicated support', color: 'green' },
        { risk: 'Data privacy concerns', likelihood: 'Low', impact: 'High', mitigation: 'PDPA compliance, GCC storage', color: 'orange' },
        { risk: 'Officer resistance', likelihood: 'Medium', impact: 'Medium', mitigation: 'Early engagement, training', color: 'yellow' },
    ]

    const getColorClass = (likelihood, impact) => {
        if (impact === 'High') return 'border-orange-500 bg-orange-500/10'
        if (likelihood === 'Medium') return 'border-yellow-500 bg-yellow-500/10'
        return 'border-green-500 bg-green-500/10'
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 md:px-8 md:py-16">
            <div className="max-w-6xl w-full">
                {/* Section label */}
                <div className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-yellow-500/20 text-yellow-400 text-xs md:text-sm font-medium mb-4 md:mb-6 animate-fade-in">
                    Risk Assessment
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-8 md:mb-12 animate-fade-in-up">
                    Identified Risks & Mitigation
                </h2>

                {/* Risk grid (replacing table on mobile, table on desktop if preferred, but cards work well for both) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 animate-fade-in-up stagger-1">
                    {risks.map((item, index) => (
                        <div
                            key={index}
                            className={`glass-card p-4 md:p-6 border-l-4 ${getColorClass(item.likelihood, item.impact)}`}
                        >
                            <h3 className="font-bold text-white text-sm md:text-base mb-2 md:mb-3">{item.risk}</h3>
                            <div className="flex gap-2 mb-3 md:mb-4">
                                <span className={`px-2 py-0.5 rounded-full text-[10px] md:text-xs font-medium ${item.likelihood === 'Low' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                                    {item.likelihood}
                                </span>
                                <span className={`px-2 py-0.5 rounded-full text-[10px] md:text-xs font-medium ${item.impact === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                                    {item.impact}
                                </span>
                            </div>
                            <p className="text-white/70 text-[11px] md:text-sm leading-relaxed">
                                <span className="text-gov-sky font-semibold">Mitigation:</span> {item.mitigation}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Risk governance */}
                <div className="glass-card p-4 md:p-6 animate-fade-in-up stagger-2">
                    <h3 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Risk Governance</h3>
                    <div className="flex flex-wrap gap-3 md:gap-6">
                        <div className="flex items-center gap-2 text-white/80 text-[11px] md:text-sm">
                            <span className="text-gov-sky">•</span>
                            Steering Committee oversight
                        </div>
                        <div className="flex items-center gap-2 text-white/80 text-[11px] md:text-sm">
                            <span className="text-gov-sky">•</span>
                            Regular risk reviews
                        </div>
                        <div className="flex items-center gap-2 text-white/80 text-[11px] md:text-sm">
                            <span className="text-gov-sky">•</span>
                            Escalation pathways
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
