<template>
    <v-container>
        <v-row class="text-center" style="height: 25%">
            <h2 class="atext profile">
                Profile
            </h2>
            <img class="atext settings" src="../assets/settings.svg" alt="Setting">
            <img class="atext ppicture" src="../assets/profile-picture.png" alt="Profile Picture">

            <div style="position: absolute;width: auto;height: 63px;left: 91px;top: 270px;z-index:99;">
                <h2 style="font-size: 30px">Steven Johnson</h2>
                <p>Photography is my passion</p>
            </div>

            <div style="background: white;width: 100%; height: 750px; z-index: 10; position: absolute; top: 25%"></div>
            <div>
                <div class="background background-1"></div>
                <div class="background background-5"></div>
            </div>
        </v-row>

        <div class="profile-body" @click="$emit('toPost')">
            <img src="../assets/post-screen.png" alt="Post">
            <div class="post-body-body1">
                <div class="cnt post-desc">
                    <p style="font-family: Inter;font-style: normal;font-weight: 500;font-size: 16px;margin: 0" class="cnt">Brother's Love</p>
                    <div class="profile-desc">
                        <p style="font-family: Inter;font-style: normal;font-weight: 200;font-size: 14px;color: #000000">
                            This is the photo of my brother with his...
                        </p>
                        <p style="font-weight: 200;font-size: 14px;color: #BDBDBD">8 hr ago</p>
                    </div>
                </div>
            </div>
        </div>

        <v-row class="menubar text-center">
            <button @click="$emit('toHome')" class="exploremenudiv">
                <img class="atext exploremenu" src="../assets/explore-main.svg" alt="explore">
            </button>
            <button class="addpostmenudiv">
                <img class="atext addpostmenu" src="../assets/addpost.svg" alt="addpost">
            </button>
            <button @click="$emit('toProfile')" class="profilemenudiv active">
                <img class="atext profilemenu" src="../assets/profile-main.svg" alt="profile">
            </button>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'Post',

        data: () => ({
            searchDisplay: {
                display: 'none'
            },
            couple: false,
            gift: false,
            liked: false,
            likeSource: '/img/like.1d7ca6e3.svg',
        }),
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
            }
        }
    }
</script>