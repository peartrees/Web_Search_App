<template>
  <v-app>
        <v-container fluid class="primary">
         <v-row align="center">
          <v-col cols=2 class="text-center"><a href="/"><h1 style="color:white">Ging！</h1></a></v-col>
          <!-- <v-col cols=2 class="text-center"><a href="/"><img src="@/assets/Ging.png"/></a></v-col> -->
            <v-col cols=8 class="text-center" style="color:black">
              <!-- <v-autocomplete
                :search-input="InputText"
                color="white"
                item-text="Description"
                cache-items
                hide-no-data
                hide-selected
                return-object
                outlined
                rounded
                append-icon="mdi-magnify"
                background-color="grey lighten-2"
                v-model="InputText"
                @click:append="SendData(InputText); loading=true"
                @keydown.enter="SendData(InputText); loading=true"
                label="Search"
                single-line
                name="input-7-4"
                type="text">
              </v-autocomplete> -->
              <v-autocomplete
                v-model="select"
                :loading="Sug_Loading"
                :items="items"
                :search-input.sync="search"
                cache-items
                class="mx-4"
                flat
                hide-no-data
                hide-details
                label="Enter Your Query"
                prepend-icon="mdi-magnify"
                @click:prepend="SendData(InputText); loading=true"
                solo-inverted
                background-color='#E0E0E0'
                color='deep-purple darken-2'
                item-color='deep-purple darken-2'
                @keydown.enter="SendData(search); loading=true">
              </v-autocomplete>
            </v-col>
          </v-row>
       </v-container>
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

// import VueSimpleSuggest from 'vue-simple-suggest'
// import 'vue-simple-suggest/dist/styles.css'

export default {
  name: 'App',
  data () {
    return {
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
      states: [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'District of Columbia',
        'Federated States of Micronesia',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Marshall Islands',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Northern Mariana Islands',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Palau',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virgin Island',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming'
      ]
    }
  },
  components: {
    Search
  },
  methods: {
    SendData: function (input) {
      const data = { text: input }
      console.log(input)
      console.log(data)
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
      const user_query = { text: this.search }
      console.log(data2)
      this.Sug_Loading = true
      axios
        .post('/api/get_suggest/get', user_query)
        .then(response => {
          console.log(response)
          this.Sug_Result = response.data
          // console.log(this.Sug_Result)
          this.Sug_loading = false
        })
        .catch(err => {
          alert('APIサーバと接続できません')
          err = null
        })
      // Simulated ajax query
      // axios.get('https://www.google.com/complete/search',
      //   { params: { hl: 'ja', q: v, output: 'toolbar' }, withCredentials: true })
      //   .then(response => {
      // console.log(response)
      // this.Sug_Result = response.data
      //     this.Sug_loading = false
      //   })
      //   .catch(err => {
      //     alert('APIサーバと接続できません')
      //     err = null
      //   })
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
