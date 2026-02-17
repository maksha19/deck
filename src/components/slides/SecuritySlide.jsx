export default function SecuritySlide() {
    const sections = [
        {
            title: 'Data Protection',
            icon: '🔐',
            items: ['Full PDPA compliance', 'Government Instruction Manual (IM8) adherence', 'Data stored on Government Commercial Cloud (GCC)'],
        },
        {
            title: 'Access Control',
            icon: '🚪',
            items: ['Role-based access for authorised officers only', 'Multi-factor authentication (MFA)', 'No third-party data sharing'],
        },
        {
            title: 'Transparency & Accountability',
            icon: '📊',
            items: ['Complete audit trail for all actions', 'Citizen consent obtained at submission', 'Clear data retention and deletion policies'],
        },
        {
            title: 'Security Assurance',
            icon: '🛡️',
            items: ['Regular penetration testing', 'GovTech security review completed', 'Incident response procedures in place'],
        },
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
            <div className="max-w-6xl w-full">
                {/* Section label */}
                <div className="inline-block px-4 py-2 rounded-full bg-gov-sky/20 text-gov-sky text-sm font-medium mb-6 animate-fade-in">
                    Slide 10 — Security & Compliance
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 animate-fade-in-up">
                    Built for Government Standards
                </h2>

                {/* Security sections */}
                <div className="grid md:grid-cols-2 gap-6">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className={`glass-card p-6 animate-fade-in-up stagger-${index + 1}`}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-gov-sky/20 flex items-center justify-center">
                                    <span className="text-2xl">{section.icon}</span>
                                </div>
                                <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                            </div>
                            <ul className="space-y-3">
                                {section.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
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
