import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

// animation settings
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}


export default function HeroChallenger() {  
  return (
  <section className="flex flex-col items-center text-center border-t border-slate-100 py-16 dark:border-slate-900 md:py-20">
    <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-bold max-w-3xl">
      If Your Website Were a Salesperson, You’d Have Fired It Already.
    </motion.h1>
    <motion.p variants={fadeIn} transition={{ delay: 0.2 }} className="mt-6 text-lg max-w-2xl ">
      Let’s fix that. Get your free 48-Hour Audit — I’ll pinpoint the dead weight, prioritize what matters, and map out the wins that move the needle.
    </motion.p>
    <motion.div variants={fadeIn} transition={{ delay: 0.4 }} className="mt-8">
      <Button size="lg" className="text-lg font-semibold px-8 py-6">
        → Show Me the Fixes
      </Button>
    </motion.div>
  </section>
  )
}

export const HeroStraightShooter = () => (
  <section className="flex flex-col items-center text-center py-24 px-6 bg-neutral-900 text-white rounded-2xl shadow-xl">
    <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-bold max-w-3xl">
      Your Website Isn’t Broken — It’s Just Wasting Potential.
    </motion.h1>
    <motion.p variants={fadeIn} transition={{ delay: 0.2 }} className="mt-6 text-lg max-w-2xl text-neutral-300">
      In 48 hours, I’ll show you exactly what’s holding it back and how to fix it. No fluff. No jargon. Just an honest roadmap to a site that converts.
    </motion.p>
    <motion.div variants={fadeIn} transition={{ delay: 0.4 }} className="mt-8">
      <Button size="lg" className="text-lg font-semibold px-8 py-6">
        → Start My 48-Hour Audit
      </Button>
    </motion.div>
  </section>
)


export const HeroStrategist = () => (
  <section className="flex flex-col items-center text-center py-24 px-6 bg-black text-white rounded-2xl shadow-xl">
    <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-bold max-w-3xl">
      48 Hours to Total Clarity.
    </motion.h1>
    <motion.p variants={fadeIn} transition={{ delay: 0.2 }} className="mt-6 text-lg max-w-2xl text-neutral-300">
      I’ll audit your website, highlight the exact changes that matter most, and deliver a focused strategy to increase trust, traffic, and conversions.
      You’ll know what to fix — and what to ignore.
    </motion.p>
    <motion.div variants={fadeIn} transition={{ delay: 0.4 }} className="mt-8">
      <Button size="lg" className="text-lg font-semibold px-8 py-6">
        → Claim My Audit
      </Button>
    </motion.div>
  </section>
)

export function HeroVariants() {
  return (
    <div className="space-y-16">
      <HeroStraightShooter />
      <HeroChallenger />
      <HeroStrategist />
    </div>
  )
}
