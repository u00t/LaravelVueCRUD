<template>
    <section class="c-panel">
        <header class="c-panel__header">
            <div class="l-col-12 l-col-2@md text-right">
                <h3 class="c-panel__title">Edit item</h3>
            </div>
        </header>
        <!-- END .c-toolbar -->
        <div class="c-panel__body">
            <item-form :item="item"></item-form>
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
                    id: null,
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
                    id: data.id,
                    text: data.text,
                    date: data.date,
                    time: data.time,
                    select1: data.select1,
                    select2: data.select2,
                    file: ''
                })
            })
        },
        beforeDestroy: function () {
            this.$off('submitted', this.submitted)
        },
        methods: {
            submitted() {
                var vm = this
                this.item.put(this.url + this.itemId)
                    .then(function() {
                        Cookies.set('item_status', 'edit');
                        vm.$router.push({ name: 'items.list' })
                    })
            }
        }
    }
</script>
