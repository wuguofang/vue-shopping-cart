<template>
  <div class="navbar">
    <ul class="nav nav-pills" v-bind:attr='msg'>
      <li><a>shopping cart</a></li>
      <li :class="{active: tab == '/product'}"><router-link to="/prodcut" active-class="active">iphone 10 plus</router-link></li>
      <li :class="{active: tab == '/cart'}"><router-link to="/cart" active-class="active">购物车<span class="badge">{{ num }}</span></router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
      ipt: ''
    }
  },
  computed: {
    tab() {
      return this.$route.path.split('#')[1]
    },
    num() {
      return this.$store.getters.cart.length
    }
  },
  //父组件向子组件传值
  props: ['msg']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-pills .active{
    color: #555;
    background-color: #e7e7e7;
}
</style>
