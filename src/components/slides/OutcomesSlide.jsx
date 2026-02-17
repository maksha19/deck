export default function OutcomesSlide() {
    const citizenKPIs = [
        { kpi: 'Reduction in on-site waiting time', target: '20–30%' },
        { kpi: 'Citizen satisfaction score improvement', target: '15–20%' },
        { kpi: 'Accessibility rating (seniors/vulnerable)', target: 'High' },
    ]

    const operationalKPIs = [
        { kpi: 'Case briefs delivered before session', target: '100%' },
        { kpi: 'Reduction in repeat visits', target: '25%' },
        { kpi: 'Officer preparedness rating', target: 'Significantly improved' },
    ]

    const governanceKPIs = [
        { kpi: 'PDPA & IM8 compliance', target: '100%' },
        { kpi: 'Audit trail availability', target: 'Full coverage' },
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
            <div className="max-w-6xl w-full">
                {/* Section label */}
                <div className="inline-block px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-medium mb-6 animate-fade-in">
                    Slide 9 — Measurable Outcomes
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 animate-fade-in-up">
                    Expected Impact & KPIs
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Citizen Experience */}
                    <div className="glass-card p-6 animate-fade-in-up stagger-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-gov-sky/20 flex items-center justify-center">
                                <span className="text-xl">👥</span>
                            </div>
                            <h3 className="text-lg font-semibold text-white">Citizen Experience</h3>
                        </div>
                        <div className="space-y-4">
                            {citizenKPIs.map((item, index) => (
                                <div key={index} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                                    <p className="text-white/70 text-sm mb-2 leading-relaxed">{item.kpi}</p>
                                    <p className="text-green-400 font-bold text-xl">{item.target}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Operational Efficiency */}
                    <div className="glass-card p-6 animate-fade-in-up stagger-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-gov-gold/20 flex items-center justify-center">
                                <span className="text-xl">⚙️</span>
                            </div>
                            <h3 className="text-lg font-semibold text-white">Operational Efficiency</h3>
                        </div>
                        <div className="space-y-4">
                            {operationalKPIs.map((item, index) => (
                                <div key={index} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                                    <p className="text-white/70 text-sm mb-2 leading-relaxed">{item.kpi}</p>
                                    <p className="text-gov-gold font-bold text-xl">{item.target}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Governance & Compliance */}
                    <div className="glass-card p-6 animate-fade-in-up stagger-3">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                                <span className="text-xl">🛡️</span>
                            </div>
                            <h3 className="text-lg font-semibold text-white">Governance & Compliance</h3>
                        </div>
                        <div className="space-y-4">
                            {governanceKPIs.map((item, index) => (
                                <div key={index} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                                    <p className="text-white/70 text-sm mb-2 leading-relaxed">{item.kpi}</p>
                                    <p className="text-purple-400 font-bold text-xl">{item.target}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
