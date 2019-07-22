<template>
  <v-layout wrap class="index-3">
    <v-container class="index-3-cont primary" text-xs-center fluid>
      <v-flex xs12>
        <v-card class="index-3-heading" flat>
          <v-card-title
            data-aos-duration="2000"
            data-aos-easing="ease"
            data-aos="fade-right"
            class="index-3-headertext"
          >
            <v-img
              src="https://files.slack.com/files-pri/T3UCG9LPL-FL6S5MBK4/final_details-07.png"
              contain
              class="arrow-class"
            />
            <h1 class="our-services accent--text">
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
                    <v-card-title class="index-3-c1-title accent--text">
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
                        <div class="hover-text">
                          <span class="upper-text" style=""
                            >web & app development</span
                          >
                          <div class="under-text">
                            Software Solutions For Needs<br /><br />
                            Do away with the hassle of<br />
                            repeated changes and start making profits faster!<br />
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
              <v-flex xs12 sm12 md12 lg4 xl4>
                <v-hover>
                  <v-card
                    slot-scope="{ hover }"
                    flat
                    class="our-service-cards secondary"
                  >
                    <v-card-title class="index-3-c2-title accent--text">
                      digital<br />
                      media
                    </v-card-title>
                    <v-card-text class="index-3-c-text"
                      >Digital Reputation Management</v-card-text
                    >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out accent v-card--reveal white--text"
                      >
                        <div class="hover-text">
                          <span class="upper-text"> digital media</span>
                          <div class="under-text" style="">
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
              <v-flex xs12 sm12 md12 lg4 xl4>
                <v-hover>
                  <v-card
                    slot-scope="{ hover }"
                    flat
                    class="our-service-cards secondary"
                  >
                    <v-card-title class="index-3-c3-title accent--text">
                      graphic<br />
                      design
                    </v-card-title>
                    <v-card-text class="index-3-c-text"
                      >Creative Material For Branding</v-card-text
                    >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out accent v-card--reveal white--text"
                      >
                        <div class="hover-text">
                          <span class="upper-text"> graphic design</span>
                          <div class="under-text" style="">
                            Creative Material For Successful Branding And
                            Messaging<br /><br />
                            We convert pixel-perfect designs into<br />
                            retina-ready codes for your clients within the<br />
                            decided timelines. Be it a social media design or a
                            website <br />landing page, our team is ready to
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
</template>

<style scoped>
.index-3-cont {
  padding: 0;
  padding-top: 100px;
  padding-bottom: 100px;
}
.index-3-headertext {
  display: inline-flex;
}
.our-services {
  text-transform: uppercase;
  font-size: 25px;
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
  text-transform: uppercase;
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
  margin-top: 100px;
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
    padding: 0;
    padding-top: 200px;
    padding-bottom: 200px;
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
