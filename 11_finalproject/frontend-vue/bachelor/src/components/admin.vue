<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Student 1</th>
          <th>Student 2</th>
          <th>Academic Year</th>
          <th>Company</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in filteredPosts" :key="post.id">
          <td>{{ post.title }}</td>
          <td>{{ post.description }}</td>
          <td>{{ post.student1 }}</td>
          <td>{{ post.student2 }}</td>
          <td>{{ post.academic_year }}</td>
          <td>{{ post.company }}</td>
          <td>
            <button @click="navigateToEditForm(post.id)">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="navigateToAddForm">Add New Record</button>
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
          post.title.includes(this.filters.title) &&
          post.description.includes(this.filters.description) &&
          post.student1.includes(this.filters.student1) &&
          post.student2.includes(this.filters.student2) &&
          post.academic_year.includes(this.filters.academic_year) &&
          post.company.includes(this.filters.company)
        )
      }
    }
  }
  </script>
  <style scoped>
  .Card-Wrapper{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 500px;
  }
  .ImageCard{
    width: 100%;
    height: auto;
  }
  .post{
    display: flex;
    flex-direction: column;
  }
  </style>