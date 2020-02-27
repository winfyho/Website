<template>
    <div class="search-bar">
        <input type="text" placeholder="搜索">
        <i>@</i>
    </div>


</template>

<script>
    export default {
        name: "",
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-bar{
    min-width: 300px;
    box-sizing: border-box;
    height: 40px;
    padding: 10px 10px;
    display: flex;
    background: #eee;
    border-radius: 10px;
}
.search-bar input{
    width: 100%;
    height: 100%;
    font-size: 16px;
    line-height: 20px;
}
.search-bar i{
    display: block;
    cursor: pointer;
}
</style>