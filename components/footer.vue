<template>
  <v-footer class="pt-5" color="primary" height="auto" padless>
    <v-card class="footer-card primary" width="100%" flat tile>
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-2 secondary white--text"
          icon
          depressed
          tile
        >
          <v-icon>{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="accent--text pt-0 pb-5">
        Designed and Developed with love By mint fuse.
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        'mdi-linkedin',
        'mdi-google-plus',
        'mdi-facebook',
        'mdi-instagram',
        'mdi-whatsapp'
      ]
    }
  }
}
</script>

<style scoped>
.footer-card {
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Raleway', sans-serif;
}
@media (min-width: 700px) {
  .footer-card {
    font-size: 25px;
    font-weight: normal;
  }
}
</style>
