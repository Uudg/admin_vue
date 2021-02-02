<template>
    <div class="locale-changer">
        <a
            v-for="(lang, i) in $i18n.availableLocales"
            :key="`Lang${i}`"
            href="#"
            @click.prevent="setLocale(lang, i)"
            :class="{ active: active === lang }"
        >
            {{ lang }}
        </a>
    </div>
</template>

<script>
export default {
    created() {
        this.checkActive();
    },
    name: "LocaleChanger",
    data: function() {
        return {
            active: undefined,
        };
    },
    methods: {
        setLocale(locale) {
            this.$i18n.locale = locale;
            this.checkActive();
            this.$router.push({
                params: {
                    lang: locale,
                },
            });
        },

        checkActive() {
            this.active = this.$i18n.locale;
        },
    },
};
</script>

<style>
.locale-changer {
    font-weight: 500;
    margin-left: auto;
    display: flex;
    align-items: center;
}

.locale-changer a:hover {
    text-shadow: 0 0 3px;
}

.locale-changer a {
    transition: 0.2s;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    position: relative;
    border-radius: 4px;
    padding: 2px;
    margin: 2px;
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.locale-changer a.active {
    background: #fff;
    color: var(--primary-color);
    cursor: default;
    pointer-events: none;
}
</style>
