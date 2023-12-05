<script>
    import Sports from './components/Sports.vue';
    import userForm from './components/userForm.vue';

    export default{
        components:{
            Sports,
            userForm
        },
        data(){
          return{
            sports: []
          }
        },
        methods:{
          addSport(sport){
            this.sports.push(sport);
            this.$router.push('/');
          },
          goToSports(){
            this.$router.push('/');
          }
        }
    }
</script>

<template>
    <Sports />
</template>