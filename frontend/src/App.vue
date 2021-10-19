<template>
  <v-app>
    <v-app-bar color="primary" dark absolute app height="100">
      <v-toolbar-title class="flex text-center" ><h2>Ging!</h2></v-toolbar-title>
      <!-- <v-btn outlined>Button</v-btn> -->
    </v-app-bar>
    <v-footer color="primary" dark absolute app>
      <v-col class="font-weight-medium text-center" cols=12>Footer</v-col>
    </v-footer>
    <v-main>
      <v-container fluid>
          <v-row align="start" justify="center">
          <v-col cols="10">
          <v-text-field
            outlined
            rounded=True
            append-icon="mdi-magnify"
            background-color="grey lighten-3"
            v-model="InputText"
            @click:append="SendData"
            label="検索またはURLを入力"
            name="input-7-4"
            type="text">
            <!-- <template v-slot:append-outer>
              <v-btn color="primary">検索</v-btn>
            </template> -->
          </v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
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
