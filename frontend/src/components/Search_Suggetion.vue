<template>
  <v-row>
    <v-col cols=6>
      <v-card raised color="blue lighten-4">
      <v-subheader><h3>Bing Search Results</h3></v-subheader>
      <v-divider class="mx-3"></v-divider>
     </v-card>
    </v-col>
    <v-col cols=6>
      <v-card raised color="blue lighten-4">
      <v-subheader><h3>Google Search Results</h3></v-subheader>
      <v-divider class="mx-3"></v-divider>
        <!-- <div class="body-1 mb-1">Displays Bing Results</div> -->
    </v-card>
   </v-col>
 </v-row>
</template>

<script>
export default {
  name: 'search',
  props: ['search_data'],
  data () {
    return {
      title: 'this is Search result area'
    }
  },
  computed: {
    loading () {
      return this.$store.getters['loading/loading']
    }
  }
}
</script>
