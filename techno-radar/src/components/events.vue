<template>
  <div>
    <li
      v-for="item in items"
      :value="item.value"
      :key="item.value"
      class="top-events"
    >
      {{ item.message }}
    </li>
  </div>
</template>


<script>
export default {
  name: "eventsApp",

  data() {
    return {
      items: [
        { message: "Fridas Pier" },
        { message: "Karl Kinski" },
        { message: "Circle" },
      ],
    };
  },
};
</script>

<style>
.top-events {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  height: 20vh;
}
</style>