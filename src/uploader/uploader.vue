<template>
    <div class="t-uploader">
        <div @click="onClickUploader">
            <slot></slot>
        </div>
        <div class="temp" ref="temp">

        </div>
        <ol>
            <li v-for="file in fileList" :key="file.name">
                <img :src="file.url" width="100" height="100" alt="">
                {{ file.name }}
            </li>
        </ol>
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
        },
        fileList: {
          type: Array,
          default: () => []
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
            let file = input.files[0]
            this.uploadFile(file)
            input.remove()
          })
          input.click()
        },
        createInput(){
          let input = document.createElement('input')
          input.type = 'file'
          this.$refs.temp.append(input)
          return input
        },
        uploadFile(file) {
          let {size, type, name} = file
          let formData = new FormData();
          formData.append(this.name, file);
          this.doUploadFile(formData, (response)=>{
            let url = this.parseResponse(response)
            while(this.fileList.filter(f => f.name === name).length > 0){
              let dotIndex = name.lastIndexOf('.')
              let nameWidthoutExtension = name.substring(0, dotIndex)
              let extension = name.substring(dotIndex)
              name = nameWidthoutExtension + '(1)' + extension
            }
            this.$emit('update:fileList', [...this.fileList, { name, size, type, url}])
          })

        },
        doUploadFile(formData, callback){
          var xhr = new XMLHttpRequest()
          xhr.open(this.methods, this.action)
          xhr.onload = () => {
            callback(xhr.response)
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