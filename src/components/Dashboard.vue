<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/Orders" exact>Orders</router-link></li>
        <li><router-link to="/Dashboard" exact>Dashboard</router-link></li>
      </ul>
    </nav>
    <bar-chart></bar-chart>
    <CallAPI></CallAPI>
  </div>
</template>

<script>
import BarChart from "./charts/BarChart.vue"
import CallAPI from "./CallAPI.vue"

export default {
  components: {
    BarChart,
    CallAPI
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}
</style>