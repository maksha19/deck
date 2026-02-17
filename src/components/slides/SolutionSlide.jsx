export default function SolutionSlide() {
    const steps = [
        {
            number: 1,
            title: 'Citizen Submits',
            items: ['Video recording (tell your story)', 'Audio message', 'Text description', 'Supporting documents'],
            icon: '📱',
            color: 'gov-sky',
        },
        {
            number: 2,
            title: 'System Prepares',
            items: ['AI-assisted synthesis into structured summary', 'Key issues identified', 'Relevant agencies flagged'],
            icon: '🤖',
            color: 'gov-gold',
        },
        {
            number: 3,
            title: 'Officer Reviews',
            items: ['Case brief 24–48 hours before', 'Pre-coordinate with agencies', 'Prepared for focused discussion'],
            icon: '📋',
            color: 'gov-sky',
        },
        {
            number: 4,
            title: 'Session Happens',
            items: ['More meaningful interaction', 'Faster resolution', 'Better citizen experience'],
            icon: '✨',
            color: 'green-500',
        },
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
            <div className="max-w-7xl w-full">
                {/* Section label */}
                <div className="inline-block px-4 py-2 rounded-full bg-gov-sky/20 text-gov-sky text-sm font-medium mb-6 animate-fade-in">
                    Slide 6 — Solution Overview
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
                    Digital Pre-Engagement Platform
                </h2>
                <p className="text-xl text-white/60 mb-12 animate-fade-in-up stagger-1">
                    How It Works
                </p>

                {/* Hero Image */}
                {/* <div className="mb-12 animate-fade-in-up stagger-2">
                    <div className="slide-image max-w-3xl mx-auto">
                        <img
                            src="/images/ai_digital_transformation.png"
                            alt="AI and digital transformation"
                            className="w-full h-auto"
                        />
                    </div>
                </div> */}

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-center gap-4 w-full">
                            <div
                                className={`glass-card p-6 relative min-h-[250px] w-full animate-fade-in-up stagger-${index + 1} hover:scale-105 transition-transform`}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    {/* Icon */}
                                    <div className="text-4xl">{step.icon}</div>

                                    {/* Title */}
                                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                                </div>

                                {/* Items */}
                                <ul className="space-y-2">
                                    {step.items.map((item, i) => (
                                        <li key={i} className="text-white/80 text-sm flex items-start gap-2 leading-relaxed">
                                            <span className="text-gov-sky mt-0.5 flex-shrink-0">•</span>
                                            <span className="flex-1">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Arrow to next */}
                            {index < steps.length - 1 && (
                                <div className="flex items-center justify-center transform rotate-90 md:rotate-0 my-4 md:my-0">
                                    <svg className="w-6 h-6 text-gov-sky" fill="none" stroke="white" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={7} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
