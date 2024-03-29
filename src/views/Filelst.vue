<template>
    <div>
        <h2>Список файлов</h2>
        <table>
            <thead>
                <tr>
                    <th>Название файла</th>
                    <th>Имя пользователя</th>
                    <th>Дата последнего обновления</th>
                    <th>Количество скачиваний</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="file in files" :key="file.id">
                    <td>{{ file.name }}</td>
                    <td>{{ file.user }}</td>
                    <td>{{ file.date }}</td>
                    <td>{{ file.download }}</td>
                    <td>
                        <button @click="downloadFile(file.url)">Скачать</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "reqLst",
    data() {
        return {
            files: [
                { id: 1, name: 'ontology1.rdf', user: "Фомин Евгений", date: '2024-03-11', url: 'https://shenyafoma20032.fvds.ru/api/download/ontology.rdf', download: 1 },
                { id: 2, name: 'ontology2.rdf', user: "Акулин Александр", date: '2024-03-22', url: 'https://shenyafoma20032.fvds.ru/api/download/ontology(1).rdf', download: 5 },
            ]
        };
    },

    methods: {
        async fetchFiles() {
            try {
                // const response = await axios.get('/api/files');
                // this.files = response.data.files; // Предполагается, что сервер возвращает объект с ключом files
            } catch (error) {
                console.error('Ошибка при загрузке файлов:', error);
                // Обработайте ошибку загрузки файлов
            }
        },
        downloadFile(url) {
            window.open(url, '_blank');
        }
    }
};
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #ddd;
    padding: 8px;
}

th {
    background-color: #f2f2f2;
}

button {
    cursor: pointer;
}
</style>