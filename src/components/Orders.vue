<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/Orders" exact>Orders</router-link></li>
        <li><router-link to="/Dashboard" exact>Dashboard</router-link></li>
      </ul>
    </nav>
    <ul>
      <li v-for="order in orders" :key="order.id">
        <div v-for="od in order[1].shimin" :key="od.id">
          <p>{{ od.name }}: {{ od.qty }}</p>
        </div>
        <button v-bind:id="order[0]" v-on:click="deleteItem($event)">
          Delete
        </button>
        <button v-bind:id="order[0]" v-on:click="route($event)">Modify</button>
      </li>
    </ul>
  </div>
</template>

<script>
import db from "../firebase.js";

export default {
  data() {
    return {
      orders: [],
    };
  },

  created() {
    this.fetchItems();
  },

  methods: {
    fetchItems: function () {
      db.collection("orders")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            this.orders.push([doc.id, doc.data()]);
          });
        });

        console.log(this.orders);
    },

    deleteItem: function (event) {
      let doc_id = event.target.getAttribute("id");
      db.collection("orders").doc(doc_id).delete().then(location.reload());
    },

    route: function (event) {
      this.$router.push({
        name: "Modify",
        params: { id: event.target.getAttribute("id") },
      });
    },
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

button {
  width: 65px;
  height: 30px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
  font-size: 10px;
  text-align: center;
}
</style>