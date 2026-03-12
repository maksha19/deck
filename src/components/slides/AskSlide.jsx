export default function AskSlide() {
    const asks = [
        { number: 1, title: 'Endorsement', purpose: '6-month pilot at designated site' },
        { number: 2, title: 'Sponsorship/Funding', purpose: 'Modest operational funding' },
    ]

    const nextSteps = [
        'Confirm site & agency',
        'Finalise arrangements',
        'Officer training',
        'Launch campaign',
        'Commence in 8 weeks',
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 md:px-8 md:py-16">
            <div className="max-w-6xl w-full">
                {/* Section label */}
                <div className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-gov-gold/20 text-gov-gold text-xs md:text-lg font-medium mb-4 md:mb-6 animate-fade-in">
                    The Ask
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-8 md:mb-12 animate-fade-in-up">
                    Moving Forward
                </h2>

                {/* Approvals Requested */}
                <div className="mb-8 md:mb-12">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 animate-fade-in-up stagger-1">
                        Approvals Requested
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {asks.map((ask, index) => (
                            <div
                                key={index}
                                className={`glass-card p-4 md:p-6 animate-fade-in-up stagger-${index + 1} border-2 border-gov-gold/30`}
                            >
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gov-gold/20 flex items-center justify-center mb-3 md:mb-4">
                                    <span className="text-gov-gold font-bold text-lg md:text-xl">{ask.number}</span>
                                </div>
                                <h4 className="font-semibold text-white text-base md:text-xl mb-1 md:mb-2">{ask.title}</h4>
                                <p className="text-white/70 text-xs md:text-xl leading-relaxed">{ask.purpose}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Next Steps */}
                <div className="glass-card p-4 md:p-6 animate-fade-in-up stagger-5">
                    <h3 className="text-base md:text-xl font-semibold text-white mb-4">
                        Immediate Next Steps
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
                        {nextSteps.map((step, index) => (
                            <div key={index} className="flex items-start gap-2 md:gap-3">
                                <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gov-sky/20 flex items-center justify-center text-gov-sky text-[10px] md:text-lg font-medium shrink-0 mt-0.5">
                                    {index + 1}
                                </span>
                                <span className={`text-white/80 text-[11px] md:text-lg leading-relaxed ${index === nextSteps.length - 1 ? 'font-semibold text-gov-gold' : ''}`}>
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
