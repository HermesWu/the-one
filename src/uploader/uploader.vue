<template>
    <div class="t-uploader">
        <div @click="onClickUploader">
            <slot></slot>
        </div>
        <div class="temp" ref="temp">

        </div>
        <ol class="t-uploader-list">
            <li v-for="file in fileList" :key="file.name" class="t-uploader-list-item">
                <template v-if="file.status === 'uploading'" >
                    <t-icon class="spin" name="loading"></t-icon>
                </template>
                <template v-else-if="file.status === 'success'">
                    <img class="t-uploader-image" :src="file.url" width="32" height="32" alt="">
                    {{file.name}}
                </template>
                <template v-else>
                    <img class="t-uploader-defaultImage t-uploader-image">
                    {{file.name}}
                </template>
                <t-button @click="onRemoveFile(file)" class="t-uploader-remove">x</t-button>
            </li>
        </ol>
    </div>

</template>
<script>
    import TButton from '../button/button'
    import TIcon from '../icon'
    export default {
      name: 'TheOnenUploader',
      components:{ TButton, TIcon},
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
        },
        sizeLimit: {
          type:Number
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
          this.$refs.temp.innerHTML = ''
          let input = document.createElement('input')
          input.type = 'file'
          this.$refs.temp.append(input)
          return input
        },
        uploadFile(rawfile) {
          let {size, type, name} = rawfile
          let newName = this.generateName(name)
          if(!this.beforeUploadFile(rawfile, newName)){ return }
          let formData = new FormData();
          formData.append(this.name, rawfile);
          this.doUploadFile(formData, (response)=>{
            let url = this.parseResponse(response)
            this.afterUploadFile(newName, url)
          }, (response, status) => {
            this.uploadError(newName)
            let error = ''
            if(status === 0){
              error = '网络无法连接'
            }else{
              error = response
            }
            this.$emit('error', error)
          })

        },
        doUploadFile(formData, success, fail){
          var xhr = new XMLHttpRequest()
          xhr.open(this.methods, this.action)
          xhr.onload = () => {
              success(xhr.response)
          }
          xhr.onerror = () => {
            fail(xhr, xhr.status)
          }
          xhr.send(formData)
        },
        beforeUploadFile(rawfile, newName){
          let {name, size, type} = rawfile
          if(size > this.sizeLimit){
            this.$emit('error', `文件不能大于${this.sizeLimit}字节`)
            return false
          }else{
            this.$emit('update:fileList', [...this.fileList, {name: newName, type, size, status:'uploading'}])
            return true
          }
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
    @import '../../styles/var';
    .t-uploader{
        .temp{
            width: 0;
            height: 0;
            overflow: hidden;
        }
        &-defaultImage{
            width: 32px;
            height: 32px;
        }
        &-image{
            margin-right: 5px;
        }
        &-list{
            > li{
                display: flex;
                align-items: center;
                border: 1px solid darken($grey, 10%);
                padding: 2px;
            }
            &-item{
                margin: 20px 0 ;
            }

        }
        &-remove{
            margin-left: auto;
        }
        .spin{
            @include spin;
        }
    }
</style>