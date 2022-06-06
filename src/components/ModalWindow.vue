<script setup>
</script>

<template>
  <div>
    <button
      type="button"
      class="btn btn-success"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      Создать свой магазин
    </button>

    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Создать магазин
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="d-flex justify-content-between">
              <div class="dropdown">
                <h6>Шаблон</h6>
                <button
                  class="btn btn-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown button
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                  <li><a class="dropdown-item active" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </div>

              <div class="dropdown">
                <h6>Цветовая схема</h6>
                <button
                  class="btn btn-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown button
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                  <li><a class="dropdown-item active" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <h6 class="p-3 d-flex justify-content-between p-3">Домен</h6>
          <div class="d-flex">
            <div
              class="
                ms-3
                p-1
                bg-light
                text-dark
                flex-grow-1
                w-75
              "
            > <input placeholder="Например: qwerty" class="bg-light border-0 d-block"/></div>
            <div
              class="
                p-1
                me-3
                w-25
                bg-primary
                text-white
                flex-shrink-0
              "
            >.work.ru</div>
          </div>
          <div class="d-flex p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="currentColor"
              class="bi bi-exclamation-circle m-3"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"
              />
            </svg>
           <p class="fs-6"> В названии домена разрешены латиница и "-", запрещается использовать словосочетание Work 5. После создания
            магазина Вы сможете прикрутить свой домен (например qwerty.ru). Подробнее по ссылке 
            </p>
          </div>
          <div class="modal-footer d-flex justify-content-start">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Отмена
            </button>
            <button type="button" class="btn btn-warning">Создать</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
