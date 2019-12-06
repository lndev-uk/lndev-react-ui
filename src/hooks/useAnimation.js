//@flow
import { useEffect, useState } from 'react';

type Animations =
  | fadeIn
  | fadeInDown
  | fadeInDownBig
  | fadeInLeft
  | fadeInLeftBig
  | fadeInRight
  | fadeInRightBig
  | fadeInUp
  | fadeInUpBig
  | fadeOut
  | fadeOutDown
  | fadeOutDownBig
  | fadeOutLeft
  | fadeOutLeftBig
  | fadeOutRight
  | fadeOutRightBig
  | fadeOutUp
  | fadeOutUpBig;

function useAnimation(
  ref: React.ref,
  animationName: Animations,
  callback: (ref: React.ref) => null
): boolean {
  const [done, setDone] = useState(false);
  const [animation, setAnimation] = useState(animationName);
  useEffect((): (() => null) => {
    if (ref.current && !done) {
      ref.current.classList.add('animated', animation);
      const handleAnimationEnd = () => {
        ref.current.classList.remove('animated', animation);
        ref.current.removeEventListener('animationend', handleAnimationEnd);

        if (typeof callback === 'function') callback(ref);
        setDone(true);
      };
      ref.current.addEventListener('animationend', handleAnimationEnd);
      return () => {
        if (ref.current)
          ref.current.removeEventListener('animationend', handleAnimationEnd);
      };
    }
  }, [ref.current, done]);

  const reset = (overrideAnimation: Animations = '') => {
    setDone(false);
    if (overrideAnimation) setAnimation(overrideAnimation);
  };
  return [done, reset];
}

export default useAnimation;
