
<template>
  <v-card>
    <v-card-title>
      Mashinalar ro`yxati
      <v-spacer></v-spacer>
      <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Mashina nomi bo`yicha izlash"
          single-line
          hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
        :headers="headers"
        :items="infos"
        :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'Id',
          align: 'start',
          sortable: true,
          value: 'id',
        },
        { text: 'Mashina rusumi / nomi', value: 'name' },
        { text: 'Narxi', value: 'price'},
      ],
      infos: [
        {
          name: 'Spark',
          id: '1',
          price: '1500',
        },
        {
          name: 'Malibu',
          id: '2',
          price: '3500',
        },
      ],
    }
  },
}
</script>
