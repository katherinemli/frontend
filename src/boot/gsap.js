import Vue from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ExpoScaleEase } from 'gsap/EasePack';

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ExpoScaleEase);

Vue.directive('gsap', (el, binding) => {
  const options = { ...binding.value };
  const { modifiers } = binding.modifiers;

  if (modifiers.set) {
    gsap.set(el, options);
  }

  if (modifiers.to) {
    gsap.to(el, options);
  }

  if (modifiers.from) {
    gsap.from(el, options);
  }

  if (modifiers.fromTo) {
    gsap.fromTo(el, { ...binding.value[0] }, { ...binding.value[1] });
  }
});

Vue.prototype.$gsap = gsap;
export { gsap };
