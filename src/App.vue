<template>
    <div id="app">
        <Header />
        <div class="main">
            <Title />
            <router-view></router-view>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Title from "./components/layouts/Title";

export default {
    name: "App",
    components: {
        Header,
        Footer,
        Title,
    },
};
</script>

<style>
:root {
    --primary-color: #3399ff;
    --second-color: #3366ff;
}

body,
html {
    margin: 0;
    padding: 0;
    /* width: 100vw; */
}

#app {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    font-family: "Ubuntu";
}

#app > * {
    width: 100%;
}

.main {
    min-height: calc(100vh - 80px);
}
</style>
