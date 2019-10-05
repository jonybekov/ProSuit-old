<template>
  <div>
    <div v-if="isFinished == 0" class="timer-block">{{ prettyTime}}</div>
    <div v-if="isFinished == 1" class="timer-block">00:00</div>
  </div>
</template>

<script>
export default {
  props: {
    isFinished: Number
  },
  // filters: {
  //   prettify(value) {
  //     let data = value.split(":");
  //     let minuts = data[0];
  //     let seconds = data[1];
  //     if (minutes < 10) {
  //       minutes = "0" + minutes;
  //     }
  //     if (seconds < 10) {
  //       seconds = "0" + seconds;
  //     }
  //     return seconds;
  //   }
  // },
  data() {
    return {
      isRunning: false,
      minutes: 0,
      seconds: 0,
      timer: null,
      time: 600
    };
  },

  computed: {
    prettyTime() {
      let time = this.time / 60;
      let minutes = parseInt(time);
      let seconds = Math.round((time - minutes) * 60);
      if (minutes < 10) {
        minutes = "0" + minutes;
      } else if (seconds < 10 && seconds >= 0) {
        seconds = "0" + seconds;
      } else if (minutes < 10 && seconds < 10) {
        minutes = "0" + minutes;
        seconds = "0" + seconds;
      }
      return minutes + ":" + seconds;
    },
    countdown: {
      get() {
        return this.time;
      },
      set(newValue) {
        this.time = newValue;
      }
    }
  },

  created() {
    console.log("Countdown started", this.isFinished);
    if (this.isFinished == 0) {
      this.start();
    }
  },

  methods: {
    start() {
      this.isRunning = true;
      if (!this.timer) {
        this.timer = setInterval(() => {
          if (this.countdown > 0) {
            this.countdown--;
          } else {
            clearInterval(this.timer);
            this.sound.play();
            this.reset();
          }
        }, 1000);
      }
    },
    stop() {
      this.isRunning = false;
      clearInterval(this.timer);
      this.timer = null;
      this.$emit("stopTimer", this.isRunning);
    }
  }
};
</script>