<template>
    <v-container>
        <v-row class="text-center">
            <h2 class="atext valentime">
                ValenTime
            </h2>
            <h3 class="atext explore">
                Explore
            </h3>
            <button @click="toggleSearch">
                <img class="atext search" src="../assets/search.svg" alt="">
            </button>
            <p class="atext header2">
                Memorable Valentine Time
            </p>
        </v-row>
        <v-row>
            <img src="../assets/post1.png" alt="post1" class="atext post1">
            <img src="../assets/post2.png" alt="post2" class="atext post2" @click="$emit('toPost')">
            <img src="../assets/post3.png" alt="post3" class="atext post3">
            <img src="../assets/post4.png" alt="post4" class="atext post4">
            <img src="../assets/post5.png" alt="post5" class="atext post5">
            <img src="../assets/post6.png" alt="post6" class="atext post6">
        </v-row>

        <v-row class="menubar text-center">
            <button class="exploremenudiv active">
                <img class="atext exploremenu" src="../assets/explore-main.svg" alt="explore">
            </button>
            <button class="addpostmenudiv">
                <img class="atext addpostmenu" src="../assets/addpost.svg" alt="addpost">
            </button>
            <button @click="$emit('toProfile')" class="profilemenudiv">
                <img class="atext profilemenu" src="../assets/profile-main.svg" alt="profile">
            </button>
        </v-row>

        <div class="searchdiv" :style="searchDisplay">
            <h3 class="explore search">
                Search & Filter
            </h3>
            <v-text-field
                label="Search"
                hide-details="auto"
                outlined
                single-line
                dense
            ></v-text-field>
            <v-switch
                v-model="couple"
                inset
                :label="`Couple Moments`"
                hide-details="true"
            ></v-switch>
            <v-switch
                v-model="gift"
                inset
                :label="`Gifts From Partner`"
                hide-details="true"
            ></v-switch>
        </div>

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
        name: 'Homepage',

        data: () => ({
            searchDisplay: {
                display: 'none'
            },
            couple: false,
            gift: false
        }),
        
        methods: {
            toggleSearch: function(){
                if (this.searchDisplay.display == 'none') {
                    this.searchDisplay.display = 'block'
                }else if(this.searchDisplay.display == 'block') {
                    this.searchDisplay.display = 'none'
                }
            },
            changeView: function(page){
                this.$parent.changeView(page);
            }
        }
    }
</script>