<template>
	<form @submit.pervent="submit" no-validate v-cloak>
		<div 
            class="form-group row">
			<label for="text" class="col-3 col-form-label text-md-right">Text</label>
			<div class="col-7">
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
            class="form-group row">
            <label for="date" class="col-3 col-form-label text-md-right">Date</label>
            <div class="col-7">
                <input
                    v-model="item.date"
                    type="date"
                    class="form-control"
                    id="date"
                    name="date"
                    placeholder="Date..."
                    :class="{ 'is-invalid': item.errors.has('date') }"
                    >
                <has-error :form="item" field="date"/>
            </div>
        </div>
        <div 
            class="form-group row">
            <label for="time" class="col-3 col-form-label text-md-right">Time</label>
            <div class="col-7">
                <input
                    v-model="item.time"
                    type="time"
                    class="form-control"
                    id="time"
                    name="time"
                    placeholder="Time..."
                    :class="{ 'is-invalid': item.errors.has('time') }"
                    >
                <has-error :form="item" field="text"/>
            </div>
        </div>
        <div 
            class="form-group row">
            <label for="select1" class="col-3 col-form-label text-md-right">Select1</label>
            <div class="col-7">
                <v-select 
                    v-model="item.select1" 
                    placeholder="Select1..."
                    :options="options1">
                </v-select>
                <has-error :form="item" field="select1"/>
            </div>
        </div>
        <div 
            class="form-group row">
            <label for="select2" class="col-3 col-form-label text-md-right">Select2</label>
            <div class="col-7">
                <v-select 
                    v-model="item.select2" 
                    placeholder="Select2..."
                    :options="options2">
                </v-select>
                <has-error :form="item" field="select2"/>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-md-7 offset-md-3 d-flex">
                <!-- Submit Button -->
                <v-button :loading="item.busy">
                    {{ $t('Save') }}
                </v-button>
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
    		return {
                options1: ['Apple', 'Banana', 'Tomato'],
                options2: ['Dog', 'Elephant', 'Cat']
    		}
    	},
        methods: {
            submit(e) {
                e.preventDefault();
                this.$parent.$emit('submitted');
            },
        },
        events: {
            'formErrors'(errors) {
                this.item.errors = errors;
            },
        }
    }
</script>