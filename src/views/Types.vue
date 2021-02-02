<template>
    <!-- <div class="types">
        <div class="type">
            <div>
                <div class="type-body">
                    <h3>Lorem Ipsum</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <a href="">
                        Read more
                    </a>
                </div>
                <div class="type-img">
                    <img
                        src="https://media.istockphoto.com/vectors/realistic-white-plastic-window-with-landscape-view-vector-id589110650"
                        alt=""
                    />
                </div>
            </div>
        </div>
        <div class="type">
            <div>
                <div class="type-img">
                    <img
                        src="https://www.sashwindowspecialist.co.uk/wp-content/uploads/2019/02/Wooden-windows.jpg"
                        alt=""
                    />
                </div>
                <div class="type-body">
                    <h3>Lorem Ipsum</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <router-link :to="'types/view'">
                        Read more
                    </router-link>
                </div>
            </div>
        </div>
    </div> -->
    <b-container>
        <b-row class="type border rounded">
            <b-col sm="12" cols="12" md="5" class="body">
                <h3>
                    Title
                </h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <router-link :to="`types/zhopa`">
                    Read more
                </router-link>
            </b-col>
            <b-col sm="12" cols="12" md="7" class="img">
                <img
                    src="https://www.amgmontaza.lv/wp-content/uploads/2016/07/aluminijs-logi-2.jpg"
                    alt="Photo"
                />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {};
</script>

<style>
.type {
    height: 500px !important;
}

.body {
    display: flex;
    flex-direction: column;
}

.body > * {
    width: 100%;
}

.body h3,
.body a {
    text-align: center;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.body p {
    height: 80%;
    padding: 20px 0;
    margin: 0;
}

.img {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 100% !important;
    padding: 0;
    margin: 0;
}

.img img {
    min-width: 100%;
    min-height: 100%;
    /* min-width: 80%; */
}

/* .test {
    border: solid;
}

.types {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.type {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
    margin-bottom: 10px;
}

.type:last-child {
    margin-bottom: 0;
}
.type > div {
    width: 80%;
    height: 100%;
    display: flex;
}

.type:nth-child(2n-1) {
    background: #f0f2f5;
}

.type-img {
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.type-img img {
    min-width: 100%;
}

.type-body {
    width: 55%;
    display: flex;
    flex-direction: column;
}
.type-body h3 {
    height: 10%;
    text-align: center;
    padding: 10px;
}

.type-body p {
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    margin: 0 20px;
    text-align: left;
}

.type-body a {
    height: 10%;
    width: 100%;
    text-align: center;
}

.type-body h3 {
    width: 100%;
    text-align: center;
    padding: 10px 0;
} */
</style>
