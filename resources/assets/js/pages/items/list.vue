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
                        <option value=1>1</option>
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
            <vuetable ref="vuetable"
              :api-url="url"
              :fields="fields"
              pagination-path=""
              :perPage="perPage"
              @vuetable:pagination-data="onPaginationData"
            ></vuetable>
            <vuetable-pagination ref="pagination"
              @vuetable-pagination:change-page="onChangePage"
            ></vuetable-pagination>
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
    import Cookies from 'js-cookie'
    import swal from 'sweetalert2'
    import i18n from '~/plugins/i18n'

    export default {
        data() {
            return {
                url: '/api/items/',
                perPage: 1,
                search: "",
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
            }
        },
        watch: {
            'perPage' (newValue, oldValue) {
                this.perPage = Number(newValue),
                this.$refs.vuetable.changePage(1)
                // this.$refs.vuetable.reload(),
                // this.$refs.vuetable.refresh()
            }
        },
        methods: {
            onPaginationData (paginationData) {
              this.$refs.pagination.setPaginationData(paginationData)
            },
            onChangePage (page) {
              this.$refs.vuetable.changePage(page)
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

            var item_status = Cookies.get('item_status');
            switch (item_status) {
                case 'create':
                    swal({
                      type: 'success',
                      title: i18n.t("item_create_title"),
                      text: i18n.t("item_create_text"),
                      reverseButtons: true,
                      confirmButtonText: i18n.t('ok'),
                      cancelButtonText: i18n.t('cancel')
                    })
                    break;
                case 'edit':
                    swal({
                      type: 'success',
                      title: i18n.t("item_update_title"),
                      text: i18n.t("item_update_text"),
                      reverseButtons: true,
                      confirmButtonText: i18n.t('ok'),
                      cancelButtonText: i18n.t('cancel')
                    })
                    break;
                default:
                    break;
            }
            Cookies.set('item_status', '');
        }
    }
</script>
