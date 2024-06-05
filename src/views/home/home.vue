<template>
    <div class="home">
        <div v-for="item in data">
            <span>ID: {{ item.id }}</span>
            <br/>
            <span>Name: {{ item.name }}</span>
            <hr/>
        </div>
    </div>
</template>

<script>
    import './home.scss';
    import { ref } from 'vue';
    import { getUsers } from '@/api-core/api-core';
    
    export default {
        name: 'Home',
        setup() {
            var data = ref([]);
            getUsers().then(res => {
                console.log(res);
                data.value = res.data.return_data;
            }).catch(err => {
                console.error(err);
            });
            return {
                data, 
            }
        }
    };
</script>