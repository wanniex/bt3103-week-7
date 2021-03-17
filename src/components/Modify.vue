<template>
  <div>
    <div v-for="itemorder in datapacket[0]" :key="itemorder.id">
      <div v-for="item in itemorder" :key="item.id">
        {{ item.name }}: {{ item.qty }}
        <br />
        <input v-bind:id="item.name" placeholder="0" type="number" min="0" />
        <br /><br />
      </div>
    </div>
    <br />
    <button v-on:click="updateOrder()">Update Order</button>
  </div>
</template>

<script>
import db from "../firebase.js";

export default {
  data() {
    return {
      datapacket: [],
    };
  },

  created: function () {
    this.fetchItems();
  },

  methods: {
    fetchItems: function () {
      db.collection("orders")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            if (doc.id == this.$route.params.id) {
              this.datapacket.push(doc.data());
            }
          });
        });
    },

    updateOrder: function () {
      var newdp = this.datapacket;

      for (var i = 0; i < newdp[0].shimin.length; i++) {
        var newValue = document.getElementById(newdp[0].shimin[i].name).value;

        newdp[0].shimin[i].qty = newValue == 0 ? 0 : parseInt(newValue);
      }

      db.collection("orders")
        .doc(this.$route.params.id)
        .set(newdp[0])
        .then(() => this.$router.push({ path: "/orders" }));
    },
  },
};
</script>

<style scoped>
</style>