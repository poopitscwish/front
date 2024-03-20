<!-- DataTable.vue -->
<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th v-for="(column, columnIndex) in columns" :key="columnIndex">
            {{ column }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
          <td v-for="(column, columnIndex) in columns" :key="columnIndex">
            <!-- Заменим отображение значения ячейки на текстовое поле -->
            <input v-model="row[column]" />
          </td>
        </tr>
      </tbody>
    </table>


  </div>
  <div class="addBtn">
    <button @click="addColumn">Добавить столбец</button>
    <button @click="addRow">Добавить строку</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
interface Row {
  [key: string]: string | number;
}
export default defineComponent({
  name: 'DataTable',
  data() {
    return {
      columns: ['Имя', 'Возраст', 'Город'], // начальные столбцы
      rows: [
        { Имя: 'Иван', Возраст: 25, Город: 'Москва' },
        { Имя: 'Мария', Возраст: 30, Город: 'Санкт-Петербург' },
      ] as Row[],
    };
  },
  methods: {
    addColumn() {
      const newColumn = prompt('Введите название нового столбца:');
      if (newColumn) {
        this.columns.push(newColumn);
      }
    },
    addRow() {
      const newRow: Row = {};
      this.columns.forEach((column) => {
        newRow[column] = '';
      });
      this.rows.push(newRow);
    },
  },
});
</script>

<style>
.table-container {
  margin: 20px;
  /* Центрирование по горизонтали и отступы от верхнего и нижнего краёв */
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

th {
  background-color: #4caf50;
  color: white;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:hover {
  background-color: #f1f1f1;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  margin-bottom: 10px;

}

.addBtn button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}

.addBtn button:hover {
  background-color: #45a049;
}

.addBtn {
  text-align: right;
  padding: 0rem;
}
</style>
