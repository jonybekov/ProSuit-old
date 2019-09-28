<template>
  <div class="container main">
    <div class="top-nav"></div>
    <div class="content flex">
      <div class="test main-bg">
        <div class="test-state">
          <div class="test-state-active"></div>
        </div>
        <div class="test-content">
          <h1>O’zbekiston Respublikasi prezidentining 2019 yil 18 apreldagi 118 sonli qarorning asosiy maqsadi nimaga qaratilgan?</h1>

          <div class="options">
            <div class="option">
              <span class="option-num">1</span>
              <p class="option-desc">A) Ijtimoiy sohani rivojlantirish</p>
            </div>
            <div class="option">
              <span class="option-num">2</span>
              <p class="option-desc">B) Ta’lim sohasida AKTni tadbiq qilish</p>
            </div>
            <div class="option active-option">
              <span class="option-num">3</span>
              <p class="option-desc">
                C) Ta’li sohasida o’quv materiallarni
                qayta ko’rib chiqish
              </p>
            </div>
            <div class="option">
              <span class="option-num">4</span>
              <p class="option-desc">D) Oliy ta’lim muasasalari to’g’risida</p>
            </div>
          </div>
        </div>
      </div>
      <div class="sidebars">
        <div class="sidebar main-bg mb-16">
          <div class="timer">
            <p class="timer-title">
              <img src="../../assets/clock.png" alt />
              <span>Оставшееся время:</span>
            </p>
            <p class="time">5:39</p>
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
                <li class="completed">1</li>
                <li class="completed">2</li>
                <li class="completed">3</li>
                <li class="selected">4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
                <li>15</li>
                <li>16</li>
                <li>17</li>
                <li>18</li>
                <li>19</li>
                <li>20</li>
              </ul>
            </div>
          </div>
        </div>
        <button class="btn btn-primary btn-dark">Пройти обученине снова</button>
      </div>
    </div>
  </div>
</template>

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
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.01em;

  color: #405877;
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
</style>


<script>
export default {};
</script>