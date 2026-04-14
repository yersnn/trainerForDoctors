import { useState, useEffect, createContext, useContext } from 'react'
import { ImageComparison } from '@/components/ui/image-comparison-slider'
import { SparklesText } from '@/components/ui/sparkles-text'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { ShineButton } from '@/components/ui/shine-button'
import { Button } from '@/components/ui/button'
import { motion, useScroll, AnimatePresence } from 'framer-motion'
import { ChevronRight, Menu, X, Eye, Layers, Shield, Microscope, ArrowLeft, Check, RotateCcw, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import { type Lang, type TranslationKey, t as translate } from '@/i18n'

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: 'en', setLang: () => {} })
function useLang() { return useContext(LangContext) }
function useT() {
  const { lang } = useLang()
  return (key: TranslationKey) => translate(key, lang)
}

const langLabels: Record<Lang, string> = { en: 'EN', ru: 'RU', kz: 'KZ' }
const langOrder: Lang[] = ['en', 'ru', 'kz']

function LangSwitcher() {
  const { lang, setLang } = useLang()
  return (
    <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm p-0.5">
      {langOrder.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={cn(
            'text-xs font-semibold px-2.5 py-1 rounded-full transition-all duration-200',
            l === lang ? 'bg-primary text-white shadow-sm' : 'text-muted-foreground hover:text-foreground'
          )}
        >
          {langLabels[l]}
        </button>
      ))}
    </div>
  )
}

interface ImageData {
  id: number
  original: string
  mask: string
  area: number
  difficulty: string
}

interface Answer {
  id: number
  suspicious: string
  decision?: string
}

