<template>
    <div>
        <h1>Add User</h1>
        <form @submit.prevent="addUser">
            <input v-model="newUser.name" type="text" placeholder="Name">
            <input v-model="newUser.first_name" type="text" placeholder="First Name">
            <input v-model="newUser.email" type="email" placeholder="Email">
            <input v-model="newUser.phone_number" type="text" placeholder="Phone Number">
            <input v-model="newUser.street" type="text" placeholder="Street">
            <input v-model="newUser.number" type="text" placeholder="Number">
            <input v-model="newUser.zip_code" type="text" placeholder="Zip Code">
            <input v-model="newUser.city" type="text" placeholder="City">
            <button type="submit">Add User</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            newUser: {
                name: '',
                first_name: '',
                email: '',
                phone_number: '',
                street: '',
                number: '',
                zip_code: '',
                city: ''
            }
        };
    },
    methods: {
        async addUser() {
            try {
                await axios.post('http://localhost:3000/users', this.newUser);
                this.$router.push({ name: 'Users' });
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>
<style scoped>
form{
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
}
form input{
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
h1{
    text-align: center;
}
form button{
    padding: 10px;
    border: 1px solid lightgreen;
    border-radius: 5px;
    background-color: lightgreen;
    cursor: pointer;
}
</style>