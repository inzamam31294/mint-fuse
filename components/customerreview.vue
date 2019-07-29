<template>
  <v-layout wrap class="index-8 primary">
    <v-container class="index-8-cont" text-xs-center fluid>
      <v-flex xs12>
        <v-card class="index-8-heading" color="rgba(255, 255, 255, 0)" flat>
          <v-card-title class="index-8-headertext">
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
              class="g-presense accent--text"
              data-aos-delay="500"
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos="fade-right"
            >
              customers<span style="font-weight: bold;"> review</span>
            </h1>
          </v-card-title>
          <v-container mb-5>
            <v-layout row wrap>
              <v-flex xs12>
                <v-card color="rgba(255, 255, 255, 0)" flat tile>
                  <v-window v-model="onboarding" continuous>
                    <v-window-item v-for="n in length" :key="`card-${n}`">
                      <v-card
                        flat
                        tile
                        color="rgba(255, 255, 255, 0)"
                        height="200"
                      >
                        <v-layout
                          align-center
                          justify-center
                          fill-height
                          tag="v-card-text"
                          mb-3
                        >
                          <h1 style="font-size: 5rem;" class="">
                            Slide {{ n }}
                          </h1>
                        </v-layout>
                      </v-card>
                    </v-window-item>
                  </v-window>
                  <v-card-actions class="justify-space-around">
                    <v-btn icon text @click="prev">
                      <v-icon x-large>mdi-chevron-left</v-icon>
                    </v-btn>
                    <v-window v-model="onboarding" continuous>
                      <v-window-item
                        v-for="(items, i) in customers"
                        :key="`card-${i}`"
                      >
                        <v-card
                          color="rgba(255, 255, 255, 0)"
                          height="100"
                          flat
                        >
                          <v-layout
                            d-inline
                            align-center
                            justify-center
                            tag="v-card-text"
                            mt-5
                            mb-0
                          >
                            <v-rating
                              v-model="items.rating"
                              background-color="secondary darken-1"
                              color="yellow darken-1"
                              dense
                              half-increments
                              empty-icon="$vuetify.icons.ratingFull"
                              hover
                              size="27"
                            >
                            </v-rating>
                            <p class="customer-names">{{ items.name }}</p>
                          </v-layout>
                        </v-card>
                      </v-window-item>
                    </v-window>
                    <v-btn icon text @click="next">
                      <v-icon x-large>mdi-chevron-right</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
          <v-container
            class="index-8-cont2"
            justify-center
            align-center
            text-xs-center
            mb-5
          >
            <v-layout justify-space-around row wrap>
              <v-flex xs4 sm4 md3 lg3 xl3>
                <v-card
                  flat
                  tile
                  color="rgba(255, 255, 255, 0)"
                  class="index-8-card"
                >
                  <v-card-text
                    class="index-8-c-text primary--text text-uppercase"
                  >
                    <div>
                      <v-img
                        src="https://files.slack.com/files-pri/T3UCG9LPL-FLQ61PS3X/final_details-18.png"
                        contain
                      />
                    </div>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs4 sm4 md3 lg3 xl3>
                <v-card
                  flat
                  tile
                  color="rgba(255, 255, 255, 0)"
                  class="index-8-card"
                >
                  <v-card-text
                    class="index-8-c-text primary--text text-uppercase"
                  >
                    <div>
                      <v-img
                        src="https://files.slack.com/files-pri/T3UCG9LPL-FLS400JUX/final_details-19.png"
                      />
                    </div>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs4 sm4 md3 lg3 xl3>
                <v-card
                  flat
                  tile
                  color="rgba(255, 255, 255, 0)"
                  class="index-8-card"
                >
                  <v-card-text
                    class="index-8-c-text primary--text text-uppercase"
                  >
                    <div>
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
export default {
  data: () => ({
    length: 4,
    onboarding: 0,
    autorun: true,
    customers: [
      {
        name: 'David',
        rating: 3
      },
      {
        name: 'Mike',
        rating: 4
      },
      {
        name: 'Miller',
        rating: 4.5
      },
      {
        name: 'Wanda',
        rating: 3.5
      }
    ]
  }),
  created() {
    setInterval(() => {
      if (!this.autorun) return
      if (++this.onboarding >= this.length) this.onboarding = 0
    }, 3000)
  },

  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1
    }
  }
}
</script>

<style scoped>
.index-8 {
  background-image: url('https://files.slack.com/files-pri/T3UCG9LPL-FLT0KSW5T/customer_review.png');
  background-size: contain;
  background-position: center;
}
.index-8-cont {
  padding: 0;
  /* height: 900px; */
  /* padding-bottom: 100px; */
}
.index-8-heading {
  background-color: rgba(255, 255, 255, 0);
}
.g-presense {
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 1px;
  font-family: 'Raleway';
  font-weight: normal;
}
.index-8-headertext {
  display: inline-flex;
  padding-top: 100px;
}
.index-8-cont2 {
  padding: 0px;
}
.index-8-c-title {
  justify-content: center;
  font-size: 20px;
  letter-spacing: 1px;
  font-family: 'Raleway';
  padding-bottom: 0;
}
.index-8-c-text {
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  font-family: 'Raleway';
  padding-top: 0;
}
/* .gp-image {
  height: 30%;
  width: 30%;
  margin: 0 auto;
} */
.arrow-class {
  height: 50px;
  width: 40px;
}
.customer-names {
  font-family: 'Raleway';
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
}
@media (min-width: 700px) {
  .g-presense {
    font-size: 50px;
    letter-spacing: 3px;
  }
  .index-8-uheader {
    font-size: 25px;
  }
  .index-8-cont {
    height: 1173px;
    /* padding-bottom: 100px; */
  }
  .arrow-class {
    height: 80px;
    width: 80px;
  }
}
@media (min-width: 1000px) {
  .g-presense {
    font-size: 75px;
    letter-spacing: 4px;
  }
  .index-8-headertext {
    padding-top: 200px;
  }
  .index-8-c-title {
    font-size: 25px;
    letter-spacing: 2px;
    line-height: 6rem;
  }
  .index-8-c-text {
    font-size: 19px;
    line-height: 2rem;
    letter-spacing: 1px;
  }
}
</style>
