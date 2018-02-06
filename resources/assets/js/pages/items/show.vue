<template>
    <section class="c-panel">
        <header class="c-panel__header">
            <h3 class="c-panel__title">Show item</h3>
        </header>
        <!-- END .c-toolbar -->
        <div class="c-panel__body">
            Text: {{ item.text }}<br>
            Date: {{ item.date }}<br>
            Time: {{ item.time }}<br>
            Select1: {{ item.select1 }}<br>
            Select2: {{ item.select2 }}<br>
            File: {{ item.file }}<br>
            <br>
            <router-link :to="{ name: 'items.list' }" class="btn btn-primary">
                List
            </router-link>
        </div>
    </section>
</template>

<script>
    import Cookies from 'js-cookie'
    import axios from 'axios'
    import Form from 'vform'
    import ItemForm from './form'

    export default {
        components: {
            ItemForm
        },
        data() {
            return {
                url: '/api/items/',
                itemId: this.$route.params.itemId,
                item: new Form({
                    text: '',
                    date: '',
                    time: '',
                    select1: '',
                    select2: '',
                    file: ''
                })
            }
        },
        created: function () {
            this.$on('submitted', this.submitted)
            axios.get('/api/items/' + this.itemId)
            .then(response => {
                var data = response.data;
                this.item = new Form({
                    text: data.text,
                    date: data.date,
                    time: data.time,
                    select1: data.select1,
                    select2: data.select2,
                    file: data.file
                })
            })
        }
    }
</script>
