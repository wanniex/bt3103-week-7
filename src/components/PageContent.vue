<template>
  <div id = "itemsList">
    <nav>
      <ul>
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/Orders" exact>Orders</router-link></li>
        <li><router-link to="/Dashboard" exact>Dashboard</router-link></li>
      </ul>
    </nav>
    <ul>
      <li v-for="item in items" :key="item.id">
        <p id="itemName"> {{ item.name }} </p>
        <img v-bind:src="item.imageURL" /><br />
        <p> ${{item.price}} </p>
        <qtycounter
          v-bind:thing="item"
          v-on:counter="onCounter"
        ></qtycounter
        ><br />
      </li>
      <basket id="shoppingBasket" v-bind:itemsSelected="itemsSelected"  v-bind:items="items">
      </basket>
    </ul>
  </div>
</template>

<script>
import QuantityCounter from "./QuantityCounter.vue";
import Basket from "./Basket.vue";
import db from "../firebase.js"

export default {
  data() {
    return {
      itemsSelected: [],
      items: []
    };
  },

  components: {
    qtycounter: QuantityCounter,
    basket: Basket,
  },

  created() {
    this.fetchItems();
  },

  methods: {
    onCounter: function (item, count) {
      var arrlen = this.itemsSelected.length;
      var updated = false;

      for (let i = 0; i < arrlen; i++) {
          const curr_item = this.itemsSelected[i];
          const item_name = curr_item[0];

          if (item_name == item.name) {
            if (count == 0) {
              this.itemsSelected.splice(i,1);
            } else {
              this.itemsSelected[i].splice(1,1,count);
            }
            updated = true;
            break;
          }
         } 

      if (!updated && count > 0) {
        this.itemsSelected.push([item.name, count, item.price]);
      }
    },

    fetchItems: function() {
      db.collection('menu').get().then((snapshot) => {
    snapshot.docs.forEach((doc) => {
        this.items.push(doc.data());
    });

});
    }
  }
};
</script>

<style scoped>
#itemsList {
  width: 100%;
  max-width: 70%;
  margin: 0px;
  padding: 0 5px;
  box-sizing: border-box;
}
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
img {
  width: 135px;
  height: 135px;
}

#price {
  font-size: 30px;
}

#itemName {
  font-size: 30px;
}

#shoppingBasket {
  position: absolute;
  top: 23%;
  left: 78%;
}
</style>