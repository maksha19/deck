export default function CostSlide() {
    const pilotCosts = [
        { item: 'Infrastructure', approach: 'Gov Cloud (existing)' },
        { item: 'Development', approach: 'Prototype built' },
        { item: 'Operations', approach: 'Minimal additional' },
        { item: 'Training', approach: 'Within capacity' },
    ]

    const valueDelivered = [
        { benefit: 'Reduced repeat visits', impact: 'Cost savings' },
        { benefit: 'Officer productivity', impact: 'Resource efficiency' },
        { benefit: 'Citizen satisfaction', impact: 'Trust' },
        { benefit: 'WOG replication', impact: 'Multiplied ROI' },
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 md:px-8 md:py-16">
            <div className="max-w-6xl w-full">
                {/* Section label */}
                <div className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-gov-gold/20 text-gov-gold text-xs md:text-sm font-medium mb-4 md:mb-6 animate-fade-in">
                    Cost & Value
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-8 md:mb-12 animate-fade-in-up">
                    Fiscally Responsible Investment
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    {/* Pilot Phase Costs */}
                    <div className="glass-card p-4 md:p-6 animate-fade-in-up stagger-1">
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 flex items-center gap-2">
                            <span className="text-gov-sky">💰</span>
                            Pilot Phase Costs
                        </h3>
                        <div className="space-y-3 md:space-y-4">
                            {pilotCosts.map((item, index) => (
                                <div key={index} className="flex justify-between items-start border-b border-white/10 pb-2 md:pb-3 last:border-0 text-xs md:text-sm">
                                    <span className="font-medium text-white">{item.item}</span>
                                    <span className="text-white/70 text-right max-w-[150px] md:max-w-xs">{item.approach}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Value Delivered */}
                    <div className="glass-card p-4 md:p-6 animate-fade-in-up stagger-2">
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 flex items-center gap-2">
                            <span className="text-green-400">📈</span>
                            Value Delivered
                        </h3>
                        <div className="space-y-3 md:space-y-4">
                            {valueDelivered.map((item, index) => (
                                <div key={index} className="flex justify-between items-start border-b border-white/10 pb-2 md:pb-3 last:border-0 text-xs md:text-sm">
                                    <span className="font-medium text-white">{item.benefit}</span>
                                    <span className="text-green-400 text-right max-w-[120px] md:max-w-xs font-medium">{item.impact}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Fiscal Prudence */}
                <div className="glass-card p-4 md:p-6 mt-6 md:mt-8 animate-fade-in-up stagger-3">
                    <h3 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Fiscal Prudence</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
                        <div className="flex items-start gap-2 md:gap-3 text-white/80 text-[11px] md:text-sm">
                            <span className="text-green-400 flex-shrink-0">✅</span>
                            <span>Incremental investment</span>
                        </div>
                        <div className="flex items-start gap-2 md:gap-3 text-white/80 text-[11px] md:text-sm">
                            <span className="text-green-400 flex-shrink-0">✅</span>
                            <span>Evidence-based scaling</span>
                        </div>
                        <div className="flex items-start gap-2 md:gap-3 text-white/80 text-[11px] md:text-sm">
                            <span className="text-green-400 flex-shrink-0">✅</span>
                            <span>Low-risk pilot rollout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
