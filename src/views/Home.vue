<template>
  <div class="home card">
    <div class="card-header">How to get started</div>
      <div class="card-body">
        To start using Ladasho, you need to have those packages installed with Laravel: <br>
        <ul>
          <li>Restpal</li> 
          <li>Ladasho</li> 
          <li>CORS by Barryvdh</li> 
          <li>Laravel Passport</li>
        </ul>

        <br> 
        Then you can access Start page and provide URL to your laravel app and admin's email and password.
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
