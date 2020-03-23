<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main-block {
  width: 600px;
  padding-top: 10px;
  position: relative;
  display: block;
  left: 50%;
  transform: translateX(-50%);
}
</style>
