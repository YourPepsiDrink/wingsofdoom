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
      <router-view/>
      <v-parallax src="https://wallpaperaccess.com/full/39608.jpg" class="pa-4" style="color: white">
        <v-content class="pa-4">
          <v-card elevation="8" outlined width="760" height="215" class="mx-auto mt-10"
            style="background-color: rgba(39, 39, 39, 0.8); color: #ffffff">
            <v-card-title style="color: #b6b6b6">Sign In</v-card-title>
            <v-card-text>
              <h1>Welcome to [School]'s Notebook!</h1>
              <v-spacer></v-spacer>
              <v-divider vertical />
              <div class="font-italic">
                Your local high school solutions dealer street where everything's locally created for the best learning
                experience!
              </div>
              <v-divider vertical />
              <h2 class="font-weight-bold">
                Log in or create a new account below!
              </h2>
              <v-btn class="mt-4" color=#455bff>Log In</v-btn>
              <v-btn class="mt-4" color=#14b02c>Create account</v-btn>
            </v-card-text>
          </v-card>
          <!-----------Sign In Card Begins----------->

          <!-----------About Section Begins----------->
          <v-card elevation="8" outlined width="800" height="116" class="mx-auto mt-10"
            style="background-color: rgba(39, 39, 39, 0.8); color: #ffffff">
            <h2 class="font-weight-bold" style="margin-left: 12px; margin-right: 12px">
              About
            </h2>
            <div style="margin-left: 12px; margin-right: 12px">
              Welcome! This is the unofficial student-made forum for [School]. In here, we can share and save steps
              to solve problems, guides with getting more involved, explanations to lessons, highschool tips: endless
              possibilities. Contribute to the community's culture and spirit through here!
            </div>
          </v-card>
          <!-----------About Section Ends----------->

          <!-----------Quote Card Begins----------->
          <v-card elevation="10" outlined width="730" height="26" class="mx-auto mt-10"
            style="background-color: rgba(39, 39, 39, 0.3); color: #ffffff">
            <h7 class="font-italic" style="margin-left: 10px; margin-right: 10px; color:">
              "The greatest glory in living lies not in never falling, but in rising every time we fall." - Nelson Mandela
            </h7>
          </v-card>
          <!-----------Quote Card Ends----------->

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
