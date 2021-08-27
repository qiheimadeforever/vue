<template>
	<div>
		<!-- head头 -->
		<van-sticky>
			<van-nav-bar
			    class='bar_sty'
			    left-text="高仿BOSS直聘的vue"
			>
				<van-icon
				    @click='jobStateOpen'
				    name="plus"
				    slot="right"
				/>
				<van-icon
				    name="search"
				    slot="right"
				/>
				</van-nav-bar>

				<div class='title_menu'>
					<van-button
					    @click='notifyFnBtn'
					    class='miniBtn'
					    size="mini"
					>推荐</van-button>
						<van-button
						    @click='notifyFnBtn'
						    class='miniBtn'
						    size="mini"
						>最新</van-button>

							<van-button
							    class='filterBtn'
							    @click='openFilterMaskFn'
							    size="mini"
							>筛选</van-button>
								<van-button
								    @click='openMaskFn'
								    class='filterBtn'
								    size="mini"
								>{{defaultCity}}</van-button>

				</div>
				<!-- notify提示组件 -->
				<notify v-show='notifyShow'></notify>
		</van-sticky>
		<!-- 职位列表 -->
		<div>
			<!-- 下拉刷新 -->
			<van-pull-refresh
			    v-model="isLoading"
			    @refresh="onRefresh"
			>
				<job_Item
				    v-for="(n,inx) in jobsData"
				    :key=inx
				    :itemObj=n
				></job_Item>
					</van-pull-refresh>
		</div>
		<!-- 城市操作wrap -->
		<!-- 这里有不同的操作思路 -->
		<!--@touchmove.prevent
		@mousewheel.prevent，阻止mask这个div拖动和滚动
		  -->
		<div
		    v-show='is_cityMaskObj'
		    :class="maskClassName"
		    @touchmove.prevent
		    @mousewheel.prevent
		>
			<selectArea @closeCityMaskFn='hideMaskFn($event)'></selectArea>
	</div>
	<!-- 筛选功能 -->
	<div
	    v-show='is_filter'
	    :class='filterClassName'
	>
		<filterWrapObj @closeFilterWrap='closeFilterMask'></filterWrapObj>
		</div>

		<!-- 管理求职意向 -->
		<div
		    v-show='is_jobState'
		    :class="jobStateClassName"
		    @touchmove.prevent
		    @mousewheel.prevent
		>
			<jobState @closeJobStateFn='jobStateClose'></jobState>
			</div>

			<!-- footer_bar -->
			<footer_bar></footer_bar>
			</div>
</template>

<script>
import job_Item from './job_Item'
import footer_bar from './footer_bar'
import notify from './notify'
import selectArea from './selectArea'
import filterWrapObj from './filterWrapObj'
import jobState from './jobState'

