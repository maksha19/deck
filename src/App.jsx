import { useState, useEffect, useCallback } from 'react'
import DemoSlide from './components/slides/DemoSlide'
import TitleSlide from './components/slides/TitleSlide'
import OpportunitySlide from './components/slides/OpportunitySlide'
import ChallengeSlide from './components/slides/ChallengeSlide'
import CurrentStateSlide from './components/slides/CurrentStateSlide'
import FutureStateSlide from './components/slides/FutureStateSlide'
import SolutionSlide from './components/slides/SolutionSlide'
import FeaturesSlide from './components/slides/FeaturesSlide'
import AlignmentSlide from './components/slides/AlignmentSlide'
import OutcomesSlide from './components/slides/OutcomesSlide'
import SecuritySlide from './components/slides/SecuritySlide'
import RiskSlide from './components/slides/RiskSlide'
import CostSlide from './components/slides/CostSlide'
import PilotSlide from './components/slides/PilotSlide'
import SuccessSlide from './components/slides/SuccessSlide'
import AskSlide from './components/slides/AskSlide'
import VisionSlide from './components/slides/VisionSlide'
import ClosingSlide from './components/slides/ClosingSlide'
import Navigation from './components/ui/Navigation'
import ProgressBar from './components/ui/ProgressBar'

const slides = [
  { id: 1, component: TitleSlide, title: 'Title' },
  { id: 2, component: OpportunitySlide, title: 'Opportunity' },
  { id: 3, component: ChallengeSlide, title: 'Challenge' },
  // { id: 4, component: CurrentStateSlide, title: 'Current State' },
  { id: 5, component: FutureStateSlide, title: 'Future State' },
  { id: 6, component: SolutionSlide, title: 'Solution' },
  { id: 7, component: FeaturesSlide, title: 'Features' },
  { id: 8, component: DemoSlide, title: 'Demo' },
  { id: 9, component: AlignmentSlide, title: 'Alignment' },
  { id: 10, component: OutcomesSlide, title: 'Outcomes' },
  { id: 11, component: SecuritySlide, title: 'Security' },
  { id: 12, component: RiskSlide, title: 'Risks' },
  { id: 13, component: CostSlide, title: 'Cost & Value' },
  { id: 14, component: PilotSlide, title: 'Pilot Plan' },
  { id: 15, component: SuccessSlide, title: 'Success Criteria' },
  { id: 16, component: AskSlide, title: 'The Ask' },
  { id: 17, component: VisionSlide, title: 'Vision' },
  { id: 18, component: ClosingSlide, title: 'Closing' },
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index)
    }
  }, [])

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1)
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1)
  }, [currentSlide, goToSlide])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        prevSlide()
      } else if (e.key === 'Home') {
        e.preventDefault()
        goToSlide(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        goToSlide(slides.length - 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide, goToSlide])

  const CurrentSlideComponent = slides[currentSlide].component

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ProgressBar current={currentSlide} total={slides.length} />

      <main className="relative min-h-screen">
        <CurrentSlideComponent key={currentSlide} />
      </main>

      <Navigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrev={prevSlide}
        onNext={nextSlide}
        onGoTo={goToSlide}
        slides={slides}
      />

      {/* Slide counter */}
      {/* <div className="fixed bottom-6 left-6 text-white/60 text-sm font-medium z-50">
        {currentSlide + 1} / {slides.length}
      </div> */}

      {/* Keyboard hint */}
      {/* <div className="fixed bottom-6 right-6 text-white/40 text-xs z-50 hidden md:block">
        Use arrow keys to navigate
      </div> */}
    </div>
  )
}

export default App
