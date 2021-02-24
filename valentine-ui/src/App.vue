<template>
  <v-app>
    <v-main v-if="activeScreen == 'Homepage'">
        <Homepage @toPost="toPost('Homepage')" @toProfile="changeView('Profile')"/>
    </v-main>
    <v-main v-else-if="activeScreen == 'Post'">
        <Post :fromScreen="fromScreen" @toHome="changeView('Homepage')" @toProfile="changeView('Profile')"/>
    </v-main>
    <v-main v-else-if="activeScreen == 'Profile'">
        <Profile @toHome="changeView('Homepage')" @toPost="toPost('Profile')" @toProfile="changeView('Profile')"/>
    </v-main>
  </v-app>
</template>

<script>
import Homepage from './components/Homepage';
import Post from './components/Post';
import Profile from './components/Profile';

export default {
    name: 'App',

    components: {
        Homepage,
        Post,
        Profile
    },

    data: () => ({
        activeScreen: 'Homepage',
        fromScreen: 'Homepage'
    }),
    
    methods: {
        changeView: function(page){
            this.activeScreen = page;
        },
        toPost: function(page){
            this.activeScreen = 'Post';
            this.fromScreen = page;
        }
    }
};
</script>
<style>
#app{
    width: 414px;
    font-family: Inter;
}
img{
    cursor: pointer;
}
.atext{
    position: absolute;
    color:#fff;
    z-index: 999;
}
.valentime{
    left: 145px;
    top: 28px;
}
.profile{
    left: 165px;
    top: 28px;
}
.backbutton{
    left: 20px;
    top: 35px;
}
.explore{
    left: 22px;
    top: 75px;
    font-weight: 500;
}
.search{
    left: 88.89%;
    right: 5.31%;
    top: 75px;
    bottom: 87.28%;
}
.header2{
    left: 22px;
    top: 108px;
    font-weight: 300;
    font-size: 16px;
}

.post1{
    left: 3%;
    top: 153px;
}
.post2{
    right: 3%;
    top: 153px;
}
.post3{
    left: 3%;
    top: 485px;
}
.post4{
    right: 3%;
    top: 413px;
}
.post5{
    left: 3%;
    top: 712px;
}
.post6{
    right: 3%;
    top: 745px;
}
.settings{
    position: absolute;
    left: 82%;
    top: 75px;
}
.background{
    position: absolute;
    box-sizing: border-box;
}
.background-1{
    width: 163px;
    height: 163px;
    left: 221px;
    top: 106px;
    box-shadow: 0px 0px 174px 252px rgba(255, 83, 83, 0.4);
    background: rgba(255, 83, 83, 0.4);
    z-index: 5;
}
.background-2{
    width: 348px;
    height: 227px;
    left: -126px;
    top: 770.87px;

    box-shadow: 0px 0px 184px 167px rgba(255, 138, 0, 0.71);
    background: rgba(255, 138, 0, 0.70);
    z-index: 4;
}
.background-3{
    width: 227px;
    height: 391px;
    left: 175px;
    top: 555px;

    box-shadow: 0px 0px 198px 250px rgba(255, 55, 55, 0.76);
    background: rgba(255, 55, 55, 0.76);
    z-index: 3;
}
.background-4{
    width: 259.13px;
    height: 360px;
    left: -126px;
    top: 605.17px;

    box-shadow: 0px 0px 211px 258px rgba(255, 99, 202, 0.82);
    background: rgba(255, 99, 202, 0.82);
    z-index: 2;
}
.background-5{
    width: 163px;
    height: 349px;
    left: 72px;
    top: 111.38px;

    box-shadow: 0px 0px 198px 250px rgba(255, 243, 139, 0.96);
    background: rgba(255, 243, 139, 0.96);
    z-index: 1;
}
.menubar{
    width: 414px;
    height: 80px;
    background-color: white;
    position: fixed;
    bottom: 0;
    z-index: 999;
    box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.45);
}
.exploremenudiv{
    position: absolute;
    top: 17%;
    left: 17%;
    opacity: 60%;
    transition: 300ms all ease;
}
.addpostmenudiv{
    position: absolute;
    top: -15%;
    left: 45%;
}
.profilemenudiv{
    position: absolute;
    top: 17%;
    right: 27%;
    opacity: 60%;
}
.active{
    opacity: 100%;
}
.menutext{
    color: #FF6C8F;
    font-weight: 500;
}
.searchdiv{
    font-family: Inter;
    font-style: normal;
    position: absolute;
    width: 369px;
    /* height: 190px; */
    left: 22px;
    top: 108px;

    background: #FFFFFF;
    border-radius: 7px;
    z-index: 999;
    box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.34);

    padding: 7px 16px;
    padding-bottom: 20px;
    color: #3b3b3b;
}
.search{
    margin-bottom: 5px;
}
.post-body{
    position: absolute;
    width: 372px;
    height: 107%;
    left: 5%;
    top: 80px;

    background: #FFFFFF;
    border-radius: 7px;
    z-index: 999;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
}
.profile-body{
    position: absolute;
    width: 372px;
    height: 500px;
    left: 5%;
    top: 47%;

    background: #FFFFFF;
    border-radius: 7px;
    z-index: 999;
}
.ppicture{
    position: absolute;
    left: 102px;
    top: 73px;
}
.post-body-body1{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    width: 360px;
    height: 60px;
}
.post-body-body > .cnt{
    float: left;
}
.post-desc{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 273.5px;
    height: 44px;
    left: 68px;
    top: 8px;


    /* Inside Auto Layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 2px;
}
.post-desc-name{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 273.5px;
    height: 17px;
    left: 0px;
    top: 27px;

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 8px 0px;
}
.comments-like{
    margin: 0 22px;
    display: block;
}
.comments{
    margin: 22px;
}
.comment-img{
    margin-top: -15px;
    margin-left: -15px;
    height: 75px;
}
.comment{
    margin: 5px 0 -10px;
    display: flex;
    flex-direction: row;
}
</style>