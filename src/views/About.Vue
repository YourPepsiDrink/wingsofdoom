<template>
    <v-app>
  
      <!----------------TOOL BAR BEGINS---------------->
      <v-navigation-drawer 
        v-model="drawer" 
        absolute
        temporary
        app class="indigo"
        style="background-color: rgba(39,39,39)">
        <v-card style="background-color: rgba(39,39,39); color:#ffffff">
          <v-card-title>Main Menu</v-card-title>
          <v-divider></v-divider>
                  <v-btn style="margin-left: 0px; background-color:rgba(39, 39, 39); color:#ffffff" block>Profile</v-btn>   
          <v-divider></v-divider>
          <v-btn style="margin-left: 0px; background-color:rgba(39, 39, 39); color:#ffffff" block>Menu</v-btn>      
  
        </v-card>
        </v-navigation-drawer>
    
      <v-toolbar app style="background-color: rgba(39, 39, 39); color: #ffffff; margin-top: -4px; margin-bottom: -4px"
        src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg">
              <v-toolbar-side style="margin-left: 10px;" class @click="drawer= !drawer">
                         <v-btn icon><v-icon>mdi-menu</v-icon></v-btn>
               </v-toolbar-side>
  
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
            <v-card elevation="8" outlined width="760" height="455" class="mx-auto mt-10"
              style="background-color: rgba(39, 39, 39, 0.8); color: #ffffff">
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
        data: () => ({
            drawer: false
    }),
  };
   
  </script>
  
  <style>
  .mt-4 {
    margin-right: 15px
  }
  </style>
  
  
  
  