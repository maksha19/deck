import { useState } from 'react'

export default function Navigation({ currentSlide, totalSlides, onPrev, onNext, onGoTo, slides }) {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <>
            {/* Navigation arrows */}
            <div className="fixed bottom-1/2 translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none z-50">
                <button
                    onClick={onPrev}
                    disabled={currentSlide === 0}
                    className="pointer-events-auto p-3 rounded-full glass-card hover:bg-white/20 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group"
                    aria-label="Previous slide"
                >
                    <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={onNext}
                    disabled={currentSlide === totalSlides - 1}
                    className="pointer-events-auto p-3 rounded-full glass-card hover:bg-white/20 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group"
                    aria-label="Next slide"
                >
                    <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Slide menu toggle */}
            <button
                onClick={() => setShowMenu(!showMenu)}
                className="fixed top-6 right-6 p-3 rounded-full glass-card hover:bg-white/20 transition-all duration-300 z-50"
                aria-label="Toggle slide menu"
            >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Slide menu */}
            {showMenu && (
                <div className="fixed top-20 right-6 w-64 max-h-96 overflow-y-auto glass-card p-4 z-50 animate-fade-in">
                    <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Slides</h3>
                    <div className="space-y-1">
                        {slides.map((slide, index) => (
                            <button
                                key={slide.id}
                                onClick={() => {
                                    onGoTo(index)
                                    setShowMenu(false)
                                }}
                                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 ${index === currentSlide
                                    ? 'bg-gov-sky/30 text-white font-medium'
                                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs">
                                    {slide.id}
                                </span>
                                {slide.title}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Navigation dots */}
            {/* <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-50">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => onGoTo(index)}
                        className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div> */}
        </>
    )
}
