<template>
  <ul>
    <li v-for="(country,countryIndex) in countriesList" :key="countryIndex">
      <img :src="country.flag" width="20px" height="20px" />
      <!-- <router-link :to="'/country/'+country.name">{{ country.name | uppercase }}</router-link> -->
      <span @click="onClickCountryName(country.name)">{{ country.name | uppercase }}</span>
    </li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      countriesList: []
    };
  },
  mounted() {
    this.getCountriesList();
  },
  methods: {
    getCountriesList: function() {
      // let self = this;
      axios
        .get(`https://restcountries.eu/rest/v2/all`)
        .then(response => {
          //successful response
          console.log(response);
          this.countriesList = response.data;
        })
        .catch(err => {
          //handle error
          console.log(err);
        })
        .finally(function() {
          //this is always executed
        });
    },
    onClickCountryName: function(name) {
      this.$router.push({
        path: "/country/"+name,
      });
    }
  }
};
</script>

<style>
</style>