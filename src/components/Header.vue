<template>
    <div class="header" :class="{ hidden: hidden }">
        <router-link :to="`/${$i18n.locale}`" class="logo">
            Logo
        </router-link>
        <div class="contacts">
            <a id="phone" href="tel:" class="text-decoration-none">
                +37122334455
            </a>
            <a id="mail" href="mail:to" class="text-decoration-none">
                mail@mail.com
            </a>
        </div>
        <div id="nav" class="nav">
            <router-link :to="`/${$i18n.locale}`">{{
                $t("content.nav.home")
            }}</router-link>
            <router-link :to="`/${$i18n.locale}/about`">{{
                $t("content.nav.about")
            }}</router-link>
            <router-link :to="`/${$i18n.locale}/types`">{{
                $t("content.nav.types")
            }}</router-link>
            <router-link :to="`/${$i18n.locale}/partners`">{{
                $t("content.nav.partners")
            }}</router-link>
            <router-link :to="`/${$i18n.locale}/photos`">{{
                $t("content.nav.photos")
            }}</router-link>
            <router-link :to="`/${$i18n.locale}/contacts`">{{
                $t("content.nav.contacts")
            }}</router-link>
        </div>
        <localeChanger />
    </div>
</template>

<script>
import localeChanger from "@/components/layouts/LocaleChanger";

export default {
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    name: "Header",
    data() {
        return {
            scrollY: 0,
            hidden: false,
        };
    },
    components: {
        localeChanger,
    },
    methods: {
        handleScroll() {
            if (this.scrollY < window.scrollY) {
                this.hidden = true;
            }
            if (this.scrollY > window.scrollY) {
                this.hidden = false;
            }
            this.scrollY = window.scrollY;
        },
    },
};
</script>

<style>
.header {
    background: var(--primary-color);
    display: flex;
    flex-direction: row;
    color: #fff;
    height: 80px;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: 0.5s;
}

.header:hover {
    opacity: 1;
}

.header > * {
    height: 100%;
    display: flex;
}

.contacts {
    width: auto;
    letter-spacing: 0.01em;
    margin-right: auto;
    flex-wrap: wrap;
}

.nav a,
.contacts a {
    color: #fff;
    text-decoration: none;
    padding: 0 10px;
    font-weight: 500;
    transition: 0.5s;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    flex: 1 0 0;
    white-space: nowrap;
}

.nav {
    width: auto;
    margin-left: auto;
    justify-content: center;
}

.router-link-active {
    text-decoration: underline;
}

.logo {
    cursor: pointer;
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    padding: 0 60px;
    transition: 0.4s;
    margin-right: auto;
    color: #fff;
    text-decoration: none;
}

.nav a:hover,
.contacts a:hover,
.logo:hover {
    background: var(--second-color);
    color: #fff;
    text-decoration: none !important;
}

.hidden {
    opacity: 0.8;
}
</style>
