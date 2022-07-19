import Vue from 'vue';
import { gsap, MotionPathPlugin } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ExpoScaleEase } from 'gsap/EasePack';

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
Vue.prototype.$gsapPlugins = {};
Vue.prototype.$gsapPlugins.ScrollToPlugin = ScrollToPlugin;
Vue.prototype.$gsapPlugins.ScrollTrigger = ScrollTrigger;
Vue.prototype.$gsapPlugins.ExpoScaleEase = ExpoScaleEase;
Vue.prototype.$gsapPlugins.MotionPathPlugin = MotionPathPlugin;
gsap.registerPlugin(
  ...[
    ...Object.values(Vue.prototype.$gsapPlugins),
  ],
);
// Club Plugins

// export { gsap };
Vue.use(gsap);
