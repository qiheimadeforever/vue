//网页版地适配方案
;
(function (win) {
    var doc = win.document;//返回document对象
    var docEl = doc.documentElement;//返回的是整个网页
    var _t;


    function refreshRemFn() {
        //获得指定对象的宽度
        var _width = docEl.getBoundingClientRect().width;
        // console.log(width);

        if (_width > 640) {
            _width = 640;
        }

        //我们设定，1rem等于100px,
        //这种单位或比例，一般是设计师会给出，
        //在本例中，咱门就用一个普遍地比例
        var _rem = _width / 6.4;
        docEl.style.fontSize = _rem + 'px';
    }

    //事件临时，当页面缩放地时候
    win.addEventListener('resize', function () {
        clearTimeout(_t);
        _t = setTimeout(refreshRemFn, 300);
    }, false);

    //页面一打开就运行
    refreshRemFn();
})(window);