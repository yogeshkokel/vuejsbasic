<template>
  <div>
    <div>{{ this.countryName }}</div>
    <div>{{countryData}}</div>
    <input type="text" v-model="name" placeholder="name" />
    <input type="text" v-model="job" placeholder="job" />
    <button @click="onSubmit()">Submit</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Country",
  data() {
    return {
      countryName: "",
      countryData: null,
      //
      name: "",
      job: ""
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
    },
    onSubmit: function() {
      let payload = {
        name: this.name,
        job: this.job
      };
      axios
        .post("https://reqres.in/api/users", payload)
        .then(function(response) {
          console.log(response);
          alert(response.data.id);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>