<template>
  <v-app>

    <!----------------TOOL BAR BEGINS---------------->
    <v-toolbar app style="background-color: rgba(39, 39, 39); color: #ffffff; margin-top: -4px; margin-bottom: -4px"
      src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg">
      <v-toolbar-title style="padding-left: 20px" class="font-weight-black">
        © [School]'s Notebook
      </v-toolbar-title>
      <div style="display: flex; gap: 20px; padding-right: 40px">
        <v-btn text rounded>Info</v-btn>
      </div>
    </v-toolbar>
    <!----------------TOOL BAR ENDS---------------->

    <!----------------MAIN PAGE BEGINS---------------->
    <!-----------Sign In Card Begins----------->
    <v-main class="pa-0">
      <v-parallax src="https://wallpaperaccess.com/full/39608.jpg" class="pa-4" style="color: white">
        <v-content class="pa-4">
          <v-card elevation="8" outlined width="760" height="505" class="mx-auto mt-10"
            style="background-color: rgba(39, 39, 39, 0.8); color: #ffffff">
            <v-card-title style="color: #b6b6b6">Logging in</v-card-title>
            <v-card-text>
              <h1>Create an account!</h1>
              <v-spacer></v-spacer>
              <v-divider vertical />
              <h2 class="font-weight-medium">
 								Fill out the following, then click submit to create your account and sign in              
              </h2>
              <v-divider vertical></v-divider>
          
                        <v-text-field
            label="School Email"
            placeholder="example@gmail.com"
          ></v-text-field>
              
                        <v-text-field
            label="Username"
            placeholder=""
          ></v-text-field>

                        <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
              
                                      <v-text-field
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Confirm Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
            placeholder="⚠️DOUBLE CHECK IF THIS IS CORRECT!⚠️"
          ></v-text-field>
              
              
              
              <v-btn class="mt-4" color="red">Go back</v-btn>
              <v-btn class="mt-4" color=#14b02c>Create and sign in</v-btn>
            </v-card-text>
          </v-card>
          <!-----------Sign In Card Begins----------->

        </v-content>
      </v-parallax>
    </v-main>
    <!----------------MAIN PAGE ENDS---------------->

    <!------------FOOTER BEGINS------------>
  <v-footer padless color="black">
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>The Notebook of America</strong>
    </v-col>
  </v-footer>
    <!------------FOOTER ENDS------------>

  </v-app>
</template>


<script>
export default {
  name: "App",

  data: () => ({
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
  }),
};
</script>

<style>
.mt-4 {
  margin-right: 15px
}
</style>



