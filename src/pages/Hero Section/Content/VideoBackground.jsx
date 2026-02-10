import React from 'react'
import { motion } from 'framer-motion'
import styles from '../HeroSection.module.css'
import videoSource from '../../../assets/Whisk_emyyqtn4i2yxmmzm1sm0ewytetzmrtlwatz50co.mp4'

const VideoBackground = () => {
  return (
    <motion.video
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1.6 }}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className={styles['video-element']}>
      <source src={videoSource} type="video/mp4" />
    </motion.video>
  )
}

export default VideoBackground