<template>
  <v-layout wrap class="index-6">
    <v-container class="index-6-cont primary" text-xs-center fluid>
      <v-flex xs12>
        <v-card class="index-6-heading" flat>
          <v-card-title
            data-aos-duration="2000"
            data-aos-easing="ease"
            data-aos="fade-right"
            class="index-6-headertext"
          >
            <v-img
              src="https://files.slack.com/files-pri/T3UCG9LPL-FL6S5MBK4/final_details-07.png"
              contain
              height="80"
              width="80"
            />
            <h1 class="why-choose-us accent--text">
              why<span style="font-weight: bold;"> choose us</span>
            </h1>
          </v-card-title>
          <v-card-text
            data-aos-delay="100"
            data-aos-duration="2000"
            data-aos-easing="ease"
            data-aos="fade-up"
            class="index-6-uheader"
            >We understand the client, assess their needs and gather team set to
            reach<br />
            target goals. Your goals can be as varied as building software for a
            retail<br />
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
</template>

<style scoped>
.index-6-cont {
  padding: 0;
  padding-top: 300px;
  padding-bottom: 200px;
}
.index-6-headertext {
  display: inline-flex;
}
.why-choose-us {
  text-transform: uppercase;
  font-size: 50px;
  letter-spacing: 3px;
  font-family: 'Raleway';
  font-weight: normal;
}
.index-6-uheader {
  text-align: center;
  padding-top: 0;
  font-size: 20px;
  font-family: 'Raleway';
}
@media (min-width: 1000px) {
  .why-choose-us {
    font-size: 75px;
    letter-spacing: 4px;
  }
  .index-6-uheader {
    font-size: 25px;
  }
}
</style>
