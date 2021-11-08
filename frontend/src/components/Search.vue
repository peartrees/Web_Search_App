<template>
  <v-row>
    <!-- <div class="searching">
      <div class="loader-space" v-show="loading">
        <vue-loaders-ball-beat color="#FFF" class="loader"></vue-loaders-ball-beat>
      </div>
    </div> -->
    <v-col cols=6>
      <v-card raised color="blue lighten-4">
      <v-subheader><h3>Google results</h3></v-subheader>
      <v-divider class="mx-3"></v-divider>
        <div class="body-1 mb-1">Displays Google Results</div>
        <!-- <div class="body-2 mb-2">{{search_data[0]}}</div> -->
     </v-card>
    </v-col>
    <v-col cols=6>
      <v-card raised color="blue lighten-4">
      <v-subheader><h3>Bing results</h3></v-subheader>
      <v-divider class="mx-3"></v-divider>
        <!-- <div class="body-1 mb-1">Displays Bing Results</div> -->
        <v-list>
          <v-list-item v-for="(value, index) in search_data" :key="value.id">
            <v-list-item-content>
              <v-list-item-title>
                <a v-bind:href="value.url" target="_blank">{{index+1}}. {{value.name}}</a>
              </v-list-item-title>
            <p>{value.snippet}</p>
          </v-list-item-content>
          </v-list-item>
        </v-list>
        <!-- <div class="body-2 mb-2">{{search_data}}</div> -->
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
