import { css } from 'styled-components';

const TransitionStyles = css`
/* Fade up */
.fadeup-enter {
  opacity: 0.01;
  transform: translateY(20px);
  transition: opacity 300ms var(--easing), transform 300ms var(--easing);
}

.fadeup-enter-active {
  opacity: 1;
  transform: translateY(0px);
  transition: opacity 300ms var(--easing), transform 300ms var(--easing);
}

/* Fade down */
.fadedown-enter {
  opacity: 0.01;
  transform: translateY(-20px);
  transition: opacity 300ms var(--easing), transform 300ms var(--easing);
}

.fadedown-enter-active {
  opacity: 1;
  transform: translateY(0px);
  transition: opacity 300ms var(--easing), transform 300ms var(--easing);
}

/* Fade */
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  opacity: 1;
  transition: opacity 300ms var(--easing);
}
.fade-exit {
  opacity: 1;
}
.fade-exit-active {
  opacity: 0;
  transition: opacity 300ms var(--easing);
}


/* About span bar */
.loading-enter {
  opacity:0;
  height: 0;
}

.loading-enter-active {
  height: 4rem;
  opacity: 1;
  transition: height 300ms var(--easing);
}
.loading-exit {
  opacity: 1;
  height: 4rem;
}
.loading-exit-active {
  opacity: 0;
  height: 4rem;
  transition: height 300ms var(--easing);
}

/*Arrow icons*/ 

.arrow-enter{
  opacity:0;
  stroke-dashoffset: 500;
}
.arrow-enter-active{
  opacity: 1;
  stroke-dashoffset: 0;
  transition: all 3s forwards;
}
.arrow-exit{
  opacity: 1;
  stroke-dashoffset: 0;
  transition: all 3s forwards;
}
.arrow-exit-active{
  opacity: 0;
  stroke-dashoffset: 0;
  transition: all 3s forwards;
}


`;

export default TransitionStyles;
