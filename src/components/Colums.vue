<template>
  <div class="work5-marginBLabel">Управление магазином</div>

  <table class="table table-borderless work5-tableBg">
    <thead>
      <tr>
        <td scope="col" class="w-25">№</td>
        <td scope="col" class="w-25">Название</td>
        <td scope="col" class="w-25">Адрес</td>
        <td scope="col" class="w-25">Действие</td>
      </tr>
    </thead>
    <tbody>
      <tr class="work5-rowBorder">
        <td scope="row">1</td>
        <td>qwerty</td>
        <td>qwerty.com</td>
        <td>
          <button type="button" class="btn btn-primary">Редактировать</button>
          <button type="button" class="btn btn-danger work5-btnLMargin">
            Удалить
          </button>
        </td>
      </tr>
      <tr>
        <td scope="row">2</td>
        <td>qwerty</td>
        <td>qwerty.com</td>
        <td>
          <button type="button" class="btn btn-primary">Редактировать</button>
          <button type="button" class="btn btn-danger work5-btnLMargin">
            Удалить
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.work5-rowBorder {
  border-bottom: #e4e4e4 1px solid;
}

.work5-tableBg {
  background: white;
}

.work5-btnLMargin {
  margin-left: 20px;
}

.work5-marginBLabel {
  margin-bottom: 20px;
}
</style>

