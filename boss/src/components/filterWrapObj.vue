<template>
    <div>
        <van-nav-bar title="筛选组件">
            <van-icon
                @click='closeFilterWrap'
                size='.4rem'
                name="cross"
                slot="left"
            />
        </van-nav-bar>
        <div class='gridTitle'>学历要求</div>
        <van-grid
            :column-num="3"
            :gutter="10"
        >
            <van-grid-item
                @click='itemBtnClick($event)'
                text="全部"
            />
            <van-grid-item
                @click='itemBtnClick($event)'
                text="大专"
            />
            <van-grid-item
                @click='itemBtnClick($event)'
                text="本科"
            />
            <van-grid-item
                @click='itemBtnClick($event)'
                text="研究生"
            />
            <van-grid-item
                @click='itemBtnClick($event)'
                text="博士"
            />
            </van-grid>

            <div class='gridTitle'>薪资待遇</div>
            <van-grid
                :column-num="3"
                :gutter="10"
            >
                <van-grid-item
                    @click='itemBtnClick($event)'
                    text="全部"
                />
                <van-grid-item
                    @click='itemBtnClick($event)'
                    text="8k"
                />
                <van-grid-item
                    @click='itemBtnClick($event)'
                    text="10k"
                />
                <van-grid-item
                    @click='itemBtnClick($event)'
                    text="15k"
                />
                <van-grid-item
                    @click='itemBtnClick($event)'
                    text="20k"
                />

                </van-grid>

                <div class='filter_footer'>
                    <van-button
                        plain
                        type="default"
                    >清除</van-button>
                        <van-button
                            plain
                            type="info"
                        >确定</van-button>
                </div>

    </div>
</template>

<script>
import '../assets/reset_vant.css'

export default{
    name:'filterWrapObj',
    data(){
        return{
            msg:'筛选功能组件'
        }
    },
    methods:{
        closeFilterWrap(){
            // console.log('关闭筛选')
            this.$emit('closeFilterWrap');
        },
        itemBtnClick($e){
            let _txt=$e.target.innerText;
            let _cls=$e.target.getAttribute('class');
            // console.log($e.target.innerText);
            // console.log(_cls);
            console.log(_cls.split(' '));//把字符串转换成数组
            let _clsArr=_cls.split(' ');
            let _is=false;//默认没有添加class
            //判断当前按钮有没有“选中的css样式”
            for(let i=0;i<_clsArr.length;i++){
                //找到了“选中状态的css",就把它删除，切换为未选中状态
                if(_clsArr[i]=='van_grid_item_focus'){
                    _clsArr.splice(i,1);//删除数组
                    _is=true;
                    break;
                }
                _is=false;
            }

            //没有，就要添加van_grid_item_focus,
            //van_grid_item_focus定义在reset_vant.css里
            if(!_is){
                _clsArr.push('van_grid_item_focus');
            }
            //再把_clsArr转为string,再写回到class中
            let _cls_txt=_clsArr.join(' ');
            $e.target.setAttribute('class',_cls_txt);
        }
    }
}
</script>

<style scoped>
.gridTitle {
  padding: 0.2rem 0.2rem;
  clear: both;
  font-size: 0.3rem;
  font-weight: bold;
}
.gridTitle label {
  font-weight: normal;
  font-size: 0.2rem;
  padding: 0 10px;
}
.filter_footer {
  text-align: center;
  margin-top: 1rem;
  width: 100%;
}
</style>