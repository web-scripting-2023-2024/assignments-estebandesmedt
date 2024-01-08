<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="formtitle">
        <label for="title" class="title">Title</label>
        <input id="title" type="text" v-model="title" :class="{ 'is-invalid': titleError }">
        <div v-if="titleError" class="error">{{ titleError }}</div>
      </div>

      <div>
        <label for="description" class="des">Description</label>
        <textarea id="description" v-model="description" :class="{ 'is-invalid': descriptionError }"></textarea>
        <div v-if="descriptionError" class="error">{{ descriptionError }}</div>
      </div>

      <div>
        <label for="image">Image</label>
        <input id="image" type="file" @change="onFileChange">
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      image: null,
      titleError: '',
      descriptionError: '',
    };
  },
  methods: {
    submitForm() {
      this.titleError = this.title.length > 3 ? '' : 'Title must be longer than 3 characters';
      this.descriptionError = this.description.length >= 100 ? '' : 'Description must contain at least 100 characters';

      if (!this.titleError && !this.descriptionError && this.image) {
        // Reset form
        this.$emit('formSubmitted', {
          title: this.title,
          description: this.description,
          image: this.image,
        });
        this.title = '';
        this.description = '';
        this.image = null;
      }
    },
    onFileChange(e) {
      this.image = e.target.files[0];
    },
  },
};
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

form {
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

input, textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  font-size: 0.8em;
}
.formtitle{
  display: flex;
}
.title{
  margin-right: 70px;
}
.des{
  margin-right: 20px;
}
</style>