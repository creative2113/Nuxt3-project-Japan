<template>
  <button aria-label="open menu" class="nav-button">
    <hr>
    <hr>
  </button>
</template>

<style scoped>
.nav-button {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  right: 0;
  width: 70px;
  height: 50px;
  background-color: #00000080;
  z-index: 51;
  padding: 18px 15px 18px 30px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 20px 100%);
}

.nav-button hr {
  width: 20px;
  border-top: solid 1px #FFFFFF;
}

.nav-button hr:last-of-type {
  margin-left: auto;
}
</style>
