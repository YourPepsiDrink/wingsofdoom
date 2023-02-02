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
          <v-card elevation="8" outlined width="760" height="354" class="mx-auto mt-10"
            style="background-color: rgba(39, 39, 39, 0.8); color: #ffffff">
            <v-card-title style="color: #b6b6b6">Logging in</v-card-title>
            <v-card-text>
              <h1>Sign In!</h1>
              <v-spacer></v-spacer>
              <v-divider vertical />
              <h2 class="font-weight-medium">
 								Submit your login info here to sign in.       
              </h2>
              <v-divider vertical></v-divider>
          
              <v-text-field
            label="School email (example@gmail.com) or Username (your display name)"
            solo
          ></v-text-field>
              
                                          <v-text-field
            label="Password"
            solo
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
    //
  }),
};
</script>

<style>
.mt-4 {
  margin-right: 15px
}
</style>
