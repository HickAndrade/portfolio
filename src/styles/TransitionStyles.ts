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
  transition: opacity 400ms var(--easing);
}
.fade-enter-active {
  opacity: 1;
  transition: opacity 400ms var(--easing);
}
.fade-enter-done {
  opacity: 1;
  transition: opacity 400ms var(--easing);
}
.fade-exit {
  opacity: 1;
  transition: opacity 300ms var(--easing);
}
.fade-exit-active {
  opacity: 0;
  transition: opacity 300ms var(--easing);
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


/* About span bar */
.loading-enter {
  height: 0;
  transition: height 300ms var(--easing);
}

.loading-enter-active {
  height: 4rem;
  transition: height 300ms var(--easing);
}

.loading-enter-done {
  height: 4rem;
  transition: height 300ms var(--easing);
}
.loading-exit {
  height: 0;
  transition: height 300ms var(--easing);
}
.loading-exit-active {
  height: 0;
  transition: height 300ms var(--easing);
}

/*fastfade */
.fastfade-enter {
  opacity: 0;
  transition: opacity 300ms var(--easing);
}
.fastfade-enter-active {
  opacity: 1;
  transition: opacity 300ms var(--easing);
}
.fastfade-enter-done {
  opacity: 1;
  transition: opacity 300ms var(--easing);
}
.fastfade-exit {
  opacity: 1;
  transition: opacity 0ms var(--easing);
}
.fastfade-exit-active {
  opacity: 0;
  transition: opacity 0ms var(--easing);
}
`;

export default TransitionStyles;
