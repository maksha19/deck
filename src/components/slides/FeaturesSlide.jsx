export default function FeaturesSlide() {
    const features = [
        { feature: 'Multi-modal Submission', benefit: 'Citizens choose: video, audio, text, or documents', icon: '📤' },
        { feature: 'AI-Assisted Summaries', benefit: 'Structured briefs for officer preparation', icon: '🤖' },
        { feature: 'Secure Government Cloud', benefit: 'Data protected, PDPA compliant', icon: '☁️' },
        { feature: 'Accessible Design', benefit: 'Supports seniors, inclusive, mobile-friendly', icon: '♿' },
        { feature: 'Audit Trail', benefit: 'Full transparency and accountability', icon: '📊' },
    ]

    const principles = [
        { icon: '🤝', title: 'Human-centred', text: 'Officers retain full decision-making authority' },
        { icon: '🔒', title: 'Secure', text: 'Government infrastructure, strict access controls' },
        { icon: '♿', title: 'Inclusive', text: 'Designed for all citizens' },
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 md:px-8 md:py-16">
            <div className="max-w-6xl w-full">
                {/* Section label */}
                <div className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-gov-sky/20 text-gov-sky text-xs md:text-lg font-medium mb-4 md:mb-6 animate-fade-in">
                    Key Features
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-8 md:mb-12 animate-fade-in-up">
                    Platform Capabilities
                </h2>

                {/* Features grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mb-8 md:mb-12">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className={`glass-card p-3 md:p-6 text-center animate-fade-in-up stagger-${index + 1} hover:scale-105 transition-transform ${index === features.length - 1 ? 'col-span-2 md:col-span-1' : ''}`}
                        >
                            <div className="text-2xl md:text-4xl mb-2 md:mb-4">{item.icon}</div>
                            <h3 className="font-semibold text-white mb-1 md:mb-2 text-[11px] md:text-lg leading-tight">{item.feature}</h3>
                            <p className="text-white/70 text-[10px] md:text-lg leading-relaxed">{item.benefit}</p>
                        </div>
                    ))}
                </div>

                {/* Design Principles */}
                <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 animate-fade-in-up stagger-5">
                    Design Principles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {principles.map((item, index) => (
                        <div
                            key={index}
                            className={`glass-card p-4 md:p-6 flex items-start gap-3 md:gap-4 animate-fade-in-up stagger-${index + 1}`}
                        >
                            <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                                <span className="text-2xl md:text-3xl">{item.icon}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-gov-sky text-sm md:text-xl mb-1 md:mb-1.5">{item.title}</h4>
                                <p className="text-white/70 text-[11px] md:text-lg leading-relaxed">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
