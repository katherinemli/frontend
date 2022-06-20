<template>
<div>
  <div id="ChartId" class="graph-style"></div>
  <canvas id="canvas" width="400px" height="400px"></canvas>
  <div ref="boxes" class="box"></div>
</div>
</template>

<script>
import Dygraph from 'dygraphs';

export default {
  name: 'GraphElement',
  data() {
    return {
      grapData: [],
      graphContent: [],
      timestamp: Date.now(),
      wave: false,
    };
  },
  beforeDestory() {
    clearInterval();
  },
  created() {
    this.interval = setInterval(() => {
      this.grapData.push([new Date(), Math.random()]);
      this.graphContent[0].updateOptions({ file: this.grapData });
    }, 1000);
  },
  mounted() {
    this.buildGraph();
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    this.startDrawing(context);
    this.gsapAnimation();
  },
  methods: {
    gsapAnimation() {
      const { boxes } = this.$refs;
      const timeline = new this.$gsap.TimelineLite();
      timeline.to(boxes, 1, { x: 200, rotation: 90 });
    },
    startDrawing(context) {
      const draw = () => {
        if (Date.now() < (this.timestamp + 900)) return requestAnimationFrame(draw);

        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        context.beginPath();
        context.fillStyle = 'black'; // #000000
        context.arc(200, 50, 30, 0, Math.PI * 2, true);
        context.fill(); // fill the circle

        context.beginPath();
        context.lineWidth = 6;
        context.stroke();

        // body
        context.beginPath();
        context.moveTo(200, 80);
        context.lineTo(200, 180);
        context.strokeStyle = 'black';
        context.stroke();

        // arms
        context.beginPath();
        context.strokeStyle = 'black';
        context.moveTo(200, 100);
        context.lineTo(150, 130);
        if (this.wave) {
          context.moveTo(200, 100);
          context.lineTo(250, 130);
          this.wave = false;
        } else {
          context.moveTo(200, 100);
          context.lineTo(250, 70);
          this.wave = true;
        }
        context.stroke();

        // legs
        context.beginPath();
        context.strokeStyle = 'black';
        context.moveTo(200, 180);
        context.lineTo(150, 280);
        context.moveTo(200, 180);
        context.lineTo(250, 280);
        context.stroke();
        this.timestamp = Date.now();
        requestAnimationFrame(draw);
        return true;
      };

      draw();
    },
    buildGraph() {
      for (let i = 10; i >= 0; i -= 1) {
        this.grapData.push([new Date(new Date().getTime() - i * 1000), Math.random()]);
      }
      const graphDiv = document.getElementById('ChartId');
      const graphElement = new Dygraph(
        graphDiv,
        this.grapData,
        {
          drawPoints: true,
          showRoller: true,
          valueRange: [0.0, 1.2],
          labels: ['Time', 'Random'],
        },
      );
      this.graphContent.push(graphElement);
    },
  },
};
</script>
