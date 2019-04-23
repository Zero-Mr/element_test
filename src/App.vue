<template>
  <div id="app">
    <router-view/>
    <animation></animation>
    <zoom></zoom>
    <collapse></collapse>
    <Layout></Layout>
    <Container></Container>
    <icon></icon>
    <Button></Button>
  </div>
</template>

<script>
import animation from '@/components/page/TransitionAnimation'
import zoom from '@/components/page/zoom'
import collapse from '@/components/page/collapse'
import Layout from '@/components/page/Layout'
import Container from '@/components/page/Container'
import icon from '@/components/page/icon'
import Button from '@/components/page/Button'
export default {
  name: 'App',
  components:{
    animation,
    zoom,
    collapse,
    Layout,
    Container,
    icon,
    Button
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