function shuffle<T>(array: T[]): T[] {
  const a = [...array]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const BASE = import.meta.env.BASE_URL

/* ===========================
   LANDING PAGE
   =========================== */

const navKeys: { key: TranslationKey; href: string }[] = [
  { key: 'nav_features', href: '#features' },
  { key: 'nav_how', href: '#how-it-works' },
  { key: 'nav_about', href: '#about' },
]

function Header({ onStart }: { onStart: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const t = useT()

  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => setScrolled(v > 0.03))
    return () => unsub()
  }, [scrollYProgress])

  return (
    <header>
      <nav data-state={menuOpen ? 'active' : undefined} className="group fixed z-20 w-full pt-2">
        <div className={cn('mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12', scrolled && 'bg-white/90 shadow-sm')}>
          <div className={cn('relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6', scrolled && 'lg:py-4')}>
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>

              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm">
                  {navKeys.map((item) => (
                    <li key={item.key}>
                      <a href={item.href} className="text-muted-foreground hover:text-foreground duration-150">{t(item.key)}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {navKeys.map((item) => (
                    <li key={item.key}>
                      <a href={item.href} className="text-muted-foreground hover:text-foreground duration-150">{t(item.key)}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <LangSwitcher />
              <ShineButton size="sm" className="bg-primary hover:bg-primary/90" onClick={onStart}>
                {t('start_training')}
              </ShineButton>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

function Landing({ onStart }: { onStart: () => void }) {
  const t = useT()

  return (
    <div className="overflow-x-hidden bg-white">
      <Header onStart={onStart} />

      {/* HERO */}
      <AuroraBackground className="min-h-[90vh] rounded-b-[3rem] overflow-hidden" showRadialGradient={true}>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 pt-36 pb-24 md:pt-44 md:pb-32 lg:pt-48 lg:pb-36">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <SparklesText
                text={t('hero_title')}
                className="text-balance text-5xl md:text-6xl xl:text-7xl text-foreground"
                colors={{ first: '#0284c7', second: '#38bdf8' }}
                sparklesCount={12}
              />
              <p className="mt-8 max-w-xl text-balance text-lg text-muted-foreground mx-auto lg:mx-0">
                {t('hero_desc')}
              </p>

              <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <ShineButton
                  size="lg"
                  className="h-14 rounded-full pl-6 pr-4 text-base bg-primary hover:bg-primary/90"
                  onClick={onStart}
                >
                  <span className="text-nowrap">{t('start_training')}</span>
                  <ChevronRight className="ml-1" />
                </ShineButton>
                <Button
                  size="lg"
                  variant="ghost"
                  className="h-14 rounded-full px-5 text-base hover:bg-zinc-950/5"
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="text-nowrap">{t('learn_more')}</span>
                </Button>
              </div>
            </div>

            <div className="hidden lg:flex justify-center lg:justify-end">
              <img
                src={`${BASE}doctor.png`}
                alt="Doctor"
                className="max-h-[520px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </AuroraBackground>

      {/* FEATURES */}
      <section id="features" className="py-24 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">{t('features_label')}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t('features_title')}</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{t('features_desc')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {([
              { icon: Eye, titleKey: 'feat1_title' as const, descKey: 'feat1_desc' as const },
              { icon: Layers, titleKey: 'feat2_title' as const, descKey: 'feat2_desc' as const },
              { icon: Shield, titleKey: 'feat3_title' as const, descKey: 'feat3_desc' as const },
            ]).map((f) => (
              <motion.div
                key={f.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t(f.titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(f.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">{t('how_label')}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t('how_title')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {([
              { step: '01', titleKey: 'step1_title' as const, descKey: 'step1_desc' as const },
              { step: '02', titleKey: 'step2_title' as const, descKey: 'step2_desc' as const },
              { step: '03', titleKey: 'step3_title' as const, descKey: 'step3_desc' as const },
            ]).map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center p-8"
              >
                <div className="text-5xl font-black text-primary/15 mb-4">{s.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{t(s.titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(s.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="about" className="py-24 bg-slate-50/50">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SparklesText
            text={t('cta_title')}
            className="text-3xl md:text-5xl text-foreground mb-6"
            colors={{ first: '#0284c7', second: '#38bdf8' }}
            sparklesCount={8}
          />
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            {t('cta_desc')}
          </p>
          <ShineButton
            size="lg"
            className="h-14 rounded-full px-8 text-base bg-primary hover:bg-primary/90"
            onClick={onStart}
          >
            {t('start_now')}
            <ChevronRight className="ml-1" />
          </ShineButton>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-100 py-8 bg-white">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Microscope className="h-4 w-4 text-primary" />
            <span>EndoTrainer</span>
          </div>
          <p>{t('footer_text')}</p>
        </div>
      </footer>
    </div>
  )
}

/* ===========================
   TRAINER
   =========================== */

function Trainer({ images, onExit }: { images: ImageData[]; onExit: () => void }) {
  const [current, setCurrent] = useState(0)
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [finished, setFinished] = useState(false)
  const t = useT()

  const handleRestart = () => {
    setCurrent(0)
    setStep(1)
    setAnswers([])
    setFinished(false)
  }

  if (finished) {
    return (
      <div className="min-h-screen bg-slate-50/80 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl p-12 text-center shadow-lg border border-slate-100 max-w-md w-full"
        >
          <div className="h-16 w-16 rounded-full bg-green-50 text-green-500 flex items-center justify-center mx-auto mb-6">
            <Check className="h-8 w-8" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">{t('session_complete')}</h2>
          <p className="text-muted-foreground mb-8">{t('reviewed_all')} {images.length} {t('cases')}.</p>
          <div className="flex gap-3 justify-center">
            <Button className="rounded-full bg-primary hover:bg-primary/90" onClick={handleRestart}>
              <RotateCcw className="h-4 w-4 mr-2" />
              {t('restart')}
            </Button>
            <Button variant="outline" className="rounded-full" onClick={onExit}>
              {t('back_home')}
            </Button>
          </div>
        </motion.div>
      </div>
    )
  }

  const img = images[current]

  const handleSuspicious = (answer: string) => {
    setAnswers(prev => [...prev, { id: img.id, suspicious: answer }])
    setStep(2)
  }

  const handleContinue = () => setStep(3)

  const handleDecision = (decision: string) => {
    setAnswers(prev => {
      const updated = [...prev]
      updated[updated.length - 1].decision = decision
      return updated
    })
    if (current + 1 >= images.length) {
      setFinished(true)
    } else {
      setCurrent(current + 1)
      setStep(1)
    }
  }

  const originalSrc = `${BASE}originals/${img.original}`
  const maskSrc = `${BASE}masks/${img.mask}`

  return (
    <div className="h-screen flex flex-col bg-slate-50/80 overflow-hidden">
      {/* Back button */}
      <div className="absolute top-4 left-4 z-10">
        <button
          onClick={onExit}
          className="h-10 w-10 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-white shadow-sm border border-slate-100 flex items-center justify-center text-muted-foreground transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
      </div>

      {/* Content — fills the screen */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${current}-${step}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-3xl flex flex-col items-center"
          >
            {/* Image */}
            <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50"
              style={{ maxHeight: '60vh' }}
            >
              {step === 1 ? (
                <img src={originalSrc} alt="Endoscopy" className="w-full h-full object-contain" />
              ) : (
                <ImageComparison
                  beforeImage={originalSrc}
                  afterImage={maskSrc}
                  altBefore="Original endoscopy"
                  altAfter="Annotated mask"
                />
              )}
            </div>

            {/* Question + buttons */}
            <div className="mt-6 text-center">
              <h2 className="text-lg font-semibold text-foreground mb-1">
                {step === 1 && t('q_suspicious')}
                {step === 2 && t('q_compare')}
                {step === 3 && t('q_decision')}
              </h2>

              {step === 2 && (
                <p className="text-sm text-muted-foreground mb-4">{t('slider_hint')}</p>
              )}

              <div className="flex gap-3 justify-center mt-4">
                {step === 1 && (
                  <>
                    <Button
                      className="rounded-full h-11 px-8 bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => handleSuspicious('yes')}
                    >
                      {t('yes_suspicious')}
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-full h-11 px-8"
                      onClick={() => handleSuspicious('no')}
                    >
                      {t('no_normal')}
                    </Button>
                  </>
                )}

                {step === 2 && (
                  <ShineButton
                    className="rounded-full h-11 px-8 bg-primary hover:bg-primary/90"
                    onClick={handleContinue}
                  >
                    {t('continue_btn')}
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </ShineButton>
                )}

                {step === 3 && (
                  <>
                    <Button
                      className="rounded-full h-11 px-8 bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => handleDecision('polyp')}
                    >
                      {t('polyp_detected')}
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-full h-11 px-8"
                      onClick={() => handleDecision('no_polyp')}
                    >
                      {t('no_polyp')}
                    </Button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

/* ===========================
   APP ROOT
   =========================== */

function App() {
  const [screen, setScreen] = useState('landing')
  const [images, setImages] = useState<ImageData[]>([])
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem('lang') as Lang) || 'en')

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  useEffect(() => {
    fetch(`${BASE}metadata.json`)
      .then(r => r.json())
      .then(data => setImages(shuffle(data)))
  }, [])

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {screen === 'landing' ? (
        <Landing onStart={() => setScreen('training')} />
      ) : images.length === 0 ? (
        <div className="flex items-center justify-center min-h-screen text-muted-foreground">
          {translate('loading', lang)}
        </div>
      ) : (
        <Trainer images={images} onExit={() => setScreen('landing')} />
      )}
    </LangContext.Provider>
  )
}

export default App
