'use client'

import { motion, type HTMLMotionProps, useReducedMotion } from 'framer-motion'
import {
  defaultTransition,
  defaultViewport,
  fadeIn,
  fadeUp,
  scaleIn,
  staggerContainer,
  staggerItem,
} from '@/lib/motion'
import { cn } from '@/lib/utils'

type MotionVariant = 'fadeUp' | 'fadeIn' | 'scaleIn' | 'stagger' | 'staggerItem'

const variantsMap = {
  fadeUp,
  fadeIn,
  scaleIn,
  stagger: staggerContainer,
  staggerItem,
}

type MotionWrapperProps = HTMLMotionProps<'div'> & {
  variant?: MotionVariant
  inView?: boolean
}

/** Scroll-triggered animation wrapper with reduced-motion support */
export function MotionWrapper({
  variant = 'fadeUp',
  inView = true,
  className,
  children,
  ...props
}: MotionWrapperProps) {
  const reduced = useReducedMotion()
  const variants = variantsMap[variant]

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView={inView ? 'visible' : undefined}
      animate={inView ? undefined : 'visible'}
      viewport={inView ? defaultViewport : undefined}
      variants={variants}
      transition={defaultTransition}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export { motion, staggerContainer, staggerItem, fadeUp, defaultViewport }
