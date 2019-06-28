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
      <v-container text-xs-center>
        <v-layout justify-center align-center>
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
              <v-card-text class="u-header" style=" color: aquamarine;">
                <div class="text-u-header">
                  we are an enthusiastic team of
                </div>
                <div class="text-u-header2" style="font-weight: 800;">
                  <span class="flip-text" style="color: #66cc99;"
                    >software developers</span
                  >
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
    <v-layout wrap class="index-2">
      <v-container class="index-2-cont" justify-center fluid>
        <v-flex xs12>
          <v-card height="900px" class="index-2-heading" flat>
            <v-card-title
              data-aos-delay="100"
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos="fade-right"
              class="index-2-headertext"
            >
              <h1 class="about-us" style="color: #404a60;">
                about<span style="font-weight: bold;"> us</span>
              </h1>
            </v-card-title>
            <v-card-text
              data-aos-delay="100"
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos="fade-up"
              class="index-2-uheader"
              >We do graphic designing, web & application development, SEO,<br />
              SEM, pay-per-click ads, social media marketing and other services
              focused<br />
              around optimizing your website and digital presence to multiply
              growth of<br />
              your company in the International market.
            </v-card-text>
          </v-card>
        </v-flex>
      </v-container>
    </v-layout>
    <v-layout wrap class="index-3">
      <v-container class="index-3-cont" justify-center fluid>
        <v-flex xs12>
          <v-card height="900px" class="index-3-heading" flat>
            <v-card-title
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos="fade-right"
              class="index-3-headertext"
            >
              <h1 class="our-services" style="color: #404a60;">
                our<span style="font-weight: bold;"> services</span>
              </h1>
            </v-card-title>
            <v-container
              class="index-3-cont2"
              grid-list-xl
              text-xs-center
              fluid
            >
              <v-layout>
                <v-flex xs4>
                  <v-hover>
                    <v-card
                      slot-scope="{ hover }"
                      flat
                      class="secondary"
                      height="520px"
                      width="580px"
                    >
                      <v-card-title class="index-3-c1-title">
                        web & app<br />
                        development
                      </v-card-title>
                      <v-card-text class="index-3-c-text"
                        >Software Solutions For Needs</v-card-text
                      >
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out accent v-card--reveal white--text"
                        >
                          <div style="line-height:2rem; margin-top:120px;">
                            <span
                              style="text-transform:uppercase; font-weight:bold; font-size:30px; "
                              >web & app development</span
                            >
                            <div
                              class="under-text"
                              style=" font-size:19px; font-weight:normal;"
                            >
                              Software Solutions For Needs<br /><br />
                              Do away with the hassle of<br />
                              repeated changes and start making profits
                              faster!<br />
                              We are a legit team of developers proficient at
                              WordPress,<br />
                              Magento, Shopify, WooCommerce and Mobile App<br />
                              Development Services.
                            </div>
                          </div>
                        </div>
                      </v-expand-transition>
                    </v-card>
                  </v-hover>
                </v-flex>
                <v-flex xs4>
                  <v-hover>
                    <v-card
                      slot-scope="{ hover }"
                      flat
                      class="accent"
                      height="520px"
                      width="580px"
                    >
                      <v-card-title class="index-3-c2-title">
                        digital<br />
                        media
                      </v-card-title>
                      <v-card-text class="index-3-c-text"
                        >Digital Reputation Management</v-card-text
                      >
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out tertiary v-card--reveal white--text"
                        >
                          <div
                            class="hover-text"
                            style="line-height:2rem; margin-top:120px;"
                          >
                            <span
                              style="text-transform:uppercase; font-weight:bold; font-size:30px; "
                            >
                              digital media</span
                            >
                            <div
                              class="under-text"
                              style=" font-size:19px; font-weight:normal;"
                            >
                              Digital Reputation Management<br /><br />
                              Our digital & social media team<br />
                              creates impactful experiences for your audience<br />
                              through audience intelligence and sophisticated
                              targeting. By<br />
                              understanding when, where, and how the audience
                              wants<br />
                              to be communicated with, we develop campaigns<br />
                              that reach right people at the right time.
                            </div>
                          </div>
                        </div>
                      </v-expand-transition>
                    </v-card>
                  </v-hover>
                </v-flex>
                <v-flex xs4>
                  <v-hover>
                    <v-card
                      slot-scope="{ hover }"
                      flat
                      class="tertiary"
                      height="520px"
                      width="580px"
                    >
                      <v-card-title class="index-3-c3-title">
                        graphic<br />
                        design
                      </v-card-title>
                      <v-card-text class="index-3-c-text"
                        >Creative Material For Branding</v-card-text
                      >
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out secondary v-card--reveal white--text"
                        >
                          <div style="line-height:2rem; margin-top:120px;">
                            <span
                              style="text-transform:uppercase; font-weight:bold; font-size:30px; "
                            >
                              graphic design</span
                            >
                            <div
                              class="under-text"
                              style=" font-size:19px; font-weight:normal;"
                            >
                              Creative Material For Successful Branding And
                              Messaging<br /><br />
                              We convert pixel-perfect designs into<br />
                              retina-ready codes for your clients within the<br />
                              decided timelines. Be it a social media design or
                              a website <br />landing page, our team is ready to
                              meet<br />
                              your commitments for you.
                            </div>
                          </div>
                        </div>
                      </v-expand-transition>
                    </v-card>
                  </v-hover>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-container>
    </v-layout>
    <v-layout wrap class="index-4">
      <v-container class="index-4-cont" justify-center fluid>
        <v-flex xs12>
          <v-card height="1000px" class="index-4-heading" flat>
            <v-card-title
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos="fade-right"
              class="index-4-headertext"
            >
              <h1 class="our-expertise" style="color: #404a60;">
                our<span style="font-weight: bold;"> expertise</span>
              </h1>
            </v-card-title>
            <v-container
              class="index-4-cont2"
              grid-list-xl
              text-xs-center
              fluid
            >
              <v-layout>
                <v-flex xs4>
                  <v-card
                    flat
                    data-aos-delay="100"
                    data-aos-duration="2000"
                    data-aos-easing="ease"
                    data-aos="fade-right"
                    height="500px"
                    width="580px"
                  >
                    <v-card-title class="index-4-c1-title">
                      web
                      <span style="color: #404a60;"> &nbsp;development</span>
                    </v-card-title>
                    <v-card-text class="index-4-c1-text">
                      Node.js<br />
                      React, Vue, Ember<br />
                      PHP, Symphony, Laravel<br />
                      MySQL, PostgreSQL, MonogoDB<br />
                      Elastic
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs4>
                  <v-card
                    flat
                    data-aos-delay="100"
                    data-aos-duration="2000"
                    data-aos-easing="ease"
                    data-aos="fade-up"
                    height="500px"
                    width="580px"
                  >
                    <v-card-title class="index-4-c2-title">
                      mobile
                      <span style="color: #404a60;"> &nbsp;development</span>
                    </v-card-title>
                    <v-card-text class="index-4-c2-text">
                      React Native<br />
                      Swift<br />
                      IOS<br />
                      Java<br />
                      Android
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs4>
                  <v-card
                    flat
                    data-aos-delay="100"
                    data-aos-duration="2000"
                    data-aos-easing="ease"
                    data-aos="fade-left"
                    height="500px"
                    width="580px"
                  >
                    <v-card-title class="index-4-c2-title">
                      machine
                      <span style="color: #404a60;"> &nbsp;learning</span>
                    </v-card-title>
                    <v-card-text class="index-4-c3-text">
                      Python<br />
                      Natural Language Processing
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-container>
    </v-layout>
    <v-layout wrap class="index-5">
      <v-container class="index-5-cont" justify-center fluid>
        <v-flex xs12>
          <v-card height="1250px" class="index-5-heading accent" flat>
            <v-card-title
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos="fade-right"
              class="index-5-headertext"
            >
              <h1
                class="what-we-do"
                style="color: whitesmoke; padding-bottom:30px;"
              >
                what we<span style="font-weight: bold;"> do</span>
              </h1>
            </v-card-title>
            <v-container class="index-5-cont2" text-xs-center fluid>
              <v-layout>
                <v-flex xs4 class="index-5-flex">
                  <v-card
                    class="index-5-card"
                    flat
                    height="250px"
                    width="580px"
                    color="#404a60"
                    data-aos-delay="100"
                    data-aos-duration="2000"
                    data-aos-easing="ease"
                    data-aos="fade-right"
                  >
                    <v-card-title class="index-5-c1-title">
                      web
                      <span style="color: #66cc99;"> &nbsp;design</span>
                    </v-card-title>
                    <v-card-text class="index-5-c1-text">
                      Our fresh design concepts<br />
                      give an amazing user expe- <br />rience which translates
                      to<br />
                      return customers & gener- <br />ate business
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs4 class="index-5-flex">
                  <v-card
                    class="index-5-card"
                    flat
                    height="250px"
                    width="580px"
                    color="#404a60"
                    data-aos-delay="100"
                    data-aos-duration="2000"
                    data-aos-easing="ease"
                    data-aos="fade-up"
                  >
                    <v-card-title class="index-5-c2-title">
                      graphic
                      <span style="color: #66cc99;"> &nbsp;design</span>
                    </v-card-title>
                    <v-card-text class="index-5-c2-text">
                      Our fresh design concepts<br />
                      give an amazing user expe- <br />rience which translates
                      to<br />
                      return customers & gener- <br />ate business
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs4 class="index-5-flex">
                  <v-card
                    class="index-5-card"
                    flat
                    height="250px"
                    width="580px"
                    color="#404a60"
                    data-aos-delay="100"
                    data-aos-duration="2000"
                    data-aos-easing="ease"
                    data-aos="fade-left"
                  >
                    <v-card-title class="index-5-c2-title">
                      web
                      <span style="color: #66cc99;"> &nbsp;maintaince</span>
                    </v-card-title>
                    <v-card-text class="index-5-c3-text">
                      Our fresh design concepts<br />
                      give an amazing user expe- <br />rience which translates
                      to<br />
                      return customers & gener- <br />ate business
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
            <v-container class="index-5-cont2" text-xs-center fluid>
              <v-layout>
                <v-flex xs4 class="index-5-flex">
                  <v-card
                    class="index-5-card"
                    flat
                    height="250px"
                    width="580px"
                    color="#404a60"
                    data-aos-delay="100"
                    data-aos-duration="2000"
                    data-aos-easing="ease"
                    data-aos="fade-right"
                  >
                    <v-card-title class="index-5-c1-title">
                      web
                      <span style="color: #66cc99;"> &nbsp;development</span>
                    </v-card-title>
                    <v-card-text class="index-5-c1-text">
                      Our fresh design concepts<br />
                      give an amazing user expe- <br />rience which translates
                      to<br />
                      return customers & gener- <br />ate business
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs4 class="index-5-flex">
                  <v-card
                    class="index-5-card"
                    flat
                    height="250px"
                    width="580px"
                    color="#404a60"
                    data-aos-delay="100"
                    data-aos-duration="2000"
                    data-aos-easing="ease"
                    data-aos="fade-up"
                  >
                    <v-card-title class="index-5-c2-title">
                      app
                      <span style="color: #66cc99;"> &nbsp;development</span>
                    </v-card-title>
                    <v-card-text class="index-5-c2-text">
                      Our fresh design concepts<br />
                      give an amazing user expe- <br />rience which translates
                      to<br />
                      return customers & gener- <br />ate business
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs4 class="index-5-flex">
                  <v-card
                    class="index-5-card"
                    flat
                    height="250px"
                    width="580px"
                    color="#404a60"
                    data-aos-delay="100"
                    data-aos-duration="2000"
                    data-aos-easing="ease"
                    data-aos="fade-left"
                  >
                    <v-card-title class="index-5-c2-title">
                      digital
                      <span style="color: #66cc99;"> &nbsp;marketing</span>
                    </v-card-title>
                    <v-card-text class="index-5-c3-text">
                      Our fresh design concepts<br />
                      give an amazing user expe- <br />rience which translates
                      to<br />
                      return customers & gener- <br />ate business
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
            <v-container class="index-5-cont2" text-xs-center fluid>
              <v-layout>
                <v-flex xs4 class="index-5-flex">
                  <v-card
                    class="index-5-card"
                    flat
                    height="250px"
                    width="580px"
                    color="#404a60"
                    data-aos-delay="100"
                    data-aos-duration="2000"
                    data-aos-easing="ease"
                    data-aos="fade-right"
                  >
                    <v-card-title class="index-5-c1-title">
                      e-
                      <span style="color: #66cc99;"> &nbsp;commerce</span>
                    </v-card-title>
                    <v-card-text class="index-5-c1-text">
                      Our fresh design concepts<br />
                      give an amazing user expe- <br />rience which translates
                      to<br />
                      return customers & gener- <br />ate business
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs4 class="index-5-flex">
                  <v-card
                    class="index-5-card"
                    flat
                    height="250px"
                    width="580px"
                    color="#404a60"
                    data-aos-delay="100"
                    data-aos-duration="2000"
                    data-aos-easing="ease"
                    data-aos="fade-up"
                  >
                    <v-card-title class="index-5-c2-title">
                      social
                      <span style="color: #66cc99;"> &nbsp;media</span>
                    </v-card-title>
                    <v-card-text class="index-5-c2-text">
                      Our fresh design concepts<br />
                      give an amazing user expe- <br />rience which translates
                      to<br />
                      return customers & gener- <br />ate business
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-container>
    </v-layout>
    <v-layout wrap class="index-6">
      <v-container class="index-6-cont" justify-center fluid>
        <v-flex xs12>
          <v-card height="900px" class="index-6-heading" flat>
            <v-card-title
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos="fade-right"
              class="index-6-headertext"
            >
              <h1 class="why-choose-us" style="color: #404a60;">
                why<span style="font-weight: bold;"> choose us</span>
              </h1>
            </v-card-title>
            <v-card-text
              data-aos-delay="100"
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos="fade-up"
              class="index-6-uheader"
              >We understand the client, assess their needs and gather team set
              to reach<br />
              target goals. Your goals can be as varied as building software for
              a retail<br />
              store to designing a logo for your new brand. We reach these goals
              with our<br />
              team of expert programmers, coders, UI/UX designers, web
              developers,<br />
              application developers, digital media strategists, social media
              marketers,<br />
              and SEO & SEM fanatics that employ their best skills and expertise
              to deliver a<br />
              successful project. We provide unparalleled support to our clients
              who grow<br />
              their business and get to enjoy the praise.
            </v-card-text>
          </v-card>
        </v-flex>
      </v-container>
    </v-layout>
  </v-app>
