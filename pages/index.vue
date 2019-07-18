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
  /* padding-top: 150px; */
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
  line-height: 2rem;
  letter-spacing: 1px;
}
.text-u-header1 {
  /* display: inline; */
  margin: 0;
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
.text-u-header2 {
  height: 28px;
  width: 310px;
  list-style: none;
  padding-left: 0;
  text-align: left;
}
.text-u-header {
  animation: showup 4s ease;
}
/* .text-u-header {
  animation: slidein 7s;
} */
.text-u-header2 {
  animation: slidein 7s;
}
.text-u-header2 {
  animation: reveal 7s;
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
@media (min-width: 1400px) {
  .p-class {
    font-size: 75px;
    line-height: 6rem;
  }
  .text-u-header1,
  .text-u-header2 {
    font-size: 29px;
  }
  .text-u-header2 {
    height: 31px;
    width: 442px;
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
      width: 442px;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      width: 442px;
    }
  }
}
</style>
