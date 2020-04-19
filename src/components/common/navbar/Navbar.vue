<template>
  <div class="navbar-wraper">
    <!-- <div v-for="(item,index) in navbars" class="navbar" @click="routeChange(item.url,index)">
      <NavbarItem :route="item" :class="{active:index===curNavIndex}"></NavbarItem>
    </div> -->
    <ul>
      <li v-for="(item,index) in navbars" class="navbar">
        <router-link class="router-link" :to="item.url">{{item.title}}</router-link>
      </li>
    </ul>

  </div>
</template>


<script>
  // import NavbarItem from "./NavbarItem.vue"
  export default {
    name: 'Navbar',
    components: {
      // NavbarItem
    },
    props: ["curNavIndex"],
    data() {
      return {
        navbars: [
          { title: "首页", url: "/home" },
          { title: "前端文档", url: "/study" },
          { title: "管理", url: "/admin" },
          { title: "足迹", url: "/profile" },
        ],
        // curNavIndex: 1
      }
    },

    methods: {
      routeChange(route, index) {

        if (this.$router.history.current.path !== route) {
          this.$router.push({
            path: route
          });
          this.$emit("navbar-click", index)
        }


      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar-wraper {
    height: 60px;

  }

  .navbar-wraper ul {
    display: flex;
    height: 100%;
  }

  .navbar-wraper ul li {
    position: relative;
  }
  .navbar-wraper ul li a{
    white-space: nowrap;
  }
  

  .navbar-wraper .navbar .router-link::after {
    content: '';
    display: block;
    height: 6px;
    width: 0;
    border-radius: 2px;
    background: var(--color-background);
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translateX(50%);
    transition: .3s ease-out;
  }

  .navbar-wraper .navbar .router-link-active::after {
    width: 100%;
    transform: translateX(0%);
  }

  .navbar-wraper .navbar {
    margin: 0 15px;
  }

  .navbar-wraper .navbar .router-link {
    display: block;
    height: 100%;
    line-height: 60px;
  }
</style>