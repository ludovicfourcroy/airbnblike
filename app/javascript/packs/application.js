// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

import { initUpdateNavbarOnScroll } from '../components/navbar';
import { chooseNavBar } from '../components/navbar';
import { loadDynamicBannerText } from '../components/banner';
import { initSweetalert } from '../plugins/init_sweetalert';
import {initMapbox} from '../plugins/init_mapbox';
import {initAutocomplete} from '../plugins/init_autocomplete';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';


// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  initUpdateNavbarOnScroll();
  chooseNavBar();
  if (document.getElementById('map')) initMapbox();
  if (document.getElementById('flat_address'))initAutocomplete();
  if (document.getElementById('banner-typed-text')) loadDynamicBannerText();
  initSweetalert('#sweet-alert-demo', {
    buttons: ["Stop", "Do it !"],
    title: "Are you sure?",
    text: "This action cannot be reversed",
    icon: "warning"
  }, (value) => {
    if (value) {
      const link = document.querySelector('#delete-link');
      link.click();
    }
});
});
