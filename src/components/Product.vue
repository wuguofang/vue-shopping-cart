<template>
  <div class="product">
    <div>{{ product.name }}</div>
    <div>描述： {{ product.desc }}</div>
    <div class="color-red">价格： ¥{{ product.price }}</div>
    <div><img v-bind:src="product.activeStyleUrl"/></div>
    <div>外观： 
      <ul class="itemlist clearfix">
        <li v-for="(styleurl, key) in product.style" @click="changestyle(key, styleurl)" :class="{active : product.activeStyleUrl == styleurl}">{{ key }}</li>
      </ul>
    </div>
    <div>存储容量： 
      <ul class="itemlist clearfix">
        <li v-for="(price, key) in product.storage"  @click="changePrice(key,price)" :class="{ active : product.price == price}">
          {{ key }}
        </li>
      </ul>
    </div>
    <div class="add-wrap">
      <a class="add-cart" :class="{active: isselected}" @click="addcart()">加入购物车</a>
    </div>
      <div>
        vue-resource demo
        <ul>
          <li v-for="list in lists">
            {{list.customerId}}
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'product',
  data () {
    return {
      url: 'http://211.149.193.19:8080/api/customers',
      listdata: []
    }
  },
  created: function(){
    this.getlist();
  },
  computed: {
    product() {
      return this.$store.getters.product
    },
    isselected() {
      return this.$store.getters.product.isselected
    },
    lists() {
      return this.listdata[0]
    }
  },
  methods: {
    changePrice(key,price){
      let param = {
        key,
        price
      };
      //dispatch只接受两个参数，一个type，一个自己传的，所以需要封装成一个对象。
      this.$store.dispatch('changeprice',param)
    },
    changestyle(key, styleurl){
      let param = {
        key,
        styleurl
      };
      this.$store.dispatch('changestyle',param)
    },
    addcart(){
      this.$store.dispatch('addcart')
    },
    getlist(){
      this.$http.get(this.url).then((response) => {
        //成功响应
        this.$set(this.listdata,0,response.body);
      },(response) => {
        //失败响应
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .color-red{
    color: #c0392b;
  }
  .itemlist li{
    float: left;
    list-style: none;
    margin-right: 4px;
    padding: 0 8px;
    border: 2px solid #eee;
  }
  .itemlist li.active{
    border: 2px solid #c0392b;
  }
  .product img{
    width: 250px;
    height: 260px;
  }
  .add-wrap{
    text-align: center;
  }
  .add-cart{
    color: #fff;
    background-color: #d9534f;
    border-color: #d43f3a;
    display: inline-block;
    padding: 6px 12px;
    margin-top: 20px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    opacity: .65;
  }
  .add-cart:hover{
    text-decoration: none;
  }
  .add-cart.active{
    opacity: 1;
  }
</style>
