<script setup lang="ts">
const VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL
const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const VITE_ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link>
  </nav>
  <main>
    <h3>Inspect links for base URL</h3>

    <div>VITE_ENVIRONMENT: {{ VITE_ENVIRONMENT }}</div>
    <div>VITE_APP_BASE_URL: {{ VITE_APP_BASE_URL }}</div>
    <div>VITE_API_BASE_URL: {{ VITE_API_BASE_URL }}</div>

    <router-view />
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
