<template>
  <div class="cart">
    <div class="cart-title">购物车<span class="fr">总计：{{ totalmoney }}</span></div>
    <ul class="cart-info">
    	<li v-for="cartinfo in cart" class="m10">
    		<span>{{cartinfo.name}}</span>
    		<span class="detail">{{cartinfo.color}} {{cartinfo.type}}</span>
    		<span class="fr mr10">{{cartinfo.price}}</span>
    	</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cart',
  data () {
    return {
      
    }
  },
  computed: {
  	cart() {
  		return this.$store.getters.cart
  	},
  	totalmoney() {
  		var cartarr = this.$store.getters.cart;
  		var totalmoney = 0;
  		cartarr.forEach(({price}) => totalmoney += price);
  		return totalmoney
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mr10{
	margin-right: 10px;
}
.fr{
	float: right;
}
.m10{
	margin: 10px;
}
.cart-title{
    color: #a94442;
    background-color: #f2dede;
    border-color: #ebccd1;
	padding: 10px 15px;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}
.cart-info{
	list-style: none;
	margin-top: 30px;
}
.detail{
    display: inline;
    padding: .2em .6em .3em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25em;
    background-color: #5cb85c;
}
</style>
