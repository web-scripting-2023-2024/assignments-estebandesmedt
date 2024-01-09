<template>
    <div>
      <form @submit.prevent="submitForm">
        <label>Title</label>
        <input v-model="post.title" type="text" />
  
        <label>Description</label>
        <input v-model="post.description" type="text" />
  
        <label>Student 1</label>
        <input v-model="post.student1" type="text" />
  
        <label>Student 2</label>
        <input v-model="post.student2" type="text" />

        <label>Image</label>
        <input type="file" @change="onFileChange" />
  
        <label>Year</label>
        <input v-model="post.academic_year" type="text" />
  
        <label>Company</label>
        <input v-model="post.company" type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        post: {
          title: '',
          description: '',
          student1: '',
          student2: '',
          image: '',
          academic_year: '',
          company: '',
        },
      };
    },
    async created() {
      // Fetch the existing data when the component is created
      await this.fetchPostData();
    },
    methods: {
        onFileChange(e) {
            this.post.image = e.target.files[0];
        },
      async fetchPostData() {
        try {
          const response = await axios.get(
            `http://localhost:3000/bachelorthesis/${this.$route.params.id}`
          );
          this.post = response.data;
        } catch (error) {
          console.error(error);
        }
      },
      async submitForm() {
        try {
            const formData = new FormData();
            Object.keys(this.post).forEach(key => {
            formData.append(key, this.post[key]);
            });

            await axios.post(
            `http://localhost:3000/bachelorthesis`,
            formData,
            {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
            }
            );

            this.$router.push('/');
        } catch (error) {
            console.error(error);
        }
        }
    },
  };
  </script>
  
<style scoped>
  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
  }

  label {
    font-weight: bold;
    margin-top: 20px;
  }

  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-top: 5px;
  }

  button {
    margin-top: 20px;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #155918;
  }
</style>
  