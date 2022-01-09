<template>
    <div class="ui">
        <div v-if="questionIndex >= 0" style="color: white;
    font-size: 80px;
    line-height: 90px; margin-bottom: 20px">
            <span>#{{questionIndex + 1}}</span>
            {{questions[questionIndex].text}}
        </div>
        <div v-else>
            <h2>Waiting To Start</h2>
        </div>
        <div class="container horizontal rounded" v-if="questionIndex >= 0 && questions[questionIndex].responses.length > 0">
            <div class="progress-bar horizontal" v-if="questions[questionIndex].choices.length >= 1">
                <h1 class="letter">A: {{questions[questionIndex].choices[0]}}</h1>
                <div class="progress-track">
                <div class="progress-fill" :style="{'width': parseInt(results.a / questions[questionIndex].responses.length * 100) + '%'}">
                    <span :style="{'width': parseInt(results.a / questions[questionIndex].responses.length * 100) + '%'}">{{parseInt(results.a / questions[questionIndex].responses.length * 100)}}%</span>
                    <span style="position: absolute; font-size: 17px; bottom: -27px; left: 8px;">
                         {{aNames.join(', ')}}
                    </span>
                </div>
                </div>
            </div>

            <div class="progress-bar horizontal" v-if="questions[questionIndex].choices.length >= 2">
                <h1 class="letter">B: {{questions[questionIndex].choices[1]}}</h1>
                <div class="progress-track">
                <div class="progress-fill" :style="{'width': parseInt(results.b / questions[questionIndex].responses.length * 100) + '%'}">
                    <span :style="{'width': parseInt(results.b / questions[questionIndex].responses.length * 100) + '%'}">{{parseInt(results.b / questions[questionIndex].responses.length * 100)}}%</span>
                    <span style="position: absolute; font-size: 17px; bottom: -27px; left: 8px;">
                        {{bNames.join(', ')}}
                    </span>
                </div>
                </div>
            </div>
            <div class="progress-bar horizontal" v-if="questions[questionIndex].choices.length >= 3">
                <h1 class="letter">C: {{questions[questionIndex].choices[2]}}</h1>
                <div class="progress-track">
                <div class="progress-fill" :style="{'width': parseInt(results.c / questions[questionIndex].responses.length * 100) + '%'}">
                    <span :style="{'width': parseInt(results.c / questions[questionIndex].responses.length * 100) + '%'}">{{parseInt(results.c / questions[questionIndex].responses.length * 100)}}%</span>
                    <span style="position: absolute; font-size: 17px; bottom: -27px; left: 8px;">
                         {{cNames.join(', ')}}
                    </span>
                </div>
                </div>
            </div>
            <div class="progress-bar horizontal" v-if="questions[questionIndex].choices.length >= 4">
                <h1 class="letter">D: {{questions[questionIndex].choices[3]}}</h1>
                <div class="progress-track">
                <div class="progress-fill" :style="{'width': parseInt(results.d / questions[questionIndex].responses.length * 100) + '%'}">
                    <span :style="{'width': parseInt(results.d / questions[questionIndex].responses.length * 100) + '%'}">{{parseInt(results.d / questions[questionIndex].responses.length * 100)}}%</span>
                    <span style="position: absolute; font-size: 17px; bottom: -27px; left: 8px;">
                         {{dNames.join(', ')}}
                    </span>
                </div>
                </div>
            </div>
            <div class="progress-bar horizontal" v-if="questions[questionIndex].choices.length >= 5">
                <h1 class="letter">E: {{questions[questionIndex].choices[4]}}</h1>
                <div class="progress-track">
                <div class="progress-fill" :style="{'width': parseInt(results.e / questions[questionIndex].responses.length * 100) + '%'}">
                    <span :style="{'width': parseInt(results.e / questions[questionIndex].responses.length * 100) + '%'}">{{parseInt(results.e / questions[questionIndex].responses.length * 100)}}%</span>
                    <span style="position: absolute; font-size: 17px; bottom: -27px; left: 8px;">
                         {{eNames.join(', ')}}
                    </span>
                </div>
                </div>
            </div>
        </div>
        <div v-if="questionIndex >= 0 && questions[questionIndex].responses.length == 0">
            <h1 class="letter" v-if="questions[questionIndex].choices.length >= 1">A: {{questions[questionIndex].choices[0]}}</h1>
            <h1 class="letter" v-if="questions[questionIndex].choices.length >= 2">B: {{questions[questionIndex].choices[1]}}</h1>
            <h1 class="letter" v-if="questions[questionIndex].choices.length >= 3">C: {{questions[questionIndex].choices[2]}}</h1>
            <h1 class="letter" v-if="questions[questionIndex].choices.length >= 4">D: {{questions[questionIndex].choices[3]}}</h1>
            <h1 class="letter" v-if="questions[questionIndex].choices.length >= 5">E: {{questions[questionIndex].choices[4]}}</h1>
        </div>
    </div>
