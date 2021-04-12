import { motion } from 'framer-motion';

// ふわっとanimetionの定義をexport

 let easing = [0.175, 0.85, 0.42, 0.96];
// したからふわっと
       export const imageVariants = {
      exit: { y: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
      enter: {
            y: 0,
            opacity: 1,
            transition: {
                  duration: 0.5,
                  ease: easing
            }
      }
    };

    // 右から左にふわっと
    export const rightVariants = {
      exit: {
            x: 100,
            opacity: 0,
            transition: {
                  duration: 0.5,
                  ease: easing
            }
      },
      enter: {
            x: 0,
            opacity: 1,
            transition: {
                  delay: 0.5,
                  duration: 0.5,
                  ease: easing
            }
      }
      };