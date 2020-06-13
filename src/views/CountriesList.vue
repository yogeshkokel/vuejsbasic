<template>
  <ul>
    <li v-for="(country,countryIndex) in countriesList" :key="countryIndex">
        <img :src="country.flag" width="20px" height="20px"/>
        {{ country.name }}
        </li>
  </ul>
</template>

<script>
const axios = require("axios");
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
      let self = this;
      axios
        .get(`https://restcountries.eu/rest/v2/all`)
        .then(function(response) {
          //successful response
          console.log(response);
          self.countriesList = response.data;
        })
        .catch(function(err) {
          //handle error
          console.log(err);
        })
        .finally(function() {
          //this is always executed
        });
    }
  }
};
</script>

<style>
</style>