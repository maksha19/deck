export default function PilotSlide() {
    const timeline = [
        { phase: 'Preparation', duration: 'Month 1', activities: 'Officer training, system setup', color: 'gov-sky' },
        { phase: 'Pilot Ops', duration: 'Months 2–5', activities: 'Live deployment, monitoring, feedback', color: 'gov-gold' },
        { phase: 'Evaluation', duration: 'Month 6', activities: 'Impact assessment, recommendations', color: 'green-500' },
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 md:px-8 md:py-16">
            <div className="max-w-6xl w-full">
                {/* Section label */}
                <div className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-gov-sky/20 text-gov-sky text-xs md:text-lg font-medium mb-4 md:mb-6 animate-fade-in">
                    Pilot Plan
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-8 md:mb-12 animate-fade-in-up">
                    Proposed Pilot Scope
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    {/* Scope */}
                    <div className="glass-card p-4 md:p-6 animate-fade-in-up stagger-1">
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 flex items-center gap-2">
                            <span>📍</span>
                            Scope
                        </h3>
                        <div className="space-y-3 md:space-y-4">
                            <div className="flex justify-between border-b border-white/10 pb-2 md:pb-3">
                                <span className="text-white/70 text-xs md:text-lg">Location</span>
                                <span className="font-medium text-white text-xs md:text-lg">Single constituency</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2 md:pb-3">
                                <span className="text-white/70 text-xs md:text-lg">Duration</span>
                                <span className="font-medium text-white text-xs md:text-lg">6 months</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2 md:pb-3">
                                <span className="text-white/70 text-xs md:text-lg">Coverage</span>
                                <span className="font-medium text-white text-xs md:text-lg">All MPS sessions</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-white/70 text-xs md:text-lg">Participation</span>
                                <span className="font-medium text-white text-xs md:text-lg">Voluntary</span>
                            </div>
                        </div>
                    </div>

                    {/* Governance */}
                    <div className="glass-card p-4 md:p-6 animate-fade-in-up stagger-2">
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 flex items-center gap-2">
                            <span>🏛️</span>
                            Governance
                        </h3>
                        <div className="space-y-3 md:space-y-4">
                            <div className="flex items-start gap-2 md:gap-3 text-white/80 text-xs md:text-lg">
                                <span className="text-gov-sky mt-0.5 flex-shrink-0">•</span>
                                <span>Steering Committee oversight</span>
                            </div>
                            <div className="flex items-start gap-2 md:gap-3 text-white/80 text-xs md:text-lg">
                                <span className="text-gov-sky mt-0.5 flex-shrink-0">•</span>
                                <span>GovTech review sessions</span>
                            </div>
                            <div className="flex items-start gap-2 md:gap-3 text-white/80 text-xs md:text-lg">
                                <span className="text-gov-sky mt-0.5 flex-shrink-0">•</span>
                                <span>Monthly progress reports</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Timeline */}
                <div className="mt-8 md:mt-12 animate-fade-in-up stagger-3">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">Timeline</h3>
                    <div className="relative">
                        {/* Timeline bar */}
                        <div className="hidden md:block absolute top-8 left-0 right-0 h-2 bg-white/10 rounded-full" />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 relative z-10">
                            {timeline.map((item, index) => (
                                <div key={index} className="glass-card p-4 md:p-6 h-full flex flex-row md:flex-col items-start gap-4 md:gap-0">
                                    <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full bg-${item.color} mt-2 md:mb-4 ring-2 md:ring-4 ring-${item.color}/30 flex-shrink-0`} />
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-white mb-0.5 md:mb-1.5 text-sm md:text-base">{item.phase}</h4>
                                        <p className="text-gov-sky text-xs md:text-lg mb-1 md:mb-2 font-medium">{item.duration}</p>
                                        <p className="text-white/70 text-[11px] md:text-lg leading-relaxed">{item.activities}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
