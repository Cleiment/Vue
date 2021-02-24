<template>
    <v-container>
        <v-row class="text-center">
            <img class="atext backbutton" src="../assets/back-button.svg" alt="Back" @click="back()">
            <h2 class="atext valentime">
                ValenTime
            </h2>
        </v-row>

        <div class="post-body">
            <img src="../assets/post-screen.png" alt="Post">
            <div class="post-body-body1">
                <img class="cnt" src="../assets/profile1.png" alt="Profile">
                <div class="cnt post-desc">
                    <p style="font-family: Inter;font-style: normal;font-weight: 500;font-size: 16px;margin: 0" class="cnt">Brother's Love</p>
                    <div class="post-desc-name">
                        <p style="font-weight: 200;font-size: 14px;line-height: 17px;text-align: right;color: #BDBDBD;">Steven Johnson</p>
                        <p style="font-weight: 200;font-size: 14px;line-height: 17px;display: flex;align-items: center;text-align: right;color: #BDBDBD;margin-left: 105px;">8 hr ago</p>
                    </div>
                </div>
            </div>
            <div style="margin: 15px 22px 0;width: 329px;height: 95px;font-family: Inter;font-style: normal;font-weight: 200;font-size: 16px;line-height: 19px;color: #000000;z-index: 999">
                <p>
                    This is the photo of my brother with his wife. We went to a double date vacation to Bali.
                </p>
                <p>
                    I wish I can go to there again
                </p>
            </div>
            <div class="comments-like">
                <p style="float: right; margin-left: 5px; font-weight: 400;font-size: 16px;color: #8f8f8f;">1.7k</p>

                <img @click="toggleLike()" :src="likeSource" alt="like" style="float: right; margin-left: 10px">
                <!-- <img @click="toggleLike()" src="../assets/liked.svg" alt="like" style="float: right; margin-left: 10px"> -->

                <p style="float: right; margin-left: 5px; font-weight: 400;font-size: 16px;color: #8f8f8f;">2</p>
                <img src="../assets/comment-text.svg" alt="comments" style="float: right">
            </div>
            <div class="comments">
                <p style="font-weight: 400; margin: 0">Comments</p>
                <div class="comment-body">
                    <div class="comment">
                        <img class="comment-img" src="../assets/comment1.png" alt="profile">
                        <div>
                            <p style="color: #4F4F4F;font-size: 14px;font-weight: 600; margin: 0">Victoria Goldo Tin</p>
                            <p style="color: #333;font-size: 14px; margin: 0">I remember my lovely Valentime again</p>
                        </div>
                    </div>
                    <div class="comment">
                        <img class="comment-img" src="../assets/comment2.png" alt="profile">
                        <div>
                            <p style="color: #4F4F4F;font-size: 14px;font-weight: 600; margin: 0">Alicia Mardina</p>
                            <p style="color: #333;font-size: 14px; margin: 0">Hope that we can go there as well</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <v-row class="menubar text-center">
            <button @click="$emit('toHome')" class="exploremenudiv" :class="{ active: explore }">
                <img class="atext exploremenu" src="../assets/explore-main.svg" alt="explore">
            </button>
            <button class="addpostmenudiv">
                <img class="atext addpostmenu" src="../assets/addpost.svg" alt="addpost">
            </button>
            <button @click="$emit('toProfile')" class="profilemenudiv" :class="{ active: profile }">
                <img class="atext profilemenu" src="../assets/profile-main.svg" alt="profile">
            </button>
        </v-row>

        <div>
            <div class="background background-1"></div>
            <div class="background background-2"></div>
            <div class="background background-3"></div>
            <div class="background background-4"></div>
            <div class="background background-5"></div>
        </div>
    </v-container>
</template>

<script>
    export default {
        name: 'Post',
        props: ['fromScreen'],
        data: () => ({
            searchDisplay: {
                display: 'none'
            },
            couple: false,
            gift: false,
            liked: false,
            likeSource: '/img/like.1d7ca6e3.svg',
            explore: false,
            profile: false
        }),
        mounted: function () {
            if (this.$props.fromScreen == 'Homepage') {
                this.explore = true
                this.profile = false
            }
            else if (this.$props.fromScreen == 'Profile') {
                this.profile = true
                this.explore = false
            }
        },
        methods: {
            toggleScreen: function(screen){
                this.activeScreen = screen;
            },
            toggleLike: function(){
                if (this.liked) {
                    this.liked = false
                    this.likeSource = '/img/like.1d7ca6e3.svg'
                }
                else if (!this.liked) {
                    this.liked = true
                    this.likeSource = '/img/liked.b44b1bf7.svg'
                }
            },
            back: function(){
                if (this.$props.fromScreen == 'Homepage') {
                    this.$emit('toHome');
                }
                else if (this.$props.fromScreen == 'Profile') {
                    this.$emit('toProfile');
                }
            }
        }
    }
</script>