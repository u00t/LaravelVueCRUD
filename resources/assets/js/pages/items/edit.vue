<template>
    <div class="col-12">
        <legend>Edit Item</legend>

        <item-form :item="item"></item-form>

        <router-link :to="{ name: 'items.list' }" class="btn btn-default">
            <fa icon="chevron-left"/>
            Back
        </router-link>
    </div>
</template>

<script>
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
                    select2: ''
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
                    select2: data.select2
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
                        vm.$router.push({ name: 'items.list' })
                    })
            }
        }
    }
</script>
