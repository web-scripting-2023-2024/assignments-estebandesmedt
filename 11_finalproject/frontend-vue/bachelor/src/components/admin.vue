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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
              </svg>
            </button>
            <button @click="deletePost(post.id)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <button class="add" @click="addEmptyRecord">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
      </svg>
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
    axios
      .delete(`http://localhost:3000/bachelorthesis/${postId}`)
      .then(() => {
        this.filteredPosts = this.filteredPosts.filter(post => post.id !== postId);
      })
  } ,
  addEmptyRecord() {
    this.$router.push({ name: 'add' });
  }
// async addEmptyRecord() {
//   try {
//     const response = await axios.post('http://localhost:3000/bachelorthesis', {
//       id: this.posts.length + 1,
//       title: 'Title',
//       description: 'Description',
//       student1: 'Student 1',
//       student2: 'Student 2',
//       image: 'Image.jpg', 
//       academic_year: 2000,
//       company: 'Company'
//     });

//     this.filteredPosts.push(response.data);
//   } catch (error) {
//     console.error('Error adding empty record:', error);
//   }
// }

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
}
  </style>
```
