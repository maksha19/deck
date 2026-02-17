export default function FeaturesSlide() {
    const features = [
        { feature: 'Multi-Modal Submission', benefit: 'Citizens choose: video, audio, text, or documents', icon: '📤' },
        { feature: 'AI-Assisted Summaries', benefit: 'Structured briefs for officer preparation', icon: '🤖' },
        { feature: 'Secure Government Cloud', benefit: 'Data protected, PDPA compliant', icon: '☁️' },
        { feature: 'Accessible Design', benefit: 'Supports seniors, multi-lingual, mobile-friendly', icon: '♿' },
        { feature: 'Audit Trail', benefit: 'Full transparency and accountability', icon: '📊' },
    ]

    const principles = [
        { icon: '🤝', title: 'Human-centred', text: 'Officers retain full decision-making authority' },
        { icon: '🔒', title: 'Secure', text: 'Government infrastructure, strict access controls' },
        { icon: '♿', title: 'Inclusive', text: 'Designed for all citizens, including vulnerable groups' },
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
            <div className="max-w-6xl w-full">
                {/* Section label */}
                <div className="inline-block px-4 py-2 rounded-full bg-gov-sky/20 text-gov-sky text-sm font-medium mb-6 animate-fade-in">
                    Slide 7 — Key Features
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 animate-fade-in-up">
                    Platform Capabilities
                </h2>

                {/* Features grid */}
                <div className="grid md:grid-cols-5 gap-4 mb-12">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className={`glass-card p-6 text-center animate-fade-in-up stagger-${index + 1} hover:scale-105 transition-transform`}
                        >
                            <div className="text-4xl mb-4">{item.icon}</div>
                            <h3 className="font-semibold text-white mb-2 text-sm leading-tight">{item.feature}</h3>
                            <p className="text-white/70 text-xs leading-relaxed">{item.benefit}</p>
                        </div>
                    ))}
                </div>

                {/* Design Principles */}
                <h3 className="text-xl font-semibold text-white mb-6 animate-fade-in-up stagger-5">
                    Design Principles
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {principles.map((item, index) => (
                        <div
                            key={index}
                            className={`glass-card p-6 flex items-start gap-4  animate-fade-in-up stagger-${index + 1}`}
                        >
                            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                                <span className="text-3xl">{item.icon}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-gov-sky mb-1.5">{item.title}</h4>
                                <p className="text-white/70 text-sm leading-relaxed">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
