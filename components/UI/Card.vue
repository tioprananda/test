<template>
  <NuxtLink :to="`/home/${id}`" class="card">
    <img v-if="image" :src="image" alt="Profile Picture" class="card-image" />
    <img
      v-else
      src="/assets/img/blank.png"
      alt="Profile Picture"
      class="profile-picture"
    />
    <h2 class="card-name">{{ name }}</h2>
    <p class="card-price">${{ price }}</p>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
}

.card-name {
  margin: 0;
  font-size: 18px;
  color: #333;
}

.card-price {
  margin: 10px 0 0;
  font-size: 16px;
  color: #888;
}
</style>
