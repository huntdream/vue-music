<template>
    <header class="top-nav">
        <router-link to="/me" active-class="active" class="nav-item">
            <span class="nav-icon me"></span>
        </router-link>
        <router-link exact to="/" active-class="active" class="nav-item">
            <span class="nav-icon music"></span>
        </router-link>
        <router-link to="/community" active-class="active" class="nav-item">
            <span class="nav-icon community"></span>
        </router-link>
    </header>
</template>

<script>
export default {
    name:'navbar'
}
</script>

<style lang="sass">
.top-nav 
    display: flex
    flex-direction: row
    justify-content: center
    height: 3rem
    line-height: 3rem
    background-color: #ff0000

.nav-item
    color: #fff
    font-weight: 500

    &:hover
        background-color: #d61002

    &.active
        background-color: #d61002
    
    .nav-icon
        display: block
        background-repeat: no-repeat
        background-position: center;
        background-size: 42%;
        width: 3rem
        height: 3rem
        padding: 0 1rem
        &.me
            background-image: url(../assets/me.png)

        &.community
            background-image: url(../assets/community.png)
        &.music
            background-image:url(../assets/music.png)
</style>
