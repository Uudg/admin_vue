<template>
    <h1 :class="{ invisible: hidden }">
        {{ title }}
    </h1>
</template>

<script>
export default {
    // created() {
    //     let path = this.currentRoute.path;
    //     switch (path) {
    //         case "types/":
    //             path = "types";
    //             break;
    //     }
    //     if (this.$router.currentRoute.path.includes("zhopa")) {
    //         this.title = "Zhopa";
    //     }
    //     this.title = this.$router.currentRoute.name.toLowerCase();
    //     if (this.title === "home") {
    //         this.isHome = true;
    //     } else {
    //         this.isHome = false;
    //     }
    //     this.title = this.$t(this.navTitle.concat(this.title));
    //     document.title = this.title;
    // },
    created() {
        this.makeTitle();
    },
    name: "Title",
    data() {
        return {
            title: undefined,
            hidden: false,
            navTitle: "content.nav.",
            typesTitle: "Title",
        };
    },
    methods: {
        makeTitle() {
            console.log(this.$route.name);
            this.title = this.$route.name.toLowerCase();
            if (this.$te(this.navTitle.concat(this.title))) {
                this.title = this.$t(this.navTitle.concat(this.title));
                if (this.title === "Home") {
                    this.hidden = true;
                } else {
                    this.hidden = false;
                }
            } else {
                this.title =
                    this.$route.params.link.charAt(0).toUpperCase() +
                    this.$route.params.link.slice(1);
            }
            document.title = this.title;
        },
    },
    watch: {
        $route() {
            this.makeTitle();
        },
    },
};
</script>

<style>
h1 {
    width: 100%;
    text-align: center;
    padding: 10px;
    color: #000;
    position: relative;
}
.invisible {
    display: none !important;
}
</style>
