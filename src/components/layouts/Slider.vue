<template>
    <div>
        <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="10000"
            controls
            indicators
            background="#ababab"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
        >
            <b-carousel-slide
                img-src="https://www.10wallpaper.com/wallpaper/1366x768/1808/Technology_sense_floor_glass_curtain_wall_construction_1366x768.jpg"
                caption="First slide"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            >
            </b-carousel-slide>
            <b-carousel-slide
                img-src="https://info.carbon-clear.com/hubfs/EcoAct/Images/pexels-photo-417278.jpg"
                caption="Second slide"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            >
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slide: 0,
            sliding: null,
        };
    },
    methods: {
        onSlideStart() {
            this.sliding = true;
        },
        onSlideEnd() {
            this.sliding = false;
        },
    },
};
</script>

<style>
.carousel-item img {
    height: calc(100vh - 80px) !important;
    width: 100vw;
}
.carousel-caption {
    background: rgba(51, 51, 51, 0.5);
    backdrop-filter: blur(4px);
}
</style>
