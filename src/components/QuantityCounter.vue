<template>
  <div>
    <button v-on:click="decrement">-</button> {{ count }} <button v-on:click="increment">+</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      count: 0,
    };

  },

  methods: {
    increment() {
        if (this.count < 10) {
            this.count++;
        } else {
            alert("You cannot buy more than 10 items.");
        }
        this.$emit('counter', this.thing, this.count);
    },

    decrement() {
      if (this.count > 0) {
        this.count--;
      }
      this.$emit('counter', this.thing, this.count);
    }
  },

  props: {
      thing: {
          type: Object
      }
  }
};
</script>

<style>
button {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background-color: #e6a8d8; /* Green */
  border: none;
  color: white;
  padding: 10px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 25px;
}
</style>