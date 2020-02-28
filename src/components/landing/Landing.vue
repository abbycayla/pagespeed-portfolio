<template>
<div>
  <router-link v-bind:to="'/Details'">Liv</router-link>
      <div v-for="Detail in Details" :key="Detail.id">
        
        <div>
          <router-link :to="{
            name: 'detail',
            params: { DetailId: Detail.id }
          }">
          <h2>{{ Detail.title }}</h2>
          </router-link>
          <span>
              <router-link :to="{
            name: 'Detail-edit',
            params: { DetailId: Detail.id }
          }">
     Edit
          </router-link>
          </span>
        </div>
      </div>
</div>

</template>