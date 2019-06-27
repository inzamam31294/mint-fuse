import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/src/stylus/app.styl'
import '@mdi/font/css/materialdesignicons.css'
import '@mdi/font/css/materialdesignicons.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Animation from 'animate.css'
import VueAnimate from 'vue-animate-scroll'

Vue.use(Vuetify, {
  iconfont: 'md' || 'mdi' || 'fa' || 'fa4'
})

Vue.use(Animation)
Vue.use(VueAnimate)

Vue.use(Vuetify, {
  theme: {
    primary: '#404a60',
    accent: colors.grey.darken3,
    secondary: '#66cc99',
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  }
})
