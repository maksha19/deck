export default function SecuritySlide() {
    const sections = [
        {
            title: 'Data Protection',
            icon: '🔐',
            items: ['Full PDPA compliance', 'IM8 adherence', 'Stored on GCC'],
        },
        {
            title: 'Access Control',
            icon: '🚪',
            items: ['Role-based access', 'Multi-factor auth (MFA)', 'No 3rd-party sharing'],
        },
        {
            title: 'Transparency',
            icon: '📊',
            items: ['Complete audit trail', 'Citizen consent', 'Clear retention policies'],
        },
        {
            title: 'Security Assurance',
            icon: '🛡️',
            items: ['Regular penetration testing', 'GovTech security review', 'Incident response in place'],
        },
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 md:px-8 md:py-16">
            <div className="max-w-6xl w-full">
                {/* Section label */}
                <div className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-gov-sky/20 text-gov-sky text-xs md:text-lg font-medium mb-4 md:mb-6 animate-fade-in">
                    Security & Compliance
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-8 md:mb-12 animate-fade-in-up">
                    Built for Government Standards
                </h2>

                {/* Security sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className={`glass-card p-4 md:p-6 animate-fade-in-up stagger-${index + 1}`}
                        >
                            <div className="flex items-center gap-3 mb-3 md:mb-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gov-sky/20 flex items-center justify-center">
                                    <span className="text-xl md:text-2xl">{section.icon}</span>
                                </div>
                                <h3 className="text-base md:text-xl font-semibold text-white">{section.title}</h3>
                            </div>
                            <ul className="space-y-2 md:space-y-3">
                                {section.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 md:gap-3 text-white/80 text-xs md:text-lg leading-relaxed">
                                        <span className="text-green-400 mt-0.5 flex-shrink-0">✅</span>
                                        <span className="flex-1">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
