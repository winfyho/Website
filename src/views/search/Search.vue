<template>
    <div class="search">
        <ul>
            <li v-for="item in results">
                <span>{{item.path}}</span>
                <span v-for="title in item.title">{{title}}</span>
            </li>
        </ul>

    </div>


</template>

<script>


    export default {
        name: "Search",
        components: {

        },
        props:["results"],
        data() {
            return {

            }
        },
        created() {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>