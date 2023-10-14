<script setup>
import { onMounted} from "vue";
import { useRoute } from "vue-router";

const productId = useRoute().params.id;

import {useProduct} from "../stores/productStore.js";
import {storeToRefs} from "pinia";
const pro=useProduct();

const {singleProduct} = storeToRefs(pro);

onMounted(() => {
  pro.getSingleProductDetails(productId)

});

</script>

<template>
  <div class="container mx-auto md:p-10 p-5">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <img :src="singleProduct.thumbnail" class="" alt=""/>
        <br>
        <br>
        <h5 class="text-center"> Features Images</h5>
        <div class="h-1 bg-lime-600 w-52 mx-auto my-3"></div>

        <br>
        <div class="grid grid-cols-4 items-center gap-3 mt-4">

          <div
              class="border rounded bg-lime-100 cursor-pointer p-3"
              v-for="(image, index) in singleProduct.images"
              :key="index"
          >
            <img
                :src="image"
                class="h-32 mx-auto"
                alt=""
            />
          </div>
        </div>
      </div>
      <div class="md:flex-1 px-4">
        <h6 class=" md:text-4xl  pb-2 text-center"> Products Details </h6>
        <div class="h-1 bg-lime-600 w-52 mx-auto my-3"></div>


        <h4 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
          Name : {{ singleProduct.title }}
        </h4>
        <p class="text-gray-500 text-sm">
         Added  By :
          <a href="javascript:void(0)" class="text-lime-600 hover:underline"> {{ singleProduct.title }} Corporation</a>
        </p>

        <div class="flex items-center space-x-4 my-4">
          <div>
            <div class="rounded-lg bg-black-500 flex py-2 px-3">
              <h3 class="text-lime-400 mr-1 mt-1">Price :$</h3>
              <span class="font-bold text-lime-600 text-3xl">{{ singleProduct.price }}</span>
            </div>
          </div>
        </div>

        <p class="text-black">
          Description: {{ singleProduct.description }}
        </p>

      </div>
    </div>
  </div>
</template>
