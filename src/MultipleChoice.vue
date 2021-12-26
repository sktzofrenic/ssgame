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
            <div class="progress-bar horizontal">
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

            <div class="progress-bar horizontal">
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
            <div class="progress-bar horizontal">
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
            <div class="progress-bar horizontal">
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
                    text: 'How many million miles away is the earth from the sun (on average)?',
                    choices: ['81', '50', '93', '27'],
                    answer: '93',
                    responses: []
                },
                {
                    text: 'Maintains a detailed list of deeds of every boy and girl and categorizes them as either good or bad',
                    choices: ['Santa', 'Jesus', 'Both', 'Neither'],
                    answer: 'Both',
                    responses: []
                },
                {
                    text: 'Claims eternal existence for himself',
                    choices: ['Santa', 'Jesus', 'Both', 'Neither'],
                    answer: 'Both',
                    responses: []
                },
                {
                    text: 'Is/was married to a woman',
                    choices: ['Santa', 'Jesus', 'Both', 'Neither'],
                    answer: 'Santa',
                    responses: []
                },
                {
                    text: 'Claims a place of specific place of residence on the north Pole',
                    choices: ['Santa', 'Jesus', 'Both', 'Neither'],
                    answer: 'Both',
                    responses: []
                },
                {
                    text: 'Can see you when you’re sleeping',
                    choices: ['Santa', 'Jesus', 'Both', 'Neither'],
                    answer: 'Both',
                    responses: []
                },
                {
                    text: 'Was resurrected from the dead',
                    choices: ['Santa', 'Jesus', 'Both', 'Neither'],
                    answer: 'Both',
                    responses: []
                },
                {
                    text: 'Gladly receives requests from children for things that they want or need',
                    choices: ['Santa', 'Jesus', 'Both', 'Neither'],
                    answer: 'Both',
                    responses: []
                },
                {
                    text: 'Parents line up with their children to have a chance for them to sit in his lap',
                    choices: ['Santa', 'Jesus', 'Both', 'Neither'],
                    answer: 'Both',
                    responses: []
                },
                {
                    text: 'Can cause animals to behave outside of their normal limitations',
                    choices: ['Santa', 'Jesus', 'Both', 'Neither'],
                    answer: 'Both',
                    responses: []
                },
                {
                    text: 'Can be in more than one place at at time',
                    choices: ['Santa', 'Jesus', 'Both', 'Neither'],
                    answer: 'Both',
                    responses: []
                },
                {
                    text: 'Is worshipped by humans on earth',
                    choices: ['Santa', 'Jesus', 'Both', 'Neither'],
                    answer: 'Both',
                    responses: []
                },
                {
                    text: 'Books and songs have been written to extol his deeds',
                    choices: ['Santa', 'Jesus', 'Both', 'Neither'],
                    answer: 'Both',
                    responses: []
                },
                {
                    text: 'Parades have been given in his honor',
                    choices: ['Santa', 'Jesus', 'Both', 'Neither'],
                    answer: 'Both',
                    responses: []
                },
                {
                    text: 'Can enter into a home without being seen or detected ',
                    choices: ['Santa', 'Jesus', 'Both', 'Neither'],
                    answer: 'Both',
                    responses: []
                },
                {
                    text: 'Can fly',
                    choices: ['Santa', 'Jesus', 'Both', 'Neither'],
                    answer: 'Both',
                    responses: []
                },
                {
                    text: 'Has ambassadors all over the world that represent him',
                    choices: ['Santa', 'Jesus', 'Both', 'Neither'],
                    answer: 'Both',
                    responses: []
                },
                {
                    text: 'People will decorate their houses, cars, yards in his honor',
                    choices: ['Santa', 'Jesus', 'Both', 'Neither'],
                    answer: 'Both',
                    responses: []
                },
                {
                    text: 'While it is known where he lives, nobody can actually locate his dwelling, we instead must wait for his return',
                    choices: ['Santa', 'Jesus', 'Both', 'Neither'],
                    answer: 'Both',
                    responses: []
                },
                {
                    text: 'Has white hair and beard',
                    choices: ['Santa', 'Jesus', 'Both', 'Neither'],
                    answer: 'Both',
                    responses: []
                },
                {
                    text: 'Wears red colored clothes',
                    choices: ['Santa', 'Jesus', 'Both', 'Neither'],
                    answer: 'Both',
                    responses: []
                },
                {
                    text: 'Is the only way of salvation from sin, death, and hell',
                    choices: ['Santa', 'Jesus', 'Both', 'Neither'],
                    answer: 'Jesus',
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