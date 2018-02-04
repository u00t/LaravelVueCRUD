<template>
    <div class="btn-group-vertical" role="group" aria-label="Actions" v-cloak>
        <button
            type="button"
            class="btn btn-primary btn-xs"
            title="Show"
            @click="showData(rowData)">
            <fa icon="eye-slash"/>
        </button>

        <button
            type="button"
            class="btn btn-warning btn-xs"
            title="Edit"
            @click="editData(rowData)">
            <fa icon="pencil-alt"/>
        </button>

        <button
            type="button"
            class="btn btn-danger btn-xs"
            title="Update"
            @click="deleteData(rowData)">
            <fa icon="trash"/>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'Actions',
        props: {
            rowData: {
                type: Object,
                required: true
            }
        },
        methods: {
            showData(rowData) {
                this.$parent.$parent.$emit('showData', rowData);
            },
            editData(rowData) {
                this.$parent.$parent.$emit('editData', rowData);
            },
            deleteData(rowData) {
                this.$parent.$parent.$emit('deleteData', rowData);
            },
        }
    }
</script>
