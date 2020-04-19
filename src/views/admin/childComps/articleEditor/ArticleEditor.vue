<template>

    <div class="article-editor">
        <div class="wraper">
            <h4>添加文章</h4>

            <section>
                <label>路径</label>
                <input type="text" v-model="url">
            </section>

            <section>
                <label>标题</label>
                <input type="text" v-model="title">
            </section>

            <section>
                <label>时间</label>
                <input type="text" v-model="time">
            </section>

            <section>
                <label>分类</label>
                <input type="text" v-model="topic">
            </section>

            <section>
                <label>预览内容</label>
                <textarea name="" v-model="content"></textarea>

            </section>

            <section class="tags">
                <label>标签</label>
                <input type="text" v-model="tagName" @keyup.enter="addTag">

            </section>

            <ul class="tag-list">
                <li v-for="tag in tags">{{tag}}</li>
            </ul>

            <section>
                <label>缩略图</label>
                <input type="text" v-model="pre_img">

            </section>


            <!-- <section class="pre-img">
                <label>缩略图</label>

                <form action="http://127.0.0.1:3000/uploadimg" method="post" enctype="multipart/form-data">
                    <input type="file" name="file" id="file" value="" multiple="multiple" />
                    <input type="submit" value="提交" />
                </form>


            </section> -->


            <button class="submit" @click="postArticle">发表文章</button>

        </div>

    </div>
</template>

<script>

    import { request } from "network/request.js"
    import {_postArticle} from "network/article.js"

    import {ArticleModel} from "../../../../mymodel/ArticleModel.js"
    export default {
        name: "ArticleEditor",
        data() {
            return {
                url: "/notes/分类/标题.md",
                title: "输入标题",
                time: new Date().getTime(),
                topic: "es6",
                tagName: "js",
                tags: [
                    '前端'
                ],
                pre_img: "/images/notes/img.png",
                content: "预览内容",
                file: null
            }
        },
        methods: {
            // uploadImg() {
            //     let formData = new FormData()
            //     let inputDOM = this.$refs.inputer
            //     let imgFile = inputDOM.files[0]
            //     formData.append("pre_img", imgFile)
            //     console.log(imgFile, formData.getAll("pre_img"))
            //     uploadFile({
            //         url: '/uploadimg',
            //         file: formData
            //     }).then(res => {
            //         console.log("uploadimg success")

            //     }).catch(err => console.log(err)
            //     )


            // },
            postArticle() {
                let art = new ArticleModel({
                    url: this.url,
                    title: this.title,
                    time: this.time,
                    topic: this.topic,
                    tags: this.tags,
                    pre_img: this.pre_img,
                    content: this.content,
                })
                console.log(art)
                _postArticle(art)

            },
            addTag(e){
                // console.log(this.tagName)
                this.tags.push(this.tagName)
                this.tagName = ''
            }
        },
        created() {
            
        },
    }
</script>

<style scoped>
    .article-editor {
        width: 400px;
        /* height: 600px; */
        box-sizing: border-box;
        padding: 20px;
        box-shadow: 0 0 5px rgba(0, 0, 0, .4);
    }

    .article-editor .wraper h4 {
        margin: 0;
        font-size: 20px;
    }

    .article-editor .wraper section {
        display: flex;
        height: 60px;
        align-items: center;
        margin-top: 10px;
    }

    .article-editor .wraper section label {
        width: 80px;
        height: 100%;
        line-height: 57px;
    }

    .article-editor .wraper section input {
        height: 35px;
        text-indent: 1em;
        border-radius: 5px;
        border: 1px solid #888;
    }

    .article-editor .wraper section.tags input {
        width: 70px;
    }

    .article-editor .wraper .tag-list {
        padding-left: 80px;
        margin: 10px 0;
    }

    .article-editor .wraper .tag-list li {
        background: #ccc;
        display: inline-block;
        padding: 5px 10px;
        border-radius: 5px;
        margin-right: 10px;
    }

    .article-editor .wraper section.pre-img input[type="file"] {
        border: none;
        text-indent: 0;
    }

    .article-editor .wraper .submit {
        cursor: pointer;
        padding: 10px 15px;
        margin-top: 25px;
        border: none;
        color: #fff;
        background: var(--color-background);
    }
</style>