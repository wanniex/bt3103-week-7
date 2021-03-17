<template>

  <div id="app">
    <h1>Evelyn's Cafe</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemsList: [
        {
          id: "#000",
          name: "Prawn omelette",
          imageURL:
            "https://3.bp.blogspot.com/-SMxoySoXcK0/T696enjIijI/AAAAAAAACoc/A5bFWd024KY/s1600/IMG_5140.JPG",
          price: 5,
        },
        {
          id: "#025",
          name: "Dry Beef Hor Fun",
          imageURL:
            "https://delishar.com/wp-content/uploads/2016/04/Dry-Beef-Hor-Fun-3.jpg",
          price: 15,
        },
        {
          id: "#067",
          name: "Sambal KangKung",
          imageURL:
            "https://minikitchenlab.com/wp-content/uploads/2017/09/Kangkung-Belacan-e1506580822679-1300x1300.jpg",
          show: false,
          price: 10,
        },
        {
          id: "#077",
          name: "Pork Fried Rice",
          imageURL:
            "https://hazeldiary.com/wp-content/uploads/2020/08/King-of-Fried-Rice-Golden-Mile-Tower-XO-Fried-Rice.jpg",
          show: false,
          price: 6,
        },
        {
          id: "#099",
          name: "Mapo Tofu",
          imageURL:
            "https://i2.wp.com/seonkyounglongest.com/wp-content/uploads/2020/09/Mapo-Tofu-12-minijpg.jpg?fit=1000%2C1500&ssl=1",
          show: false,
          price: 10,
        },
        {
          id: "#200",
          name: "Cereal Prawn",
          imageURL:
            "https://i.pinimg.com/originals/ad/87/eb/ad87eb2113e4d6480a21acdbb5f36114.jpg",
          show: false,
          price: 12,
        },
      ]
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4c2792be;
  margin-top: 60px;
  font-size: 30px;
}

h1 {
  font-variant: small-caps;
  text-decoration: overline underline solid rgb(68, 68, 68);
}
</style>