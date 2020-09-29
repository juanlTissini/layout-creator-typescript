<template>
  <!-- <img :src="require(`@/assets/tissini.png`)" alt style="width: 120px;" /> -->
  <v-container class="grey lighten-5 fill-height">
    <v-row class="mb-6" justify-md="center" align="center" no-gutters>
      <v-col lg="2">
        <v-card class="pa-2" outlined tile>
          1 of 3
        </v-card>
      </v-col>
      <v-col md="auto">
        <v-card class="pa-2" outlined tile>
          Variable width content
        </v-card>
      </v-col>
      <v-col lg="2">
        <v-card class="pa-2" outlined tile>
          3 of 3
        </v-card>
      </v-col>
    </v-row>
    <!-- <v-row no-gutters>
      <v-col>
        <v-card class="pa-2" outlined tile>
          1 of 3
        </v-card>
      </v-col>
      <v-col md="auto">
        <v-card class="pa-2" outlined tile>
          Variable width content
        </v-card>
      </v-col>
      <v-col lg="2">
        <v-card class="pa-2" outlined tile>
          3 of 3
        </v-card>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'

@Component({})
export default class Login extends Vue {
  user: string = ''
  password: string = ''
  alignments: Array<string> = ['start', 'center', 'end']
}
</script>

<style scoped></style>
