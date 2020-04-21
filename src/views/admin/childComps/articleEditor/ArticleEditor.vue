<template>
    <div class="article-editor-mask" @click.self="close">
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
                    <li v-for="tag in tags" @click="removeTag(tag)">{{tag}}</li>
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
                <button class="submit update" @click="updateArticle">更新文章</button>

            </div>

        </div>
    </div>

</template>

<script>

    import { request } from "network/request.js"
    import { _postArticle, _updateArticle } from "network/article.js"

    import { ArticleModel } from "../../../../mymodel/ArticleModel.js"
    export default {
        name: "ArticleEditor",
        props: {
            article: {
                type: Object,
                default: null
            }
        },
        watch: {
            article(item) {
                console.log("edit", item)
                this.url = item.url
                this.title = item.title
                this.time = item.time
                this.topic = item.topic
                this.tags = item.tags
                this.content = item.content
                this.pre_img = item.pre_img
            }
        },

        data() {
            return {
                url: "/notes/分类/标题.md",
                title: "输入标题",
                time: new Date().getTime(),
                topic: "",
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
            close(){
                console.log("close")
                this.$emit('close')
            },
            postArticle() {
                if (!this.topic) {
                    alert("禁止发布")
                    return
                }
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
                _postArticle(art).then(res => {
                    this.$emit('close')
                    this.$toast.showToast({title:'发布成功'})
                    this.$emit('post')
                    
                })

            },
            updateArticle() {
                console.log(this.article)

                let art = new ArticleModel({
                    url: this.url,
                    title: this.title,
                    time: this.time,
                    topic: this.topic,
                    tags: this.tags,
                    pre_img: this.pre_img,

                    content: this.content,

                    body: this.article.body,
                    views: this.article.views,
                    likes: this.article.likes,
                    likers: this.article.likers,
                    comments: this.article.comments,
                    collects: this.article.collects,
                })
                // console.log("更新文章",art)
                art._id = this.article._id
                _updateArticle(art)
                    .then(res => {
                        if (res.success) {
                            this.$toast.showToast({
                                title: "更新成功"
                            })
                        }
                    })
            },
            addTag(e) {
                // console.log(this.tagName)
                this.tags.push(this.tagName)
                this.tagName = ''
            },
            removeTag(tag) {
                let tags = this.tags.filter(i => {
                    return i !== tag
                })
                this.tags = tags
            }
        },
        created() {

        },
    }
</script>

<style scoped>
    .article-editor-mask{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, .6);
        z-index: 9;
    }
    .article-editor {
        position: absolute;
        left: 50%;
        transform:translateX(-50%);
        top: 30px;
        width: 550px;
        box-sizing: border-box;
        padding: 20px 60px;
        padding-bottom: 40px;
        background: #fff;
        z-index: 10;
    }

    .article-editor .wraper h4 {
        margin: 0;
        font-size: 20px;
    }

    .article-editor .wraper section {
        display: flex;
        height: 55px;
        align-items: center;
        margin-top: 10px;
    }

    .article-editor .wraper section label {
        width: 80px;
        height: 100%;
        line-height: 57px;
    }

    .article-editor .wraper section input {
        flex: 1 1 auto;
        height: 35px;
        text-indent: 1em;
        border-radius: 12px;
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

    .article-editor .wraper .update {
        background: #f40;
        margin-left: 20px;
    }
</style>