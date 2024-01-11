<template>
    <div class="event-list">
        <h1>Upcoming Events</h1>
        <div v-for="event in events" :key="event.id">
            <h2>{{ event.title }}</h2>
            <p>{{ event.date }} at {{ event.time }}</p>
            <p>{{ event.description }}</p>
            <p>Location: {{ event.location }}</p>
            <router-link :to="`/event/${event.id}`">View Details</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            events: [
                {
                    id: 1,
                    title: 'Vue.js Conference',
                    date: '2022-12-12',
                    time: '10:00',
                    description: 'A conference about Vue.js',
                    location: 'San Francisco, CA'
                },
                {
                    id: 2,
                    title: 'React.js Workshop',
                    date: '2022-12-13',
                    time: '09:00',
                    description: 'A workshop about React.js',
                    location: 'New York, NY'
                },
                {
                    id: 3,
                    title: 'Angular.js Conference',
                    date: '2022-12-14',
                    time: '12:00',
                    description: 'A conference about Angular.js',
                    location: 'Los Angeles, CA'
                },
                {
                    id: 4,
                    title: 'Ember.js Workshop',
                    date: '2022-12-15',
                    time: '11:00',
                    description: 'A workshop about Ember.js',
                    location: 'Chicago, IL'
                },
                {
                    id: 5,
                    title: 'Meteor.js Conference',
                    date: '2022-12-16',
                    time: '10:00',
                    description: 'A conference about Meteor.js',
                    location: 'Seattle, WA'
                }
            ]
        }
    }
}
</script>

<style scoped>
.event-list{
    background-color: #f1f1f1;
    padding: 20px;
    text-align: center;
    height: 100vh;
    margin-top: 50px;
}
</style>