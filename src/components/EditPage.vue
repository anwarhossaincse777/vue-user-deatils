<script setup>
import {useRoute} from "vue-router";
import {onMounted, reactive} from "vue";
import axios from "axios";
import { createToaster } from "@meforma/vue-toaster";

const toaster = createToaster({ /* options */ });


const user_id = useRoute().params.id;


const user = reactive({});

onMounted(() => {
  axios.get(`https://dummyjson.com/users/${user_id}`).then((response) => {
    user.id = response.data.id;
    user.email = response.data.email;
    user.firstName = response.data.firstName;
    user.lastName = response.data.lastName;
    user.image = response.data.image;
  });
});


async function fromSubmit(user_id) {

  axios.put(`https://dummyjson.com/users/${user_id}`,user).then((response) => {
   if (response.status===200){
     user.id = response.data.id;
     user.email = response.data.email;
     user.firstName = response.data.firstName;
     user.lastName = response.data.lastName;
     user.image = response.data.image;

   }else {

   }
  });


}


</script>

<template>


<div>

    <div class="grid gap-6 mb-6 md:grid-cols-2">


      <div class="circular_image">
        <img :src="user.image" alt="">
      </div>

        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image:</label>
        <input type="file" id="first_name" v-on:change= "user.image" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>

    <div class="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
        <input type="text" id="first_name" v-model="user.firstName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
      </div>
      <div>
        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
        <input type="text" id="last_name" v-model= "user.lastName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required>
      </div>
    </div>
    <div class="mb-6">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
      <input type="email" id="email" v-model= "user.email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required>
    </div>

    <button type="submit" @click.prevent="fromSubmit()" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</div>


</template>

<style scoped>

</style>