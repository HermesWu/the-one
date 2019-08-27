<template>
    <div class="t-uploader">
        <div @click="onClickUploader">
            <slot></slot>
        </div>
        <div class="temp" ref="temp">

        </div>
        <ol>
            <li v-for="file in fileList" :key="file.name">
                <template v-if="file.status === 'uploading'">
                    loading...
                </template>
                <img :src="file.url" width="100" height="100" alt="">
                {{ file.name }}
                <button @click="onRemoveFile(file)">删除</button>
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
        onRemoveFile(file) {
            let answer = window.confirm('您确定删除这张图片么')
          if(answer){
            let copy = [...this.fileList]
            let index = copy.indexOf(file)
            copy.splice(index, 1)
            this.$emit('update:fileList', copy)
          }
        },
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
        uploadFile(rawfile) {
          let {size, type, name} = rawfile
          let newName = this.generateName(name)
          this.beforeUploadFile(rawfile, newName)
          let formData = new FormData();
          formData.append(this.name, rawfile);
          this.doUploadFile(formData, (response)=>{
            let url = this.parseResponse(response)
            this.afterUploadFile(newName, url)
          }, () => {
            this.uploadError(newName)
          })

        },
        doUploadFile(formData, success, fail){
          var xhr = new XMLHttpRequest()
          xhr.open(this.methods, this.action)
          xhr.onload = () => {
            if(Math.random() > 0.5){
              success(xhr.response)
            }else{
              fail()
            }

          }
          xhr.send(formData)
        },
        beforeUploadFile(rawfile, newName){
          let {name, size, type} = rawfile
          this.$emit('update:fileList', [...this.fileList, {name: newName, type, size, status:'uploading'}])
        },
        afterUploadFile(newName, url) {
          let file = this.fileList.filter(f => f.name === newName)[0]
          let index = this.fileList.indexOf(file)
          let copy = JSON.parse(JSON.stringify(file))
          copy.url = url
          copy.status = 'success'
          let fileListCopy = [...this.fileList]
          fileListCopy.splice(index, 1, copy)
          this.$emit('update:fileList', fileListCopy)
        },
        uploadError(newName){
          let file = this.fileList.filter(f => f.name === newName)[0]
          let index = this.fileList.indexOf(file)
          let copy = JSON.parse(JSON.stringify(file))
          copy.status = 'fail'
          let fileListCopy = [...this.fileList]
          fileListCopy.splice(index, 1, copy)
          this.$emit('update:fileList', fileListCopy)
        },
        generateName(name){
          while(this.fileList.filter(f => f.name === name).length > 0){
            let dotIndex = name.lastIndexOf('.')
            let nameWidthoutExtension = name.substring(0, dotIndex)
            let extension = name.substring(dotIndex)
            name = nameWidthoutExtension + '(1)' + extension
          }
          return name
        },

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