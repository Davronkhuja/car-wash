<template>
  <v-app id="inspire">
    <v-spacer></v-spacer>

    <v-navigation-drawer class="navigation"
                         v-model="drawer"
                         app
    >
      <ul>
        <li>
          <v-list-item class="list active"
                       v-for="[icon, text, url] in links"
                       :key="icon"
                       link
                       :to="url"
          >
            <b></b>
            <b></b>
            <v-list-item-icon class="icon">
              <v-icon >{{ icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="title">
              <v-list-item-title >{{ text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </li>
      </ul>
    </v-navigation-drawer>

    <div class="toggle">
      <ion-icon name="menu-outline" class="open"></ion-icon>
      <ion-icon name="close-outline" class="close"></ion-icon>
    </div>
    <v-main>
      <v-container
          class="py-8 px-6"
          fluid
      >
        <RouterView/>

      </v-container>
    </v-main>
  </v-app>


</template>

<!--<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>-->
<!--<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>-->

<script>

// let menuToggle = document.querySelector('.toggle')
// let navigation = document.querySelector('.navigation')
// menuToggle.onclick = function(){
//   menuToggle.classList.toggle('active')
//   navigation.classList.toggle('active')
// }


let list = document.querySelectorAll('.list');
for (let i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    let j = 0;
    while (j < list.length) {
      list[j++].className = 'list';
    }
    list[i].className = 'list active';
  }
}

import {mapState} from 'vuex'

export default {
  data: () => ({
    cards: ['Today', 'Yesterday'],
    drawer: null,
    active: false,
    links: [
      ['mdi-home', 'Bosh sahifa', '/'],
      ['mdi-car', 'Mashinalar', '/cars'],
      ['mdi-account-hard-hat', 'Ishchilar', '/workers'],
      ['mdi-account-wrench', 'Xizmatlar', '/services'],
      ['mdi-file-chart', 'Hisobotlar', '/reports'],
      ['mdi-exit-to-app', 'Chiqish', '#'],
    ],
  }),
  // methods: {
  //   menuToggle() {
  //     this.active = true
  //   }
  // },

  computed: {
    ...mapState({
      user: state => state.user
    })
  }
}
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Puppins', sans-serif !important;
}

body {
  min-height: 100vh !important;
  background: #fff !important;
}

.navigation {
  position: fixed !important;
  top: 20px !important;
  left: 20px !important;
  bottom: 20px !important;
  /*width: 70px!important;*/
  border-radius: 10px !important;
  box-sizing: initial !important;
  border-left: 5px solid #4d5bf9 !important;
  background: #4d5bf9 !important;
  transition: width 0.5s !important;
  overflow-x: hidden !important;
}

.navigation.active {
  width: 300px !important;
}

.navigation ul {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  padding-left: 5px !important;
  padding-top: 40px !important;
  /*text-align: center!important;*/
}

.navigation ul li {
  position: relative !important;
  list-style: none !important;
  width: 100% !important;
  border-top-left-radius: 20px !important;
  border-bottom-left-radius: 20px !important;
}


.navigation ul li.active {
  background: #fff !important;
}

.navigation ul li b:nth-child(1) {
  position: absolute !important;
  top: -20px !important;
  height: 20px !important;
  width: 100% !important;
  background: #fff !important;
  display: none !important;
}

.navigation ul li b:nth-child(1)::before {
  content: "" !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  border-bottom-right-radius: 20px !important;
  background-color: #4d5bf9 !important;
}

.navigation ul li b:nth-child(2) {
  position: absolute !important;
  bottom: -20px !important;
  height: 20px !important;
  width: 100% !important;
  background: #fff !important;
  display: none !important;
}

.navigation ul li b:nth-child(2)::before {
  content: "" !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  border-top-right-radius: 20px !important;
  background-color: #4d5bf9 !important;
}

.navigation ul li.active b:nth-child(1),
.navigation ul li.active b:nth-child(2) {
  display: block !important;
}

.navigation ul li a {
  position: relative !important;
  display: block !important;
  width: 100% !important;
  display: flex !important;
  text-decoration: none !important;
  color: #fff !important;
}

.navigation ul li.active {
  color: #333 !important;
}

.navigation ul li .icon {
  position: relative !important;
  display: block !important;
  min-width: 60px !important;
  height: 60px !important;
  line-height: 70px !important;
  text-align: center !important;
}

.navigation ul li .icon ion-icon {
  font-size: 1.5em !important;
}

.navigation ul li a .title {
  position: relative !important;
  display: block !important;
  padding-left: 10px !important;
  height: 35px !important;
  line-height: 60px !important;
  white-space: normal !important;
}

.toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: #4d5bf9;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.toggle.active {
  background: #ff4d89;
}

.toggle ion-icon {
  position: absolute;
  color: #fff;
  font-size: 34px;
  display: none;
}

.toggle ion-icon.open,
.toggle.active ion-icon.close {
  display: block;
}

.toggle ion-icon.close,
.toggle.active ion-icon.open {
  display: none;
}
</style>
