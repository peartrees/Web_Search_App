<template>
  <v-row>
    <v-col cols=6>
      <v-card raised color="blue lighten-4">
      <v-subheader><h3>Google results</h3></v-subheader>
      <v-divider class="mx-3"></v-divider>
      <v-card-text>
        <div class="body-1 mb-1">Displays Google Results</div>
        <div class="body-2 mb-2">Results of Google</div>
        <!-- <div class="body-2 mb-2">{{search_data[0]}}</div> -->
      </v-card-text>
     </v-card>
    </v-col>
    <v-col cols=6>
      <v-card raised color="blue lighten-4">
      <v-subheader><h3>Bing results</h3></v-subheader>
      <v-divider class="mx-3"></v-divider>
      <v-card-text>
        <!-- <div class="body-1 mb-1">Displays Bing Results</div> -->
        <ul>
          <li v-for="value in search_data" :key="value.id">
            <a v-bind:href="value.url" target="_blank">{{value.name}}</a>
            <p>{{value.snippet}}</p>
         </li>
        </ul>
        <!-- <div class="body-2 mb-2">{{search_data}}</div> -->
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
