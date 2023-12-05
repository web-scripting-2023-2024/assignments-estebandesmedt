<template>
    <div class="container">
      <div class="my-2 border border-dark square" v-for="sport in sports" :key="sport.name" :style="{ backgroundColor: sport.color }">
        <h5>{{ sport.name }}</h5>
        <div class="d-flex">
          <img :src="sport.imageUrl" alt="" class="mr-3">
          <p>{{ sport.description }}</p>
        </div>
      </div>
      <router-link to="/user-form" class="btn btn-primary">Go to User Form</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sports: [
          { name: 'Football', description: 'Football is football, Football is football, Football is football, Football is football', imageUrl: '/src/assets/images/football.jpg', color: '#f00' },
          { name: 'Basketball', description: 'Basketball is basketball, Basketball is basketball, Basketball is basketball, Basketball is basketball', imageUrl: '/src/assets/images/basketball.jpg', color: '#0f0' },
          { name: 'Tennis', description: 'Tennis is tennis, Tennis is tennis, Tennis is tennis, Tennis is tennis', imageUrl: '/src/assets/images/tennis.jpeg', color: '#00f' },
          { name: 'Boxing', description: 'Boxing is boxing, Boxing is boxing, Boxing is boxing, Boxing is boxing', imageUrl: '/src/assets/images/boxing.jpg', color: '#ff0' },
          { name: 'Running', description: 'Running is running, Running is running, Running is running, Running is running', imageUrl: '/src/assets/images/running.jpg', color: '#f0f'},
        ],
      };
    },
  };
  </script>
  
  <style scoped>
    .mr-3{
        width: 125px;
        height: 125px;
        margin: 5px 10px 5px 15px;
        border: solid black;
    }
    .square{
        width: 1000px;
        height: 175px;
        margin-left: 125px;
    }
    .btn-primary{
        margin-left: 525px;
        margin-bottom: 50px;
        background-color: white;
        color: black;
        border: solid black;
    }
    h5{
        margin-left: 15px;
        margin-top: 2px;
    }
  </style>