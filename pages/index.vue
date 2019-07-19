<template>
  <v-app>
    <v-layout wrap class="accent">
      <Layout />
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
      <v-container>
        <v-layout>
          <v-flex xl12>
            <v-card class="main-heading accent" flat>
              <v-card-title class="header-text">
                <h1 class="p-class">
                  <p>
                    your
                    <span style="color: whitesmoke;">partner</span>
                    for all<br />
                    things <span style="color: whitesmoke;">digital</span>
                  </p>
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
        </v-layout>
      </v-container>
    </v-layout>
    <AboutUs />
    <OurServices />
    <OurExpertise />
    <WhatWeDo />
    <WhyChooseUs />
  </v-app>
</template>

<script>
import Layout from '~/components/default.vue'
import AboutUs from '~/components/aboutus.vue'
import OurServices from '~/components/ourservices.vue'
import OurExpertise from '~/components/ourexpertise.vue'
import WhatWeDo from '~/components/whatwedo.vue'
import WhyChooseUs from '~/components/whychooseus.vue'
// import Footer from '~/components/footer.vue'
export default {
  name: 'App',
  components: {
    Layout,
    AboutUs,
    OurServices,
    OurExpertise,
    WhatWeDo,
    WhyChooseUs
  }
}
</script>

<style scoped>
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
  animation: fadeInUp 2s ease;
  padding-bottom: 0;
  display: block;
}
.u-header {
  padding-top: 0px;
  height: 200px;
  overflow: hidden;
  letter-spacing: 1px;
}
.text-u-header,
.text-u-header2 {
  text-transform: uppercase;
  font-size: 10px;
  font-family: 'Raleway';
  overflow: hidden;
}
.text-u-header1 {
  margin: 0;
  float: left;
}
.text-u-header2 {
  margin-top: 0;
  width: 310px;
  list-style: none;
  padding-left: 5px;
  text-align: left;
}
.text-u-header {
  animation: showup 4s ease;
}
/* .text-u-header {
  animation: slidein 7s;
} */
.text-u-header2 li {
  animation: slidein 7s;
}
.text-u-header2 {
  animation: reveal 7s;
}
.text-u-header2 {
  animation: change 10s infinite;
  animation-delay: 2s;
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
    width: 310px;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    width: 310px;
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
  }
  .main-heading {
    padding-top: 150px;
  }
  .text-u-header {
    height: 25px;
    padding: 0 40px;
  }
  .text-u-header1,
  .text-u-header2 {
    font-size: 20px;
    letter-spacing: 2px;
  }
  .text-u-header2 {
    width: 320px;
  }
  .text-u-header1 {
    display: inline;
  }
  .u-header {
    height: 300px;
    text-align: center;
    overflow: hidden;
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
    padding: 0 40px;
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
