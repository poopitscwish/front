<template>
    <div>
        <div v-for="(triple, index) in triples" :key="index" class="triple">
            <input v-model="triple[0]" placeholder="Subject" />
            <input v-model="triple[1]" placeholder="Predicate" />
            <input v-model="triple[2]" placeholder="Object" />
            <button @click="removeTriple(index)">Удалить</button>
        </div>
        <button @click="addTriple">Добавить тройку</button>
        <button @click="saveTriples">Сохранить</button>
    </div>
</template>


<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import type { PropType as VuePropType } from 'vue';
import { useUserStore } from '../store'
export default defineComponent({
    props: {
        triples: Array as VuePropType<Array<[string, string, string]>>
    },
    emits: ['update:triples'],
    setup(props, { emit }) {
        const { triples } = toRefs(props);

        const addTriple = () => {
            triples.value!.push(['', '', '']);  // Добавляем новую пустую тройку
            emit('update:triples', triples.value);
        };

        const removeTriple = (index: number) => {
            triples.value!.splice(index, 1);  // Удаляем тройку по индексу
            emit('update:triples', triples.value);
        };

        return {
            addTriple,
            removeTriple,

        };
    },
    // В секции <script> компонента RdfEditor
    methods: {
        async saveTriples() {
            const userStore = useUserStore()
            const csrfToken = userStore.csrfToken
            try {
                const response = await fetch('https://shenyafoma20032.fvds.ru/api/generate/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'X-CSRFToken': csrfToken,  // Добавляем CSRF токен в заголовки запроса
                    },
                    body: JSON.stringify(this.triples),
                    credentials: 'include'
                });

                if (!response.ok) {
                    throw new Error('Ошибка при сохранении RDF на сервере');
                }

                // Обработка файла, возвращаемого сервером (например, скачивание)
                const blob = await response.blob();
                const downloadUrl = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = downloadUrl;
                a.download = 'ontology.rdf';  // Имя файла для скачивания
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(downloadUrl);
                a.remove();
            } catch (error) {
                console.error('Ошибка:', error);
            }
        }
    }

});
</script>