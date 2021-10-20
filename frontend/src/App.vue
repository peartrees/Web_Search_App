<template>
  <v-app>
        <v-container fluid class="primary">
            <v-row align="center">
                <v-col cols=2 class="text-center"><h1>Ging！</h1></v-col>
              <!-- <v-col cols=8> -->
              <v-col cols=8 class="text-center">
                <br>
            <v-text-field
              outlined
              rounded
              append-icon="mdi-magnify"
              background-color="grey lighten-2"
              v-model="InputText"
              @click:append="SendData"
              label="Search"
              name="input-7-4"
              type="text">
            </v-text-field>
          </v-col>
          </v-row>
        </v-container>
    <v-footer color="primary" dark absolute app>
      <v-col class="font-weight-medium text-center" cols=12>Footer</v-col>
    </v-footer>
    <!-- <v-main>
      <v-container fluid>
          <v-row align="start" justify="center">
          <v-col cols="10">
          <v-text-field
            outlined
            rounded=true
            append-icon="mdi-magnify"
            background-color="grey lighten-3"
            v-model="InputText"
            @click:append="SendData"
            label="検索またはURLを入力"
            name="input-7-4"
            type="text">
          </v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-main> -->
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',

  data () {
    return {
      // 入力データ
      InputText: '',
      TextLength: null,
      items: []
    }
  },

  methods: {
    SendData: function () {
      var data = { text: this.InputText }

      axios
        .post('/api/post', data)
        .then(response => {
          this.items.push(response.data)
        })
        .catch(err => {
          alert('APIサーバと接続できません')
          err = null
        })
    }
  }
}
</script>
