<template>
  <div class="work5-emailBtnFlex">
    <button type="button" class="position-relative work5-btnMargin">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-envelope-fill work5-imgsvg"
        viewBox="0 0 16 16"
      >
        <path
          d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
        />
      </svg>
      <span
        class="
          position-absolute
          top-0
          start-100
          translate-middle
          p-2
          bg-danger
          border border-light
          rounded-circle
        "
      >
        <span class="visually-hidden">New alerts</span>
      </span>
    </button>
    <div class="card mb-3 shadow-lg">
      <div class="row g-1 align-items-center">
        <div class="col" style="max-width: 60px">
          <img
            src="avatar2.png"
            class="img-fluid m-1"
            style="border-radius: 30px"
          />
        </div>
        <div class="col">
          <div class="me-3 ms-3">
            <h5 class="card-title">Имя Фамилия</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.work5-emailBtnFlex {
  display: flex;
}

.work5-btnMargin {
  margin-right: 20px;
  width: 60px;
  height: 60px;
}

.work5-imgsvg {
  width: 25px;
  height: 25px;
  justify-content: center;
}

.work5-avatar {
  width: 100px;
  height: 50px;
}
</style>