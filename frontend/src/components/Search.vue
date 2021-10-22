<template>
  <v-row>
    <v-col cols=6>
      <v-card raised color="blue lighten-4">
      <v-subheader><h3>Google result</h3></v-subheader>
      <v-divider class="mx-3"></v-divider>
      <v-card-text>
        <div class="body-1 mb-1">Displays Search Results</div>
        <div class="body-2 mb-2">{{search_data[0]}}</div>
        <div class="body-2 mb-2">{{search_data[0]}}</div>
     </v-card-text>
      </v-card>
    </v-col>
    <v-col cols=6>
      <v-card raised color="blue lighten-4">
      <v-subheader><h3>Bing result</h3></v-subheader>
      <v-divider class="mx-3"></v-divider>
      <v-card-text>
        <div class="body-1 mb-1">Displays Search Results</div>
        <div class="body-2 mb-2">{{search_data[1]}}</div>
        <div class="body-2 mb-2">{{search_data[1]}}</div>
     </v-card-text>
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
  }
}
</script>
