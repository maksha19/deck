import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function DemoSlide() {
    const [activeTab, setActiveTab] = useState('citizen')
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalImageIndex, setModalImageIndex] = useState(0)

    const demos = [
        {
            id: 'citizen',
            title: 'Citizen experience',
            description: 'Simple, streamlined interface for submitting requests.',
            images: [
                '/deck/images/user/user_dashboard.png',
                '/deck/images/user/user_submit.png',
            ],
            badge: 'User Interface',
        },
        {
            id: 'officer',
            title: 'Officer experience',
            description: 'Real-time overview of all pending and processed requests with detailed case management tools.',
            images: [
                '/deck/images/admin/admin_dashboard.png',
                '/deck/images/admin/admin_submission_1.png',
                '/deck/images/admin/admin_submission_2.png',
                '/deck/images/admin/admin_submission_3.png',
            ],
            badge: 'Admin Panel',
        }
    ]

    const activeDemo = demos.find(d => d.id === activeTab)

    // Reset slider index when tab changes
    useEffect(() => {
        setCurrentSlideIndex(0)
    }, [activeTab])

    const nextSlide = (e) => {
        e.stopPropagation()
        setCurrentSlideIndex((prev) => (prev + 1) % activeDemo.images.length)
    }

    const prevSlide = (e) => {
        e.stopPropagation()
        setCurrentSlideIndex((prev) => (prev - 1 + activeDemo.images.length) % activeDemo.images.length)
    }

    const openModal = (index) => {
        setModalImageIndex(index)
        setIsModalOpen(true)
    }

    const closeModal = () => setIsModalOpen(false)

    const nextModalImage = () => setModalImageIndex((prev) => (prev + 1) % activeDemo.images.length)
    const prevModalImage = () => setModalImageIndex((prev) => (prev - 1 + activeDemo.images.length) % activeDemo.images.length)

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 md:px-8 md:py-16">
            <div className="max-w-7xl w-full">
                {/* Section label */}
                <div className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-gov-sky/20 text-gov-sky text-xs md:text-lg font-medium mb-4 md:mb-6 animate-fade-in">
                    System Demo
                </div>

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
                            Interface <span className="text-gov-sky">Showcase</span>
                        </h2>
                        <p className="text-lg md:text-xl text-white/60 animate-fade-in-up stagger-1">
                            A glimpse into the digital transformation for citizens and officers.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex bg-white/5 p-1.5 rounded-2xl backdrop-blur-sm animate-fade-in-up stagger-2">
                        {demos.map((demo) => (
                            <button
                                key={demo.id}
                                onClick={() => setActiveTab(demo.id)}
                                className={`px-4 py-2 md:px-6 md:py-3 rounded-xl transition-all duration-300 text-sm md:text-base font-semibold ${activeTab === demo.id
                                    ? 'bg-gov-sky text-slate-900 shadow-lg shadow-gov-sky/20'
                                    : 'text-white/60 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {demo.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Screenshot Slider/Preview */}
                    <div className="lg:col-span-7 animate-scale-in stagger-3">
                        <div className="relative group cursor-pointer" onClick={() => openModal(currentSlideIndex)}>
                            {/* Decorative glows */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-gov-sky/20 to-purple-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>

                            <div className="glass-card relative overflow-hidden rounded-2xl border border-white/10 aspect-video md:aspect-[16/10] bg-slate-900">
                                <img
                                    key={activeDemo.images[currentSlideIndex]}
                                    src={activeDemo.images[currentSlideIndex]}
                                    alt={activeDemo.title}
                                    className="w-full h-full object-contain object-top animate-fade-in"
                                />

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/20">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Slider Controls (if more than 1 image) */}
                                {activeDemo.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevSlide}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={nextSlide}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>

                                        {/* Index Indicator */}
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-xs text-white/80 border border-white/10">
                                            {currentSlideIndex + 1} / {activeDemo.images.length}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Details column */}
                    <div className="lg:col-span-5 space-y-6 animate-fade-in-up stagger-4">
                        <div className={`p-6 md:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md relative overflow-hidden`}>
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-gov-sky/30 bg-gov-sky/10 text-gov-sky`}>
                                {activeDemo.badge}
                            </span>

                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                {activeDemo.title}
                            </h3>

                            <p className="text-white/70 leading-relaxed text-base md:text-xl mb-8">
                                {activeDemo.description}
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-white/80">
                                    <div className="w-8 h-8 rounded-full bg-gov-sky/20 flex items-center justify-center text-gov-sky">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span>Responsive Web Design</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/80">
                                    <div className="w-8 h-8 rounded-full bg-gov-sky/20 flex items-center justify-center text-gov-sky">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span>Integrated Workflows</span>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Preview / Hint */}
                        <div className="flex gap-4 items-center">
                            {activeDemo.images.length > 1 && (
                                <div className="flex gap-2">
                                    {activeDemo.images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentSlideIndex(idx)}
                                            className={`w-12 h-12 rounded-lg border-2 overflow-hidden transition-all ${currentSlideIndex === idx ? 'border-gov-sky scale-110' : 'border-white/10 hover:border-white/30'
                                                }`}
                                        >
                                            <img src={img} className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            )}
                            <div className="flex-1 p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">
                                <span className="text-gov-sky text-xl animate-pulse">💡</span>
                                <p className="text-white/40 text-[10px] md:text-xs">
                                    Click image to expand view.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full Screen Modal - rendered via Portal to escape parent transforms */}
            {isModalOpen && createPortal(
                <div
                    style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(2, 6, 23, 0.95)', backdropFilter: 'blur(24px)' }}
                    onClick={closeModal}
                >
                    {/* Close button - top right */}
                    <button
                        style={{ position: 'fixed', top: 24, right: 24, zIndex: 10000, padding: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        onClick={(e) => { e.stopPropagation(); closeModal(); }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                    >
                        <svg style={{ width: 32, height: 32, color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Prev button - left center */}
                    {activeDemo.images.length > 1 && (
                        <button
                            onClick={(e) => { e.stopPropagation(); prevModalImage(); }}
                            className='top-[80%] md:top-1/2 left-2'
                            style={{ position: 'fixed', transform: 'translateY(-50%)', zIndex: 10000, padding: 12, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                        >
                            <svg style={{ width: 28, height: 28, color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}

                    {/* Next button - right center */}
                    {activeDemo.images.length > 1 && (
                        <button
                            onClick={(e) => { e.stopPropagation(); nextModalImage(); }}
                            className='top-[80%] md:top-1/2 right-2'
                            style={{ position: 'fixed', transform: 'translateY(-50%)', zIndex: 10000, padding: 12, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                        >
                            <svg style={{ width: 28, height: 28, color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}

                    {/* Image - centered */}
                    <div
                        style={{ position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        className='p-2 md:p-24'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={activeDemo.images[modalImageIndex]}
                            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: 12, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}
                            alt="Expanded view"
                        />
                    </div>

                    {/* Image counter - bottom center */}
                    <div style={{ position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)', zIndex: 10000, color: 'rgba(255,255,255,0.6)', fontSize: 14, fontWeight: 500, background: 'rgba(0,0,0,0.4)', padding: '6px 16px', borderRadius: 9999, backdropFilter: 'blur(12px)' }}>
                        Image {modalImageIndex + 1} of {activeDemo.images.length}
                    </div>
                </div>,
                document.body
            )}
        </div>
    )
}
