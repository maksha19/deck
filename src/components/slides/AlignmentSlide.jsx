export default function AlignmentSlide() {
    const alignments = [
        {
            title: 'Smart Nation',
            icon: '🌐',
            items: ['Harnessing technology to improve lives', 'Digital-first, citizen-centric services'],
            color: 'gov-sky',
        },
        {
            title: 'Digital Government Blueprint',
            icon: '📋',
            items: ['Seamless & anticipatory services', 'Building digital capabilities in public sector'],
            color: 'gov-gold',
        },
        {
            title: 'Public Sector Transformation',
            icon: '🔧',
            items: ['Empowering officers with better tools', 'Enhancing frontline service delivery'],
            color: 'green-500',
        },
        {
            title: 'Whole-of-Government',
            icon: '🤝',
            items: ['Standardised case summaries enable cross-agency coordination', 'Replicable model for other engagement channels'],
            color: 'purple-500',
        },
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
            <div className="max-w-7xl w-full">
                {/* Section label */}
                <div className="inline-block px-4 py-2 rounded-full bg-gov-sky/20 text-gov-sky text-sm font-medium mb-6 animate-fade-in">
                    Slide 8 — National Priority Alignment
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 animate-fade-in-up">
                    Supporting Singapore's Digital Vision
                </h2>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left: Alignments */}
                    <div className="grid gap-6">
                        {alignments.map((item, index) => (
                            <div
                                key={index}
                                className={`glass-card p-6 animate-fade-in-up stagger-${index + 1} hover:bg-white/10 transition-colors`}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`w-14 h-14 rounded-xl bg-${item.color}/20 flex items-center justify-center`}>
                                        <span className="text-3xl">{item.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                                </div>
                                <ul className="space-y-3 ml-2">
                                    {item.items.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
                                            <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                                            <span className="flex-1">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Right: Image */}
                    <div className="animate-fade-in-up stagger-5">
                        <div className="slide-image">
                            <img
                                src="/images/smart_nation_singapore.png"
                                alt="Smart Nation Singapore"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
