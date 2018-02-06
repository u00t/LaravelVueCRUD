<template>
	<form @submit.pervent="submit" class="form-horizontal" no-validate v-cloak enctype="multipart/form-data">
        <alert type="danger" :closeable="true" v-if="Object.keys(item.errors.errors).length > 0">
            Woops! Something went wrong!
        </alert>
        <div 
            class="form-group l-row">
			<label for="text" class="form-label l-col-12 l-col-2@md text-right">Text</label>
			<div class="l-col-12 l-col-9@md">
				<input
                    v-model="item.text"
                    type="text"
                    class="form-control"
                    id="text"
                    name="text"
                    placeholder="Text..."
                    :class="{ 'is-invalid': item.errors.has('text') }"
                    >
                <has-error :form="item" field="text"/>
			</div>
		</div>
        <div 
            class="form-group l-row">
            <label for="date" class="form-label l-col-12 l-col-2@md text-right">Date</label>
            <div class="l-col-12 l-col-9@md">
                <date-picker 
                    v-model="item.date"
                    class="form-control"
                    name="date"
                    placeholder="Date..."
                    value="item.date"
                    :options="dateOpts"
                    :class="{ 'is-invalid': item.errors.has('date') }"></date-picker>
                <has-error :form="item" field="date"/>
            </div>
        </div>
        <div 
            class="form-group l-row">
            <label for="time" class="form-label l-col-12 l-col-2@md text-right">Time</label>
            <div class="l-col-12 l-col-9@md">
                <date-picker 
                    v-model="item.time"
                    class="form-control"
                    name="time"
                    :time="true"
                    :options="timeOpts"
                    placeholder="Time..."
                    value="item.time"
                    :class="{ 'is-invalid': item.errors.has('time') }"></date-picker>
                <has-error :form="item" field="text"/>
            </div>
        </div>
        <div 
            class="form-group l-row">
            <label for="select1" class="form-label l-col-12 l-col-2@md text-right">Select1</label>
            <div class="l-col-12 l-col-9@md">
                <v-select 
                    v-model="item.select1" 
                    placeholder="Select1..."
                    :options="options1"
                    name="select1"
                    class="form-control form-select"
                    :class="{ 'is-invalid': item.errors.has('select1') }"
                    >
                </v-select>
                <has-error :form="item" field="select1"/>
            </div>
        </div>
        <div 
            class="form-group l-row">
            <label for="select2" class="form-label l-col-12 l-col-2@md text-right">Select2</label>
            <div class="l-col-12 l-col-9@md">
                <v-select 
                    v-model="item.select2" 
                    placeholder="Select2..."
                    :options="options2"
                    name="select2"
                    class="form-control"
                    :class="{ 'is-invalid': item.errors.has('select2') }"
                    >
                </v-select>
                <has-error :form="item" field="select2"/>
            </div>
        </div>
        <div class="form-group l-row" v-if="item.id == null">
            <label for="file" class="form-label l-col-12 l-col-2@md text-right">File</label>
            <div class="l-col-12 l-col-9@md">
                <input
                    type="file"
                    class="form-input"
                    id="file"
                    name="file"
                    @change="processFile($event)"
                    :class="{ 'is-invalid': item.errors.has('file') }"
                    >
                <has-error :form="item" field="file"/>
            </div>
        </div>
        <div class="form-group l-row">
            <div class="col-md-7 offset-md-3 d-flex">
                <!-- Submit Button -->
                <v-button :loading="item.busy" class="btn btn--primary">
                    {{ $t('Save') }}
                </v-button>
                <router-link :to="{ name: 'items.list' }" class="btn">
                    Cancel
                </router-link>
            </div>
        </div>
	</form>
</template>

<script>
    export default {
    	props: {
            item: {
                type: Object,
                required: true
            },
        },
    	data() {
            var vm = this;

    		return {
                options1: ['Apple', 'Banana', 'Tomato'],
                options2: ['Dog', 'Elephant', 'Cat'],
                dateOpts: {
                    onChange: function(selectedDates, dateStr, instance) {
                        vm.item.date = dateStr
                    }
                },
                timeOpts: {
                    noCalendar: true,
                    dateFormat: "H:i",
                    onChange: function(selectedDates, dateStr, instance) {
                        vm.item.time = dateStr
                    }
                }
    		}
    	},
        methods: {
            submit(e) {
                e.preventDefault();
                this.$parent.$emit('submitted');
            },
            processFile(event) {
                this.item.file = event.target.files[0]
            }
        }
    }
</script>

<style type="text/css">
    .v-select {
        padding: 0 6px;
    }
    .v-select .dropdown-toggle {
        border: none;
    }
</style>