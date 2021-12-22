<template lang="html">
    <div>
        <div class="hotseat" v-show="!zonkOn">
            <h1 style="text-align:center;font-size: 110px; margin-top: -30px; color:#fff;" v-if="name">Hotseat: <span style="color: rgb(237, 241, 95);">{{ name }}</span> </h1>
            <h1 v-else style="text-align:center;font-size: 110px; color: rgb(237, 241, 95); margin-top: -30px;">waiting...</h1>
        </div>
        <div class="hotseat2" v-show="!zonkOn">
            <!-- <button class="ui red button" @click="incorrectAnswer()">Wrong!</button>
            <button class="ui green button" @click="correctAnswer()">Right!</button>
            <button class="ui purple button" @click="playGame()">Play!</button>
            <button class="ui grey button" type="button" name="button" @click="clearAnswer()">Clear</button> -->
            <div class="ui statistics">
                <div @click="selectTeam(index)" class="red statistic" v-for="(player, index) in players">
                    <div class="value" :style="pointStyle" style="color: #f9ff03 !important;">
                        {{ formatNumber(player.points) }}
                    </div>
                    <div class="label" :style="nameStyle" style="color: #fff !important; margin-top: 10px; text-transform: capitalize;">
                        {{ truncate(player.name) }}
                    </div>
                </div>
            </div>
        </div>
        <div class="zonk-game" v-show="zonkOn">
            <Zonk :teamName="name" :team="team" @playDone="stopPlay"/>
            <!-- <Trivia :teamName="name" @playDone="stopPlay"/> -->
        </div>
    </div>
</template>

<script>
import {socket} from './socket.js'
import _ from 'lodash'
import Zonk from './Zonk.vue'
import Trivia from './Trivia.vue'
import Mousetrap from 'mousetrap'

export default {
    data () {
        return {
            name: '',
            team: null,
            socket: undefined,
            players: [],
            zonkOn: false,
            possiblePlayers: []
        }
    },
    components: {
        Zonk,
        Trivia
    },
    computed: {
        nameStyle() {
            var fontSize = this.players.length > 6 ? 50 : (250 / this.players.length)
            return {
                'font-size': fontSize + 'px !important'
            }
        },
        pointStyle() {
            var fontSize = this.players.length > 6 ? 100 : (500 / this.players.length)
            return {
                'font-size': fontSize + 'px !important'
            }
        }
    },
    methods: {
        formatNumber (number) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        playGame () {
            this.zonkOn = !this.zonkOn
        },
        selectTeam (index) {
            this.name = this.players[index].name
        },
        stopPlay (points, doublers, unzonks) {
            console.log(points)
            this.zonkOn = !this.zonkOn
            this.correctAnswer(points, doublers, unzonks)
        },
        truncate (name) {
            if (name.length > 8) {
                return name.substring(0, 12) + '...'
            } else {
                return name
            }
        },
        clearAnswer: function () {
            var vm = this
            if (_.find(vm.players, {name: vm.name.toLowerCase()})) {
                vm.players.map(function (each) {
                    // do nothing if the player exists
                })
            } else {
                // add the player if not exists
                vm.players.push({
                    name: vm.name.toLowerCase(),
                    points: 0,
                    doublers: 0,
                    unzonks: 0
                })
            }
            this.name = ''
        },
        correctAnswer: function (points, doublers, unzonks) {
            var vm = this
            if (_.find(vm.players, {name: vm.name})) {
                vm.players.map(function (each) {
                    if (each.name === vm.name) {
                        each.points += points
                        each.doublers += doublers
                        each.unzonks += unzonks
                    }
                })
            } else {
                vm.players.push({
                    name: vm.name,
                    points: points,
                    doublers: doublers,
                    unzonks: unzonks
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
        Mousetrap.bind('d d', function () {
            vm.players.splice(vm.players.indexOf(vm.name), 1)
            this.name = ''
        })
        Mousetrap.bind('p', function () {
            vm.playGame()
        })
        Mousetrap.bind('c', function () {
            vm.clearAnswer()
        })
        Mousetrap.bind('n', function () {
            vm.incorrectAnswer()
        })
        Mousetrap.bind('up', function () {
            if (vm.name) {
                vm.players.map(function (each) {
                    if (each.name === vm.name) {
                        each.points += 100
                    }
                })
            }  
        })
        Mousetrap.bind('down', function () {
            if (vm.name) {
                vm.players.map(function (each) {
                    if (each.name === vm.name) {
                        each.points -= 100
                    }
                })
            } 
        })
        socket.bind('answer', function (data) {
            console.log(data)
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
                        vm.name = vm.possiblePlayers[0].name
                        vm.team = vm.possiblePlayers[0]
                        vm.possiblePlayers = []
                    }
                }, 500)
            }
        })
    }
}
</script>

<style lang="css" scoped>

.statistic {
    cursor: pointer;
    margin: auto;
}

.hotseat {
    background: rgba(0, 0, 0, 0.4);
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
}

.hotseat2 {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
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
