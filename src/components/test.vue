<template>
  <div class="todolist">
  <h4>todolist</h4>
  <input type="text" v-model='todo' @keyup.enter="add()">
    <label class="tip" v-if='show'>{{tip}}</label>
    <ul>
    	<li v-for="(list,index) in todolist">
    		{{index}}---task:{{list}}
    		<a @click="del(index)">delete</a>
    	</li>
    </ul>
    <div>{{num}}task left</div>
   	<hr/>
    <h4>es6 forEach</h4>
    <code>
    	this.arr.forEach((item) => {
  			if(item.id == '2'){
  				item.active = true;
  			}
  		})
    </code>
    <hr/>
    <h4>study</h4>
  </div>
</template>

<script>
export default {
  name: 'product',
  data () {
    return {
    	todo: '',
      	todolist: [],
      	tip: '',
      	show: false,
      	arr: [
      		{
      			id:'1',
      			name:"njdcn"
      		},
      		{
      			id:'2',
      			name:"test"
      		}
      	]
    }
  },
  computed: {
  	num() {
  		return this.todolist.length;
  	}
  },
  methods: {
  	add(){
  		this.arr.forEach((item) => {
  			if(item.id == '2'){
  				item.active = true;
  			}
  		})
  		if(this.todo == '' || this.todo == null){
  			this.tip = '请输入内容';
  			this.show = true;
  		}else{
  			this.todolist.push(this.todo);
  			this.todo = '';
  			this.show = false;
  		}
  	},
  	del(i){
  		//vue2.0没有$remove的方法了
  		// 需要使用splice(index,num,additem)
  		this.todolist.splice(i,1);
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
	.tip{
		display: block;
		height: 30px;
	}
</style>
