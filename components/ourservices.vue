<template>
  <v-layout wrap class="index-3 primary">
    <v-container class="index-3-cont" text-xs-center fluid>
      <v-flex xs12>
        <v-card class="index-3-heading mt-5" flat>
          <v-card-title class="index-3-headertext">
            <div
              data-aos-delay="300"
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos="fade-right"
            >
              <v-img
                src="https://files.slack.com/files-pri/T3UCG9LPL-FL6S5MBK4/final_details-07.png"
                contain
                class="arrow-class"
              />
            </div>
            <h1
              class="our-services accent--text text-uppercase"
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos="fade-right"
            >
              our<span style="font-weight: bold;"> services</span>
            </h1>
          </v-card-title>
          <v-container class="index-3-cont2" grid-list-xl text-xs-center fluid>
            <v-layout row wrap>
              <v-flex xs12 sm12 md12 lg4 xl4>
                <v-hover>
                  <v-card
                    slot-scope="{ hover }"
                    flat
                    class="our-service-cards secondary"
                  >
                    <v-card-title
                      class="index-3-c1-title accent--text text-uppercase"
                    >
                      web & app<br />
                      development
                    </v-card-title>
                    <v-card-text class="index-3-c-text accent--text"
                      >Software Solutions For Needs</v-card-text
                    >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out accent v-card--reveal white--text"
                      >
                        <div class="hover-text">
                          <span class="upper-text">web & app development</span>
                          <div class="under-text">
                            Our full-stack developers<br />
                            & agile experts combine the tech,<br />
                            the talent & the processes<br />
                            to build your web & mobile<br />
                            applications.
                          </div>
                        </div>
                      </div>
                    </v-expand-transition>
                  </v-card>
                </v-hover>
              </v-flex>
              <v-flex xs12 sm12 md12 lg4 xl4>
                <v-hover>
                  <v-card
                    slot-scope="{ hover }"
                    flat
                    class="our-service-cards accent"
                  >
                    <v-card-title
                      class="index-3-c2-title primary--text text-uppercase"
                    >
                      digital<br />
                      media
                    </v-card-title>
                    <v-card-text class="index-3-c-text"
                      >Digital Reputation Management</v-card-text
                    >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out tertiary v-card--reveal accent--text"
                      >
                        <div class="hover-text">
                          <span class="upper-text">digital media</span>
                          <div class="under-text">
                            We create impactful<br />
                            experiences for our audience<br />
                            through audience intelligence<br />
                            & sophisticated targeting.
                          </div>
                        </div>
                      </div>
                    </v-expand-transition>
                  </v-card>
                </v-hover>
              </v-flex>
              <v-flex xs12 sm12 md12 lg4 xl4>
                <v-hover>
                  <v-card
                    slot-scope="{ hover }"
                    flat
                    class="our-service-cards tertiary"
                  >
                    <v-card-title
                      class="index-3-c3-title accent--text text-uppercase"
                    >
                      graphic<br />
                      design
                    </v-card-title>
                    <v-card-text class="index-3-c-text accent--text"
                      >Creative Material For Branding</v-card-text
                    >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out secondary v-card--reveal white--text"
                      >
                        <div class="hover-text">
                          <span class="upper-text">graphic design</span>
                          <div class="under-text">
                            We convert pixel-perfect<br />
                            designs into retina-ready codes<br />
                            for our clients within the<br />
                            decided timelines.
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
</template>

<style scoped>
.index-3 {
  padding-top: 100px;
  padding-bottom: 100px;
}
.index-3-cont {
  padding: 0;
  /* padding-top: 100px;
  padding-bottom: 100px; */
}
.index-3-headertext {
  display: inline-flex;
}
.our-services {
  font-size: 20px;
  letter-spacing: 1px;
  font-family: 'Raleway';
  font-weight: normal;
}
.arrow-class {
  height: 50px;
  width: 40px;
}
.index-3-uheader {
  text-align: center;
  padding-top: 0;
  font-size: 25px;
  font-family: 'Raleway';
}
.index-3-c1-title,
.index-3-c2-title,
.index-3-c3-title {
  font-size: 30px;
  font-family: 'Raleway';
  font-weight: bold;
  text-align: center;
  justify-content: center;
  padding-top: 160px;
  line-height: 3.2rem;
  letter-spacing: 1px;
}
.index-3-c-text {
  font-family: 'Raleway';
  font-size: 18px;
  color: whitesmoke;
  padding-top: 0;
  letter-spacing: 1.5px;
}
.hover-text {
  line-height: 2rem;
  margin: auto 0;
}
.upper-text {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 25px;
}
.under-text {
  font-size: 13px;
  font-weight: normal;
  line-height: 1.5rem;
  padding-top: 20px;
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
.our-service-cards {
  height: 460px;
}
@media (min-width: 700px) {
  .our-services {
    font-size: 50px;
    letter-spacing: 4px;
  }
  .index-3-c1-title,
  .index-3-c2-title,
  .index-3-c3-title {
    font-size: 40px;
  }
  .index-3-c-text {
    font-size: 25px;
    letter-spacing: 1.5px;
  }
  .arrow-class {
    height: 80px;
    width: 80px;
  }
  .upper-text {
    font-size: 30px;
  }
  .under-text {
    font-size: 19px;
  }
  .index-3-cont {
    /* padding-top: 200px;
    padding-bottom: 200px; */
  }
}
@media (min-width: 1000px) {
  .our-services {
    font-size: 75px;
    letter-spacing: 4px;
  }
  .hover-text {
    line-height: 2.5rem;
    margin-top: 150px;
  }
}
@media (min-width: 1500px) {
  .our-service-cards {
    height: 480px;
  }
}
</style>
