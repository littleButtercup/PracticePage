<script setup>
</script>

<template>
  <div class="work5-container1">
    <div class="work5-menuColor work5-menuCenter">
      <Menu></Menu>
    </div>
    <div class="work5-rigthSide">
      <div class="work5-container2">
        <Bread></Bread>
        <div style="flex-grow: 1"></div>
        <div class="work5-marginBread">
          <EmailLet></EmailLet>
        </div>
      </div>
      <ModalWindow class="work5-btnTMargin"></ModalWindow>
      <div class="work5-columsMargin">
        <Colums></Colums>
      </div>
    </div>
  </div>
</template>

<style>
.work5-rigthSide {
  flex-grow: 1;
  padding-left: 60px;
}

.work5-leftSide {
  display: flex;
}

.work5-container1 {
  display: flex;
  background: whitesmoke;
  min-height: 100vh;
}

.work5-container2 {
  display: flex;
  margin-top: 10px;
}
.work5-menuColor {
  background: white;
}

.work5-menuCenter {
  padding-left: 7px;
  width: 270px;
}

.work5-columsMargin {
  margin-right: 60px;
}

.work5-marginBread {
  margin-right: 10px;
}

.work5-btnTMargin {
  margin-top: 70px;
  margin-bottom: 40px;
}


</style>
