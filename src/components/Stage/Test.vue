<template>
  <div class="container main">
    <div class="content flex test-block">
      <div class="test main-bg">
        <div class="test-state">
          <!-- <progress
            :value="(questionIndex/quiz.questions.length)*100"
            max="100" 
          >{{(questionIndex/quiz.questions.length)*100}}%</progress>-->
          <div class="test-state-active" v-bind:style="{width: computedWidth}"></div>
        </div>

        <div class="test-content">
          <!-- <transition :duration="{ enter: 200, leave: 5000 }" name="zoom"> -->
          <div
            class="question-stage"
            v-if="questionIndex < quiz.questions.length"
            :key="questionIndex"
          >
            <h1>
              {{questionIndex +1 + ") " + quiz.questions[questionIndex].text}}
              <!-- O’zbekiston Respublikasi prezidentining 2019 yil 18 apreldagi 118 sonli qarorning asosiy maqsadi nimaga qaratilgan? -->
            </h1>

            <div class="options">
              <div
                class="option"
                v-for="(response, index) in quiz.questions[questionIndex].responses"
                :key="index"
                @click="selectOption(index)"
                :class="{'active-option': userResponses[questionIndex] == index}"
              >
                <span class="option-num">
                  {{index+1}}
                  <!-- <img src="../../assets/true-thin.png" alt /> -->
                  <!-- <img src="../../assets/wrong-thin.png" alt /> -->
                </span>
                <p class="option-desc">{{response.text}}</p>
              </div>
            </div>
            <div class="flex space-between">
              <button class="btn btn-primary btn-dark ps-64" @click="prev()">Предыдущий</button>
              <button
                class="btn btn-primary btn-dark ps-64"
                :class="{'btn-success': questionIndex == userResponses.length - 1}"
                @click="next()"
              >{{(questionIndex == userResponses.length - 1) ? 'Проверить' : 'Следющиий'}}</button>
            </div>
          </div>
          <!-- Question Completed -->
          <div class="test-result" v-if="testIsFinished" v-key="questionIndex">
            <h1 class="result-percent">{{score() / quiz.questions.length * 100}}%</h1>
            <p class="result-numbers">
              {{score()}} правильных ответов
              <span>из {{quiz.questions.length}}</span>
            </p>
            <button class="btn btn-primary btn-dark">Прейти к следующему этапу</button>
          </div>
          <!-- </transition> -->
        </div>
      </div>
      <div class="sidebars">
        <div class="sidebar main-bg mb-16">
          <div class="timer">
            <p class="timer-title">
              <img src="../../assets/clock.png" alt />
              <span>Оставшееся время:</span>
            </p>
            <Countdown class="time" :is-finished="finished"></Countdown>
          </div>
        </div>
        <div class="sidebar main-bg mb-16">
          <div class="test-navigation">
            <div class="test-theme">
              <p class="theme-subtitle">Тест по теме</p>
              <div class="theme-title flex">
                <div>
                  <img src="../../assets/headphone.png" alt class="icon" />
                </div>
                <p>Содержание указа президента РУз от 18 Апреля 2019 года</p>
              </div>
            </div>
            <div class="test-navigation-bar">
              <ul class="test-navigation-list">
                <li
                  :class="{'completed' : userResponses[index] != null, 'selected' : questionIndex == index}"
                  v-for="(tests, index) in quiz.questions"
                  :key="index"
                  @click="goToTest(index)"
                >{{index+1}}</li>
              </ul>
            </div>
          </div>
        </div>
        <button class="btn btn-primary btn-dark">Пройти обученине снова</button>
      </div>
    </div>
  </div>
</template>


<script>
import { quiz, userResponseSkelaton } from "../modules/tests";
import Vue from "vue";
import Countdown from "./Countdown";

export default {
  data() {
    return {
      quiz: quiz,
      questionIndex: 0,
      userResponses: userResponseSkelaton,
      isActive: false,
      corrects: [],
      finished: 0
    };
  },

  // mounted() {
  //   this.questionIndex = 0;
  //   this.userResponses = Array(this.quiz.questions.length).fill(null);
  // },

  components: {
    Countdown
  },

  computed: {
    computedWidth() {
      return (this.questionIndex / quiz.questions.length) * 100 + "%";
    },

    testIsFinished() {
      if (this.questionIndex >= this.quiz.questions.length) {
        this.finished = 1;
        return true;
      }
      return false;
    }
  },

  mounted() {
    this.questionIndex = 0;
    this.userResponses = Array(this.quiz.questions.length).fill(null);
  },

  methods: {
    restart() {
      this.questionIndex = 0;
      this.userResponses = Array(this.quiz.questions.length).fill(null);
    },

    selectOption(index) {
      Vue.set(this.userResponses, this.questionIndex, index);
      // if (this.quiz.questions[this.questionIndex].responses[index].correct) {
      //   Vue.set(this.corrects, this.questionIndex, true);
      // } else {
      //   Vue.set(this.corrects, this.questionIndex, false);
      // }
      console.log(this.questionIndex);
    },

    next() {
      if (this.questionIndex < this.quiz.questions.length) {
        this.questionIndex++;
      }
    },

    prev() {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },

    goToTest(index) {
      this.questionIndex = index;
    },

    score() {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
          typeof this.quiz.questions[i].responses[this.userResponses[i]] !==
            "undefined" &&
          this.quiz.questions[i].responses[this.userResponses[i]].correct
        ) {
          score++;
        }
      }
      console.log(this.testIsFinished);
      return score;
    }
  }
};
</script>

