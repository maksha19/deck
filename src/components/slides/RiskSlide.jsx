export default function RiskSlide() {
    const risks = [
        { risk: 'Low citizen adoption', likelihood: 'Medium', impact: 'Medium', mitigation: 'Multi-lingual support, assisted submission at CCs, user education', color: 'yellow' },
        { risk: 'Technical issues', likelihood: 'Low', impact: 'Medium', mitigation: 'Phased rollout, dedicated support, contingency procedures', color: 'green' },
        { risk: 'Data privacy concerns', likelihood: 'Low', impact: 'High', mitigation: 'PDPA compliance, transparent communication, robust access controls', color: 'orange' },
        { risk: 'Officer resistance', likelihood: 'Medium', impact: 'Medium', mitigation: 'Early engagement, training, feedback incorporation', color: 'yellow' },
        { risk: 'Integration challenges', likelihood: 'Low', impact: 'Medium', mitigation: 'Modular design, staged integration, GovTech partnership', color: 'green' },
    ]

    const getColorClass = (likelihood, impact) => {
        if (impact === 'High') return 'bg-orange-500/20 border-orange-500'
        if (likelihood === 'Medium') return 'bg-yellow-500/20 border-yellow-500'
        return 'bg-green-500/20 border-green-500'
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
            <div className="max-w-6xl w-full">
                {/* Section label */}
                <div className="inline-block px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-medium mb-6 animate-fade-in">
                    Slide 11 — Risk Assessment
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 animate-fade-in-up">
                    Identified Risks & Mitigation
                </h2>

                {/* Risk table */}
                <div className="glass-card overflow-hidden mb-8 animate-fade-in-up stagger-1">
                    <div className="overflow-x-auto">
                        <table className="styled-table w-full">
                            <thead>
                                <tr>
                                    <th className="text-left">Risk</th>
                                    <th className="text-center">Likelihood</th>
                                    <th className="text-center">Impact</th>
                                    <th className="text-left">Mitigation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {risks.map((item, index) => (
                                    <tr key={index} className={`border-l-4 ${getColorClass(item.likelihood, item.impact)}`}>
                                        <td className="font-medium text-white">{item.risk}</td>
                                        <td className="text-center">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.likelihood === 'Low' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                                                }`}>
                                                {item.likelihood}
                                            </span>
                                        </td>
                                        <td className="text-center">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.impact === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                                                }`}>
                                                {item.impact}
                                            </span>
                                        </td>
                                        <td className="text-white/70 text-sm">{item.mitigation}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Risk governance */}
                <div className="glass-card p-6 animate-fade-in-up stagger-2">
                    <h3 className="text-lg font-semibold text-white mb-4">Risk Governance</h3>
                    <div className="flex flex-wrap gap-6">
                        <div className="flex items-center gap-2 text-white/80 text-sm">
                            <span className="text-gov-sky">•</span>
                            Pilot Steering Committee oversight
                        </div>
                        <div className="flex items-center gap-2 text-white/80 text-sm">
                            <span className="text-gov-sky">•</span>
                            Regular risk reviews
                        </div>
                        <div className="flex items-center gap-2 text-white/80 text-sm">
                            <span className="text-gov-sky">•</span>
                            Clear escalation pathways
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
