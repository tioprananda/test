<template>
  <div class="user-profile" style="margin: auto;">
    <img :src="profilePicture" alt="Profile Picture" class="profile-picture" />
    <h2>{{ name }}</h2>
    <p>{{ bio }}</p>
  </div>
</template>

<script>
export default {
  props: {
    profilePicture: {
      type: String,
      default: "https://via.placeholder.com/150",
    },
    name: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.user-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  background-color: #f9f9f9;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.profile-picture {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 20px;
}

h2 {
  margin: 10px 0;
  font-size: 24px;
  color: #333;
}

p {
  font-size: 16px;
  color: #666;
  text-align: center;
}
</style>
