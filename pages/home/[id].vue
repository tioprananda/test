<template>
  <div style="margin-top: 160px">
    <div class="product-detail">
      <div class="product-image">
        <img :src="dataDetail?.images[0]" :alt="dataDetail?.title" />
      </div>
      <div class="product-info">
        <h2>{{ dataDetail?.title }}</h2>
        <p class="product-price">${{ dataDetail?.price }}</p>
        <p>{{ dataDetail?.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
const params = useRoute().params.id;
const dataDetail = ref();
const getDataDetail = async () => {
  try {
    const response = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${params}`
    );
    dataDetail.value = response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
onMounted(async () => {
  await getDataDetail();
});
</script>

<style scoped>
.product-detail {
  display: flex;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
}

.product-image {
  flex: 1;
  text-align: center;
}

.product-image img {
  max-width: 100%;
  height: auto;
}

.product-info {
  flex: 2;
  padding: 0 20px;
}

.product-price {
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 10px;
}
</style>
