<template>
  <!-- <img :src="require(`@/assets/tissini.png`)" alt style="width: 120px;" /> -->
  <v-container class="grey lighten-5 fill-height">
    <v-row
      align="center"
      justify-md="center"
      style="height: 95vh; border: 1px solid blue;"
    >
      <v-col sm="11" md="6" lg="4">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Validate
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

          <v-btn color="warning" @click="resetValidation">
            Reset Validation
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
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

  valid: boolean = true
  name: string = ''
  nameRules: Array<any> = [
    (v: any) => !!v || 'Name is required',
    (v: any) => (v && v.length <= 10) || 'Name must be less than 10 characters',
  ]
  email: string = ''
  emailRules: Array<any> = [
    (v: any) => !!v || 'E-mail is required',
    (v: any) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
  ]
  select: string | null = null
  items: Array<string> = ['Item 1', 'Item 2', 'Item 3', 'Item 4']
  checkbox: boolean = false

  validate() {
    this.$refs.form.validate()
  }
  reset() {
    this.$refs.form.reset()
  }
  resetValidation() {
    this.$refs.form.resetValidation()
  }
}
</script>

<style scoped></style>
