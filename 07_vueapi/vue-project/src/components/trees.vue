<template>
    <div class="data-container">
      <div class="container mt-4">
        <div v-if="treesLoading" class="spinner-border" role="status"></div>
        <table class="table table-striped table-bordered table-hover">
          <div v-if="treesLoading" class="spinner-border" role="status"></div>
          <thead class="table-dark">
            <tr>
              <th scope="col">Tree-name</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="tree.id" v-for="tree in trees" @click="treesLoading ? null : loadSensorData(tree.id)">
              <td>{{ tree.name }}</td>
              <td>{{ tree.description }}</td>
              <td>
                <img :alt="tree.name" :src="tree.image_url" width="100" height="100" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container mt-4">
        <table class="table table-striped table-bordered">
          <div v-if="sensorsLoading" class="spinner-border" role="status"></div>
          <thead class="table-dark">
            <tr>
              <th scope="col">Sensor name</th>
              <th scope="col">Last measurement</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="sensor.id" v-for="sensor in sensors">
              <td>{{ sensor.name }}</td>
              <td>{{ convertISOToNormalTime(sensor.last_value.time) }}</td>
              <td>{{ sensor.last_value.value }} {{ sensor.unit }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        trees: [],
        sensors: [],
        treesLoading: false,
        sensorsLoading: false,
      };
    },
    methods: {
      async getTrees() {
        try {
          const res = await fetch(`https://dust.devbitapp.be/api/trees/`);
          if (!res.ok) {
            throw new Error('Failed to fetch tree data');
          }
          const data = await res.json();
          this.treesLoading = false;
          this.trees = data.data;
          return data.data;
        } catch (error) {
          console.error('Error fetching tree data:', error);
        }
      },
      loadSensorData(treeId) {
        this.sensorsLoading = true;
        this.sensors = [];
        this.getSensorData(treeId);
      },
      async getSensorData(treeId) {
        try {
          const res = await fetch(`https://dust.devbitapp.be/api/trees/` + treeId);
          if (!res.ok) {
            throw new Error('Failed to fetch sensor data');
          }
          const data = await res.json();
          this.sensorsLoading = false;
          this.sensors = data.sensors;
          return data.sensors;
        } catch (error) {
          console.error('Error fetching sensor data:', error);
        }
      },
      convertISOToNormalTime(time) {
        const isoTime = new Date(time);
        return isoTime.toLocaleString();
      },
    },
    beforeMount() {
      this.treesLoading = true;
      this.getTrees();
    },
  };
  </script>
  
  <style>
  .data-container {
    display: flex;
    flex: 1;
    flex-direction: row;
    background-color: white;
    width: 90vw;
    height: 90vh;
    margin: auto;
  }
  
  .table-hover tr {
    cursor: pointer;
  }
  </style>
  