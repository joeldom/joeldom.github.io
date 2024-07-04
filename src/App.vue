<template>
	<div id="app">
		<AppHeader /> <!-- Include the AppHeader component -->
		<router-view /> <!-- This will render the current route component -->
		<AppFooter /> <!-- Include the AppFooter component -->
	</div>
  </template>
  
  <script>
  import AppHeader from './components/AppHeader.vue'; // Import the AppHeader component
  import AppFooter from './components/AppFooter.vue'; // Import the AppFooter component
  
  export default {
	name: 'App',
	components: {
		AppHeader, // Register the AppHeader component
		AppFooter  // Register the AppFooter component
	}
  }
  </script>
  
  <style>
  #app {
	font-family: Arial, sans-serif;
	margin: 20px;
  }
  </style>
  