<style >
.test-theme {
  padding: 16px 24px;
}

.test-navigation-bar {
  background-color: #f8f8f8;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.test-navigation-list {
  display: flex;
  flex-flow: wrap;
  list-style: none;
  padding-left: 24px;
  padding-top: 16px;
  margin: 0;
}

.test-navigation-list li {
  margin-right: 16px;
  cursor: pointer;
  margin-bottom: 16px;
  padding: 5px;
  font-size: 12px;
  line-height: 14px;
  width: 16px;
  color: #109cf1;
  border: 2px solid #109cf1;
  border-radius: 4px;
  text-align: center;
}

.test-navigation-list li:hover {
  background: #109cf1;
  color: #fff !important;
}

.theme-subtitle {
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.01em;
  color: #b7b7b7;
  margin-bottom: 13px;
}

.theme-title p {
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.01em;
  color: #323c47;
  margin-left: 15px;
}

.completed {
  background: #109cf1;
  color: #fff !important;
}

.selected {
  background: #f7685b;
  border: 2px solid #f7685b !important;
  color: #fff !important;
}

.selected:hover {
  background: #f7685b !important;
}

/****************** */

.test-container {
  padding: 36px;
  display: flex;
}

.sidebars {
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-left: 30px;
}

.sidebars > .sidebar {
  width: 100%;
  margin-left: 0;
}

.test {
  width: 70%;
}

.test-content {
  padding: 35px 16px 41px 16px;
  position: relative;
  overflow: hidden;
}

.test-state {
  position: relative;
  height: 4px;
  background-color: #bbe5ff;
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  overflow: hidden;
}

.test-state-active {
  position: absolute;
  width: 50%;
  height: 4px;
  background-color: #109cf1;
  transition: 0.3s all ease;
}

.options {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 46px;
  justify-content: space-between;
}

.option {
  padding: 40px 32px;
  margin: 2px;
  margin-bottom: 31px;
  position: relative;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 4px;
  width: 48%;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}

.option:hover {
  background-color: #eee;
  cursor: pointer;
}

.active-option {
  background-color: #109cf1;
  transition: 0.1s all ease-in;
}

.active-option .option-desc {
  color: #fff;
  border-color: #fff;
}

.active-option:hover {
  background-color: #109cf1;
}

.option-num {
  position: absolute;
  top: -13px;
  left: 15px;
  background-color: #fff;
  padding: 5px 5px 0 5px;
  width: 15px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #bdbdbd;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.01em;
}

.option-desc {
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.01em;
}

.timer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
}

.timer-title {
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.01em;
  display: flex;
  align-items: center;
  color: #405877;
}

.timer-title span {
  margin-left: 8px;
}

.time {
  font-size: 52px;
  line-height: 62px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #405877;
}

.test-result {
  width: 100%;
}

.result-percent {
  font-size: 52px;
  line-height: 62px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #2ed47a;
  margin-bottom: 12px;
}

.result-numbers {
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #405877;
  margin-bottom: 16px;
}

.result-numbers span {
  color: #bdbdbd;
  display: block;
}

.animated {
  transition-duration: 150ms;
}

.zoom-enter-active {
  transition: all 0.1s ease;
  opacity: 0;
}
.zoom-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  opacity: 0;
}
.zoom-enter, .zoom-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(100px);
  position: absolute;
}

@media screen and (max-width: 320px) {
}

@media screen and (max-width: 480px) {
}

@media screen and (max-width: 768px) {
  .options {
    flex-direction: column;
  }

  .option {
    width: 100%;
    margin-bottom: 16px;
  }

  .timer {
    flex-direction: column;
  }
}

@media screen and (max-width: 900px) {
  .options {
    flex-direction: column;
  }

  .option {
    width: 100%;
  }
}

@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 1200px) {
  .test-block {
    display: flex !important;
    flex-direction: column;
  }

  .test-block .test {
    width: 100%;
  }

  .test-block .sidebars {
    width: 100%;
    margin-left: 0;
    margin-top: 30px;
  }

  .timer {
    flex-direction: row !important;
  }
}

@media screen and (max-width: 1400px) {
  .timer {
    flex-direction: column;
  }
}
</style>
