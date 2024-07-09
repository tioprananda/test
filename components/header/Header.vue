<template>
 <header class="header">
    <nav class="nav">
    <nuxt-link to="/home" class="nav-link">Beranda</nuxt-link>
    <nuxt-link to="/about" class="nav-link">About</nuxt-link>
    <div class="profile-link" @mouseover="showProfile = true" @mouseleave="showProfile = false">
      <nuxt-link to="/profile">
        <img src="/assets/img/blank.png" alt="Profile Picture" class="profile-picture" />
      </nuxt-link>
      <div v-if="showProfile" class="profile-popup">
        <UIUserProfile :profilePicture="profile.image" :name="profile.name" :bio="profile.bio" />
      </div>
    </div>
  </nav>
  </header>
</template>

<script setup lang="ts">
const profile = ref({
  name: "tyo",
  bio: "frontend developer",
  image: "https://picsum.photos/200/300",
});
const showProfile = ref<boolean>(false)
</script>

<style scoped>
.header {
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: end;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000
}
.nav {
  display: flex;
  gap: 20px;
}
.nav-link {
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  align-items: center;
  margin: auto;
}
.nav-link:hover {
  background-color: #555;
}

.profile-link {
  display: inline-block;
}

.profile-picture {
  width: 50px; 
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}


.profile-popup {
  position: absolute;
  top: 40px;
  right: -130px;
  transform: translateX(-50%);
  z-index: 1000;
  /* background-color: #fff; */
  /* border: 1px solid #ddd; */
  border-radius: 10px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  padding: 20px;
}
</style>