<template lang="html">
    <div class="ui container">
        <div class="ui one column centered grid">
            <div class="column">
                <div class="ui big icon input game-input">
                  <input type="text" placeholder="Your name" v-model="name">
                  <i class="user icon"></i>
              </div>
              <br>
              <br>
                <button style="touch-action: manipulation;" class="massive ui button game-button" @click="sendAnswer()">
                  Buzz
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import {socket} from './socket.js'
import moment from 'moment'
import $ from 'jquery'

export default {
    data () {
        return {
            name: '',
            socket: undefined,
            delay: 0
        }
    },
    methods: {
        sendAnswer () {
            var vm = this
            var time = moment().valueOf()
            setTimeout(function () {
                $.get(`/api?answer=true&name=${vm.name}&timestamp=${time}`, function (data) {
                    console.log(data)
                })
            }, vm.delay)
        }
    },
    mounted () {
        var vm = this
        socket.bind('connect', function() {
            console.log('client connected')
            socket.emit('my-event', {
                data: 'I\'m connected!'
            })
        })
    }
}
</script>

<style lang="css" scoped>


.game-button {
    width: 100%;
    height: 400px;
    font-size: 90px  !important;
        background: rgba(243, 243, 243, 0.8) !important;
}
.game-input {
    width: 100%;
    height: 190px;
    font-size: 80px !important;
    margin-top: 150px;
}
</style>
