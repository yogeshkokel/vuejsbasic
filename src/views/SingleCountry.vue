<template>
  <div>
    <div>{{ this.countryName }}</div>
    <div>{{countryData}}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Country",
  data() {
    return {
      countryName: "",
      countryData: null
    };
  },
  mounted() {
    this.countryName = this.$route.params.countryname;
    this.getCountryDetails();
  },
  methods: {
    getCountryDetails: function() {
      axios
        .get(`https://restcountries.eu/rest/v2/name/` + this.countryName)
        .then(response => {
          //successful response
          console.log(response);
          this.countryData = response.data[0];
        })
        .catch(err => {
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