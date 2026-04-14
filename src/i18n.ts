export type Lang = 'en' | 'ru' | 'kz'

export const translations = {
  // Nav
  nav_features: { en: 'Features', ru: 'Возможности', kz: 'Мүмкіндіктер' },
  nav_how: { en: 'How it works', ru: 'Как это работает', kz: 'Қалай жұмыс істейді' },
  nav_about: { en: 'About', ru: 'О проекте', kz: 'Жоба туралы' },
  start_training: { en: 'Start Training', ru: 'Начать обучение', kz: 'Оқуды бастау' },

  // Hero
  hero_title: { en: 'Endoscopy Trainer', ru: 'Эндоскопия Тренажёр', kz: 'Эндоскопия Тренажёрі' },
  hero_desc: {
    en: 'AI-powered polyp detection training platform. Sharpen your diagnostic skills with 100 real endoscopic cases, expert-annotated masks, and instant visual comparison.',
    ru: 'Платформа для тренировки обнаружения полипов с помощью ИИ. Совершенствуйте диагностические навыки на 100 реальных эндоскопических случаях с экспертными аннотациями и визуальным сравнением.',
    kz: 'Жасанды интеллект арқылы полиптерді анықтау тренажёрі. 100 нақты эндоскопиялық жағдайда, сарапшылық аннотациялармен және визуалды салыстырумен диагностикалық дағдыларыңызды жетілдіріңіз.',
  },
  learn_more: { en: 'Learn more', ru: 'Узнать больше', kz: 'Толығырақ' },

  // Features
  features_label: { en: 'Features', ru: 'Возможности', kz: 'Мүмкіндіктер' },
  features_title: { en: 'Everything you need to train', ru: 'Всё необходимое для обучения', kz: 'Оқу үшін қажеттінің бәрі' },
  features_desc: {
    en: 'A focused, distraction-free environment to practice polyp detection on real clinical endoscopy images.',
    ru: 'Сосредоточенная среда для практики обнаружения полипов на реальных клинических эндоскопических снимках.',
    kz: 'Нақты клиникалық эндоскопиялық кескіндерде полиптерді анықтау тәжірибесіне арналған ыңғайлы орта.',
  },
  feat1_title: { en: '100 Clinical Cases', ru: '100 клинических случаев', kz: '100 клиникалық жағдай' },
  feat1_desc: {
    en: 'Real endoscopic images across Easy, Medium, and Hard difficulty levels.',
    ru: 'Реальные эндоскопические снимки с уровнями сложности: Лёгкий, Средний и Сложный.',
    kz: 'Жеңіл, Орташа және Қиын деңгейлердегі нақты эндоскопиялық кескіндер.',
  },
  feat2_title: { en: 'Mask Comparison Slider', ru: 'Слайдер сравнения масок', kz: 'Маска салыстыру слайдері' },
  feat2_desc: {
    en: 'Interactive before/after slider to compare your observation with expert annotations.',
    ru: 'Интерактивный слайдер «до/после» для сравнения вашего наблюдения с экспертными аннотациями.',
    kz: 'Сіздің бақылауыңызды сарапшылық аннотациялармен салыстыру үшін интерактивті «дейін/кейін» слайдері.',
  },
  feat3_title: { en: 'Fully Private', ru: 'Полная приватность', kz: 'Толық құпиялылық' },
  feat3_desc: {
    en: 'No backend, no data collection. All answers stay on your device in local storage.',
    ru: 'Без сервера, без сбора данных. Все ответы остаются на вашем устройстве.',
    kz: 'Сервер жоқ, деректер жиналмайды. Барлық жауаптар сіздің құрылғыңызда сақталады.',
  },

  // How it works
  how_label: { en: 'How it works', ru: 'Как это работает', kz: 'Қалай жұмыс істейді' },
  how_title: { en: '3 steps per case', ru: '3 шага на каждый случай', kz: 'Әр жағдай үшін 3 қадам' },
  step1_title: { en: 'Observe', ru: 'Наблюдение', kz: 'Бақылау' },
  step1_desc: {
    en: 'View the endoscopic image and decide whether you see a suspicious region.',
    ru: 'Просмотрите эндоскопический снимок и решите, видите ли вы подозрительную область.',
    kz: 'Эндоскопиялық кескінді қарап, күдікті аймақ бар-жоғын анықтаңыз.',
  },
  step2_title: { en: 'Compare', ru: 'Сравнение', kz: 'Салыстыру' },
  step2_desc: {
    en: 'Use the interactive slider to compare your observation against the AI-annotated mask.',
    ru: 'Используйте интерактивный слайдер для сравнения вашего наблюдения с ИИ-аннотированной маской.',
    kz: 'ЖИ-аннотацияланған маскамен бақылауыңызды салыстыру үшін интерактивті слайдерді пайдаланыңыз.',
  },
  step3_title: { en: 'Decide', ru: 'Решение', kz: 'Шешім' },
  step3_desc: {
    en: 'Make your final clinical decision — Polyp or No Polyp — and move to the next case.',
    ru: 'Примите окончательное клиническое решение — Полип или Нет полипа — и переходите к следующему случаю.',
    kz: 'Соңғы клиникалық шешім қабылдаңыз — Полип немесе Полип жоқ — және келесі жағдайға өтіңіз.',
  },

  // CTA
  cta_title: { en: 'Ready to train?', ru: 'Готовы к обучению?', kz: 'Оқуға дайынсыз ба?' },
  cta_desc: {
    en: 'No sign-up required. No data leaves your browser. Just you and 100 clinical cases.',
    ru: 'Регистрация не нужна. Данные не покидают ваш браузер. Только вы и 100 клинических случаев.',
    kz: 'Тіркелу қажет емес. Деректер браузерден шықпайды. Тек сіз және 100 клиникалық жағдай.',
  },
  start_now: { en: 'Start Training Now', ru: 'Начать обучение', kz: 'Оқуды бастау' },

  // Footer
  footer_text: {
    en: 'Built for medical education. No patient data is collected.',
    ru: 'Создано для медицинского образования. Данные пациентов не собираются.',
    kz: 'Медициналық білім беру үшін жасалған. Пациент деректері жиналмайды.',
  },

  // Trainer
  session_complete: { en: 'Session Complete', ru: 'Сессия завершена', kz: 'Сессия аяқталды' },
  reviewed_all: { en: 'You reviewed all', ru: 'Вы просмотрели все', kz: 'Сіз барлығын қарадыңыз:' },
  cases: { en: 'cases', ru: 'случаев', kz: 'жағдай' },
  restart: { en: 'Restart', ru: 'Заново', kz: 'Қайта бастау' },
  back_home: { en: 'Back to Home', ru: 'На главную', kz: 'Басты бетке' },
  q_suspicious: { en: 'Do you see a suspicious region?', ru: 'Вы видите подозрительную область?', kz: 'Күдікті аймақты көріп тұрсыз ба?' },
  q_compare: { en: 'Compare with annotated mask', ru: 'Сравните с аннотированной маской', kz: 'Аннотацияланған маскамен салыстырыңыз' },
  q_decision: { en: 'What is your final decision?', ru: 'Каково ваше окончательное решение?', kz: 'Сіздің соңғы шешіміңіз қандай?' },
  slider_hint: {
    en: 'Drag the slider to compare original with expert-annotated mask.',
    ru: 'Перетащите слайдер для сравнения оригинала с экспертной маской.',
    kz: 'Түпнұсқаны сарапшылық маскамен салыстыру үшін слайдерді жылжытыңыз.',
  },
  yes_suspicious: { en: 'Yes, suspicious', ru: 'Да, подозрительно', kz: 'Иә, күдікті' },
  no_normal: { en: 'No, looks normal', ru: 'Нет, выглядит нормально', kz: 'Жоқ, қалыпты' },
  continue_btn: { en: 'Continue to decision', ru: 'Перейти к решению', kz: 'Шешімге өту' },
  polyp_detected: { en: 'Polyp detected', ru: 'Полип обнаружен', kz: 'Полип анықталды' },
  no_polyp: { en: 'No polyp', ru: 'Полипа нет', kz: 'Полип жоқ' },
  loading: { en: 'Loading images...', ru: 'Загрузка изображений...', kz: 'Кескіндер жүктелуде...' },
} as const

export type TranslationKey = keyof typeof translations

export function t(key: TranslationKey, lang: Lang): string {
  return translations[key][lang]
}
