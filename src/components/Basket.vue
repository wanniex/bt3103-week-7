<template>
  <div>
    <p>Menu:</p>
    <div v-for="(order, index) in itemsSelected" v-bind:key="index">
      <ul>
        <li>{{ order[0] }} x {{ order[1] }}</li>
      </ul>
    </div>
    <br />
    <div>
      <button type="button" v-on:click="sendOrder">Add Order</button>
      <p v-show="isShown">Subtotal: ${{ findSubtotal }}</p>
      <p v-show="isShown">
        Grand Total: ${{ (1.07 * findSubtotal).toFixed(2) }}
      </p>
    </div>
  </div>
</template>

<script>
import db from "../firebase.js";

export default {
  data() {
    return {
      num: "",
      p: "",
      isShown: false,
    };
  },

  props: {
    itemsSelected: {
      type: Array,
    },

    items: {
      type: Array,
    },
  },

  computed: {
    findSubtotal: function () {
      var finamount = 0;
      this.itemsSelected.forEach((item) => {
        this.num = item[1];
        this.p = item[2];
        var ta = this.num * this.p;
        finamount += ta;
      });
      return finamount;
    },

    len: function () {
      return this.itemsSelected.length;
    },
  },

  watch: {
    len(newValue) {
      // else can change to if (newValue != oldValue)
      if (newValue == 0) {
        this.isShown = false;
      }
    },
  },

  methods: {
    showthis: function () {
      this.isShown = true;
    },

    sendOrder: function () {

      if (this.itemsSelected.length != 0) {
      var shimin = [];

      for (let i = 0; i < this.itemsSelected.length; i++) {
        var item = this.itemsSelected[i];
        shimin.push({
          name: item[0],
          qty: item[1],
          price: item[2],
        });
      }


      for (let j = 0; j < this.items.length; j++) {
        for (let k = 0; k < this.itemsSelected.length; k++) {

          if (this.items[j].name == this.itemsSelected[k][0]) {
            break;
          } else if (
            this.items[j].name != this.itemsSelected[k][0] &&
            k == this.itemsSelected.length - 1
          ) {
            shimin.push({
              name: this.items[j].name,
              price: this.items[j].price,
              qty: 0,
            });
          }
        }
  
      }

      db.collection("orders")
        .add({
          shimin,
        })
        .then(() => {
          location.reload();
        });
      }
    },
  },
};
</script>

<style scoped>
nav {
  float: left;
  width: 30%;
  background: #e1d2b3;
  padding-right: 20px;
  height: 500px;
}

ul {
  list-style: disc inside;
  list-style-position: outside;
}
</style>