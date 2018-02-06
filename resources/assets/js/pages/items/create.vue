<template>
    <section class="c-panel">
        <header class="c-panel__header">
            <div class="l-col-12 l-col-2@md text-right">
                <h3 class="c-panel__title">Create item</h3>
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
    import Form from 'vform'
	import ItemForm from './form'

    export default {
    	components: {
    		ItemForm
    	},
        data() {
            return {
                url: '/api/items',
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
        },
        beforeDestroy: function () {
            this.$off('submitted', this.submitted)
        },
        methods: {
            submitted() {
                var vm = this
                this.item.post(this.url)
                    .then(function(response) {
                        console.log(response.data);
                        Cookies.set('item_status', 'create');
                        vm.$router.push({ name: 'items.list' })
                    })
            },
            successed() {
                this.$router.push({ name: 'items.list' })
            }
        }
    }
</script>
