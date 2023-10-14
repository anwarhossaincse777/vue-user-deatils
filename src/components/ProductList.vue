<script setup>
import {RouterLink,RouterView } from 'vue-router'
import axios from 'axios'
import {ref, onBeforeMount, reactive} from 'vue'
import {useProduct} from "../stores/productStore.js";
import {storeToRefs} from "pinia";
import router from "../router";

const pro=useProduct();

const {products,singleProduct} = storeToRefs(pro);

onBeforeMount(() => {
 pro.getData();
});




const Header = [
  { text: "Category", value: "category" },
  { text: "Brand", value: "brand" },
  { text: "Image", value:"thumbnail"},
  { text: "Name", value: "title", sortable: true },
  { text: "Price (Tk)", value: "price", sortable: true },
  { text: "Stock", value: "stock"},
  { text: "Rating", value: "rating"},
  { text: "Action", value: "id"}
];


function itemView(id){

  router.push({name:'productDetails',params:{id:id}})

}



const searchField = ["category","brand","thumbnail","title","price","stock", "rating"];

const searchValue = ref();


</script>
<template>


  <h6 class=" md:text-4xl  pb-2 text-center"> Products </h6>
  <div class="h-1 bg-lime-600 w-52 mx-auto my-3"></div>

  <div class="w-1/2 mx-auto mt-10 mb-5">
    <input
        placeholder="Search..."
        class="p-2 w-full border rounded focus:outline-none focus:bg-slate-200"
        id="inline-full-name"
        type="text"
        v-model="searchValue"
    />
  </div>


  <EasyDataTable :headers="Header" :items="products"  show-index :rows-per-page="10" :search-field="searchField"  :search-value="searchValue">
    <template #item-thumbnail="{thumbnail}" >
      <img :src="thumbnail" alt="" class="custom">
    </template>

    <template #item-id="{id}">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" @click="itemView(id)">


        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            class="w-6 h-6"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>


      </button>
    </template>

  </EasyDataTable>



</template>

<style scoped>
.custom{
  height:60px;
  width:60px;
}

</style>





