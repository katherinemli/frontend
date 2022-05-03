<template>
  <q-page v-if="dataLoaded">
    <div id="app">
      <div id="some-div">
        <q-drawer :width="338" v-model="left" side="left" overlay behavior="desktop" bordered>
          <q-list>
            <q-item-label class="body" header>
              <q-item>
                <q-btn
                color="secondary" label="Random Choose" clickable
                @click="randomChoose" />
              </q-item>
              <q-item>
                <q-btn
                :disabled="addressSelected.length > 8"
                color="primary" label="Create Route" clickable
                @click="createRoutePost" />
              </q-item>

            </q-item-label>
            <q-item
            v-show="!showRoute"
            v-for="point in addressSelected"
            :key="point.id" clickable v-ripple @click="manualChoose(point)">
              <q-item-section>
                <q-item-label>{{ point.location }}</q-item-label>
                <q-item-label caption>{{ point.lat }}, {{ point.long }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
            v-show="showRoute"
            v-for="point in waypointsApi"
            :key="point.id" clickable v-ripple @click="manualChoose(point)">
              <q-item-section>
                <q-item-label>{{ point.Geo.Location }}</q-item-label>
                <q-item-label caption>{{ point.Geo.Lat }}, {{ point.Geo.Long }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-btn
              :disabled="addressSelected.length > 8"
              color="primary" label="Clean Choose" clickable
              @click="cleanChoose" />
            </q-item>
          </q-list>
        </q-drawer>

      </div>
      <div id="map-wrapper">
        <l-map style="height: 100%" ref="map" :zoom="zoom" :center="center" :options="mapOptions">
          <l-tile-layer :url="url" :attribution="attribution" />
          <l-routing-machine
          v-if="showRoute" :data="addressSelected.map(a => a)" :waypoints="polyline.map(a => a)" />
        </l-map>
      </div>
    </div>
  </q-page>
</template>

<script>
import { LMap, LTileLayer } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import LRoutingMachine from 'components/MapRouter.vue';
import { latLng } from 'leaflet';
import { api } from 'boot/axios';

export default {
  name: 'PageIndex',
  components: {
    // MapComponent,
    LMap, LTileLayer, LRoutingMachine,
  },
  data() {
    return {
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
    };
  },
  beforeMount() {
    this.loadData();
  },
  methods: {
    randomChoose() {
      const randomCount = Math.floor(Math.random() * (8 - 2 + 1) + 2);
      const arr = [];
      this.showRoute = false;
      this.addressSelected = this.addressAll;
      while (arr.length < randomCount) {
        const r = Math.floor(Math.random() * this.addressAll.length) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
      }
      console.log('arreglo:', arr);
      this.addressSelected = this.addressAll.filter((item) => arr.indexOf(item.id) !== -1);
      console.log('this.addressSelected:', this.addressSelected);
      this.showRoute = false;
    },
    manualChoose(point) {
      console.log('Response:', point);
    },
    cleanChoose() {
      this.addressSelected = this.addressAll;
      this.showRoute = false;
    },
    loadData() {
      api.get('/')
        .then((response) => {
          console.log('se cargo data inicial:', response.data);
          const addressBeautyed = response.data.map((x) => {
            const addressBeauty = x.location.replaceAll('_', ' ');
            x.location = addressBeauty;
            return x;
          });

          this.addressAll = addressBeautyed;
          this.addressSelected = this.addressAll;
          this.dataLoaded = true;
        })
        .catch(() => {
        });
    },
    createRoutePost() {
      this.showRoute = false;
      api.post('/createRoute/1', this.addressSelected)
        .then((response) => {
          console.log('responsePost:', response.data.Steps);
          this.polyline = [];
          this.waypointsApi = response.data.Steps;
          response.data.Steps.map((x) => {
            const point = {};
            point.latLng = latLng(x.Geo.Lat, x.Geo.Long);
            point.name = x.Geo.Location;
            this.polyline.push(point);
            return x;
          });
          console.log('responsePost:', this.polyline);
          this.showRoute = true;
        });
    },
  },
};
</script>