</template>

<script>
import Layout from '~/components/default.vue'
// import Footer from '~/components/footer.vue'
export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style scoped>
.p-class {
  font-size: 75px;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  color: #66cc99;
  letter-spacing: 1px;
  line-height: 6rem;
  text-transform: uppercase;
}
.main-heading {
  text-align: center;
  padding-top: 150px;
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
  text-align: center;
  display: block;
}
.u-header {
  padding-top: 0px;
  line-height: 3rem;
  letter-spacing: 3px;
}
.text-u-header,
.text-u-header2 {
  text-transform: uppercase;
  font-size: 29px;
  font-weight: 500;
  font-family: 'Raleway';
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
}
.text-u-header {
  animation: showup 4s ease;
}
.text-u-header2 {
  /* width: 0px; */
  animation: reveal 7s;
}
.text-u-header span {
  /* margin-left: -413px; */
  animation: slidein 7s;
}
.text-u-header2 span {
  /* margin-left: -413px; */
  animation: slidein 7s;
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
    width: 408px;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    width: 408px;
  }
}
.index-2-cont {
  padding: 0;
}
.index-2-headertext {
  padding-top: 300px;
  justify-content: center;
}
.about-us {
  text-transform: uppercase;
  font-size: 75px;
  font-family: 'Raleway';
  font-weight: normal;
}
.index-2-uheader {
  text-align: center;
  padding-top: 0;
  font-size: 25px;
  font-family: 'Raleway';
}
.index-3-cont {
  padding: 0;
}
.index-3-headertext {
  padding-top: 200px;
  justify-content: center;
}
.our-services {
  text-transform: uppercase;
  font-size: 75px;
  font-family: 'Raleway';
  font-weight: normal;
}
.index-3-uheader {
  text-align: center;
  padding-top: 0;
  font-size: 25px;
  font-family: 'Raleway';
}
.index-3-c1-title {
  font-size: 40px;
  font-family: 'Raleway';
  text-transform: uppercase;
  color: #404a60;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  padding-top: 160px;
  line-height: 3.2rem;
  letter-spacing: 3px;
}
.index-3-c2-title {
  font-size: 40px;
  font-family: 'Raleway';
  text-transform: uppercase;
  color: whitesmoke;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  padding-top: 160px;
  line-height: 3.2rem;
  letter-spacing: 3px;
}
.index-3-c3-title {
  font-size: 40px;
  font-family: 'Raleway';
  text-transform: uppercase;
  color: #404a60;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  padding-top: 160px;
  line-height: 3.2rem;
  letter-spacing: 3px;
}
.index-3-c-text {
  font-family: 'Raleway';
  font-size: 18px;
  color: whitesmoke;
  padding-top: 0;
  letter-spacing: 2px;
}
.index-4-cont {
  padding: 0;
}
.index-4-headertext {
  padding-top: 300px;
  justify-content: center;
}
.our-expertise {
  text-transform: uppercase;
  font-size: 75px;
  font-family: 'Raleway';
  font-weight: normal;
}
.index-4-c1-title {
  text-transform: uppercase;
  font-family: 'Raleway';
  font-size: 24px;
  font-weight: bold;
  color: #66cc99;
  text-align: center;
  justify-content: center;
  padding-bottom: 0;
}
.index-4-c2-title {
  text-transform: uppercase;
  font-family: 'Raleway';
  font-size: 24px;
  font-weight: bold;
  color: #66cc99;
  justify-content: center;
  padding-bottom: 0;
}
.index-4-c3-title {
  text-transform: uppercase;
  font-family: 'Raleway';
  font-size: 24px;
  font-weight: bold;
  color: #66cc99;
  justify-content: center;
  padding-bottom: 0;
}
.index-4-c1-text {
  text-align: left;
  padding-left: 170px;
  padding-top: 0;
  font-family: 'Raleway';
  font-size: 19px;
  font-weight: 600;
  line-height: 2.7rem;
  letter-spacing: 1.5px;
}
.index-4-c2-text {
  text-align: left;
  padding-left: 154px;
  padding-top: 0;
  font-family: 'Raleway';
  font-size: 19px;
  font-weight: 600;
  line-height: 2.7rem;
  letter-spacing: 1.5px;
}
.index-4-c3-text {
  text-align: left;
  padding-left: 170px;
  padding-top: 0;
  font-family: 'Raleway';
  font-size: 19px;
  font-weight: 600;
  line-height: 2.7rem;
  letter-spacing: 1.5px;
}
.index-5-cont {
  padding: 0;
}
.index-5-headertext {
  padding-top: 200px;
  justify-content: center;
}
.what-we-do {
  text-transform: uppercase;
  font-size: 75px;
  font-family: 'Raleway';
  font-weight: normal;
}
.index-5-c1-title {
  text-transform: uppercase;
  font-family: 'Raleway';
  font-size: 24px;
  font-weight: bold;
  color: whitesmoke;
  text-align: center;
  justify-content: center;
  padding-top: 0;
}
.index-5-c2-title {
  text-transform: uppercase;
  font-family: 'Raleway';
  font-size: 24px;
  font-weight: bold;
  color: whitesmoke;
  justify-content: center;
  padding-top: 0;
}
.index-5-c3-title {
  text-transform: uppercase;
  font-family: 'Raleway';
  font-size: 24px;
  font-weight: bold;
  color: whitesmoke;
  justify-content: center;
  padding-top: 0;
}
.index-5-c1-text {
  text-align: left;
  padding-left: 170px;
  padding-top: 0;
  padding-bottom: 0;
  font-family: 'Raleway';
  font-size: 19px;
  font-weight: 600;
  letter-spacing: 1.5px;
  color: whitesmoke;
}
.index-5-c2-text {
  text-align: left;
  padding-left: 154px;
  padding-top: 0;
  padding-bottom: 0;
  font-family: 'Raleway';
  font-size: 19px;
  font-weight: 600;
  letter-spacing: 1.5px;
  color: whitesmoke;
}
.index-5-c3-text {
  text-align: left;
  padding-left: 170px;
  padding-top: 0;
  padding-bottom: 0;
  font-family: 'Raleway';
  font-size: 19px;
  font-weight: 600;
  letter-spacing: 1.5px;
  color: whitesmoke;
}
.index-5-cont2 {
  padding: 0;
}
.index-5-card {
  color: #404a60;
}
.index-6-cont {
  padding: 0;
}
.index-6-headertext {
  padding-top: 200px;
  justify-content: center;
}
.why-choose-us {
  text-transform: uppercase;
  font-size: 75px;
  font-family: 'Raleway';
  font-weight: normal;
}
.index-6-uheader {
  text-align: center;
  padding-top: 0;
  font-size: 25px;
  font-family: 'Raleway';
}
.v-card--reveal {
  justify-content: center;
  align-content: center;
  text-align: center;
  bottom: 0;
  position: absolute;
  font-family: 'Raleway';
  width: 100%;
  height: 100%;
}
.under-text {
  line-height: 2rem;
}
</style>
