<template>
  <div>
    <form class="formcl fixed-top" @submit.prevent="filterPosts">
      <input type="text" v-model="filters.title" placeholder="Filter by title">
      <input type="text" v-model="filters.description" placeholder="Filter by description">
      <input type="text" v-model="filters.student1" placeholder="Filter by student1">
      <input type="text" v-model="filters.student2" placeholder="Filter by student2">
      <input type="text" v-model="filters.academic_year" placeholder="Filter by academic year">
      <input type="text" v-model="filters.company" placeholder="Filter by company">
      <button class="submitBTN" type="submit">Filter</button>
    </form>

    <div class="Card-Wrapper">
      <div v-for="post in filteredPosts" :key="post.id" class="post">
        <h3>{{ post.title }}</h3>
        <p>{{ post.description}}</p>
        <p>{{ post.student1}}</p><p>{{ post.student2}}</p>
        <img :src="'http://localhost:3000/images/' + post.image" alt="Post image" class="ImageCard">
        <div class="CardFoot"><p>{{ post.academic_year}}</p><p>{{ post.company}}</p></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: [],
      filters: {
        title: '',
        description: '',
        student1: '',
        student2: '',
        academic_year: '',
        company: ''
      },
      filteredPosts: []
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000/bachelorthesis')
      .then((response) => {
        this.posts = response.data
        this.filteredPosts = response.data
      })
  },
  methods: {
    filterPosts() {
      this.filteredPosts = this.posts.filter(post =>
        (this.filters.title === '' || post.title.toLowerCase().includes(this.filters.title.toLowerCase())) &&
        (this.filters.description === '' || post.description.toLowerCase().includes(this.filters.description.toLowerCase())) &&
        (this.filters.student1 === '' || post.student1.toLowerCase().includes(this.filters.student1.toLowerCase())) &&
        (this.filters.student2 === '' || post.student2.toLowerCase().includes(this.filters.student2.toLowerCase())) &&
        (this.filters.academic_year === '' || post.academic_year.toString().includes(this.filters.academic_year)) &&
        (this.filters.company === '' || post.company.toLowerCase().includes(this.filters.company.toLowerCase()))
      )
    }
  }
}
</script>

<style scoped>
.post {
  border: 2px solid black;
  background-color: lightgoldenrodyellow;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  margin-right: 20px;
  width: calc(25% - 20px);
  height: 460px;
}
.post p, h3{
  margin: 0px;
  margin-bottom: 5px;
  text-align: center;
}
.formcl{
  display: flex;
  justify-content: center;
  margin-top: 75px;
}
.formcl input{
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid black;
  padding: 5px;
}
.Card-Wrapper {
  display: flex;
  margin-top: 100px;
  flex-wrap: wrap;
  width: 1200px;
}
.ImageCard{
  width: 100%;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
  border: 1px solid black;
}
.CardFoot{
  display: flex;
  justify-content: space-between;
}
.submitBTN{
  background-color: rgb(21, 192, 230);
  border: 1px solid black;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
</style>