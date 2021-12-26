<template lang="html">
    <div class="ui container">
        <div class="ui one column centered grid">
            <div class="column" style="color: #ffa8a8; font-size: 47px; margin-top: 60px; text-transform: uppercase;     line-height: 75px;">
                <div v-if="question">
                    {{question}}
                </div>
                <div v-else style="color: white; font-size: 40px; margin-top: 60px; font-style: italic;">
                    Waiting for question
                </div>
                <div class="ui big icon input game-input">
                  <input type="text" placeholder="Your name" v-model="name">
                  <i class="user icon"></i>
              </div>
              <br>
              <button class="ui fluid button mc-button" :class="{'red': letterResponse == 'a'}" @click="addLetterResponse('a')">A: Santa</button>
              <button class="ui fluid button mc-button" :class="{'red': letterResponse == 'b'}" @click="addLetterResponse('b')">B: Jesus</button>
              <button class="ui fluid button mc-button" :class="{'red': letterResponse == 'c'}" @click="addLetterResponse('c')">C: Both</button>
              <button class="ui fluid button mc-button" :class="{'red': letterResponse == 'd'}" @click="addLetterResponse('d')">D: Neither</button>
              <!-- <br>
                <button style="touch-action: manipulation;" class="massive ui button game-button" @click="sendAnswer()">
                  Buzz
                </button> -->
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
            question: '',
            letterResponse: '',
            name: '',
            socket: undefined,
            delay: 0
        }
    },
    watch: {
        question () {
            var vm = this
            vm.letterResponse = ''
        }
    },
    methods: {
        addLetterResponse (letterResponse) {
            var vm = this
            vm.letterResponse = letterResponse
            if (vm.question && vm.name) {
                vm.sendAnswer()
            } else {
                vm.letterResponse = ''
            }
            
        },
        sendAnswer () {
            var vm = this
            var time = moment().valueOf()
            setTimeout(function () {
                $.get(`/api?answer=true&name=${vm.name}&timestamp=${time}&question=${vm.question}&letterResponse=${vm.letterResponse}`, function (data) {
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

        

        socket.bind('newQuestion', function (data) {
            console.log(data)
            if (vm.question == data.question) {
                return
            }
            vm.question = data.question
            vm.letterResponse = ''
        })

        setTimeout(() => {
            $.get(`/api?getCurrentQuestion=true`, function (data) {
                console.log(data)
            })
        }, 1000);
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

.mc-button {
    margin-top: 20px;
    margin-bottom: 40px;
    width: 100%;
    height: 130px;
    font-size: 52px  !important;
}
.game-input {
    width: 100%;
    margin-bottom: 20px;
    height: 190px;
    font-size: 80px !important;
    margin-top: 150px;
}
</style>
