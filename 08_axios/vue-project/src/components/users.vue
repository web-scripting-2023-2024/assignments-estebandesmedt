<template>
    <div>
        <h1>{{ message }}</h1>
        <table class="allusers">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>First Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Street</th>
                    <th>Number</th>
                    <th>Zip Code</th>
                    <th>City</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.first_name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone_number }}</td>
                    <td>{{ user.street }}</td>
                    <td>{{ user.number }}</td>
                    <td>{{ user.zip_code }}</td>
                    <td>{{ user.city }}</td>
                    <td><i @click="navigateToEditForm(user.id)" class="bi bi-pencil-square"></i></td>
                    <td><i @click="deletePost(user.id)" class="bi bi-trash"></i></td>
                </tr>
            </tbody>
        </table>
        <button @click="navigateToAddForm"><i class="bi bi-plus-circle"></i></button>
    </div>
</template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        message: 'User List',
        users: [],
      };
    },
    methods: {
        navigateToAddForm() {
            this.$router.push({ name: 'Add' });
        },
        navigateToEditForm(userId) {
            this.$router.push({ name: 'Edit', params: { id: userId } });
            },
        deletePost(userId) {
            if (window.confirm('Are you sure you want to delete this user?')) {
                axios
                .delete(`http://localhost:3000/users/${userId}`)
                .then(() => {
                this.users = this.users.filter(user => user.id !== userId);
                })
            }
            },
      async getUsers() {
        try {
          const response = await axios.get('http://localhost:3000/usersAll');
          this.users = response.data;
        } catch (error) {
          console.error(error);
        }
      },
    },
    created() {
      this.getUsers(); 
    },
  };
  </script>
  
  <style scoped>
  h1 {
      font-size: 3rem;
      text-align: center;
  }
  
  .allusers {
      width: 100%;
      border-collapse: collapse;
  }
  
  .allusers th, .allusers td {
      border: 1px solid #ddd;
      padding: 8px;
  }
  
  .allusers th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #4CAF50;
      color: white;
  }
  button {
      background-color: #4CAF50;
      width: 100%;
      margin-top: 1rem;
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
  }
  </style>
  