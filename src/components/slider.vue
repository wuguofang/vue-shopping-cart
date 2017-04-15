<template>
  <div class="slide">
    <ul>
      <li v-for="(slide,index) in slides" :class="{active : index == activeindex}">
        <img :src="slide"/>
      </li>
    </ul>
    <div class="btn">
       <a @click="prev()">上一张</a>
       <a @click="next()">下一张</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slide',
  data () {
    return {
    	slides: [
        'http://p6.zbjimg.com//task/2017-01/17/theme/587dd07a0581a.jpg',
        'http://p6.zbjimg.com//task/2016-12/28/theme/5863281ac1fde.jpg',
        'http://p6.zbjimg.com//task/2016-12/28/theme/5863705b8e6f1.jpg'
      ],
      activeindex: 0,
      inter:''
    }
  },
  created: function(){
    this.autoplay();
  },
  methods: {
    autoplay(){
      var vm = this;
      this.inter = setInterval(() => {
        vm.go('next');
      },3000)
    },
    next(){
      clearInterval(this.inter);
      this.go('next')
      this.autoplay();
    },
    prev(){
      clearInterval(this.inter);
      this.go('prev');
      this.autoplay();
    },
    go(type){
      let l = this.slides.length - 1;
      if(type == "next"){
        if(this.activeindex >= l){
          this.activeindex = 0;
        }else{
          this.activeindex ++;
        }
      }else if(type == "prev"){
        if(this.activeindex == 0){
          this.activeindex = l;
        }else{
          this.activeindex --;
        }
      } 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
.slide ul{
  list-style: none;
  width: 100%;
  position: relative;
  display: inline-block;
}
.slide li{
  display: block;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all 1s ease-out;
}
.slide img{
  width: 100%;
  display: inline-block;
}
.slide li.active{
  opacity: 1;
}
.btn{
  margin-top: 200px;
}
</style>
