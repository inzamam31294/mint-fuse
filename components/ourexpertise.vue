<template>
  <v-layout wrap class="index-4 primary">
    <v-container class="index-4-cont" text-xs-center fluid>
      <v-flex xs12>
        <v-card class="index-4-heading" flat>
          <v-card-title
            data-aos-duration="2000"
            data-aos-easing="ease"
            data-aos="fade-right"
            class="index-4-headertext"
          >
            <v-img
              src="https://files.slack.com/files-pri/T3UCG9LPL-FL6S5MBK4/final_details-07.png"
              contain
              height="80"
              width="80"
            />
            <h1 class="our-expertise accent--text">
              our<span style="font-weight: bold;"> expertise</span>
            </h1>
          </v-card-title>
          <v-container class="index-4-cont2" grid-list-xl text-xs-center fluid>
            <v-layout row wrap>
              <v-flex mx-auto xs9 sm9 md9 lg4 xl4>
                <v-card
                  flat
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
              <v-flex mx-auto xs9 sm9 md9 lg4 xl4>
                <v-card
                  flat
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
              <v-flex mx-auto xs9 sm9 md9 lg4 xl4>
                <v-card
                  flat
                  data-aos-delay="100"
                  data-aos-duration="2000"
                  data-aos-easing="ease"
                  data-aos="fade-left"
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
</template>
<style scoped>
.index-4-cont {
  padding-top: 300px;
  padding-bottom: 300px;
  background-color: #ffff;
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
  font-size: 50px;
  letter-spacing: 3px;
  font-family: 'Raleway';
  font-weight: normal;
}
.index-4-c1-title,
.index-4-c2-title,
.index-4-c3-title {
  text-transform: uppercase;
  font-family: 'Raleway';
  font-size: 24px;
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
  font-size: 19px;
  font-weight: 600;
  line-height: 2.7rem;
  letter-spacing: 1.5px;
}
@media (min-width: 1000px) {
  .our-expertise {
    font-size: 75px;
    letter-spacing: 4px;
  }
}
</style>
