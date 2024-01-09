<template>
    <div>
      <form @submit.prevent="updatePost">
        <label>Title</label>
        <input v-model="post.title" type="text" />
        <div v-if="titleError" class="error-message">{{ titleError }}</div>
  
        <label>Description</label>
        <input v-model="post.description" type="text" />
        <div v-if="descriptionError" class="error-message">{{ descriptionError }}</div>
  
        <label>Student 1</label>
        <input v-model="post.student1" type="text" />
        <div v-if="student1Error" class="error-message">{{ student1Error }}</div>
  
        <label>Student 2</label>
        <input v-model="post.student2" type="text" />
        <div v-if="student2Error" class="error-message">{{ student2Error }}</div>

        <label>Image</label>
        <input type="file" @change="onFileChange" />
        <img :src="'http://localhost:3000/images/' + post.image" alt="Post image" class="ImageCard">
        <div v-if="imageError" class="error-message">{{ imageError }}</div>

        <label>Year</label>
        <input v-model="post.academic_year" type="text" />
        <div v-if="academic_yearError" class="error-message">{{ academic_yearError }}</div>
  
        <label>Company</label>
        <input v-model="post.company" type="text" />
        <div v-if="companyError" class="error-message">{{ companyError }}</div>
  
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        imageError: '',
        titleError: '',
        descriptionError: '',
        student1Error: '',
        student2Error: '',
        academic_yearError: '',
        companyError: '',
        post: {
          title: '',
          description: '',
          student1: '',
          student2: '',
          image: '',
          academic_year: '',
          company: ''
        }
      }
    },
    async created() {
      const response = await axios.get(`http://localhost:3000/bachelorthesis/${this.$route.params.id}`)
      this.post = response.data
    },
    methods: {
      onFileChange(e) {
        const file = e.target.files[0];
        const maxSize = 2 * 1024 * 1024; // 2MB
        const validTypes = ['image/png', 'image/jpeg', 'image/jpg'];

        if (file.size > maxSize) {
          this.imageError = 'Image size should not be more than 2MB.';
          return;
        }

        if (!validTypes.includes(file.type)) {
          this.imageError = 'Invalid file type. Only .png, .jpg and .jpeg are allowed.';
          return;
        }

        this.imageError = '';

        const formData = new FormData();
        formData.append('file', file);

        axios.post('http://localhost:3000/upload', formData)
          .then(response => {
            console.log(response.data.message);
            this.post.image = file.name;
          })
          .catch(error => {
            console.error('Error uploading file:', error);
            this.imageError = 'Error uploading file.';
          });
      },
      async updatePost() {
        this.titleError = '';
        this.descriptionError = '';
        this.student1Error = '';
        this.student2Error = '';
        this.academic_yearError = '';
        this.companyError = '';

        if (this.post.title.length < 5 || this.post.title.length > 20) {
          this.titleError = 'Title should be between 5 and 20 characters.';
        }

        if (this.post.description.length < 15 || this.post.description.length > 500) {
          this.descriptionError = 'Description should be between 15 and 500 characters.';
        }

        if (this.post.student1.length < 5 || this.post.student1.length > 15) {
          this.student1Error = 'Student 1 should be between 5 and 15 characters.';
        }

        if (this.post.student2.length < 5 || this.post.student2.length > 15) {
          this.student2Error = 'Student 2 should be between 5 and 15 characters.';
        }

        if (!/^\d+$/.test(this.post.academic_year)) {
          this.academic_yearError = 'Year should only contain numbers.';
        }

        if (this.post.company.length < 5 || this.post.company.length > 15) {
          this.companyError = 'Company should be between 5 and 15 characters.';
        }

        if (this.titleError || this.descriptionError || this.academic_yearError || this.imageError || this.student1Error || this.student2Error || this.companyError) {
          return;
        }

        await axios.put(`http://localhost:3000/bachelorthesis/${this.$route.params.id}`, this.post);
        this.$router.push('/') 
      }
    }
  }
  </script>
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
    margin-top: 30px;
  }

  label {
    font-weight: bold;
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

  .ImageCard{
    max-width: 80%;
    height: auto;
    max-height: 100%;
    border-radius: 10px;
    margin: 10px auto 0 auto;
    border: 1px solid black;
  }
</style>