<template>
  <div class="pagebar">
    <ul v-if="totalpage > 1" class="page-bar">
      <li>
        <a @click="prev()">上一页</a>
      </li>
      <li v-for="page in pages" :class="{cur: cur == page}" @click="topage(page)"><a>{{page}}</a></li>
      <li>
        <a @click="next()">下一页</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'pagebar',
  data () {
    return {
    	totalpage: 10,
      cur: 1
    }
  },
  computed: {
    pages() {
      let s = 0;
      let arr = [];
      while(s < this.totalpage){
        s ++;
        arr.push(s);
      }
      return arr
    }
  },
  methods: {
    prev() {
      this.cur --;
    },
    next() {
      this.cur ++;
    },
    topage(i) {
      this.cur = i;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>

  .page-bar li{
    list-style: none;
    display: inline-block;
    margin-right: 10px;
  }
  .page-bar li.cur a{
    color: red;
  }
</style>
