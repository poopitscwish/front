<template>
    <div>
      <h2>Список заявок</h2>
      <ul>
        <li v-for="request in requests" :key="request.id" @click="selectRequest(request)">
          <p>Имя пользователя: {{ request.userName }}</p>
          <p>Дата добавления: {{ request.dateAdded }}</p>
          <p>Статус: {{ request.status }}</p>
        </li>
      </ul>
      <div v-if="selectedRequest">
        <p>{{ selectedRequest.text }}</p>
        <button @click="acceptRequest(selectedRequest.id)">Принять</button>
        <button @click="rejectRequest(selectedRequest.id)">Отклонить</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Request',
    data() {
      return {
        requests: [
          // Пример списка заявок. В реальном приложении данные следует загрузить с сервера.
          { id: 1, userName: 'Пользователь 1', dateAdded: '2022-01-01', status: 'Ожидает', text: 'Текст заявки 1' },
          { id: 2, userName: 'Пользователь 2', dateAdded: '2022-01-02', status: 'Ожидает', text: 'Текст заявки 2' },
        ],
        selectedRequest: null,
      };
    },
    methods: {
      selectRequest() {
      this.selectedRequest = true;
    },
    },
  };
  </script>
  
  <style scoped>
  li {
    cursor: pointer;
    margin-bottom: 10px;
  }
  li:hover {
    background-color: #f0f0f0;
  }
  </style>
  