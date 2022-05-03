<template>
          <l-map
         style="height: 100%"
         id="map"
      ref="map"
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
       <l-routing-machine v-if="routeShow" :waypoints="polyLine"/>
    </l-map>

</template>

<script>
import { latLng } from 'leaflet';
import LRoutingMachine from 'components/MapRouter.vue';
import {
  LMap,
  LTileLayer,
  // LMarker,
  // LPopup,
  // LIcon,
  // LPolyline,
} from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'MapComponent',
  props: ['address-selected', 'poly-line', 'route-show'],
  components: {
    LMap,
    LTileLayer,
    // LMarker,
    // LPopup,
    //  LIcon,
    // LPolyline,
    LRoutingMachine,
  },
  data() {
    return {
      zoom: 5,
      center: latLng(34.770222, -92.33723),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(47.41322, -1.219482),
      withTooltip: latLng(47.41422, -1.250482),
      currentZoom: 11.5,
      iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-green.png',
      currentCenter: latLng(47.41322, -1.219482),
      showParagraph: false,
      dynamicSize: [32, 37],
      dynamicAnchor: [16, 37],
      mapOptions: {
        zoomSnap: 0.5,
      },
      colorLine: 'green',
      showMap: true,
      waypoint: { lat: 0, lng: 0 },
      waypoints1: [
        { lat: 38.7436056, lng: -9.2304153 },
      ],
      waypoints2: [
        { lat: 38.7436056, lng: -0.131281 },
      ],
      waypoints: [
        { lat: 38.7436056, lng: -9.2304153 },
        { lat: 38.7436056, lng: -0.131281 },
      ],
    };
  },
  watch: {
    polyLine(newVal, oldVal) {
      console.log('polyLine changed: ', newVal, ' | was: ', oldVal);
    },
    routeShow(newVal, oldVal) {
      console.log('routeShow changed: ', newVal, ' | was: ', oldVal);
    },
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    latLngConverter(lat, long) {
      return latLng(lat, long);
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert('Click!');
    },
  },
};
</script>
