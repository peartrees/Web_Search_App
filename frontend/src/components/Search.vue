<template>
  <v-row>
    <!-- <v-col cols=6>
      <v-card raised color="blue lighten-4">
      <v-subheader><h3>Bing Search Results</h3></v-subheader>
      <v-divider class="mx-3"></v-divider>
      <v-list>
        <v-list-item v-for="(value, index) in search_data[0]" :key="value.id">
          <v-list-item-content>
            <v-list-item-title>
              <a v-bind:href="value.url" target="_blank">{{index+1}}. {{value.name}}</a>
            </v-list-item-title>
          <p v-html="value.snippet"></p>
        </v-list-item-content>
        </v-list-item>
      </v-list>
     </v-card>
    </v-col> -->
    <v-col>
      <v-card raised color="blue lighten-4">
      <v-subheader><h3>Google Search Results</h3></v-subheader>
      <v-divider class="mx-3"></v-divider>
        <v-list>
          <v-list-item v-for="(value, index_ggl) in search_data[0]" :key="value.cacheid">
            <v-list-item-content>
              <p v-html="value.link" style="font-size: 8pt; color: #A9A9A9"></p>
              <v-list-item-title>
                <a v-bind:href="value.link" style="font-size: 15pt" target="_blank">{{index_ggl+1}}. {{value.title}}</a>
              </v-list-item-title>
            <p v-html="value.snippet"></p>
          </v-list-item-content>
          </v-list-item>
        </v-list>
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
