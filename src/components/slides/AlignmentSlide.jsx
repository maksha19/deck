

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
            items: ['Seamless & anticipatory services', 'Building digital capabilities'],
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
            items: ['Standardised case summaries', 'Replicable model for engagement'],
            color: 'purple-500',
        },
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 md:px-8 md:py-16">
            <div className="max-w-7xl w-full">
                {/* Section label */}
                <div className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-gov-sky/20 text-gov-sky text-xs md:text-sm font-medium mb-4 md:mb-6 animate-fade-in">
                    National Priority Alignment
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-8 md:mb-12 animate-fade-in-up">
                    Supporting Singapore's Digital Vision
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
                    {/* Left: Alignments */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
                        {alignments.map((item, index) => (
                            <div
                                key={index}
                                className={`glass-card p-4 md:p-6 animate-fade-in-up stagger-${index + 1} hover:bg-white/10 transition-colors`}
                            >
                                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                                    <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl bg-${item.color}/20 flex items-center justify-center`}>
                                        <span className="text-xl md:text-3xl">{item.icon}</span>
                                    </div>
                                    <h3 className="text-base md:text-xl font-semibold text-white">{item.title}</h3>
                                </div>
                                <ul className="space-y-2 md:space-y-3 ml-1 md:ml-2">
                                    {item.items.map((point, i) => (
                                        <li key={i} className="flex items-start gap-2 md:gap-3 text-white/80 text-[11px] md:text-sm leading-relaxed">
                                            <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                                            <span className="flex-1">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Right: Image */}
                    <div className="animate-fade-in-up stagger-5 order-first lg:order-last mb-6 lg:mb-0">
                        <div className="slide-image">
                            <img
                                src="/deck/images/smart_nation_singapore.png"
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
