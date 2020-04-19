<template>
  <div class="sign-wraper" v-if="show">


    <div class="sign sign-in sign-out">
      <span class="btn-close" @click="closeEditor">关闭</span>

      <div class="sign-header">
        <button class="btn-switch switch-mode" :class="{active:mode==='login'}"
          @click="switchMode('login')">账户登录</button>
        <button class="btn-switch switch-mode" :class="{active:mode==='registe'}"
          @click="switchMode('registe')">注册账户</button>

      </div>

      <section>
        <label for="">邮箱</label>
        <input v-model="username" type="text" placeholder="输入邮箱" required>
      </section>

      <section>
        <label for="">密码</label>
        <input v-model="password" type="text" placeholder="输入密码" required>
      </section>

      <section class="modif">
        <label for="">验证码</label>
        <input v-model="modifCode" type="text" required>
        <a class="code">{{code}}</a>

      </section>

      <section class="submit">
        <button v-if="mode === 'login'" class="btn-submit" @click="login">登录</button>

        <button v-else class="btn-submit btn-registe" @click="registe">注册</button>
      </section>


    </div>

  </div>


</template>

<script>
  import { request } from "network/request.js"
  import { getLocalStorage, setLocalStorage } from "storage/localStorage.js"
  export default {
    name: "LoginEditor",
    props: {
      show: {
        type: Boolean,
        default: false
      },

    },
    computed: {
      title() {
        return this.mode === 'login' ? '账户登录' : '注册账户'
      },
      code() {
        return (Math.random() * 100000000).toString().slice(0, 4)
      }
    },
    data() {
      return {
        username: "",
        password: "",
        modifCode: "",
        mode: 'login'
      }
    },
    methods: {
      registe() {
        console.log("注册", this.username, this.password)
        request({
          method: "POST",
          url: "/registe",
          data: {
            username: this.username,
            password: this.password,
          }
        }).then(res => {
          console.log(res)

          if (res.isRegiste) {
            alert("该账号已经被注册")
          } else {
            if (res.success) {
              alert("注册成功")
            }
          }
        })

      },
      login() {
        console.log(getLocalStorage, setLocalStorage)

        if (this.modifCode !== this.code) {
          alert("验证码错误")
        } else if (!this.username || !this.password) {
          alert("用户名和密码不能为空")
        }
        else {
          console.log("登陆", this.username, this.password, request)
          request({
            method: "get",
            url: `/login?username=${this.username}&password=${this.password}`
          })
            .then(res => {
                console.log(res)

                if (res.success) {
                  this.$emit("sign", res.user)
                  setLocalStorage('user', res.user)
                  alert("登陆成功")
                } else {
                  alert("登陆失败")
                }
            })
            .catch(err => {
                alert("服务器繁忙")
            })
        }

      },
      closeEditor() {
        this.$emit("switch", false)
      },
      switchMode(mode) {
        this.mode = mode
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sign-wraper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 5000;
  }

  .sign .btn-close {
    position: absolute;
    display: block;
    background: rgba(65, 184, 131, .7);
    color: #fff;
    opacity: 0.8;
    top: -55px;
    right: 10px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
  }

  .sign {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    background: #fff;
    width: 350px;
    height: 350px;
    padding: 30px;
    border: 1px solid #aaa;
    border-radius: 16px;
  }

  .sign .sign-header {
    margin-bottom: 30px;
    display: flex;
    border-bottom: 1px solid #eee;

  }

  .sign .sign-header .btn-switch {
    flex: 1 1 auto;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    color: #999;
    background: transparent;
  }

  .sign .sign-header .active {
    color: var(--color-title);

  }

  .sign section {
    width: 100%;
    display: flex;
    margin-bottom: 25px;
  }

  .sign section label {
    min-width: 70px;
    line-height: 46px;
    display: block;
  }

  .sign section input {
    text-indent: 1em;
    font-size: 16px;
    flex: 1 1 auto;
    height: 46px;
    padding: 15px 0;
    box-sizing: border-box;
    border-radius: 16px;
    border: 1px solid #555;
  }

  .sign .submit {
    text-align: center;
  }

  .sign .btn-submit {
    padding: 10px 20px;
    cursor: pointer;
    margin: 0 auto;
  }

  .sign .btn-registe {
    width: 70%;
    background: #fff;
    color: var(--color-title);
    border: 1px solid var(--color-title);
  }

  .sign .modif input {
    flex: 0 0 auto;
    width: 120px;
    border-radius: 0px;
    /* margin-left: 20px; */
  }

  .sign .modif .code {
    width: 120px;
    line-height: 46px;
    color: rgb(208, 13, 226);
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 4px;
    background: #eee;
    text-align: center;
    margin-left: 30px;
  }
</style>