<template lang="html">
    <div>
        <div class="hotseat" v-show="!zonkOn">
            <h1 style="text-align:center;font-size: 110px; margin-top: -30px;" v-if="name">Hotseat: <span style="color: rgb(237, 241, 95);">{{ name }}</span> </h1>
            <h1 v-else style="text-align:center;font-size: 110px; color: rgb(237, 241, 95); margin-top: -30px;">waiting...</h1>
            <!-- <button class="ui red button" @click="incorrectAnswer()">Wrong!</button>
            <button class="ui green button" @click="correctAnswer()">Right!</button>
            <button class="ui purple button" @click="playGame()">Play!</button>
            <button class="ui grey button" type="button" name="button" @click="clearAnswer()">Clear</button> -->

            <div class="ui statistics">
                <div class="red statistic" v-for="player in players">
                    <div class="value" style="font-size: 100px !important; color: #f9ff03 !important;">
                        {{ player.points }}
                    </div>
                    <div class="label" style="font-size: 50px; margin-top: 10px;">
                        {{ truncate(player.name) }}
                    </div>
                </div>
            </div>
        </div>
        <div class="zonk-game" v-show="zonkOn">
            <Zonk :teamName="name" @playDone="stopPlay"/>
        </div>
    </div>
</template>

<script>
import {socket} from './socket.js'
import _ from 'lodash'
import Zonk from './Zonk.vue'
import Mousetrap from 'mousetrap'

export default {
    data () {
        return {
            name: '',
            socket: undefined,
            players: [],
            zonkOn: false,
            possiblePlayers: []
        }
    },
    components: {
        Zonk
    },
    methods: {
        playGame () {
            this.zonkOn = !this.zonkOn
        },
        stopPlay (points) {
            console.log(points)
            this.zonkOn = !this.zonkOn
            this.correctAnswer(points)
        },
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
        correctAnswer: function (points) {
            var vm = this
            if (_.find(vm.players, {name: vm.name})) {
                vm.players.map(function (each) {
                    if (each.name === vm.name) {
                        each.points += points
                    }
                })
            } else {
                vm.players.push({
                    name: vm.name,
                    points: points
                })
            }
            vm.name = ''
        },
        incorrectAnswer: function () {
            var vm = this
            if (_.find(vm.players, {name: vm.name})) {
                vm.players.map(function (each) {
                    if (each.name === vm.name) {
                        if (each.points > 0) {
                            each.points = parseInt(each.points / 2)
                        } else {
                            each.points -= 1000
                        }
                    }
                })
            } else {
                vm.players.push({
                    name: vm.name,
                    points: -1000
                })
            }
            vm.name = ''
        }
    },
    mounted: function () {
        var vm = this
        Mousetrap.bind('p', function () {
            vm.playGame()
        })
        Mousetrap.bind('c', function () {
            vm.clearAnswer()
        })
        Mousetrap.bind('n', function () {
            vm.incorrectAnswer()
        })
        socket.on('connect', function() {
            socket.emit('my-event', {
                data: 'I\'m connected!'
            })
        })
        socket.on('answer', function (data) {
            console.log(data.data)
            if (!vm.name) {
                vm.possiblePlayers.push(data)
                var timeout = setTimeout(function () {
                    // pick a winner from the group
                    // and put him in the hot seat
                    console.log(vm.possiblePlayers, 'before')
                    vm.possiblePlayers = _.orderBy(vm.possiblePlayers, [function(o) { return o.timestamp; }])
                    console.log(vm.possiblePlayers, 'sorted')
                    if (!vm.name) {
                        var alert = new Audio('/static/alert.wav')
                        alert.play()
                        vm.name = vm.possiblePlayers[0].data
                        vm.possiblePlayers = []
                    }
                }, 2000)
            }
        })
    }
}
</script>

<style lang="css" scoped>

.hotseat {
    background: rgba(0, 0, 0, 0.4);
}
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
