<template lang="html">
    <div>
        <h1 style="text-align:center;font-size: 110px;" v-if="name">Hotseat: {{ name }}</h1>
        <h1 v-else style="text-align:center;font-size: 110px; color:#c3c3c3">waiting...</h1>
        <button class="ui red button" @click="incorrectAnswer()">Wrong!</button>
        <button class="ui green button" @click="correctAnswer()">Right!</button>
        <button class="ui grey button" type="button" name="button" @click="clearAnswer()">Clear</button>
        <div class="ui divider">

        </div>
        <div class="ui statistics">
          <div class="red statistic" v-for="player in players">
            <div class="value" style="font-size: 150px !important;">
              {{ player.points }}
            </div>
            <div class="label" style="font-size: 50px; margin-top: 10px;">
              {{ truncate(player.name) }}
            </div>
          </div>
      </div>

    </div>
</template>

<script>
import {socket} from './socket.js'
import _ from 'lodash'
export default {
    data () {
        return {
            name: '',
            socket: undefined,
            players: []
        }
    },
    methods: {
        truncate (name) {
            if (name.length > 8) {
                return name.substring(0, 7) + '...'
            } else {
                return name
            }
        },
        clearAnswer: function () {
            this.name = ''
        },
        correctAnswer: function () {
            var vm = this
            if (_.find(vm.players, {name: vm.name})) {
                vm.players.map(function (each) {
                    if (each.name === vm.name) {
                        each.points += 10
                    }
                })
            } else {
                vm.players.push({
                    name: vm.name,
                    points: 10
                })
            }
            vm.name = ''
        },
        incorrectAnswer: function () {
            var vm = this
            if (_.find(vm.players, {name: vm.name})) {
                vm.players.map(function (each) {
                    if (each.name === vm.name) {
                        each.points -= 5
                    }
                })
            } else {
                vm.players.push({
                    name: vm.name,
                    points: -5
                })
            }
            vm.name = ''
        }
    },
    mounted: function () {
        var vm = this
        socket.on('connect', function() {
            socket.emit('my-event', {
                data: 'I\'m connected!'
            })
        })
        socket.on('answer', function (data) {
            console.log(data.data)
            if (!vm.name) {
                var alert = new Audio('/static/alert.wav')
                alert.play()
                vm.name = data.data
            }
        })
    }
}
</script>

<style lang="css" scoped>
.game-button {
    width: 100%;
    height: 400px;
    font-size: 90px  !important;
}
.game-input {
    width: 100%;
    height: 190px;
    font-size: 80px !important;
    margin-top: 150px;
}
</style>
