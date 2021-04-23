import React from 'react';
import { useSpring, animated } from 'react-spring'
import { Box} from "@chakra-ui/react";

 
// const calc = (x, y) => [-(y - window.innerHeight / 2) / 40, (x - window.innerWidth / 2) / 40, 1.1]
// const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10 - 50}px,${y / 10 - 50}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 300}px,${y / 8 - 10}px,0)`
const trans3 = (x, y) => `translate3d(${x / 7 - 90}px,${y / 6 - 10}px,0)`
const trans4 = (x, y) => `translate3d(${x / 5.5 + 30}px,${y / 3.5}px,0)`

 
export const Spring = () => {
      const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

    return (
    <>
    <Box align="center" w={["30%","30%","40%"]} m="auto" mt="10" h="auto">
    <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div className="card1" style={{ transform: props.xy.interpolate(trans1) }} />
      <animated.div className="card2" style={{ transform: props.xy.interpolate(trans2) }} />
      <animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} />
      <animated.div className="card4" style={{ transform: props.xy.interpolate(trans4) }} />
    </div>
    </Box>
    <style JSX>
    {`
    .container{
      position:relative;
      width:500px;
      height:500px;
    }

    .card1,
    .card2,
    .card3,
    .card4 {
      position:absolute;
      border-radius: 5px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      will-change: transform;
    }

  .card1 {
    min-width: 100px;
    min-height: 100px;
    width: 600px;
    height: 500px;
    max-width: 100ch;
    max-height: 100ch;
    background-image: url(https://res.cloudinary.com/dk2uwbtnl/image/upload/v1618740072/wed/blob_1_kq9pr5.svg);
  }

  .card2 {
    width: 200px;
    height: 200px;
    background-image: url(https://res.cloudinary.com/dk2uwbtnl/image/upload/v1618539520/wed/Clipboard_perspective_matte_s_rez79n.png);
  }

  .card4 {
    width: 300px;
    height: 300px;
    background-image: url(https://res.cloudinary.com/dk2uwbtnl/image/upload/c_scale,h_298/v1618539570/wed/Tools_perspective_matte_s_lqe2ko.png);
  }
    `}
    </style>
    </>
    )
  }
 
 
export default Spring
