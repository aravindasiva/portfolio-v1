import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { fadeInUpSlower } from '../../config/animation'


const FadeLayout = ({ children }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (inView) {
      controls.start('animate')
    }
  }, [controls, inView])

  return (
    <motion.div
      style={{ margin: 0 }}
      ref={ref}
      animate={controls}
      initial="initial"
      variants={fadeInUpSlower}
    >
      {children}
    </motion.div>
  )
}

export default FadeLayout