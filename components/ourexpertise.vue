<template>
  <v-layout wrap class="index-4 primary">
    <v-container class="index-4-cont primary" text-xs-center fluid>
      <v-flex xs12>
        <v-card class="index-4-heading" flat>
          <v-card-title class="index-4-headertext">
            <div
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
              class="our-expertise accent--text"
              data-aos-delay="500"
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos="fade-right"
            >
              our<span style="font-weight: bold;"> expertise</span>
            </h1>
          </v-card-title>
          <v-container class="index-4-cont2" grid-list-xl text-xs-center fluid>
            <v-layout ma-3 justify-space-around row wrap>
              <v-flex xs10 sm10 md10 lg4 xl4>
                <v-card
                  flat
                  tile
                  data-aos-delay="100"
                  data-aos-duration="2000"
                  data-aos-easing="ease"
                  data-aos="fade-right"
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
              <v-flex xs10 sm10 md10 lg4 xl4>
                <v-card
                  flat
                  tile
                  data-aos-delay="100"
                  data-aos-duration="2000"
                  data-aos-easing="ease"
                  data-aos="fade-up"
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
              <v-flex xs10 sm10 md10 lg4 xl4>
                <v-card
                  flat
                  tile
                  data-aos-delay="100"
                  data-aos-duration="2000"
                  data-aos-easing="ease"
                  data-aos="fade-left"
                >
                  <v-card-title class="index-4-c3-title">
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
</template>
<style scoped>
.index-4-cont {
  padding-top: 100px;
  padding-bottom: 100px;
}
/* .index-4-cont2 {
  padding-left: 0;
  padding-right: 0;
} */
.index-4-headertext {
  display: inline-flex;
}
.our-expertise {
  text-transform: uppercase;
  font-size: 25px;
  letter-spacing: 1px;
  font-family: 'Raleway';
  font-weight: normal;
}
.arrow-class {
  height: 50px;
  width: 40px;
  align-items: initial;
}
.index-4-c1-title,
.index-4-c2-title,
.index-4-c3-title {
  text-transform: uppercase;
  font-family: 'Raleway';
  font-size: 16px;
  font-weight: bold;
  color: #66cc99;
  justify-content: center;
  padding-bottom: 0;
}
.index-4-c1-text,
.index-4-c2-text,
.index-4-c3-text {
  text-align: center;
  padding-top: 0;
  font-family: 'Raleway';
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5rem;
  letter-spacing: 1px;
}
@media (min-width: 700px) {
  .our-expertise {
    font-size: 50px;
    letter-spacing: 3px;
  }
  .index-4-c1-title,
  .index-4-c2-title,
  .index-4-c3-title {
    font-size: 30px;
  }
  .index-4-c1-text,
  .index-4-c2-text,
  .index-4-c3-text {
    font-size: 15px;
    line-height: 2rem;
    letter-spacing: 1.5px;
  }
  .arrow-class {
    height: 80px;
    width: 80px;
  }
  .index-4-cont {
    /* padding-top: 00px; */
    padding-bottom: 200px;
  }
}
@media (min-width: 1000px) {
  .our-expertise {
    font-size: 75px;
    letter-spacing: 4px;
  }
  .index-4-c1-text,
  .index-4-c2-text,
  .index-4-c3-text {
    font-size: 19px;
    line-height: 2.7rem;
    letter-spacing: 1.5px;
  }
}
</style>
