export default function AskSlide() {
    const asks = [
        { number: 1, title: 'Pilot Endorsement', purpose: 'Approval to conduct 6-month pilot at designated constituency' },
        { number: 2, title: 'Agency Sponsorship', purpose: 'Lead agency to champion and oversee pilot' },
        { number: 3, title: 'Funding Support', purpose: 'Modest operational funding for pilot phase' },
    ]

    const nextSteps = [
        'Confirm pilot constituency and lead agency',
        'Finalise operational arrangements',
        'Conduct officer training',
        'Launch citizen awareness campaign',
        'Commence pilot within 8 weeks',
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
            <div className="max-w-6xl w-full">
                {/* Section label */}
                <div className="inline-block px-4 py-2 rounded-full bg-gov-gold/20 text-gov-gold text-sm font-medium mb-6 animate-fade-in">
                    Slide 15 — The Ask
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 animate-fade-in-up">
                    What We Need to Move Forward
                </h2>

                {/* Approvals Requested */}
                <div className="mb-12">
                    <h3 className="text-xl font-semibold text-white mb-6 animate-fade-in-up stagger-1">
                        Approvals Requested
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {asks.map((ask, index) => (
                            <div
                                key={index}
                                className={`glass-card p-6 animate-fade-in-up stagger-${index + 1}  border-2 border-gov-gold/30 hover:border-gov-gold transition-colors`}
                            >
                                <div className="w-12 h-12 rounded-full bg-gov-gold/20 flex items-center justify-center mb-4">
                                    <span className="text-gov-gold font-bold text-xl">{ask.number}</span>
                                </div>
                                <h4 className="font-semibold text-white text-lg mb-2">{ask.title}</h4>
                                <p className="text-white/70 text-sm leading-relaxed">{ask.purpose}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Next Steps */}
                <div className="glass-card p-6 animate-fade-in-up stagger-5">
                    <h3 className="text-lg font-semibold text-white mb-4">
                        Immediate Next Steps (Upon Approval)
                    </h3>
                    <div className="grid md:grid-cols-5 gap-4">
                        {nextSteps.map((step, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <span className="w-6 h-6 rounded-full bg-gov-sky/20 flex items-center justify-center text-gov-sky text-sm font-medium shrink-0 mt-0.5">
                                    {index + 1}
                                </span>
                                <span className={`text-white/80 text-sm leading-relaxed ${index === nextSteps.length - 1 ? 'font-semibold text-gov-gold' : ''}`}>
                                    {step}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
