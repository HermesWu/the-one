<template>
    <div class="t-uploader">
        <div @click="onClickUploader">
            <slot></slot>
        </div>
        <div class="temp" ref="temp"></div>
        <div><img :src="imgSrc" alt=""></div>
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
        },
        parseResponse: {
          type: Function,
          required: true
        }
      },
      data(){
        return {
            imgSrc: 'about:blank'
        }
      },
      methods: {
        onClickUploader() {
          let input = this.createInput()
          input.addEventListener('change', () => {
            this.uploadFile(input)
          })
          input.click()
        },
        createInput(){
          let input = document.createElement('input')
          input.type = 'file'
          this.$refs.temp.append(input)
          return input
        },
        uploadFile(input) {
          let file = input.files[0]
          input.remove()
          let formData = new FormData();
          formData.append(this.name, file);
          this.doUploadFile(formData, (response)=>{
            this.imgSrc = this.parseResponse(response)
          })

        },
        doUploadFile(formData, callback){
          var xhr = new XMLHttpRequest()
          xhr.open(this.methods, this.action)
          xhr.onload = callback(xhr.response)
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