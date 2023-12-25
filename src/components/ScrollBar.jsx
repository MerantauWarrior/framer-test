'use client'

import React from 'react';
import { motion, useScroll, useSpring } from "framer-motion";

import styles from "@/styles/page.module.css";

const ScrollBar = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress)

  return <motion.div className={styles.progressBar} style={{ scaleX }} />
};

export default ScrollBar;
