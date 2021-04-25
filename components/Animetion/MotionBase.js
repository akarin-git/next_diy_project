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

// 上下リピート大
       export const reverseVariants = {
      exit: { y: 0, opacity: 1, 
              transition: { duration: 0.5, ease: easing } },
      enter: {
            y:30,
            opacity:1,
            transition: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2
            }
      }
      
    };
// 上下斜めリピート中
       export const smreverseVariants = {
      exit: { y: 0, opacity: 1, 
              transition: { duration: 0.5, ease: easing } },
      enter: {
            y:20,
            opacity:1,
            transition: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2
            }
      } 
    };
// 上下斜めリピート小
       export const smallreverseVariants = {
      exit: { y: 0, opacity: 1, 
              transition: { duration: 0.5, ease: easing } },
      enter: {
            y:10,
            x:5,
            opacity:1,
            transition: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2
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