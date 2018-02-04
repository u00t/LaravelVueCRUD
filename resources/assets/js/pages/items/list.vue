<template>
    <div>
        <div class="row" v-cloak>
            <div class="col-md-7">
                <div class="form-inline form-group">
                    <label>Search:</label>

                    <input
                        v-model="search"
                        class="form-control"
                        debounce="500"
                    >
                </div>
            </div>

            <div class="col-md-5">
                <div class="dropdown form-inline pull-right">
                    <label>Per Page:</label>

                    <select class="form-control" v-model="perPage">
                        <option value=10>10</option>
                        <option value=25>25</option>
                        <option value=50>50</option>
                        <option value=75>75</option>
                        <option value=100>100</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="table-responsive" v-cloak>
            <vuetable
                    ref="vuetable"
                    :api-url="url"
                    :pagination-path="paginationPath"
                    :per-page="perPage"
                    :fields="fields"
                    :sort-order="sortOrder"
                    :table-class="tableClass"
                    :ascending-icon="ascendingIcon"
                    :descending-icon="descendingIcon"
                    :wrapper-class="wrapperClass"
                    :table-wrapper="tableWrapper"
                    :pagination-component="paginationComponent"
            ></vuetable>
        </div>

        <div class="text-center" v-cloak>
            <router-link :to="{ name: 'items.create' }" class="btn btn-default">
                <fa icon="plus"/>
                Create
            </router-link>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                url: '/api/items/',
                paginationPath: '',
                search: '',
                perPage: 10,
                fields: [
                    {
                        title: 'Index',
                        name: '__sequence',
                        titleClass: 'text-center col-sm-1',
                        dataClass: 'text-center',
                    },
                    {
                        title: 'Text',
                        name: 'text',
                        sortField: 'text',
                        titleClass: 'text-center col-sm-2',
                        dataClass: 'text-center',
                    },
                    {
                        title: 'Date',
                        name: 'date',
                        sortField: 'date',
                        titleClass: 'text-center col-sm-2',
                        dataClass: 'text-center',
                    },
                    {
                        title: 'Time',
                        name: 'time',
                        sortField: 'time',
                        titleClass: 'text-center col-sm-2',
                        dataClass: 'text-center',
                    },
                    {
                        title: 'Select1',
                        name: 'select1',
                        sortField: 'select1',
                        titleClass: 'text-center col-sm-2',
                        dataClass: 'text-center',
                    },
                    {
                        title: 'Select2',
                        name: 'select2',
                        sortField: 'select2',
                        titleClass: 'text-center col-sm-2',
                        dataClass: 'text-center',
                    },
                    {
                        title: 'Actions',
                        name: '__component:actions',
                        titleClass: 'text-center col-sm-1',
                        dataClass: 'text-center',
                    },
                ],
                sortOrder: [
                    {
                        field: 'text',
                        direction: 'asc'
                    }
                ],
                tableClass: 'table table-bordered table-hover',
                ascendingIcon: 'glyphicon glyphicon-menu-up pull-right',
                descendingIcon: 'glyphicon glyphicon-menu-down pull-right',
                wrapperClass: 'vuetable-wrapper ',
                tableWrapper: '.vuetable-wrapper',
                paginationComponent: 'bootstrap-pagination',
                alert: {
                    show: false,
                    type: null,
                    title: null,
                    message: null,
                },
            }
        },
        watch: {
            'search'(newValue, oldValue) {
                this.setFilter()
            },
            'perPage'(newValue, oldValue) {
                this.$broadcast('vuetable:refresh')
            },
        },
        methods: {
            /**
             * Other functions
             */
            setFilter() {

                this.$nextTick(function () {
                    this.$broadcast('vuetable:refresh')
                })
            },
            resetFilter() {
                this.search = '';

                this.setFilter()
            },
            preg_quote(str) {
                return (str + '').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1");
            },
            highlight(needle, haystack) {
                return haystack.replace(
                    new RegExp('(' + this.preg_quote(needle) + ')', 'ig'),
                    '<span class="highlight">$1</span>'
                )
            },
            paginationConfig(componentName) {
                this.$broadcast('vuetable-pagination:set-options', {
                    wrapperClass: 'pagination pull-right',
                    icons: {
                        first: '',
                        prev: '',
                        next: '',
                        last: ''
                    },
                    activeClass: 'active',
                    linkClass: '',
                    pageClass: ''
                })
            }
        },
        created: function () {
            var vm = this;
            this.$on('showData', function (rowData) {
                this.$router.push({ name: 'items.show', params: { itemId: rowData.id } })
            });
            this.$on('editData', function (rowData) {
                this.$router.push({ name: 'items.edit', params: { itemId: rowData.id } })
            });
            this.$on('deleteData', function(rowData) {
                axios.delete(this.url + rowData.id)
                .then(
                    vm.$refs.vuetable.reload(),
                    vm.$refs.vuetable.refresh()
                )
            });
        },
        events: {
            'vuetable:load-success'(response) {
                let data = response.data.data;

                if (this.search !== '') {
                    for (let index in data) {
                        data[index].text = this.highlight(this.search, data[index].text);
                    }
                }
            },
            'vuetable:load-error'(response) {
                this.alert = {
                    show: true,
                    type: 'danger',
                    title: 'Error',
                    message: response.statusText
                };

                this.$broadcast('notify', this.alert);
            },
        }
    }
</script>
