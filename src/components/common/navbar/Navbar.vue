<template>
  <div class="navbar-wraper">
    <div v-for="(item,index) in navbars" class="navbar" @click="routeChange(item.url,index)">
      <NavbarItem :route="item" :class="{active:index===curNavIndex}"></NavbarItem>
    </div>
  </div>
</template>


<script>
  import NavbarItem from "./NavbarItem.vue"
  export default {
    name: 'Navbar',
    components: {
      NavbarItem
    },
    props:["curNavIndex"],
    data() {
      return {
        navbars: [
          // { title: "首页", url: "/search" },
          { title: "学习", url: "/study" },
          // { title: "组件", url: "/tools" },
          { title: "关于", url: "/about" },
        ],
        // curNavIndex: 1
      }
    },

    methods: {
      routeChange(route, index) {
        
        if (this.$router.history.current.path !== route) {
          this.$router.push({
            path:route
          });
          this.$emit("navbar-click",index)
        }


      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar-wraper {
    height: 60px;
    display: flex;
  }

  .navbar-wraper .navbar {
    margin: 0 15px;
  }
</style>