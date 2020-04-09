<template>
  <v-app>
    <v-app-bar app clipped-left dark color="primary">
      <v-toolbar-title>VuePong</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer app clipped class="yellow ligthten-1"> </v-navigation-drawer>
    <v-content class="error noOverflow">
      <router-view />
    </v-content>
  </v-app>
</template>
