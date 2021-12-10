<template>
  <v-app>
        <v-container fluid class="primary">
         <v-row align="center">
          <v-col cols=2 class="text-center"><a href="/"><h1 style="color:white">Ging！</h1></a></v-col>
          <!-- <v-col cols=2 class="text-center"><a href="/"><img src="@/assets/Ging.png"/></a></v-col> -->
            <v-col cols=8 class="text-center">
              <br>
              <vue-simple-suggest
                v-model="InputText"
                :list="getSuggestionList"
                :filter-by-query="true"
                id="suggest-input">
                <v-text-field
                  outlined
                  rounded
                  append-icon="mdi-magnify"
                  background-color="grey lighten-2"
                  @click:append="SendData(); loading=true"
                  v-model="InputText"
                  @keydown.enter="SendData(); loading=true"
                  label="Search"
                  single-line
                  name="input-7-4"
                  type="text"
                  autocomplete="off">
               </v-text-field>
              </vue-simple-suggest>
            </v-col>
          </v-row>
       </v-container>
       <!-- <v-container>
         <h1>Your query is : {{InputText}}</h1>
        </v-container> -->
        <v-container v-show="loading === true">
        <v-overlay>
          <div id="content">
            <vue-loaders name="pacman" color="blue" scale="1"></vue-loaders>
            <h1>Now Loading・・・</h1>
          </div>
        </v-overlay>
        </v-container>
       <v-container>
         <Search :search_data='toChildSearchResult' v-if="currentComponent === 'Search'"></Search>
       </v-container>
       <v-col><br></v-col>
       <v-container>
        <v-footer color="primary" dark absolute app>
          <v-col class="font-weight-medium text-center" cols=12>Copyright © Ging! All Rights Reserved</v-col>
        </v-footer>
       </v-container>
  </v-app>
</template>

<script>
import Search from './components/Search.vue'
import axios from 'axios'
import VueSimpleSuggest from 'vue-simple-suggest'
import 'vue-simple-suggest/dist/styles.css'

export default {
  name: 'App',
  data () {
    return {
      // 入力データ
      InputText: '',
      TextLength: null,
      loading: false,
      currentComponent: 'home',
      items: [],
      toChildSearchResult: '',
      Suggestion_List: ['Canada', 'China', 'Cameroon', 'Italy', 'Iraq', 'Iceland']
    }
  },
  components: {
    Search,
    VueSimpleSuggest
  },
  methods: {
    SendData: function () {
      const data = { text: this.InputText }

      axios
        .post('/api/post', data)
        .then(response => {
          this.toChildSearchResult = response.data
          this.loading = false
          this.currentComponent = 'Search'
        })
        .catch(err => {
          alert('APIサーバと接続できません')
          err = null
        })
    },
    getSuggestionList () {
      return ['Canada', 'China', 'Cameroon', 'Italy', 'Iraq', 'Iceland']
    }
  }
}
</script>

<style>
#overlay{
  z-index:1;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
#suggestinput{
  background-color:#E0E0E0;
}
</style>
