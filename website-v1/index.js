
var index = {
	init:function(){
		layer.open({
            type: 2,//1的时候content放div,2放路径
            skin: 'layui-layer-rim', //加上边框
            title:'',
            area:['660px','375px'],
            btn: ['关闭'],
            content:"map.html",
            yes:function(index, layero){ //编辑'确定'按钮
                layer.closeAll();
            }

         });
		
	}
}
