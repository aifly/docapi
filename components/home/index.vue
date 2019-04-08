<template>
	<div class="zmiti-home-main-ui">
		<div ref='page' :style="{height:viewH-150+'px',overflow:'hidden',position:'relative'}">
			<div>
				<ul v-for='(item,i) in list' :key="i" class='zmiti-interface-C'>
					<li :id='"zmiti-index"+(i*item.children.length+1+k)' v-for="(child,k) in item.children" :key="k">
						<h2 class='zmiti-interface-title'>{{(i*item.children.length+1+k)+ '、'+ child.title}}</h2>
						<div class='zmiti-interface-item' v-for="(content,j) in child.content" :key="j">
							<template v-if='typeof content.desc === "string" && !content.className'>
								<div>{{content.title}}</div>
								<div :class='content.class'>{{content.desc}}</div>
							</template>

							<template v-if='typeof content.desc === "string" && content.className'>
								<div>{{content.title}}</div>
								<pre ref='codemirror'><code>{{content.desc}}</code></pre>
							</template>

							<template v-if='typeof content.desc === "object"'>
								<div v-for="(con,h) in content.desc" :key="h">
									<div>{{con.title}}</div>
									<div>{{con.desc}}</div>
									<Table v-if='con.table' :data='con.table.data' :columns='con.table.cols'></Table>
								</div>
							</template>
						</div>
					</li>
				</ul>
			</div>
		</div>
		
	</div>
</template>

<script>
	import './index.css';
	import zmitiUtil from '../../common/lib/util';
	import Vue from 'vue';
	import {taskAdminData} from '../../common/data/zmiti2.0';
	import IScroll from 'iscroll';
	import hljs from 'highlight.js/lib/highlight';
	import json from 'highlight.js/lib/languages/json';
	hljs.registerLanguage('json', json);

	
 
	export default {
		props:['obserable'],
		name:'zmitiindex',
		data(){
			return{
				list:taskAdminData.list,
				viewH:window.innerHeight
			}
		},
		components:{
		},

		beforeCreate(){
			window.s = this;
			//var validate = sysbinVerification.validate(this);
			//zmitiUtil.clearCookie('login');

			///this.validate = validate;
		},
		watch:{
			
		},
		mounted(){
			
			this.scroll = new IScroll(this.$refs['page'],{
				scrollbars:true,
				mouseWheel:true,
				preventDefault:false
			});

			setTimeout(() => {
				this.scroll.refresh();
			}, 100);

			Vue.obserable.on('setPagePos',(data)=>{
				
				this.scroll.scrollToElement('#zmiti-index'+(data.index+1));
			});

			setTimeout(() => {
				hljs.initHighlightingOnLoad();
				hljs.highlightBlock(this.$refs['codemirror'][0]);
				/* var editor = CodeMirror.fromTextArea(this.$refs['codemirror'][0], {
				mode: "text/javascript",  
				}); */
			}, 100);

			
		},
		
		methods:{

			
		}
	}
</script>
 

