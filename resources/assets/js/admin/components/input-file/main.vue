<template>
  <div class="form-flex form-file">
      <div class="form-input">{{fileNames.join(', ')}}</div>
      <input type="file"
        :name="name"
        :multiple="multiple"
        :readonly="readonly"
        :class="inputClass"
        @change="onChange">
      <span class="form-addon"><i class="form-file__icon"></i></span>
  </div>
</template>

<script>
  export default {
    name: 'InputFile',
    props: {
      name: String,
      multiple: Boolean,
      readonly: Boolean,
      inputClass: String
    },
    data() {
      return {
        fileNames: []
      }
    },
    methods: {
      onChange (e) {
        const files = e.target.files || e.dataTransfer.files
        if (!files.length) return

        for (let i = 0; i < files.length; i++) {
          this.fileNames.push(files[i].name)
        }
        this.$emit('change', e)
      }
    }
  }
</script>
