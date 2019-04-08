<template>
    <div class="zmiti-tab-ui" ref='page' :style='{height:viewH-133+"px",overflow:"hidden"}'>
        <ul  class="zmiti-tab-list" >
			<li>{{title}}</li>
            <li @click.prevent='toggleMenu(menu)'  v-for="(menu ,i ) in tabMenus " :key="i" :class="{'close':menu.close ,'active':menu.to ===$route.name && !menu.children,'zmiti-main-menu':menu.children && menu.children.length }">
				<!-- <router-link :to="menu.to"> {{menu.name}}</router-link> -->
				<div>{{menu.title}}</div>
				<ol :style="{height:menu.close ? 0:menu.children.length*36+'px'}" class='zmiti-tab-sub-menu' v-if='menu.children && menu.children.length'>
					<li @click.stop='refresh(i*menu.children.length+k)' v-for='(m,k) in menu.children' :key='k' :class="{'active':i*menu.children.length+k === tabIndex}">
						<div> {{m.title}}</div>
					</li>
				</ol>
            </li>
        </ul>
    </div>
</template>
<script>
	import './index.css';
	import Vue from 'vue';
	import IScroll from 'iscroll';
    export default {
		props:['obserable','refresh','menus','title','tabIndex'],
		name:'zmitiindex',
		data(){
			return{
				visible:false,
				meetname:'',
				imgs:window.imgs,
				viewH:window.innerHeight,
				tabMenus:[],
				formUser:{
					studentmame:'',
					nickname:'',
					mobile:'',
					telphone:'',
					email:'',
					sex:'',
					companyname:'',
					job:'',
					cityids:[],
					
				},
				userinfo:{}
			}
		},
		components:{
		},
		watch:{
			$route(){

			}
		},
		beforeCreate(){
			
		},
		mounted(){
			this.meetname  = Vue.obserable.trigger({
				type:'getMeetName'
			});
			this.tabMenus = this.menus.concat([]);

			this.scroll = new IScroll(this.$refs['page'],{
				scrollbars:true,
				preventDefault:false,
				mouseWheel:true,

			});

			setTimeout(() => {
				this.scroll.refresh();
			}, 100);
		},
		
		methods:{
			toggleMenu(menu){
				menu.close = !menu.close;
				this.tabMenus = this.tabMenus.concat([]);
				setTimeout(() => {
					this.scroll.refresh();
				}, 210);
			}
        }
	}
</script>
