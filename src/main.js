import Vue from 'vue'
import App from './App.vue'
import Client from './Client.vue'
import GameMaster from './GameMaster.vue'
import MultipleChoice from './MultipleChoice.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')

new Vue({
    render: h => h(GameMaster),
}).$mount('#gamemaster')

new Vue({
    render: h => h(MultipleChoice),
}).$mount('#multiplechoice')

new Vue({
    render: h => h(Client),
}).$mount('#client')