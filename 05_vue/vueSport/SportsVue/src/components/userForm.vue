<template>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" id="title" v-model="title" class="form-control" :class="{ 'is-invalid': titleError }">
        <div class="invalid-feedback" v-if="titleError">{{ titleError }}</div>
      </div>
  
      <div class="form-group">
        <label for="description">Description</label>
        <textarea id="description" v-model="description" class="form-control" :class="{ 'is-invalid': descriptionError }"></textarea>
        <div class="invalid-feedback" v-if="descriptionError">{{ descriptionError }}</div>
      </div>
  
      <div class="form-group">
        <label for="image">Image</label>
        <input type="text" id="image" v-model="image" class="form-control">
      </div>
  
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        description: '',
        image: '',
        titleError: '',
        descriptionError: '',
      };
    },
    methods: {
      submitForm() {
        this.titleError = this.title.length > 3 ? '' : 'Title must be longer than 3 characters';
        this.descriptionError = this.description.length >= 100 ? '' : 'Description must contain at least 100 characters';
  
        if (!this.titleError && !this.descriptionError) {
          // Reset form
          this.title = '';
          this.description = '';
          this.image = '';
        }
      },
    },
  };
  </script>
  
  <style scoped>
    .is-invalid{
        border: 1px solid red;
    }
  </style>