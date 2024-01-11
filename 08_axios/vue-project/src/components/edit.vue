<template>
    <div>
        <h1>Edit User</h1>
        <form @submit.prevent="updateUser">
            <input v-model="user.name" type="text" placeholder="Name">
            <input v-model="user.first_name" type="text" placeholder="First Name">
            <input v-model="user.email" type="email" placeholder="Email">
            <input v-model="user.phone_number" type="text" placeholder="Phone Number">
            <input v-model="user.street" type="text" placeholder="Street">
            <input v-model="user.number" type="text" placeholder="Number">
            <input v-model="user.zip_code" type="text" placeholder="Zip Code">
            <input v-model="user.city" type="text" placeholder="City">
            <button type="submit">Update User</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            user: {
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
        async getUser() {
            const response = await axios.get(`http://localhost:3000/users/${this.$route.params.id}`);
            this.user = response.data;
        },
        async updateUser() {
            try {
                await axios.put(`http://localhost:3000/users/${this.$route.params.id}`, this.user);
                this.$router.push({ name: 'Users' });
            } catch (error) {
                console.error(error);
            }
        }
    },
    created() {
        this.getUser();
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