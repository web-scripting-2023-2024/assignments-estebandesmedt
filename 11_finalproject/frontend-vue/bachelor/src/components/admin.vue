<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Student 1</th>
          <th>Student 2</th>
          <th>Year</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody class="table">
        <tr v-for="post in filteredPosts" :key="post.id">
          <td>{{ post.title }}</td>
          <td>{{ post.description }}</td>
          <td>{{ post.student1 }}</td>
          <td>{{ post.student2 }}</td>
          <td>{{ post.image }}</td>
          <td>{{ post.academic_year }}</td>
          <td>{{ post.company }}</td>
          <td class="buttons">
            <button @click="navigateToEditForm(post.id)">
              <i class="bi bi-pencil-square"></i>
            </button>
            <button @click="deletePost(post.id)">
              <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <button class="add" @click="addEmptyRecord">
      <i class="bi bi-plus-circle"></i>
    </button>
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
      },
      navigateToEditForm(postId) {
        this.$router.push({ name: 'edit', params: { id: postId } })
      },
      deletePost(postId) {
  if (window.confirm('Are you sure you want to delete this post?')) {
    axios
      .delete(`http://localhost:3000/bachelorthesis/${postId}`)
      .then(() => {
        this.filteredPosts = this.filteredPosts.filter(post => post.id !== postId);
      })
  }
},
      addEmptyRecord() {
        this.$router.push({ name: 'add' });
      }
    }
  }
  </script>
  <style scoped>
  .table {
  width: 100%;
  border-collapse: collapse;
}

.table th, .table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}

.table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.table tr:hover {
  background-color: #ddd;
}

.table button {
  background-color: rgb(130, 150, 255);
  border: none;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 10px;
}

.table button:hover {
  background-color: rgb(0, 0, 255);
}

table{
  margin-top: 50px;
}

.buttons{
  display: flex;
  justify-content: space-between;
}

.add{
  background-color: rgb(130, 150, 255);
  border: none;
  color: white;
  padding: 10px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  border-radius: 8px;
  width: 100%;
  margin-top: 1rem;
}
  </style>
```
