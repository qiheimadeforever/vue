<template>
    <div class='notify'>
        <van-area
            :area-list="areaList"
            value="110101"
            :title='title_name'
            :visible-item-count=8
            @cancel='closeCityMaskFn'
            @confirm='selectAreaBtn'
            @change='changeItemFn'
        />
    </div>
</template>

<script>
import area from '../assets/area'
export default{
    name:'selectArea',
    data(){
        return{
            msg:'选择城、区组件',
            areaList:area,
            title_name:'请选择省市区'
        }
    },
    methods:{
        //关闭城市选项
        closeCityMaskFn(){
            this.$emit('closeCityMaskFn');
        },
        //改变城市选项时，触发
        changeItemFn(_d){
            // console.log(_d.getValues())
            let _data=_d.getValues();
            this.title_name=_data[0].name+'-'+
                            _data[1].name+'_'+
                            _data[2].name;
        },
        //选中城市
        selectAreaBtn(_d){
            //  console.log(_d[1].name)
            this.$emit('closeCityMaskFn',_d[1].name);
        }
    }
}
</script>


