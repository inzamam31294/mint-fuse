<template>
  <v-layout wrap class="index-4 primary">
    <v-container class="index-4-cont" text-xs-center fluid>
      <v-flex xs12>
        <v-card class="index-4-heading" color="rgba(255, 255, 255, 0)" flat>
          <v-card-title class="index-4-headertext">
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
              class="our-expertise accent--text text-uppercase"
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos="fade-right"
            >
              our<span style="font-weight: bold;"> expertise</span>
            </h1>
          </v-card-title>
          <v-container class="index-4-cont2" grid-list-xl text-xs-center fluid>
            <v-layout ma-3 justify-space-around row wrap>
              <v-flex xs12 sm10 md10 lg4 xl4>
                <v-card
                  flat
                  tile
                  color="rgba(255, 255, 255, 0)"
                  data-aos-delay="0"
                  data-aos-duration="2000"
                  data-aos-easing="ease"
                  data-aos="fade-up"
                >
                  <v-card-title class="index-4-c1-title">
                    <div class="icon-class">
                      <v-img
                        src="https://files.slack.com/files-pri/T3UCG9LPL-FLUMW8UDV/final_details-31.png"
                        contain
                      />
                    </div>
                    &nbsp;web
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
              <v-flex xs12 sm10 md10 lg4 xl4>
                <v-card
                  flat
                  tile
                  color="rgba(255, 255, 255, 0)"
                  data-aos-delay="250"
                  data-aos-duration="2000"
                  data-aos-easing="ease"
                  data-aos="fade-up"
                >
                  <v-card-title class="index-4-c2-title">
                    <div class="icon-class">
                      <v-img
                        src="https://files.slack.com/files-pri/T3UCG9LPL-FLV15132S/final_details-32.png"
                        contain
                      />
                    </div>
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
              <v-flex xs12 sm10 md10 lg4 xl4>
                <v-card
                  flat
                  tile
                  color="rgba(255, 255, 255, 0)"
                  data-aos-delay="500"
                  data-aos-duration="2000"
                  data-aos-easing="ease"
                  data-aos="fade-up"
                >
                  <v-card-title class="index-4-c3-title">
                    <div class="icon-class">
                      <v-img
                        src="https://files.slack.com/files-pri/T3UCG9LPL-FLV15130E/final_details-33.png"
                        contain
                      />
                    </div>
                    &nbsp;machine
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
.index-4 {
  /* padding-top: 100px; */
  padding-bottom: 100px;
  background-image: url('https://files.slack.com/files-pri/T3UCG9LPL-FLUR99H4P/experties.png');
  background-size: contain;
  background-position: center;
}
.index-4-cont {
  padding: 0;
}
.index-4-headertext {
  display: inline-flex;
}
.our-expertise {
  font-size: 20px;
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
  font-size: 12px;
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
  font-size: 11px;
  font-weight: 600;
  line-height: 1.5rem;
  letter-spacing: 1px;
}
.icon-class {
  height: 30px;
  width: 30px;
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
  .index-4 {
    padding-top: 200px;
    padding-bottom: 200px;
  }
  .icon-class {
    height: 80px;
    width: 80px;
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
