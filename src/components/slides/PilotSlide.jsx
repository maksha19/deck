export default function PilotSlide() {
    const timeline = [
        { phase: 'Preparation', duration: 'Month 1', activities: 'Officer training, citizen outreach, system setup', color: 'gov-sky' },
        { phase: 'Pilot Operations', duration: 'Months 2–5', activities: 'Live deployment, monitoring, feedback collection', color: 'gov-gold' },
        { phase: 'Evaluation', duration: 'Month 6', activities: 'Impact assessment, lessons learned, recommendations', color: 'green-500' },
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
            <div className="max-w-6xl w-full">
                {/* Section label */}
                <div className="inline-block px-4 py-2 rounded-full bg-gov-sky/20 text-gov-sky text-sm font-medium mb-6 animate-fade-in">
                    Slide 13 — Pilot Plan
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 animate-fade-in-up">
                    Proposed Pilot Scope
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Scope */}
                    <div className="glass-card p-6 animate-fade-in-up stagger-1">
                        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                            <span>📍</span>
                            Scope
                        </h3>
                        <div className="space-y-4">
                            <div className="flex justify-between border-b border-white/10 pb-3">
                                <span className="text-white/70">Location</span>
                                <span className="font-medium text-white">Single constituency (TBC)</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-3">
                                <span className="text-white/70">Duration</span>
                                <span className="font-medium text-white">6 months</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-3">
                                <span className="text-white/70">Coverage</span>
                                <span className="font-medium text-white">All scheduled MPS sessions</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-white/70">Participation</span>
                                <span className="font-medium text-white">Voluntary for citizens</span>
                            </div>
                        </div>
                    </div>

                    {/* Governance */}
                    <div className="glass-card p-6 animate-fade-in-up stagger-2">
                        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                            <span>🏛️</span>
                            Governance
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 text-white/80 text-sm">
                                <span className="text-gov-sky mt-0.5 flex-shrink-0">•</span>
                                Pilot Steering Committee (Agency + GovTech)
                            </div>
                            <div className="flex items-start gap-3 text-white/80 text-sm">
                                <span className="text-gov-sky mt-0.5 flex-shrink-0">•</span>
                                Monthly progress reports
                            </div>
                            <div className="flex items-start gap-3 text-white/80 text-sm">
                                <span className="text-gov-sky mt-0.5 flex-shrink-0">•</span>
                                Clear escalation pathways
                            </div>
                        </div>
                    </div>
                </div>

                {/* Timeline */}
                <div className="mt-8 animate-fade-in-up stagger-3">
                    <h3 className="text-xl font-semibold text-white mb-6">Timeline</h3>
                    <div className="relative">
                        {/* Timeline bar */}
                        <div className="hidden md:block absolute top-8 left-0 right-0 h-2 bg-white/10 rounded-full" />

                        <div className="grid md:grid-cols-3 gap-6 relative z-10">
                            {timeline.map((item, index) => (
                                <div key={index} className="glass-card p-6 h-full">
                                    <div className={`w-4 h-4 rounded-full bg-${item.color} mb-4 ring-4 ring-${item.color}/30`} />
                                    <h4 className="font-semibold text-white mb-1.5">{item.phase}</h4>
                                    <p className="text-gov-sky text-sm mb-2 font-medium">{item.duration}</p>
                                    <p className="text-white/70 text-sm leading-relaxed">{item.activities}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
