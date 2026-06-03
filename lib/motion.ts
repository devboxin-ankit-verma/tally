import type { Transition } from 'framer-motion'

/** Default viewport trigger for scroll animations (threshold ~0.2) */
export const defaultViewport = { once: true, amount: 0.2 as const }

/** Premium ease-in-out transitions (0.3s – 0.6s) */
export const premiumEase = [0.42, 0, 0.58, 1] as const

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

export const slideFromLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0 },
}

export const slideFromRight = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0 },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: { y: -6, scale: 1.02, transition: { duration: 0.25 } },
}

export const defaultTransition: Transition = {
  duration: 0.5,
  ease: premiumEase,
}

export const fastTransition: Transition = {
  duration: 0.35,
  ease: premiumEase,
}

export const navTransition: Transition = {
  duration: 0.4,
  ease: premiumEase,
}
