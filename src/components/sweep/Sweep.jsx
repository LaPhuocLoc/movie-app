import React, { useEffect } from 'react'
import './sweep.scss'
const Sweep = props => {

  useEffect(() => {
    const sweepDiv = document.querySelector('.sweep')

    const sweepFrames = new KeyframeEffect(
      sweepDiv,
      [
        { transform: 'translateY(0%)', opacity: 1 },
        { transform: 'translateY(100%)', opacity: 0 }
      ],
      { duration: 600, fill: 'forwards' }
    );

    const sweepAnimation = new Animation(sweepFrames, document.timeline);

    sweepAnimation.play()
  }, [props.category,props.id])
  return (
    <div className="sweep"></div>
  )
}

export default Sweep