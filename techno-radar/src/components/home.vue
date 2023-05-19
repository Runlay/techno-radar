<template>
  <div class="parallax" :style="backgroundImageInlineStyle">
    <div class="content">
      <div class="inner-content">
        <h1>Techno Radar® {{ msg }}</h1>
        <h3>The Platform for Techno Events near You!</h3>
        <!-- <h5>Freiburg-Karlsruhe</h3> -->
      </div>
      <div class="container">
        <div></div>
        <div id="animation">
          <div id="circle">
            <div id="inner-circle"></div>
          </div>
          <input
            type="input"
            class="form__field"
            placeholder="City"
            id="city"
            required
          />
          <input
            type="input"
            class="form__field"
            placeholder="Umkreis"
            id="search"
            required
          />

          <button id="search">Search</button>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeApp",
  props: {
    msg: String,
  },
  computed: {
    backgroundImageInlineStyle() {
      return `background-image: url("./assets/bunker.jpg");`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anek+Malayalam:wght@200&family=Gentium+Plus&family=Syne+Mono&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Anek Malayalam", sans-serif;
  /* Global Fade Effect */
  transition: 0.5s;
}

body,
html {
  height: 100%;
}

.parallax {
  /* The image used */
  /* background-image: url("/images/light.jpg"); */

  /* background-color: rgba(0, 0, 0, 1); */
  /* Full height */
  height: 100%;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.parallax2 {
  /* The image used */
  background-image: url("../assets/bunker.jpg");

  /* Full height */
  height: 100%;
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#start-sq {
  height: 100%;
}

/* Add some content at the bottom of the video/page */
.content {
  text-align: center;
  position: absolute;

  background: rgba(0, 0, 0, 0.5);
  background-image: url("../assets/bunker.jpg");
  color: #f1f1f1;
  width: 100%;
  height: 100%;
}

#animation {
  top: 50%;
  margin: 0 auto;
  position: absolute;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 60vw;
}

.container {
  display: flex;
  flex-direction: row;
}

.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid gray;
  outline: 0;
  font-size: 1.3rem;
  color: white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
}

.form__field:focus {
  /* .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: #11998e;
        font-weight: 700;
    } */

  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, #11998e, #386fef);
  border-image-slice: 1;
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: rgb(196, 196, 196);
}

.bar {
  height: 30px;
  width: 10px;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  margin: 20px;
}

@keyframes audiomover {
  0% {
    height: 30px;
  }

  50% {
    height: 100px;
  }

  100% {
    height: 30px;
  }
}

#bar1 {
  animation: audiomover 1.2s infinite;
}

#bar2 {
  animation: audiomover 1.8s infinite;
}

#bar3 {
  animation: audiomover 1.6s infinite;
}

@keyframes rotating {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(1turn);
  }
}

#circle {
  height: 70px;
  width: 70px;
  background: rgb(72, 72, 72);

  border-radius: 50%;
  animation: rotating 5s linear infinite;
  margin: 2%;
}

#inner-circle {
  height: 10px;
  width: 60px;
  background: linear-gradient(to right, #11998e, #386fef);
  margin: 30px;
}

.inner-content {
  font-size: 180%;
  margin-top: 20vh;
}

a {
  text-decoration: none;
  color: rgb(64, 64, 64);
}

#logo {
  text-decoration: wavy;
}

.nav {
  text-decoration: none;
  /* text-align: center; */
  position: absolute;
  top: 2%;
  background: rgba(255, 255, 255, 0.5);
  color: #f1f1f1;
  width: 100%;
  font-size: 2em;
}

/* Style the button used to pause/play the video */
#myBtn {
  width: 200px;
  font-size: 18px;
  padding: 10px;
  border: none;
  background: #000;
  color: #fff;
  cursor: pointer;
}

#myBtn:hover {
  background: #ddd;
  color: black;
}

#input {
  height: 40px;
}

.page-2 {
  height: 80vh;
  background-color: rgb(17, 69, 117);
  font-size: 36px;
  color: white;
}

.container {
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  top: 70%;
  /* height: 100vh; */
}

.text {
  background-color: white;
  flex: 1;
  padding: 5rem;
  font-size: 1.2rem;
  opacity: 1;
  transform: translateX(0);
  transition: all 1s ease-in-out;
}

.push-right {
  opacity: 0;
  transform: translateX(50px);
}

.push-left {
  opacity: 0;
  transform: translateX(-100px);
}

[data-inviewport] {
  /* THIS DEMO ONLY */
  /* width: 100px;
    height: 100px;
    background: #0bf; */
  /* padding-left: 30vw;*/
  margin-left: 20vw;
}

/* inViewport */

[data-inviewport="scale-in"] {
  transition: 1s;
  transform: translateX(-20vw);
}

[data-inviewport="scale-in"].is-inViewport {
  transform: translateX(0);
}

#fade-in-text {
  color: white;
  padding-top: 50vh;
  font-size: 40px;
  /* width: 20vw; */
}

#content {
  display: hidden;
  /* height: 100vh; */
  background-color: #11998e;
}
</style>
