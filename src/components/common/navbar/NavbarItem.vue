<template>
    <div class="navbar-item" >
        <span>{{route.title}}</span>
        <i></i>
    </div>
</template>


<script>
    export default {
        name: 'NavbarItem',
        props: {
            route: {
                type: Object,
                default: {
                    title: "导航",
                    url: "/"
                },

            },
            curIndex: {
                type: Number,
                default: 0
            }
        },
        components: {
        },
        methods: {
            
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .navbar-item {
        position: relative;
        box-sizing: border-box;
        height: 100%;
        cursor: pointer;
    }

    .navbar-item span {
        display: block;
        min-width: 40px;
        text-align: center;
        font-size: 16px;
        color: #333;
        font-weight: 500;
        line-height: 55px;
    }

    .navbar-item:hover span {
        color: var(--color-title)
    }

    .navbar-item i {
        display: block;
        width: 0px;
        height: 6px;
        border-radius: 2px;
        background: var(--color-background);
        position: absolute;
        left: 0;
        bottom: 0;
        transform: translateX(50%);
        transition: .3s ease-out;

    }
    .active span{
        color:var(--color-title)
    }
    .active i {
        transform: translateX(0%);

        display: block;
        width: 100%;
        
    }
</style>