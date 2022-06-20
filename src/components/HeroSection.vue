<template>
    <section id="home" class="hero-section">
        <div class="section-container" >
            <div class="hero-logo">
                <div class="polygon-container-red" >
                     <div class="circle-red"
                     @mouseover="hoverCircleRed()" @mouseleave="reverseHoverCircleRed()">
                         <img class="img-circle-red" src="~/assets/img/test-vio-3.png"  alt="">
                     </div>
                </div>
                <div class="polygon-container-blue">
                    <div class="bar-blue"
                    @mouseover="hoverBarBlue()" @mouseleave="reverseHoverBarBlue()">
                        <img class="img-bar-blue" src="~/assets/img/test-vio.png" alt="">
                    </div>
                </div>
                <div class="polygon-container-yellow">
                    <div class="circle-yellow"
                    @mouseover="hoverCircleYellow()" @mouseleave="reverseHoverCircleYellow()">
                        <img class="img-circle-yellow" src="~/assets/img/test-vio-2.png" alt="">
                    </div>
                </div>
            </div>
            <div class="arrow-container">
                <div class="arrow-down"
                @click="scrollToLino()">
                    <svg xmlns="http://www.w3.org/2000/svg"
                    class="arrow-svg h-6 w-6" fill="#000000"
                    viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
  name: 'HeroSection',
  components: {
  },
  data() {
    return {
      showMap: false,
    };
  },
  beforeMount() {
    // this.loadData();
  },
  mounted() {
    // const gsap = this.$gsap;
    // gsap.registerPlugin(ScrollTrigger);
    // console.log('gsapCompo:', gsap);
    ScrollTrigger.refresh();
    this.heroAnim();
    this.animateOnScroll();
  },
  methods: {
    heroAnim() {
      const gsap = this.$gsap;
      /* eslint new-cap: ["error", { "newIsCap": false }] */
      const heroAnim = new gsap.timeline();
      heroAnim.from('.circle-red', {
        x: '-600%',
        lazy: false,
        duration: 1.7,
        ease: 'power1.inOut',
      }, 0);

      heroAnim.from('.bar-blue', {
        y: '-300%',
        duration: 1.7,
        lazy: false,
        ease: 'power1.inOut',
      }, 0.6);
      heroAnim.from('.circle-yellow', {
        x: '600%',
        duration: 1.7,
        ease: 'power1.inOut',
      }, 1.2);
      heroAnim.from('.arrow-container', {
        opacity: 0,
        duration: 1,
      }, 3.8);
    },
    scrollToLino() {
      const gsap = this.$gsap;
      gsap.to(window, { scrollTo: { y: '#linogravures' } });
    },
    animateOnScroll() {
      const gsap = this.$gsap;
      gsap.to('.arrow-down', {
        scrollTrigger: {
          trigger: '.arrow-down',
          start: 'top 85%',
          toggleActions: 'restart resume reverse reverse',
          scrub: true,
        },
        opacity: 0,
        duration: 0.3,
      });

      gsap.to('.circle-red', {
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          toggleClass: 'active',
          toggleActions: 'restart resume reverse reverse',
          scrub: true,
        },
        yPercent: 270,
        xPercent: -230,
      });

      gsap.to('.bar-blue', {
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          toggleClass: 'active',
          toggleActions: 'restart resume reverse reverse',
          scrub: true,
        },
        yPercent: -35,
        xPercent: -100,
        rotation: -45,
        transformOrigin: 'center center',
      });
      gsap.to('.circle-yellow', {
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          toggleClass: 'active',
          toggleActions: 'restart resume reverse reverse',
          scrub: true,
        },
        yPercent: -100,
        xPercent: 200,
      });
    },
    hoverCircleYellow() {
      const gsap = this.$gsap;
      const ExpoScaleEase = this.$ExpoScaleEase;
      gsap.to('.img-circle-yellow', {
        opacity: 1,
        scale: 1,
        ease: ExpoScaleEase,
        duration: 0.4,
      });
    },
    reverseHoverCircleYellow() {
      const gsap = this.$gsap;
      const ExpoScaleEase = this.$ExpoScaleEase;
      gsap.to('.img-circle-yellow', {
        opacity: 0,
        scale: 1.15,
        ease: ExpoScaleEase,
        duration: 0.4,
      });
    },
    hoverBarBlue() {
      const gsap = this.$gsap;
      const ExpoScaleEase = this.$ExpoScaleEase;
      gsap.to('.img-bar-blue', {
        opacity: 1,
        scale: 1.05,
        y: '-9px',
        ease: ExpoScaleEase,
        duration: 0.4,
      });
    },
    reverseHoverBarBlue() {
      const gsap = this.$gsap;
      const ExpoScaleEase = this.$ExpoScaleEase;
      gsap.to('.img-bar-blue', {
        opacity: 0,
        scale: 1,
        y: '0px',
        ease: ExpoScaleEase,
        duration: 0.4,
      });
    },
    hoverCircleRed() {
      const gsap = this.$gsap;
      const ExpoScaleEase = this.$ExpoScaleEase;
      gsap.to('.img-circle-red', {
        opacity: 1,
        scale: 1,
        ease: ExpoScaleEase,
        duration: 0.4,
      });
    },
    reverseHoverCircleRed() {
      const gsap = this.$gsap;
      const ExpoScaleEase = this.$ExpoScaleEase;
      gsap.to('.img-circle-red', {
        opacity: 0,
        scale: 1.15,
        ease: ExpoScaleEase,
        duration: 0.4,
      });
    },
  },
};
</script>
