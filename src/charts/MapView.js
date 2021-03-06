/**
 * data: 2017-11-14 
 * author: yuechenglei
 * describe: map
 */
// import * as d3 from 'd3'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import jsond from "../data/data.json"
const d3 = require('d3');


export default class {
  constructor(el) {
    this.el = el
    // console.log(el)
    this.init()

    console.log(jsond)
    d3.csv("../static/d.csv", function(error, data) {
      if (error) throw error;

      // Load the CSV data
      // console.log(data)
    })
  }


  init() {
    var latlng = L.latLng(40.07317, 116.5847) //location of Beijing

    // var dom = document.getElementById(this.el)

    this.map = L.map(this.el, {
      center: latlng,
      zoom: 15,
      attributionControl: false, //不显示右下角的标记
      zoomControl: true, //不显示放大缩小的按钮
    });

    var accessToken = 'pk.eyJ1IjoieWV0YW5nemhpIiwiYSI6ImNpajFrdmJ1aDAwYnF0b2x6cDA2bndybjgifQ.g9phAioL8kT5ik4jGg6kNQ';
    var style = "dark"; // emerald,light,dark
    var tileLayer = L.tileLayer('https://api.mapbox.com/v4/mapbox.' + style + '/{z}/{x}/{y}.png?access_token=' + accessToken);

    tileLayer.addTo(this.map);
    return this
  }
}
