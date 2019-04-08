<template>
    <div class="zmiti-docapi-main-ui">
        <div class='zmiti-docapi-title'>
            <h1>智媒体文档</h1>
        </div>
        <div class='zmiti-docapi-content'>
            <Split v-model="split1">
                <div slot="left" class="zmiti-docapi-left">
                    <Tab :refresh='refresh' :tabIndex='tabIndex' :menus='menus' :title='zmiti2Data.title'></Tab>
                </div>
                <div slot='right' class='zmiti-docapi-right'>
                    <router-view></router-view>
                </div>
            </Split>
        </div>
    </div>
</template>

<script>
	import './index.css';
    import Vue from 'vue';
    import {taskAdminData,taskCompanyData} from '../../common/data/zmiti2.0';

    import Tab from '../../common/tab/index'
    
	export default {
		props:['isAdmin'],
		name:'zmitiindex',
		data(){
			return{
                split1:.15,
                viewH:document.documentElement.clientHeight,
                tabIndex:0,
                userinfo:{},
                productList:[],
                kw:"",
                zmiti2Data:taskAdminData,
                menus:taskAdminData.list,
                topMenu:[
                ],
                defaultMenu:[
                  
                ],
			}
		},
		components:{
            Tab
		},
        beforeCreate(){

        },
		mounted(){
           ///this.menus = this.defaultMenu.concat([]);
          
            
        },
        watch:{
           
        },
		methods:{
            
            tab(index){
                this.tabIndex = index;
            },
            refresh(index){

                this.tabIndex = index;
                Vue.obserable.trigger({
                    type:'setPagePos',
                    data:{
                        index
                    }
                })

            }
         
           
         
          
		}
	}
</script>
 

 <style >
     .ivu-layout-header{
        padding: 0 !important; 
     }
     .ivu-layout{
        position: relative;
     }
 </style>