export default function TitleSlide() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 md:px-8 md:py-16 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gov-sky/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-gov-gold/10 rounded-full blur-3xl" />

            {/* Logos */}
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 mb-8 md:mb-12 animate-fade-in">
                <div className="glass-card px-4 py-2 md:px-6 md:py-3">
                    <span className="text-white text-xs md:text-base font-semibold tracking-wide">🇸🇬 Singapore Government</span>
                </div>
                <div className="glass-card px-4 py-2 md:px-6 md:py-3">
                    <span className="text-white text-xs md:text-base font-semibold tracking-wide">🌐 Smart Nation</span>
                </div>
            </div>

            {/* Main title */}
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-center mb-4 md:mb-6 animate-fade-in-up gradient-text">
                Digital Pre-Engagement Platform
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl sm:text-2xl md:text-3xl text-white/80 text-center mb-6 md:mb-8 animate-fade-in-up stagger-1">
                Enhancing Ministerial Meet-the-People Sessions
            </h2>

            {/* Tagline */}
            <p className="text-base md:text-xl text-gov-sky text-center max-w-2xl px-4 animate-fade-in-up stagger-2">
                A Citizen-Centric Solution for Smarter Public Engagement
            </p>

            {/* Meta info */}
            <div className="mt-8 md:mt-16 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-white/60 text-xs md:text-base animate-fade-in-up stagger-3">
                <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>20–25 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Minister-Level Presentation</span>
                </div>
                <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>February 2026</span>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </div>
    )
}
