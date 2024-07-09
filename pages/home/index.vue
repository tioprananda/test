<template>
  <div style="margin-top: 100px">
    <UISearchInput
      @search="((e : any) => search = e)"
      @keyup.enter="getSearch"
    />
    <div class="results">
      <UICard
        class="result-card"
        :id="item.id"
        :name="item.title"
        :price="item.price"
        :image="item.images[0]"
        v-for="item in datas"
        :key="item.id"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";

const datas = ref();
const dataParams = ref({
  title: "",
  price: 0,
});
const getData = async () => {
  try {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products",
      {
        params: dataParams.value,
      }
    );
    datas.value = response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

watch(
  dataParams,
  async () => {
    await getData();
  },
  { deep: true }
);

const search = ref();
const getSearch = () => {
  dataParams.value.title = search.value;
};

watch(search, () => {
  dataParams.value.title = search.value;
});

onMounted(async () => {
  await getData();
});
</script>

<style scoped>
.results {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.result-card {
    cursor: pointer;
  flex: 1 1 calc(25% - 20px); 
  max-width: calc(25% - 20px);
  box-sizing: border-box;
}

@media (max-width: 1024px) {
  .result-card {
    flex: 1 1 calc(33.333% - 20px);
    max-width: calc(33.333% - 20px);
  }
}

@media (max-width: 768px) {
  .result-card {
    flex: 1 1 calc(50% - 20px); 
    max-width: calc(50% - 20px);
  }
}

@media (max-width: 480px) {
  .result-card {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>
