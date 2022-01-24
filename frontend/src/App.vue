<template>
  <v-app>
        <v-container fluid class="primary">
         <v-row align="center">
          <v-col cols=2 class="text-center"><a href="/"><h1 style="color:white">Creds！</h1></a></v-col>
          <!-- <v-col cols=2 class="text-center"><a href="/"><img src="@/assets/Ging.png"/></a></v-col> -->
            <v-col cols=8 class="text-center" style="color: red">
              <v-autocomplete
                v-model="select"
                :loading="Sug_Loading"
                :items="items"
                :search-input.sync="search"
                cache-items
                v-bind:class="SearchArea"
                flat
                hide-no-data
                hide-details
                label="Enter Your Query"
                prepend-icon="mdi-magnify"
                solo-inverted
                @click:prepend="SendData(search); loading=true"
                @keypress.enter="SendData(search); loading=true; selected=false"
                background-color='grey'
                color='black'
                item-color='black'
                style="color: #6200EE">
              </v-autocomplete>
            </v-col>
          </v-row>
       </v-container>
        <v-container v-show="loading === true" class="primary">
        <v-overlay>
          <div id="content">
            <vue-loaders name="pacman" color="primary" scale="1"></vue-loaders>
            <h1>Now Searching・・・</h1>
          </div>
        </v-overlay>
        </v-container>
       <v-container>
         <Search :search_data='toChildSearchResult' v-if="currentComponent === 'Search'"></Search>
       </v-container>
       <v-col><br></v-col>
       <v-container>
        <v-footer color="primary" dark absolute app>
          <v-col class="font-weight-medium text-center" cols=12>Copyright © Creds! All Rights Reserved</v-col>
        </v-footer>
       </v-container>
  </v-app>
</template>

<script>
import Search from './components/Search.vue'
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      SearchArea: '',
      // 入力データ
      InputText: '',
      TextLength: null,
      loading: false,
      Sug_Loading: false,
      currentComponent: 'home',
      items: [],
      Sug_Result: [],
      toChildSearchResult: '',
      search: '',
      select: '',
      suggestCallBack: '',
      selected: true
    }
  },
  components: {
    Search
  },
  methods: {
    SendData: function (input) {
      const data = { text: input }
      // console.log(input)
      // console.log(data)
      axios
        .post('/api/call_search/post', data)
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
    querySelections2 (v) {
      this.Sug_Loading = true
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.Sug_Loading = false
      }, 500)
    },
    querySelections: function (v) {
      const UserQuery = { text: this.search }
      // console.log(UserQuery)
      this.Sug_Loading = true
      axios
        .post('/api/get_suggest/get', UserQuery)
        .then(response => {
          this.items = response.data
          console.log(response.data)
          this.Sug_Loading = false
        })
        .catch(err => {
          alert('APIサーバと接続できません')
          err = null
        })
    }
  },
  watch: {
    search (val) {
      val && val !== this.select && this.querySelections(val)
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

</style>
