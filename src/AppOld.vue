<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <v-sheet
          color="grey lighten-4"
          class="pa-4"
      >
        <v-avatar
            color="teal"
            rounded
            class="mb-4"
            size="48"

        >
          <span class="white--text text-h5">SJ</span>
          <!--          <img src="images/qwerty.jpg" alt="Shamshod">-->
        </v-avatar>

        <div>shamshod.jamolov@gmail.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
            v-for="[icon, text, url] in links"
            :key="icon"
            link
            :to="url"
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container
          class="py-8 px-6"
          fluid
      >
        <RouterView />

      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    cards: ['Today', 'Yesterday'],
    drawer: null,
    links: [
      ['mdi-home', 'Bosh sahifa','/'],
      ['mdi-car', 'Mashinalar','/cars'],
      ['mdi-account-hard-hat', 'Ishchilar', '/workers'],
      ['mdi-account-wrench', 'Xizmatlar', '/services'],
      ['mdi-file-chart', 'Hisobotlar','/reports'],
      ['mdi-exit-to-app', 'Chiqish', ''],
    ],
  }),
  computed:{
    ...mapState({
      user: state => state.user
    })
  }
}
</script>
