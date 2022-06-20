<template>
 <map-main-view></map-main-view>
</template>
<script>
/* import { LMap, LTileLayer } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import LRoutingMachine from 'components/MapRouter.vue';
import { latLng } from 'leaflet';
import { api } from 'boot/axios'; */
import MapMainView from 'components/Map.vue';

export default {
  name: 'MapView',
  components: {
    // MapComponent,
    // LMap, LTileLayer, LRoutingMachine,
    MapMainView,
  },
  data() {
    return {
      showMap: false,
    /*       loandingConfig: false,
      left: true,
      addressSelected: [{
        lat: 0,
        long: 0,
      }],
      addressAll: [{
        lat: 0,
        long: 0,
      }],
      polyline: [],
      list: ['item1', 'item2', 'item3'],
      selected_val: [],
      options: [
        { label: 'first', value: 'first' },
        { label: 'second', value: 'second' },
        { label: 'third', value: 'third' },
      ],
      dataLoaded: false,
      showRoute: false,
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
      routeShow: false,
      colorLine: 'green',
      showMap: true,
      waypoint: { lat: 0, lng: 0 },
      waypointsApi: [],
      waypoints2: [
        { lat: 38.7436056, lng: -0.131281 },
      ],
      waypoints: [
        { lat: 38.7436056, lng: -9.2304153 },
        { lat: 38.7436056, lng: -0.131281 },
      ],
      drawerState: true, */
    };
  },
  beforeMount() {
    // this.loadData();
  },
  methods: {
  /*     onResize(size) {
      console.log(size);
      // {
      //   width: 1200 // width of viewport (in px)
      //   height: 920 // height of viewport (in px)
      // }
      if (size.width < 1000) { // md is 992px
        this.drawerState = false;
      } else {
        this.drawerState = true;
      }
    },
    randomChoose() {
      const randomCount = Math.floor(Math.random() * (8 - 2 + 1) + 2);
      const arr = [];
      this.showRoute = false;
      this.addressSelected = [];
      while (arr.length < randomCount) {
        const r = Math.floor(Math.random() * (this.addressAll.length - 0 + 1) + 0);
        if (arr.indexOf(r) === -1) {
          arr.push(r);
          this.addressSelected.push(this.addressAll[r]);
        }
      }
      this.showRoute = false;
    },
    manualChoose() {
    },
    cleanChoose() {
      this.loandingConfig = true;
      this.addressSelected = this.addressAll;
      this.showRoute = false;
      this.loandingConfig = false;
    },
    loadData() {
      api.get('/')
        .then((response) => {
          this.addressAll = response.data;
          this.addressSelected = this.addressAll;
          this.dataLoaded = true;
        })
        .catch(() => {
        });
    },
    createRoutePost() {
      this.showRoute = false;
      this.loandingConfig = true;
      api.post('/createRoute/1', this.addressSelected)
        .then((response) => {
          this.polyline = [];
          this.waypointsApi = response.data.Steps;
          response.data.Steps.map((x) => {
            const point = {};
            point.latLng = latLng(x.Geo.Lat, x.Geo.Long);
            point.name = x.Geo.Location;
            this.polyline.push(point);
            return x;
          });
          this.showRoute = true;
          this.loandingConfig = false;
        });
    }, */
  },
};
</script>