</template>

<script>
import {socket} from './socket.js'
import _ from 'lodash'
import Mousetrap from 'mousetrap'
import $ from 'jquery'

export default {
    data () {
        return {
            questionIndex: -1,
            questions: [
                {
                    text: 'What is 1 plus 1?',
                    choices: ['99', '3', '17', '2'],
                    answer: '2',
                    responses: []
                },
                {
                    text: 'Baal is the god of...',
                    choices: ['Weather', 'Peace', 'Fertility', 'War', 'None of these'],
                    answer: 'Samuel',
                    responses: []
                },
                {
                    text: 'Is Jealousy Good or Bad?',
                    choices: ['Good', 'Bad', 'Neither', 'This Lesson is Bad'],
                    answer: 'Samuel',
                    responses: []
                },
                {
                    text: 'What does sojourn mean?',
                    choices: ['To go to a distant country', 'To walk; to go or march on foot;', 'Dwell temporarily', 'To move or walk as a beast,'],
                    answer: 'Both',
                    responses: []
                },
                {
                    text: 'Do you think Elimelech knew all of this information about the Moabites when he traveled there?',
                    choices: ['I\'m sure he did', 'Definitely Not', 'He knew some of it at least', 'He didn\'t graduate from high school give him a break'],
                    answer: 'Both',
                    responses: []
                },
                {
                    text: 'Was God punishing Elimelech when he and his sons died?',
                    choices: ['Maybe', 'Yes, it\'s obvious', 'No, sometimes bad things happen. That\'s life.', 'Only God really knows'],
                    answer: 'Both',
                    responses: []
                },
                {
                    text: 'Did Elimelech make a GOOD, NEUTRAL, or BAD decision when he decided to sojourn in Moab?',
                    choices: ['GOOD', 'BAD', 'NEUTRAL'],
                    answer: 'Both',
                    responses: []
                },
                {
                    text: 'What do you think of these poll questions during sunday school?',
                    choices: ['Love it', 'Hate it'],
                    answer: 'Both',
                    responses: []
                }
            ]

        }
    },
    computed: {
        allNames () {
            var vm = this
            if (vm.questionIndex < 0) {
                return []
            }
            return vm.questions[vm.questionIndex].responses.map(function (each) {
                    return each.name
                })
        },
        aNames () {
            var vm = this
            if (vm.questionIndex < 0) {
                return []
            }
            return vm.questions[vm.questionIndex].responses.filter(function (each) {
                    return each.letterResponse == 'a'
                }).map(function (each) {
                    return each.name
                })
        },
        bNames () {
            var vm = this
            if (vm.questionIndex < 0) {
                return []
            }
            return vm.questions[vm.questionIndex].responses.filter(function (each) {
                    return each.letterResponse == 'b'
                }).map(function (each) {
                    return each.name
                })
        },
        cNames () {
            var vm = this
            if (vm.questionIndex < 0) {
                return []
            }
            return vm.questions[vm.questionIndex].responses.filter(function (each) {
                    return each.letterResponse == 'c'
                }).map(function (each) {
                    return each.name
                })
        },
        dNames () {
            var vm = this
            if (vm.questionIndex < 0) {
                return []
            }
            return vm.questions[vm.questionIndex].responses.filter(function (each) {
                    return each.letterResponse == 'd'
                }).map(function (each) {
                    return each.name
                })
        },
        eNames () {
            var vm = this
            if (vm.questionIndex < 0) {
                return []
            }
            return vm.questions[vm.questionIndex].responses.filter(function (each) {
                    return each.letterResponse == 'e'
                }).map(function (each) {
                    return each.name
                })
        },
        results () {
            var vm = this
            if (vm.questionIndex < 0) {
                return {
                    a: 0,
                    b: 0,
                    c: 0,
                    d: 0
                }
            }
            return {
                a: vm.questions[vm.questionIndex].responses.filter(function (each) {
                    return each.letterResponse == 'a'
                }).length,
                b: vm.questions[vm.questionIndex].responses.filter(function (each) {
                    return each.letterResponse == 'b'
                }).length,
                c: vm.questions[vm.questionIndex].responses.filter(function (each) {
                    return each.letterResponse == 'c'
                }).length,
                d: vm.questions[vm.questionIndex].responses.filter(function (each) {
                    return each.letterResponse == 'd'
                }).length,
                e: vm.questions[vm.questionIndex].responses.filter(function (each) {
                    return each.letterResponse == 'e'
                }).length
            }
        }
    },
    watch: {
        questionIndex () {
            var vm = this
            $.get(`/api?newQuestion=true&question=${vm.questions[vm.questionIndex].text}&choices=${vm.questions[vm.questionIndex].choices.join(',')}`, function (data) {
                console.log(data)
            })
        }
    },
    methods: {
        genQuestion () {
            return {
                question: '',
                responses: []
            }
        }
    },
    mounted () {
        var vm = this
        socket.bind('answer', function (data) {
            console.log(data)
            console.log(vm.allNames, 'all names')
            let alreadyAnswered = _.findIndex(vm.allNames, function (o) {
                return o == data.name
            })
            console.log(alreadyAnswered, 'already answered')
            if (alreadyAnswered > -1) {
                // nothing
            } else {
                vm.questions[vm.questionIndex].responses.push({
                    name: data.name,
                    letterResponse: data.letterResponse
                })
            }
        })

        socket.bind('updateClients', function (data) {
            if (vm.questionIndex > -1) {
                console.log('updating clients')
                $.get(`/api?newQuestion=true&question=${vm.questions[vm.questionIndex].text}&choices=${vm.questions[vm.questionIndex].choices.join(',')}`, function (data) {
                    console.log(data)
                })
            }
        })
        Mousetrap.bind('left', function () {
            if (vm.questionIndex == -1) {
                // nothing
            } else {
                vm.questionIndex -= 1
            }
        })
        Mousetrap.bind('right', function () {
            if (vm.questionIndex >= vm.questions.length - 1) {
                // nothing
            } else {
                vm.questionIndex += 1
            }
        })
    }
}
</script>

<style scoped>

.horizontal .progress-bar {
  float: left;
  height: 160px;
  width: 100%;
  padding: 12px 0;
}

.letter {
    color: white;
    font-size: 45px;
}

.horizontal .progress-track {
  position: relative;
  width: 100%;
  height: 90px;
  background: #7a6a96;;;
}

.horizontal .progress-fill {
  position: relative;
  background: #000f37;;
  height: 90px;
  width: 50%;
  color: #fff;
  text-align: center;
  font-family: "Lato","Verdana",sans-serif;
  font-size: 50px;
  
    line-height: 85px;
}

.rounded .progress-track,
.rounded .progress-fill {
  border-radius: 3px;
  box-shadow: inset 0 0 5px #000f37;
}

</style>