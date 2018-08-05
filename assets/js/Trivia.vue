<template>
    <div>
        <div class="toolbar">
            <div class="ui olive huge label">
                <span> {{ teamName }} Accumulated: {{ points }}</span>
            </div>
        </div>
        <div class="toolbar-right">
            <span class="timer">{{timer}} s</span>
        </div>
        <div class="ui grid main-area">
            <div class="ui horizontal list history-items">
                <div class="item" v-for="h in history">
                    <span v-if="h == 'yes'"><i class="fa fa-check" style="font-size: 30px; color: green"></i></span>
                    <span v-else style="font-size: 30px; color: red"><i class="fa fa-close"></i></span>
                </div>
                <div class="item" style="font-size: 30px;">x {{streak}}</div>
            </div>
            <div class="one column row">
                <div class="column">
                    <span class="verse-text">{{references.correct.text}}  <span v-if="revealReference">{{ references.correct.reference}}</span> </span>
                    <span class="answer-one" @click="checkAnswer(answers[0])" v-if="answers">{{ answers[0] }}</span>
                    <span class="answer-two" @click="checkAnswer(answers[1])" v-if="answers">{{ answers [1] }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Mousetrap from 'mousetrap'
import $ from 'jquery'
const books = require('./books.json')
export default {
    data () {
        return {
            points: 0,
            timer: 45,
            timerRunning: false,
            revealReference: false,
            verse: '',
            references: {
                correct: '',
                incorrect: ''
            },
            streak: 1,
            answers: [],
            history: []

        }
    },
    props: ['teamName'],
    methods: {
        getRandVerse () {
            var vm = this
            let book = books[vm.getRandomInt(0, 65)]
            let chapter = vm.getRandomInt(0, book.chapters.length)
            let verse = vm.getRandomInt(1, book.chapters[chapter] + 1)

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
                vm.timer = 45
            }
            if (action === 'pause') {
                clearInterval(vm.timerRunning)
                vm.timerRunning = false
            }
        },
        checkAnswer (answer) {
            var vm = this
            if (!vm.timerRunning) {
                vm.timerAction('start')
            }
            if (vm.references.correct.verses[0].book_name === answer) {
                vm.points = (100 * vm.streak) + vm.points
                vm.streak += 1
                vm.history.push('yes')
                vm.revealReference = true
                vm.loadQuestion()
                var audio = new Audio('/static/audio/positive.wav')
                audio.play()
            } else {
                vm.streak = 1
                vm.history.push('no')
                vm.revealReference = true
                vm.loadQuestion()
                var audio = new Audio('/static/audio/wrong.wav')
                audio.play()
            }
        },
        endTurn () {
            var vm = this
            this.$emit('playDone', vm.points)
            clearInterval(vm.timerRunning)
            vm.timerRunning = false
            vm.timer = 45
            vm.points = 0
            vm.streak = 1
            vm.history = []
            vm.revealReference = false
        },
        loadQuestion () {
            var vm = this
            let q1 = vm.getRandVerse()
            let q2 = vm.getRandVerse()
            $.get(`https://bible-api.com/${q1.book} ${q1.chapter}:${q1.verse}?translation=kjv`, function (data) {
                console.log(data, 'q1');
                vm.revealReference = false
                vm.references.correct = data
                $.get(`https://bible-api.com/${q2.book} ${q2.chapter}:${q2.verse}?translation=kjv`, function (data) {
                    console.log(data, 'q2');
                    vm.references.incorrect = data
                    vm.answers = []
                    vm.answers.push(vm.references.correct.verses[0].book_name)
                    vm.answers.push(vm.references.incorrect.verses[0].book_name)
                    vm.answers = vm.shuffle(vm.answers)
                })
            })
        },
        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
        },
        shuffle (array) {
            var currentIndex = array.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
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
        vm.loadQuestion()
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
