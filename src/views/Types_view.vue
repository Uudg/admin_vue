<template>
    <div>{{ this.$route.params.link }}</div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            data: null,
        };
    },
    mounted() {
        axios.get("/jsons/type.json").then((response) => console.log(response));
    },
};
</script>

<style></style>
