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
          <v-card elevation="8" outlined width="760" height="455" class="mx-auto mt-10"
            style="background-color: rgba(39, 39, 39, 0.8); color: #ffffff">
            <v-card-title style="color: #b6b6b6">Logging in</v-card-title>
            <v-card-text>
              <h1>Create your account!</h1>
              <v-spacer></v-spacer>
              <v-divider vertical />
              <h3 class="font-weight-medium">
 								Read through the Terms of Conditions and click accept to complete your login.              
              </h3>
             		 <v-card 
                 elevation="8" outlined width="700" height="240" class="mx-auto mt-10" style="background-color: rgba(39, 39, 39, 1); color: #ffffff">
                   <v-card-title>
                   <h3>
                     Terms of Conditions
                   </h3>
                   </v-card-title>
                   <v-card-text>
                   <div>
                  By creating an account and logging in, you agree to the following: 1) you will not use this website to facilitate cheating, harassment, or any other violation of school policy. 2) I will use this site reasonably and in a way that doesn't disturb the operations of this website or other's experiences, such as spamming or exploiting. I am aware that I will recieve concequences for carelessly using this website, especially if it affects others, including the suspension or deletion of my account and any other action deemed necessary.
                   </div>
                   </v-card-text>
                   
                       <v-checkbox v-model="checkbox">
      <template v-slot:label>
        <div>
          I agree to the above
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <a
                target="_blank"
                href="https://vuetifyjs.com"
                @click.stop
                v-on="on"
              >
                Vuetify
              </a>
            </template>
            Opens in new window
          </v-tooltip>
          conditions.
        </div>
      </template>
    </v-checkbox>
                   
            		 </v-card>
              
              
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
            checkbox: false,
  }),
};
 
</script>

<style>
.mt-4 {
  margin-right: 15px
}
</style>




