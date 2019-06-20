<template>
  <div id="app" @touchmove.prevent>
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
import mHeader from 'components/m-header/m-header.vue'
import Player from 'components/player/player'
import Tab from 'components/tab/tab'

export default {
  name: 'App',
  components: {
    mHeader,
    Player,
    Tab
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
