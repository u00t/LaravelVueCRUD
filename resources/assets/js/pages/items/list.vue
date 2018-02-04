<template>
    <section class="c-panel">
        <header class="c-toolbar u-mb-0">
            <div class="c-toolbar__group">
                <div class="l-level">
                    <div class="l-level-left">
                        <div class="c-cell">
                            <div class="c-cell__media">
                                <i class="icon-quill4"></i>
                            </div>
                            <div class="c-cell_content">
                                <h1 class="c-toolbar__title">Items</h1>
                            </div>
                        </div>
                    </div>
                    <div class="l-level__right">
                        <router-link :to="{ name: 'items.create' }" class="btn btn--success btn--smart">
                            <fa icon="plus"/>
                            Create
                        </router-link>
                    </div>
                </div>
                <!-- END .l-level -->
            </div>
            <!-- END .c-toolbar__group -->
        </header>
        <!-- END .c-toolbar -->
        <div class="table-responsive" v-cloak>
            <vuetable ref="vuetable"
              :api-url="url"
              :fields="fields"
              :perPage="perPage"
              :pagination="pagination"
              pagination-path=""
              @vuetable:pagination-data="onPaginationData"
              class="table table--data table--hover"
            ></vuetable>
            <vuetable-pagination ref="pagination"
              @vuetable-pagination:change-page="onChangePage"
            ></vuetable-pagination>
        </div>
    </section>
    
</template>

<script>
    import axios from 'axios'
    import Cookies from 'js-cookie'
    import swal from 'sweetalert2'
    import i18n from '~/plugins/i18n'
    import VuetablePagination from '../../components/VuetablePagination'

    export default {
        components: {
            VuetablePagination
        },
        data() {
            return {
                url: '/api/items/',
                perPage: 1,
                pagination: {
                  wrapperClass: 'vuetable-pagination pull-right',
                  infoClass: 'pull-left',
                  activeClass: 'btn-primary',
                  disabledClass: 'disabled',
                  pageClass: 'btn btn-border',
                  linkClass: 'btn btn-border',
                  icons: {
                    first: '',
                    prev: '',
                    next: '',
                    last: ''
                  }
                },
                fields: [
                    {
                        title: 'Index',
                        name: '__sequence',
                        titleClass: 'text-center u-hiddenDown@md',
                        dataClass: 'text-center',
                    },
                    {
                        title: 'Text',
                        name: 'text',
                        sortField: 'text',
                        titleClass: 'text-center',
                        dataClass: 'text-center',
                    },
                    {
                        title: 'Date',
                        name: 'date',
                        sortField: 'date',
                        titleClass: 'text-center',
                        dataClass: 'text-center',
                    },
                    {
                        title: 'Time',
                        name: 'time',
                        sortField: 'time',
                        titleClass: 'text-center',
                        dataClass: 'text-center',
                    },
                    {
                        title: 'Select1',
                        name: 'select1',
                        sortField: 'select1',
                        titleClass: 'text-center',
                        dataClass: 'text-center',
                    },
                    {
                        title: 'Select2',
                        name: 'select2',
                        sortField: 'select2',
                        titleClass: 'text-center',
                        dataClass: 'text-center',
                    },
                    {
                        title: 'Actions',
                        name: '__component:actions',
                        titleClass: 'text-center',
                        dataClass: 'text-center',
                    },
                ],
            }
        },
        watch: {
            'perPage' (newValue, oldValue) {
                this.perPage = Number(newValue),
                this.$refs.vuetable.reload(),
                this.$refs.vuetable.refresh(),
                this.$refs.vuetable.changePage(1)
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
