<template>
  <v-app>
    <v-layout class="main-index" app accent>
      <link
        rel="stylesheet"
        type="text/css"
        href="//fonts.googleapis.com/css?family=Raleway:400,500,600,700,800,900"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,500,600,700,800,900"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <script src="https://unpkg.com/aos@next/dist/aos.js" />
      <script>
        AOS.init()
      </script>
      <v-container fluid>
        <v-flex xl12>
          <v-card class="main-heading " color="rgba(255, 255, 255, 0)" flat>
            <v-card-title class="header-text">
              <h1 class="p-class">
                <div class="text-1">
                  your
                </div>
                <div class="text-2 primary--text">
                  partner
                </div>
                <div class="text-3">
                  for
                </div>
                <div class="text-4">
                  all
                </div>
                <br />
                <div class="text-5">
                  things
                </div>
                <div class="text-6 primary--text">
                  digital
                </div>
              </h1>
            </v-card-title>
            <v-card-text class="u-header white--text">
              <div class="text-u-header">
                <p class="text-u-header1">we are an enthusiastic team of</p>
                <ul
                  class="text-u-header2 secondary--text"
                  style="font-weight: 800;"
                >
                  <li class="flip-text1">software developers</li>
                  <li class="flip-text2">web developers</li>
                  <li class="flip-text3">programmers</li>
                  <li class="flip-text4">content writers</li>
                  <li class="flip-text5">social media marketing</li>
                  <li class="flip-text6">creative people</li>
                </ul>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-container>
    </v-layout>
  </v-app>
</template>

<script>
export default {}
</script>

<style scoped>
.main-index {
  background-image: url('https://files.slack.com/files-pri/T3UCG9LPL-FLV4J32H4/landing_page.png');
  background-size: contain;
  background-position: center;
}
.p-class {
  font-size: 30px;
  text-align: left;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  color: #66cc99;
  letter-spacing: 1px;
  line-height: 2.5rem;
  text-transform: uppercase;
}
.header-text {
  animation: showfirst ease;
  animation-duration: 2s;
}
.p-class div {
  display: inline-block;
}
.text-1 {
  animation: fadeInUpBig 2s ease;
}
.text-2 {
  animation: fadeInUpBig 2s ease;
  animation-delay: 0.1s;
}
.text-3 {
  animation: fadeInUpBig 2s ease;
  animation-delay: 0.2s;
}
.text-4 {
  animation: fadeInUpBig 2s ease;
  animation-delay: 0.3s;
}
.text-5 {
  animation: fadeInUpBig 2s ease;
  animation-delay: 0.4s;
}
.text-6 {
  animation: fadeInUpBig 2s ease;
  animation-delay: 0.5s;
}
@keyframes showfirst {
  0%,
  30% {
    opacity: 0;
  }
  30.1%,
  100% {
    opacity: 1;
  }
}
.main-heading {
  text-align: left;
}
h2 {
  position: absolute;
}
h3 {
  position: absolute;
}
.header-text {
  padding-bottom: 0;
  display: block;
}
.u-header {
  padding-top: 0px;
  height: 15px;
  overflow: hidden;
  letter-spacing: 1px;
}
.text-u-header,
.text-u-header2 {
  text-transform: uppercase;
  font-size: 10px;
  font-family: 'Raleway';
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
}
.text-u-header1 {
  /* margin: 0; */
  float: left;
}
.text-u-header2 {
  margin-top: 0;
  width: 310px;
  /* height: 40px; */
  list-style: none;
  padding-left: 5px;
  text-align: left;
  overflow: hidden;
}
.text-u-header1 {
  animation: showup 10s ease;
}
/* .text-u-header {
  animation: slidein 13s;
} */
.text-u-header2 li {
  animation: slidein 13s;
}
.text-u-header2 {
  width: 0px;
  animation: reveal 13s ease;
}
.text-u-header2 {
  animation: change 10s infinite;
  animation-delay: 4s;
}
@keyframes showup {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
@keyframes slidein {
  0% {
    margin-left: -800px;
  }
  20% {
    margin-left: -800px;
  }
  35% {
    margin-left: 0px;
  }
  100% {
    margin-left: 0px;
  }
}
@keyframes reveal {
  0% {
    opacity: 0;
    width: 0px;
  }
  20% {
    opacity: 1;
    width: 0px;
  }
  30% {
    width: 305px;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    width: 305px;
  }
}
@keyframes change {
  0%,
  12.66%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  16.66%,
  29.32% {
    transform: translate3d(0, -16.5%, 0);
  }
  33.32%,
  45.98% {
    transform: translate3d(0, -33%, 0);
  }
  49.98%,
  62.64% {
    transform: translate3d(0, -50%, 0);
  }
  66.64%,
  79.3% {
    transform: translate3d(0, -66.5%, 0);
  }
  83.3%,
  95.96% {
    transform: translate3d(0, -83%, 0);
  }
}
@media (min-width: 700px) {
  .p-class {
    font-size: 50px;
    line-height: 4rem;
    text-align: center;
    letter-spacing: 3px;
    padding-bottom: 20px;
  }
  .main-index {
    padding-top: 300px;
  }
  .text-u-header {
    height: 25px;
    /* padding: 0 40px; */
  }
  .text-u-header1,
  .text-u-header2 {
    font-size: 18px;
    letter-spacing: 2px;
  }
  .text-u-header2 {
    width: 305px;
  }
  .text-u-header1 {
    display: inline;
  }
  .u-header {
    height: 300px;
    text-align: center;
    /* overflow: hidden; */
  }
}
@media (min-width: 1300px) {
  .p-class {
    font-size: 75px;
    line-height: 5.5rem;
  }
  .text-u-header1,
  .text-u-header2 {
    font-size: 29px;
  }
  .text-u-header {
    height: 40px;
  }
  .text-u-header2 {
    width: 430px;
  }
  @keyframes reveal {
    0% {
      opacity: 0;
      width: 0px;
    }
    20% {
      opacity: 1;
      width: 0px;
    }
    30% {
      width: 430px;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      width: 430px;
    }
  }
}
</style>
