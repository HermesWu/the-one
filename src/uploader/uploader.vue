<template>
    <div class="t-uploader">
        <div @click="onClickUploader">
            <slot></slot>
        </div>
        <div class="temp" ref="temp"></div>
    </div>

</template>
<script>
    export default {
      name: 'TheOnenUploader',
      props: {
        name: {
          type: String,
          require: true
        },
        methods: {
          type: String,
          default: 'POST'
        },
        action: {
          type: String,
          require: true
        }
      },
      data(){
        return {

        }
      },
      methods: {
        onClickUploader() {
          let input = document.createElement('input')
          input.type = 'file'
          this.$refs.temp.append(input)
          input.addEventListener('change', () => {
            let file = input.files[0]
            input.remove()
            this.uploadToServer(file)
          })
          input.click()
        },
        uploadToServer(file) {
          let formData = new FormData();
          formData.append(this.name, file);

          var xhr = new XMLHttpRequest()
          xhr.open(this.methods, this.action)
          xhr.onload = function() {
            console.log(xhr.response)
          }
          xhr.send(formData)
        }
      }
    }
</script>
<style scoped type="text/scss" lang="scss">
    .t-uploader{
        .temp{
            width: 0;
            height: 0;
            overflow: hidden;
        }
    }
</style>