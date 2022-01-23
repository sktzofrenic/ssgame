<template>
    <div class="ui">
        <div 
        style="
            position: absolute;
            top: 10px;
            right: 10px;
            color: white;
            font-size: 43px;
            background: #000f37;
            padding: 22px;
            border-radius: 20px;
            box-shadow: 2px 2px 8px 0px;
        ">Responses: {{totalResponses}}</div>
        <div v-if="questionIndex >= 0" style="color: white;
    font-size: 80px;
    line-height: 90px; margin-bottom: 20px">
            <span>#{{questionIndex + 1}}</span>
            {{questions[questionIndex].text}}
        </div>
        <div v-else>
            <h2>Waiting To Start</h2>
        </div>
        <div class="container horizontal rounded" v-if="totalResponses >= 3 && questionIndex >= 0 && questions[questionIndex].responses.length > 0">
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
        <div v-if="questionIndex >= 0 && totalResponses < 3">
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
                    text: 'What was the reason that Elimelech moved his family to Moab?',
                    choices: ['No Chik-Fil-A in Judah', 'Property Taxes', 'Vaccine Mandate', 'Famine', 'None of these'],
                    answer: 'Samuel',
                    responses: []
                },
                {
                    text: 'Why is the husband the head of the home?',
                    choices: ['Men are smarter', 'God said so', 'Two heads make a monster', 'The husband is held accountable'],
                    answer: 'Samuel',
                    responses: []
                },
                {
                    text: 'Did God warn the Caananites before he commanded Israel to conquer them?',
                    choices: ['Yes', 'No', 'The Bible Doesn\'t Say'],
                    answer: 'Both',
                    responses: []
                },
                {
                    text: 'Did ruth get saved?',
                    choices: ['Absolutely', 'Honestly, it\'s not clear', 'Only God really knows', 'I\'m still thinking about it'],
                    answer: 'Both',
                    responses: []
                },
                {
                    text: 'Which type of leadership did Naomi have?',
                    choices: ['Positional', 'Personality', 'Competence', 'A & B', 'A & C'],
                    answer: 'Both',
                    responses: []
                },
                {
                    text: 'When Naomi says, "the hand of the Lord is gone out against me" she is...',
                    choices: ['Stating the facts', 'Being dramatic', 'Explaining that serving God isn\'t always easy', 'Discouraging Ruth and Orpah'],
                    answer: 'Both',
                    responses: []
                },
                {
                    text: 'What did it cost Ruth to leave moab?',
                    choices: ['Friendships', 'Citizenship', 'Family', 'Ostracization', 'All of these'],
                    answer: 'Both',
                    responses: []
                }
            ]

        }
    },
    computed: {
        totalResponses () {
            var vm = this
            if (vm.questionIndex >= 0) {
               return vm.questions[vm.questionIndex].responses.length 
            } else {
                return 0
            }
        },
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
                    d: 0,
                    e: 0
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