<template>
    <div class="search-input">
      <input
        type="text"
        v-model="query"
        @input="updateSearch"
        placeholder="Search..."
        class="input"
      />
    </div>
  </template>
  
  <script setup lang="ts">
    const emits = defineEmits(['search'])
    const query = ref()
    const updateSearch = () => {
        emits('search', query.value)
    }
  </script>
  
  <style scoped>
  .search-input {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .input {
    width: 100%;
    max-width: 300px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  </style>
  