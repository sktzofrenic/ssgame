<template lang="html">
    <div id="app">
        <div class="toolbar">
            <!-- <button class="ui black button" @click="restart">Restart</button>
            <div class="ui violet huge label" style="cursor:pointer" @click="changeTeam('teamOnePoints')">
              {{ teamOneName }}: {{teamOnePoints}}
            </div>
            <div class="ui green huge label" style="cursor:pointer" @click="changeTeam('teamTwoPoints')">
              {{ teamTwoName }}: {{teamTwoPoints}}
            </div>
            <div class="ui blue huge label" v-if="currentTeam">
                <span v-if="currentTeam === 'teamOnePoints'">  {{ teamOneName }} is playing || <span style="cursor: pointer" @click="endTurn">End Turn</span></span>
                <span v-else>  {{ teamTwoName }} is playing || <span style="cursor: pointer" @click="endTurn">End Turn</span></span>
            </div> -->
            <div v-if="activeTeamPoints" class="ui olive huge label">
                <span> {{ teamName }} Accumulated: {{ activeTeamPoints }}</span>
                &nbsp;&nbsp;&nbsp;Next card worth  = X {{ pickNumber }}
            </div>
            <div v-if="risky" class="ui brown huge label">
                <span>High Risk Mode</span>
            </div>
        </div>
        <div class="toolbar-right">

        </div>
        <div class="ui grid">
            <div class="six column row">
                <div class="column" v-for="(card, index) in cards">
                    <div class="flip-container">
                        <div class="card" @click="flip(index)" :class="{'flipped': card.flipped}">
                            <div class="front"><h1 class="card-number">{{index + 1}}</h1></div>
                            <div class="back">
                                <h1 class="value-number" v-if="card.value > 0">
                                    <span v-if="card.flipped">
                                        {{ card.value }}
                                    </span>
                                    <span v-else>
                                        {{ card.value * pickNumber }}
                                    </span>

                                </h1>
                                <h1 v-else>
                                    <img src="/static/img/zonk.png" alt="">
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'
import Mousetrap from 'mousetrap'
export default {
    data () {
        return {
            cards: [],
            teamOneName: 'Dan Team',
            teamOnePoints: 0,
            teamTwoName: 'Ana Team',
            teamTwoPoints: 0,
            gameOn: false,
            currentTeam: '',
            risky: true,
            pickNumber: 1,
            activeTeamPoints: 0,
            cardPossibilities: [0, 0, 0, 0, 100, 200, 300, 400, 500]
        }
    },
    props: ['teamName'],
    methods: {
        generateCards: function (notRisky) {
            this.changeTeam(this.currentTeam)
            this.cards = []
            for (var i = 0; i < _.range(24).length; i++) {
                var multiplier = 4
                var cardPossibilities = [0, 0, 100, 200, 300, 400, 500, 500]
                if (notRisky) {
                    multiplier = 1
                    this.risky = false
                    cardPossibilities = [0, 0, 100, 200, 300, 400, 500]
                    console.log('not risky')
                }
                this.cards.push({
                    id: i,
                    flipped: false,
                    value: cardPossibilities[Math.floor(Math.random() * cardPossibilities.length)] * multiplier
                })
            }
        },
        flip: function (index) {
            this.cards[index].flipped = !this.cards[index].flipped
            if (this.cards[index].value === 0) {
                // ZONK!!!
                var audio = new Audio('/static/audio/evillaugh.mp3')
                audio.play()
                this.pickNumber = 0
                this.activeTeamPoints = 0
            } else {
                // Card was worth points
                this.activeTeamPoints += this.cards[index].value * this.pickNumber
                var audio = new Audio('/static/audio/positive.wav')
                audio.play()
                this.pickNumber += 1
            }
        },
        reveal: function () {
            var vm = this
            vm.generateCards('notRisky')
            vm.cards.map(function(value) {
                _.delay(function() {
                    value.flipped = !value.flipped
                }, Math.floor(Math.random() * 150) + 30)
            })
            vm.cards.map(function(value) {
                _.delay(function() {
                    value.flipped = !value.flipped
                }, Math.floor(Math.random() * 500) + 300)
            })
        },
        manualReveal: function () {
            var vm = this
            vm.cards.map(function(value) {
                value.flipped = !value.flipped
            })
        },
        restart: function () {
            this.teamOneName = ''
            this.teamOnePoints = 0
            this.teamTwoName = ''
            this.teamTwoPoints = 0
            this.gameOn = false
            this.currentTeam = ''
            this.risky = true
            this.pickNumber = 1
        },
        endTurn: function () {
            this[this.currentTeam] += this.activeTeamPoints
            this.$emit('playDone', this.activeTeamPoints)
            this.activeTeamPoints = 0
            this.currentTeam = ''
            this.risky = true
            this.pickNumber = 1
            this.generateCards()

        },
        changeTeam: function (num) {
            this.currentTeam = num
            this.risky = true
            this.pickNumber = 1
            this.activeTeamPoints = 0
        }
    },
    mounted() {
        this.generateCards()
        var vm = this
        Mousetrap.bind('e e', function () {
            vm.endTurn()
        })
        Mousetrap.bind('left', function () {
            vm.changeTeam('teamOnePoints')
        })
        Mousetrap.bind('right', function () {
            vm.changeTeam('teamTwoPoints')
        })
        Mousetrap.bind('r r', function () {
            vm.reveal()
        })
        Mousetrap.bind('m r', function () {
            vm.manualReveal()
        })
        Mousetrap.bind(['0 1', '0 2', '0 3', '0 4', '0 5', '0 6', '0 7', '0 8',
                        '0 9', '1 0', '1 1', '1 2', '1 3', '1 4', '1 5', '1 6',
                        '1 7', '1 8', '1 9', '2 0', '2 1', '2 2', '2 3', '2 4'], function(e, combo) {
        var number = Number(combo[0] + combo[2])
        vm.flip(number - 1)

        // return false to prevent default browser behavior
        // and stop event from bubbling
        return false;
    });
        Mousetrap.bind('s s', function () {
            vm.generateCards()
        })
    }
}
</script>

<style lang="css" scoped>

.toolbar {
    position: absolute;
    top: 2px;
    left: 2px;
}
.card-number {
    font-size: 80px;
}
.value-number {
    font-size: 80px;
    color: #66d045;
    text-shadow: 0px 0px 11px #225114;
    -webkit-text-stroke-width: 2px;
   -webkit-text-stroke-color: #fff;
}
.flip-container {
  width: 26vh;
  height: 21vh;
  margin-bottom: 20px;
  position: relative;
  -webkit-perspective: 800px;
  -ms-perspective: 800px;
  perspective: 800px;
  border-radius: 4px;
}
.card {
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: -webkit-transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition: -webkit-transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275), -webkit-transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 6px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
  cursor: pointer;
}
.card div {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 6px;
  background: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: box;
  display: flex;
  -webkit-box-pack: center;
  -o-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -o-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font: 16px/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #47525d;
}
.card .back {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
.card.flipped {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

</style>
