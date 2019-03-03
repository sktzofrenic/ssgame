<template>
    <div>
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
            <div v-if="points" class="ui olive huge label">
                <span> {{ teamName }} Accumulated: {{ points }}</span>
                &nbsp;&nbsp;&nbsp;Next card worth  = X {{ pickNumber }}
            </div>
            <!-- <div v-if="risky" class="ui brown huge label">
                <span>High Risk Mode</span>
            </div> -->
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
import Mousetrap from 'mousetrap'
import $ from 'jquery'
var nouns = require('./nouns.json')
export default {
    data () {
        return {
            points: 0,
            timer: 25,
            timerRunning: false,
            pickNumber: 1,
            cards: []
        }
    },
    props: ['teamName'],
    methods: {
        getRandVerse (bookIndex) {
            var vm = this
            var book = books[bookIndex ? bookIndex : vm.getRandomInt(0, 65)]
            var chapter = vm.getRandomInt(0, book.chapters.length)
            var verse = vm.getRandomInt(1, book.chapters[chapter] + 1)

            book = book.id
            chapter = chapter + 1

            return {
                book,
                chapter,
                verse
            }
        },
        timerAction (action) {
            var vm = this
            if (action === 'start') {
                vm.timerRunning = setInterval(function () {
                    vm.timer -= 1
                    if (vm.timer === 0) {
                        vm.endTurn()
                    }
                }, 1000)
            }
            if (action === 'stop') {
                clearInterval(vm.timerRunning)
                vm.timerRunning = false
                vm.timer = 25
            }
            if (action === 'pause') {
                clearInterval(vm.timerRunning)
                vm.timerRunning = false
            }
        },
        checkAnswer (answer) {
            // pass
        },
        endTurn () {
            var vm = this
            this.$emit('playDone', vm.points)
            clearInterval(vm.timerRunning)
            vm.timerRunning = false
            vm.timer = 25
            vm.points = 0
        },
        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
        },
        shuffle () {
            
        }
    },
    mounted () {
        var vm = this
        Mousetrap.bind('e e', function () {
            vm.endTurn()
        })
        Mousetrap.bind('z', function () {
            vm.timerAction('pause')
        })
        Mousetrap.bind('x', function () {
            vm.timerAction('start')
        })
        vm.shuffle()
    }
}
</script>


<style lang="css" scoped>
.toolbar-right {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 60px;
    background: white;
    padding: 30px 20px;
    border-radius: 20px;
    box-shadow: 10px 10px red;
    border: 1px solid red;
}
.history-items {
    position: absolute;
    top: 50px;
    width: 70%;
}
.timer {
    color: red
}
.verse-text {
    display: block;
    margin-bottom: 50px;
}
.answer-one {
    float: left;
}
.answer-two {
    float: right;
}
.answer-one, .answer-two {
    cursor: pointer;
    background: #e6e6e6;
    padding: 10px 20px;
    border-radius: 20px;
    box-shadow: 10px 10px #828282;
}
.main-area {
    background-color: white;
    font-size: 50px;
    line-height: 65px;
    padding: 60px;
}
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
