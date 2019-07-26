<template>
  <v-layout wrap class="index-7">
    <v-container class="index-7-cont accent" text-xs-center fluid>
      <v-flex xs12>
        <v-card class="index-7-heading" flat>
          <v-card-title class="index-7-headertext">
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
              class="g-presense primary--text"
              data-aos-delay="500"
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos="fade-right"
            >
              global<span style="font-weight: bold;"> presense</span>
            </h1>
          </v-card-title>
          <v-container
            class="index-7-cont2"
            justify-center
            align-center
            text-xs-center
          >
            <v-layout justify-space-around row wrap>
              <v-flex xs10 sm4 md3 lg3 xl3>
                <v-card flat tile class="index-7-card">
                  <v-card-title
                    class="index-7-c-title primary--text text-uppercase"
                  >
                    <h1>uk</h1>
                  </v-card-title>
                  <v-card-text
                    class="index-7-c-text primary--text text-uppercase"
                    >united kingdom
                    <div class="gp-image">
                      <v-img
                        src="https://files.slack.com/files-pri/T3UCG9LPL-FLQ61PS3X/final_details-18.png"
                        contain
                      />
                    </div>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs10 sm4 md3 lg3 xl3>
                <v-card flat tile class="index-7-card">
                  <v-card-title
                    class="index-7-c-title primary--text text-uppercase"
                  >
                    <h1>asia</h1>
                  </v-card-title>
                  <v-card-text
                    class="index-7-c-text primary--text text-uppercase"
                  >
                    pakistan
                    <div class="gp-image">
                      <v-img
                        src="https://files.slack.com/files-pri/T3UCG9LPL-FLS400JUX/final_details-19.png"
                      />
                    </div>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs10 sm4 md3 lg3 xl3>
                <v-card flat tile class="index-7-card">
                  <v-card-title
                    class="index-7-c-title primary--text text-uppercase"
                  >
                    <h1>uae</h1>
                  </v-card-title>
                  <v-card-text
                    class="index-7-c-text primary--text text-uppercase"
                  >
                    united arab emirates
                    <div class="gp-image">
                      <v-img
                        src="https://files.slack.com/files-pri/T3UCG9LPL-FLQ61PS5B/final_details-20.png"
                      />
                    </div>
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

<script>
export default {}
</script>

<style scoped>
.index-7-cont {
  padding: 0px;
  height: 900px;
  background-image: url('https://files.slack.com/files-pri/T3UCG9LPL-FLPMC47FE/final_details-37.png');
  background-position: center;
  background-size: contain;
}
.index-7-heading {
  background-color: rgba(255, 255, 255, 0);
}
.g-presense {
  text-transform: uppercase;
  font-size: 25px;
  letter-spacing: 1px;
  font-family: 'Raleway';
  font-weight: normal;
}
.index-7-headertext {
  display: inline-flex;
  padding-top: 100px;
}
.index-7-cont2 {
  padding: 0px;
}
.index-7-card {
  background-color: rgba(255, 255, 255, 0);
}
.index-7-c-title {
  justify-content: center;
  font-size: 20px;
  letter-spacing: 1px;
  font-family: 'Raleway';
  padding-bottom: 0;
}
.index-7-c-text {
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  font-family: 'Raleway';
  padding-top: 0;
}
.gp-image {
  height: 30%;
  width: 30%;
  margin: 0 auto;
}
.arrow-class {
  height: 50px;
  width: 40px;
}
@media (min-width: 700px) {
  .g-presense {
    font-size: 50px;
    letter-spacing: 3px;
  }
  .index-7-uheader {
    font-size: 25px;
  }
  .index-7-cont {
    height: 500px;
  }
  .arrow-class {
    height: 80px;
    width: 80px;
  }
  .index-7-cont {
    padding: 0;
  }
}
@media (min-width: 1000px) {
  .g-presense {
    font-size: 75px;
    letter-spacing: 4px;
  }
  .index-7-cont {
    height: 900px;
  }
  .gp-image {
    height: 50%;
    width: 50%;
  }
  .index-7-headertext {
    padding-top: 200px;
  }
  .index-7-c-title {
    font-size: 25px;
    letter-spacing: 2px;
    line-height: 6rem;
  }
  .index-7-c-text {
    font-size: 19px;
    line-height: 2rem;
    letter-spacing: 1px;
  }
}
</style>
