<template>
  <v-app>
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
          :to="item.to"
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
      </v-menu>
    </v-toolbar>
    <!-- <v-content>
      <v-container fluid px-5>
        <nuxt />
      </v-container>
    </v-content> -->
    <!-- <v-navigation-drawer
      v-model="rightDrawer"
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
    <!-- <v-footer :fixed="fixed" dark color="#404a60">
      <span>&copy; 2019</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'home',
          title: 'home',
          to: '/'
        },
        {
          icon: 'apps',
          title: 'what we do',
          to: '#'
        },
        {
          icon: 'home',
          title: 'services',
          to: '#'
        },
        {
          icon: 'info',
          title: 'about us',
          to: '#'
        },
        {
          icon: 'home',
          title: 'contact',
          to: '#'
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
@media (min-width: 1200px) {
  .btn-toolbar {
    font-size: 25px;
    padding: 0 30px;
  }
  .main-title-toolbar {
    padding: 35px 30px;
  }
}
</style>
