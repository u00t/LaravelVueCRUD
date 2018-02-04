<template lang="html">
  <div>
    <slot></slot>
  </div>
</template>

<script>
  const Quill = require('quill')
  const toolbarOptions = [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'align': '' }, { 'align': 'center' }, { 'align': 'right' }],
    ['link', 'clean']                                         // remove formatting button
  ]

  export default {
    name: 'QuillEditor',
    props: {
      readonly: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: ''
      },
      options: {
        type: Object,
        default: () => { return {} }
      }
    },
    watch: {
      readonly (newVal) {
        if (this.quillJS) {
          if (newVal) {
            this.quillJS.disable()
          } else {
            this.quillJS.enable()
          }
        }
      }
    },
    mounted () {
      const options = Object.assign({
        placeholder: this.placeholder,
        theme: 'snow',
        readOnly: this.readonly,
        modules: {
          toolbar: toolbarOptions
        }
      }, this.options)
      this.quillJS = new Quill(this.$el, options)
    }
  }
</script>
