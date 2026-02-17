export default function CostSlide() {
    const pilotCosts = [
        { item: 'Infrastructure', approach: 'Government Commercial Cloud (existing)' },
        { item: 'Development', approach: 'Prototype already built' },
        { item: 'Operations', approach: 'Minimal additional resourcing' },
        { item: 'Training', approach: 'Within agency capacity' },
    ]

    const valueDelivered = [
        { benefit: 'Reduced repeat visits', impact: 'Cost savings, faster resolution' },
        { benefit: 'Improved officer productivity', impact: 'Better use of resources' },
        { benefit: 'Enhanced citizen satisfaction', impact: 'Trust in public services' },
        { benefit: 'WOG replication potential', impact: 'Multiplied ROI across agencies' },
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
            <div className="max-w-6xl w-full">
                {/* Section label */}
                <div className="inline-block px-4 py-2 rounded-full bg-gov-gold/20 text-gov-gold text-sm font-medium mb-6 animate-fade-in">
                    Slide 12 — Cost & Value
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 animate-fade-in-up">
                    Fiscally Responsible Investment
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Pilot Phase Costs */}
                    <div className="glass-card p-6 animate-fade-in-up stagger-1">
                        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                            <span className="text-gov-sky">💰</span>
                            Pilot Phase Costs (6 Months)
                        </h3>
                        <div className="space-y-4">
                            {pilotCosts.map((item, index) => (
                                <div key={index} className="flex justify-between items-start border-b border-white/10 pb-3 last:border-0">
                                    <span className="font-medium text-white text-sm">{item.item}</span>
                                    <span className="text-white/70 text-sm text-right max-w-xs">{item.approach}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Value Delivered */}
                    <div className="glass-card p-6 animate-fade-in-up stagger-2">
                        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                            <span className="text-green-400">📈</span>
                            Value Delivered
                        </h3>
                        <div className="space-y-4">
                            {valueDelivered.map((item, index) => (
                                <div key={index} className="flex justify-between items-start border-b border-white/10 pb-3 last:border-0">
                                    <span className="font-medium text-white text-sm">{item.benefit}</span>
                                    <span className="text-green-400 text-sm text-right max-w-xs font-medium">{item.impact}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Fiscal Prudence */}
                <div className="glass-card p-6 mt-8 animate-fade-in-up stagger-3">
                    <h3 className="text-lg font-semibold text-white mb-4">Fiscal Prudence</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="flex items-start gap-3 text-white/80 text-sm">
                            <span className="text-green-400 flex-shrink-0">✅</span>
                            Incremental investment on proven prototype
                        </div>
                        <div className="flex items-start gap-3 text-white/80 text-sm">
                            <span className="text-green-400 flex-shrink-0">✅</span>
                            Evidence-based scaling
                        </div>
                        <div className="flex items-start gap-3 text-white/80 text-sm">
                            <span className="text-green-400 flex-shrink-0">✅</span>
                            Low-risk pilot before major commitment
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
