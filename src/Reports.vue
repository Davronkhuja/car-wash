<template>
  <div>
    <v-sparkline
        :value="value"
        :gradient="gradient"
        :smooth="radius || false"
        :padding="padding"
        :line-width="width"
        :stroke-linecap="lineCap"
        :gradient-direction="gradientDirection"
        :fill="fill"
        :type="type"
        :auto-line-width="autoLineWidth"
        auto-draw
    ></v-sparkline>

    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            <h1><b> Bank Nomi</b></h1>
          </th>
          <th class="text-left">
            <h1><b> Valyutalar kursi</b></h1>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="item in desserts"
            :key="item.name"
        >
          <td>  <v-icon
              color="green darken-2"
          >
            mdi-bank
          </v-icon> {{  item.name }}</td>
          <td>  {{ parseInt(item.currency_rates['1']['value'] )}} / {{ parseInt(item.currency_rates['0']['value']) }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>

const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
]
import axios from 'axios'



export default {
  data: () => ({
    name: "Reports",
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: 'round',
    gradient: gradients[5],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    gradientDirection: 'top',
    gradients,
    fill: false,
    type: 'trend',
    autoLineWidth: false,
    icon: 'mdi-bank',
    desserts: [

    //   {
    //     name: 'Turkistoon Bank',
    //     calories: '10 780 / 10680',
    //   },
    //   {
    //     name: 'Ipak Yo`li Bank',
    //     calories: '10 780 / 10680',
    //   },
    //   {
    //     name: 'Kapital Bak',
    //     calories: '10 780 / 10680',
    //   },
    //   {
    //     name: 'NBU',
    //     calories: '10 780 / 10680',
    //   },
    //   {
    //     name: 'UNIVERSAL Bank',
    //     calories: '10 780 / 10680',
    //   },
    //   {
    //     name: 'Asia Alliance Bank',
    //     calories: '10 780 / 10680',
    //   },
    //   {
    //     name: 'Invest Finance Bank',
    //     calories: '10 780 / 10680',
    //   },
    //   {
    //     name: 'Tenge Bank',
    //     calories: '10 780 / 10680',
    //   },
    //   {
    //     name: 'Poytaxt Bank',
    //     calories: '10 780 / 10680',
    //   },
    //   {
    //     name: 'Ziraat Bank',
    //     calories: '10 780 / 10680',
    //   },
    ],
  }),
  created: function () {
    axios.get("https://api.crm.bankvabiznes.uz/api/v1/public/currency-rates?date_from=2021-11-01&date_to=2021-11-01",
        {data: {},
        headers: {"Content-Type": "application/json"}})
    .then( (responce) =>{
      console.log(responce)
      this.desserts = responce.data['2021-11-01']['1']['bank']

    })
  },
}


</script>

<style scoped>
body {
  background-image: url("img.jpg");
}
</style>