export default {
    name:'index_jobList',
    data(){
        return{
            msg:'职位列表页面xxx',
			 isLoading: false,
			 is_cityMaskObj:false,
			 is_filter:false,
			 is_jobState:false,

			 maskClassName:'mask_aaa',//它的用途，仅用于js找到div,没有其它用途，没有css定义
			 filterClassName:'mask_filter',//它的用途，仅用于js找到这个div,没有其它用途，没有css定义
			 defaultCity:'沈阳',//defaultCity,是选择城市的默认城市名
			 //jobStateClassName,求职状态管理的class名
			 jobStateClassName:'mask_animation',

            	jobsData:[{
				title:'web前端',
				h2_txt:'什么祥 未融资',
				area:['沈阳 和平区','经验不限','本科'],
				hr:{
					img_avatar:'',
					hr_txt:'海峰-招聘者'
				},
				salary:'5-6K'
			},{
				title:'软件开发工程师',
				h2_txt:'牛万科技 未融资',
				area:['沈阳 沈河区','1-3年','学历不限'],
				hr:{
					img_avatar:'',
					hr_txt:'海峰-招聘者'
				},
				salary:'3-8K'
			},{
				title:'前端工程师',
				h2_txt:'成林健康科技 未融资',
				area:['沈阳 皇姑区','经验不限','本科'],
				hr:{
					img_avatar:'',
					hr_txt:'马xx-从事招聘专员'
				},
				salary:'5-6K'
			},{
				title:'前端开发工程师',
				h2_txt:'师福教育 未融资',
				area:['沈阳 沈河区','3-5年','学历不限'],
				hr:{
					img_avatar:'',
					hr_txt:'杨女士 - 人事'
				},
				salary:'5-8K'
			},{
				title:'前端工程师',
				h2_txt:'成林健康科技 未融资',
				area:['沈阳 皇姑区','经验不限','本科'],
				hr:{
					img_avatar:'',
					hr_txt:'马xx-从事招聘专员'
				},
				salary:'5-6K'
			},{
				title:'前端技术经理',
				h2_txt:'星擎科技 未融资',
				area:['沈阳 铁西区','5-10年','本科'],
				hr:{
					img_avatar:'',
					hr_txt:'潘舒-CEO'
				},
				salary:'6-11K'
			},{
				title:'web前端',
				h2_txt:'什么祥 未融资',
				area:['沈阳 和平区','经验不限','本科'],
				hr:{
					img_avatar:'',
					hr_txt:'海峰-招聘者'
				},
				salary:'5-6K'
			}],
			notifyShow:false
        }
    },
	components:{job_Item,footer_bar,notify,selectArea,filterWrapObj,jobState},
	methods:{
		//刷新组件
		notifyFnBtn(){
        this.notifyShow=true;
		// 要判断，当css3动画执行结束时，如何如何，
		let _notify=document.querySelector('.notify');
		// console.log(_notify)
		//webkitAnimationEnd,是css3动画的“动画结束”事件，
		_notify.addEventListener('webkitAnimationEnd',()=>{
			this.notifyShow=false;
		});
		},
		//下拉刷新
		onRefresh(){
			// Toast('xxx123');
			this.$toast('加载成功');
			this.isLoading=false;
		},
		//打开城市选择面板
		openMaskFn(){
			this.is_cityMaskObj=true;
			this.maskClassName='mask_aaa cityEditWrapObj_open';
	        let _mask=document.querySelector('.mask_aaa');
			_mask.addEventListener('webkitAnimationEnd',()=>{
                     this.is_cityMaskObj=true;
			});		},
		//关闭城市选择面板
		hideMaskFn(_cityName){
            this.defaultCity=_cityName;
			this.maskClassName='mask_aaa cityEditWrapObj_close';
			// this.is_cityMaskObj=true;
			//需要监听CSS3动画结束之后，再隐藏城市选择面板
			let _mask=document.querySelector('.mask_aaa');
			_mask.addEventListener('webkitAnimationEnd',()=>{
                     this.is_cityMaskObj=false;
			});
		},
		//打开筛选面板
		openFilterMaskFn(){
			this.is_filter=true;
			this.filterClassName='mask_filter filter_open';

			let _mask=document.querySelector('.mask_filter');
			_mask.addEventListener('webkitAnimationEnd',()=>{
				this.is_filter=true;
			});
		},
		//关闭筛选
		closeFilterMask(){
			this.filterClassName='mask_filter filter_close';

			//需要监听css3动画结束之后，再隐藏城市选择面板
			let _mask=document.querySelector('.mask_filter');
			_mask.addEventListener('webkitAnimationEnd',()=>{
				this.is_filter=false;
			});
		},
		//求职状态管理
		jobStateOpen(){
		this.is_jobState=true;
		this.jobStateClassName='mask_animation animation_open';

		let _mask=document.querySelector('.mask_animation');
		_mask.addEventListener('webkitAnimationEnd',()=>{
			this.is_jobState=true;
		});
		},
		jobStateClose(){
			this.jobStateClassName='mask_animation animation_close';

			let _mask=document.querySelector('.mask_animation');
			_mask.addEventListener('webkitAnimationEnd',()=>{
				this.is_jobState=false;
			});
		}
	}
}
</script>

<style scoped>
.bar_sty {
  background: #14c1bb;
}
.van-icon-plus:before {
  color: #fff;
  font-size: 0.4rem;
  margin-right: 0.1rem;
  border-right: 1px solid #c1c1c1;
  padding-right: 0.1rem;
}
.van-icon-search:before {
  color: #fff;
  font-size: 0.4rem;
}
.van-nav-bar__text {
  font-size: 0.35rem;
  color: #fff;
}
.miniBtn {
  border: 0;
  margin: 0.1rem 0 0 0;
  float: left;
}
.filterBtn {
  float: right;
  border: 0;
  margin: 0.1rem 0.1rem 0 0;
  background: #f2f3f5;
}
.title_menu {
  background: #fff;
  height: 0.6rem;
}
.cityEditWrapObj_open {
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3333;
  animation: cityEditWrapObjAnimation_open 0.7s;
}

.cityEditWrapObj_close {
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3333;
  animation: cityEditWrapObjAnimation_close 0.7s;
}
.filter_open {
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3333;
  animation: cityEditWrapObjAnimation_open 0.7s;
}
.filter_close {
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3333;
  animation: cityEditWrapObjAnimation_close 0.7s;
}
@keyframes cityEditWrapObjAnimation_open {
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
}
@keyframes cityEditWrapObjAnimation_close {
  from {
    height: 100%;
  }
  to {
    height: 0;
  }
}
.mask_animation {
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3333;
}
.animation_open {
  animation: open_Animation 0.7s;
}
.animation_close {
  animation: close_Animation 0.7s;
}
@keyframes open_Animation {
  from {
    width: 0;
    left: 100%;
  }
  to {
    width: 100%;
    left: 0;
  }
}
@keyframes close_Animation {
  from {
    width: 100%;
    left: 0;
  }
  to {
    width: 0;
    left: 100%;
  }
}
</style>