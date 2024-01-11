<template>
    <!-- Add your template structure for treeinfo component here -->
  </template>
  
  <script>
  export default {
    data() {
      return {
        treeId: null,
        sensorData: [],
      };
    },
    async created() {
      this.treeId = this.$route.params.id; // Get the tree ID from the route parameters
      try {
        const response = await fetch(`https://dust.devbitapp.be/api/trees/${this.treeId}/sensors`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        this.sensorData = await response.json();
      } catch (error) {
        console.error('Error fetching sensor data:', error);
      }
    },
  };
  </script>
  