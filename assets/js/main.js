/*
 * Main Javascript file for battleship.
 *
 * This file bundles all of your javascript together using webpack.
 */

// JavaScript modules
require('jquery');
require('font-awesome-webpack');
require('bootstrap');

import Vue from 'vue'
import App from './App.vue'
import Client from './Client.vue'
import GameMaster from './GameMaster.vue'

new Vue({
    el: '#app',
    template: '<App/>',
    render: h => h(App),
    components: { App }
})

new Vue({
    el: '#client',
    template: '<Client/>',
    render: h => h(Client),
    components: { Client }
})

new Vue({
    el: '#gamemaster',
    template: '<GameMaster/>',
    render: h => h(GameMaster),
    components: { GameMaster }
})
