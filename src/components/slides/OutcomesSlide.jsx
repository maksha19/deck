export default function OutcomesSlide() {
    const citizenKPIs = [
        { kpi: 'Reduction in on-site waiting', target: '20–30%' },
        { kpi: 'Citizen satisfaction score index', target: '15–20% ↑' },
        { kpi: 'Accessibility (seniors/vulnerable)', target: 'High' },
    ]

    const operationalKPIs = [
        { kpi: 'Briefs delivered pre-session', target: '100%' },
        { kpi: 'Reduction in repeat visits', target: '25% ↓' },
        { kpi: 'Officer preparedness rating', target: 'Improved' },
    ]

    const governanceKPIs = [
        { kpi: 'PDPA & IM8 compliance', target: '100%' },
        { kpi: 'Audit trail availability', target: 'Full' },
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 md:px-8 md:py-16">
            <div className="max-w-6xl w-full">
                {/* Section label */}
                <div className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-green-500/20 text-green-400 text-xs md:text-lg font-medium mb-4 md:mb-6 animate-fade-in">
                    Measurable Outcomes
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-8 md:mb-12 animate-fade-in-up">
                    Expected Impact & KPIs
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {/* Citizen Experience */}
                    <div className="glass-card p-4 md:p-6 animate-fade-in-up stagger-1">
                        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gov-sky/20 flex items-center justify-center">
                                <span className="text-base md:text-xl">👥</span>
                            </div>
                            <h3 className="text-base md:text-2xl font-semibold text-white">Citizens</h3>
                        </div>
                        <div className="space-y-3 md:space-y-4">
                            {citizenKPIs.map((item, index) => (
                                <div key={index} className="border-b border-white/10 pb-3 md:pb-4 last:border-0 last:pb-0">
                                    <p className="text-white/70 text-[10px] md:text-lg mb-1 md:mb-2 leading-relaxed">{item.kpi}</p>
                                    <p className="text-green-400 font-bold text-lg md:text-xl">{item.target}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Operational Efficiency */}
                    <div className="glass-card p-4 md:p-6 animate-fade-in-up stagger-2">
                        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gov-gold/20 flex items-center justify-center">
                                <span className="text-base md:text-xl">⚙️</span>
                            </div>
                            <h3 className="text-base md:text-2xl font-semibold text-white">Operations</h3>
                        </div>
                        <div className="space-y-3 md:space-y-4">
                            {operationalKPIs.map((item, index) => (
                                <div key={index} className="border-b border-white/10 pb-3 md:pb-4 last:border-0 last:pb-0">
                                    <p className="text-white/70 text-[10px] md:text-lg mb-1 md:mb-2 leading-relaxed">{item.kpi}</p>
                                    <p className="text-gov-gold font-bold text-lg md:text-xl">{item.target}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Governance & Compliance */}
                    <div className="glass-card p-4 md:p-6 animate-fade-in-up stagger-3">
                        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                                <span className="text-base md:text-xl">🛡️</span>
                            </div>
                            <h3 className="text-base md:text-2xl font-semibold text-white">Governance</h3>
                        </div>
                        <div className="space-y-3 md:space-y-4">
                            {governanceKPIs.map((item, index) => (
                                <div key={index} className="border-b border-white/10 pb-3 md:pb-4 last:border-0 last:pb-0">
                                    <p className="text-white/70 text-[10px] md:text-lg mb-1 md:mb-2 leading-relaxed">{item.kpi}</p>
                                    <p className="text-purple-400 font-bold text-lg md:text-xl">{item.target}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
