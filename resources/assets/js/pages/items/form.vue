<template>
	<form @submit.pervent="submit" class="form-horizontal" no-validate v-cloak>
		<div 
            class="form-group l-row">
			<label for="text" class="form-label l-col-12 l-col-3@md">Text</label>
			<div class="l-col-12 l-col-9@md">
				<input
                    v-model="item.text"
                    type="text"
                    class="form-input"
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
            <label for="date" class="form-label l-col-12 l-col-3@md">Date</label>
            <div class="l-col-12 l-col-9@md">
                <input
                    v-model="item.date"
                    type="date"
                    class="form-input"
                    id="date"
                    name="date"
                    placeholder="Date..."
                    :class="{ 'is-invalid': item.errors.has('date') }"
                    >
                <has-error :form="item" field="date"/>
            </div>
        </div>
        <div 
            class="form-group l-row">
            <label for="time" class="form-label l-col-12 l-col-3@md">Time</label>
            <div class="l-col-12 l-col-9@md">
                <input
                    v-model="item.time"
                    type="time"
                    class="form-input"
                    id="time"
                    name="time"
                    placeholder="Time..."
                    :class="{ 'is-invalid': item.errors.has('time') }"
                    >
                <has-error :form="item" field="text"/>
            </div>
        </div>
        <div 
            class="form-group l-row">
            <label for="select1" class="form-label l-col-12 l-col-3@md">Select1</label>
            <div class="l-col-12 l-col-9@md">
                <v-select 
                    v-model="item.select1" 
                    placeholder="Select1..."
                    :options="options1">
                </v-select>
                <has-error :form="item" field="select1"/>
            </div>
        </div>
        <div 
            class="form-group l-row">
            <label for="select2" class="form-label l-col-12 l-col-3@md">Select2</label>
            <div class="l-col-12 l-col-9@md">
                <v-select 
                    v-model="item.select2" 
                    placeholder="Select2..."
                    :options="options2">
                </v-select>
                <has-error :form="item" field="select2"/>
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