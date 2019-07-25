<template>
  <v-app id="app">
    <link
      rel="stylesheet"
      type="text/css"
      href="//fonts.googleapis.com/css?family=Raleway:400,500,600"
    />
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue2-smooth-scroll"></script>
    <!-- <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <v-toolbar prominent height="auto" flat app class="main-toolbar accent">
      <!-- <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>{{ `chevron_${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn> -->
      <v-toolbar-title class="main-title-toolbar">
        <a href="/">
          <v-img
            src="https://files.slack.com/files-pri/T3UCG9LPL-FKPS739B2/logo-01.png"
            contain
          />
        </a>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="toolbar-items hidden-md-and-down">
        <v-btn
          v-for="item in items"
          :key="item.icon"
          class="btn-toolbar text-lowercase"
          :href="item.route"
          flat
          depressed
          >{{ item.title }}</v-btn
        >
        <!-- <v-container>
          <a class="btn-toolbar" to="#" dark flat>home</a>
          <a class="btn-toolbar" to="#" dark flat>what we do</a>
          <a class="btn-toolbar" to="#" dark flat>services</a>
          <a class="btn-toolbar" to="#" dark flat>about us</a>
          <a class="btn-toolbar" to="#" dark flat>contact</a>
          <v-btn
            class="toolbar-nav"
            icon
            dark
            large
            @click.stop="rightDrawer = !rightDrawer"
          >
            <v-icon x-large>menu</v-icon>
          </v-btn>
        </v-container> -->
      </v-toolbar-items>
      <v-menu class="hidden-lg-and-up">
        <v-toolbar-side-icon
          slot="activator"
          class="white--text text-lowercase"
        ></v-toolbar-side-icon>
        <v-list>
          <v-list-tile
            v-for="(item, i) in items"
            :key="i"
            :href="item.route"
            router
            exact
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title" />
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <index />
      <AboutUs id="aboutus" />
      <OurServices id="ourservices" />
      <OurExpertise id="ourexpertise" />
      <WhatWeDo id="whatwedo" />
      <WhyChooseUs id="whychooseus" />
      <gpresense id="gpresense" />
      <customerreview id="customerreview" />
      <contactus id="contactus" />
      <Footer />
    </v-content>
    <!-- <v-navigation-drawer
      v-model="rightDrawer".index-7-cont {
    height: 500px;
  }
      :right="right"
      :clipped="clipped"
      :mini-variant="miniVariant"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <!-- <v-footer dark padless>
      <v-card class="footer-card primary accent--text text-center" flat tile>
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3 secondary white--text"
            fab
            icon
          >
            <v-icon large>{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text>
          Designed and developed with love by mint fuse.
        </v-card-text>
      </v-card>
    </v-footer> -->
  </v-app>
</template>

<script>
import index from '~/components/index.vue'
import AboutUs from '~/components/aboutus.vue'
import OurServices from '~/components/ourservices.vue'
import OurExpertise from '~/components/ourexpertise.vue'
import WhatWeDo from '~/components/whatwedo.vue'
import WhyChooseUs from '~/components/whychooseus.vue'
import gpresense from '~/components/Gpresense.vue'
import customerreview from '~/components/customerreview.vue'
import contactus from '~/components/contactus.vue'
import Footer from '~/components/footer.vue'
export default {
  components: {
    index,
    AboutUs,
    OurServices,
    OurExpertise,
    WhatWeDo,
    WhyChooseUs,
    gpresense,
    customerreview,
    contactus,
    Footer
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'home',
          title: 'home',
          route: '/'
        },
        {
          icon: 'apps',
          title: 'what we do',
          route: '#whatwedo'
        },
        {
          icon: 'home',
          title: 'services',
          route: '#ourservices'
        },
        {
          icon: 'info',
          title: 'about us',
          route: '#aboutus'
        },
        {
          icon: 'home',
          title: 'contact',
          route: '#contactus'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false
    }
  },
  methods: {
    menuItems() {
      return this.items
    }
  }
}
</script>

<style scoped>
/* .main-toolbar {
  background-color: rgba(255, 255, 255, 0);
} */
.main-title-toolbar {
  height: 80px;
  width: 180px;
  padding: 15px 15px;
}
.toolbar-items {
  padding: 0 30px;
}
.btn-toolbar {
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  color: whitesmoke;
  padding: 0 20px;
}
@media (min-width: 700px) {
  .main-title-toolbar {
    height: 180px;
    width: 360px;
    padding: 25px 30px;
  }
}
@media (min-width: 1000px) {
  .btn-toolbar {
    font-size: 20px;
    padding: 0 20px;
  }
  .main-title-toolbar {
    padding: 35px 30px;
  }
}
@media (min-width: 1300px) {
  .btn-toolbar {
    font-size: 25px;
    padding: 0 30px;
  }
  .main-title-toolbar {
    padding: 35px 30px;
  }
}
</style>
