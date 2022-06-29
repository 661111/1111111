/*
 * name : Future
 * edition : 2.0.2
 * message : 鍓嶇缇庡寲鏍峰紡鐢辨槦鐜痆Future]鎻愪緵锛岀▼搴忕敱Alist鍒涘鑰呭弸鎯呮彁渚�
 * technical support : https://www.xhto.cn/
 */

var x = true;
var conarr = ["鏄熺幆鍗氬-浜戠洏缇庡寲鍖�","https://www.xhto.cn/"];

$("html").click(function() {
    if (x) {
        var title = document.title,
            // 涓汉淇℃伅缂栧啓鍖哄煙+鏄熺幆鍗氬鎻愪緵鎶€鏈敮鎸�+ 鈥斺€斺€斺€斺€斺€� ON

            // 澶村儚閾炬帴鍦板潃
            headimg = "https://file.xhto.cn/alistskin/img/himg.jpg",
            // 鍗氫富閾█鍙ュ瓙
            motto = "涓嶇悊鐧介┕杩囬殭锛屼笉淇＄敓姝绘湁鍛斤紒",
            // 閰嶇疆 - 瀵艰埅鍐呭鍙婇摼鎺ャ€愭敞锛氬悕绉板拰閾炬帴闇€瑕佷竴涓€瀵瑰簲锛岀敤鑻辨枃閫楀彿闅斿紑銆�
            linkname = ["棣栭〉", "鏄熺幆鍗氬"],
            link = ["/", "https://www.xhto.cn/"],
            code = "";

        // 涓汉淇℃伅缂栧啓鍖哄煙+鏄熺幆鍗氬鎻愪緵鎶€鏈敮鎸�+ 鈥斺€斺€斺€斺€斺€� END

        // 绋嬪簭鍖栦唬鐮�
        code += '<h3>'+title+'</h3>';
        code += '<div id="uxhdimg"><img src="'+headimg+'" alt="['+title+']" /></div>';
        code += '<p>'+motto+'</p>';
        code += '<ul>';
        for (vo in linkname) {
            code += '<li><a href="'+link[vo]+'">'+linkname[vo]+'</a></li>';
        }
        code += '</ul>';

        // 浠ｇ爜鍐欏叆瑙嗚绋嬪簭
        $(".header").append(code);
        // 鍒ゆ柇鏄惁鍐欏叆
        x = false;
        console.log('%c '+conarr[0]+' %c '+conarr[1]+' ','padding: 5px 10px; color: #FFF; background-color:#282828; border-radius: 2px 0px 0px 2px;','padding: 5px 10px;color: #FFF; background-image: linear-gradient(to left,#00f2fe,#66ccff); border-radius: 0px 2px 2px 0px;');
    }
})

// 鏀寔鏍峰紡浠ｇ爜
$(document).on('click', '.buttons>span:eq(1) svg', function() {
    var $viwe = $(this).attr('viewBox');
})

// 妫€娴嬫槸鍚︽暟鎹坊鍔犱笂
window.onload = function(){
    setTimeout(function() {
        if($("#uxhdimg").length <= 0){
            x = true;
        }
        if(x){
            $("html").click();
            x = false;
        }
    }, 200);
    
    setTimeout(function() {
        if($("#uxhdimg").length <= 0){
            x = true;
        }
        if(x){
            $("html").click();
            x = false;
        }
    }, 500);
    setTimeout(function() {
        if($("#uxhdimg").length <= 0){
            x = true;
        }
        if(x){
            $("html").click();
            x = false;
        }
    }, 1000);
    setTimeout(function() {
        if($("#uxhdimg").length <= 0){
            x = true;
        }
        if(x){
            $("html").click();
            x = false;
        }
    }, 2000);
    setTimeout(function() {
        if($("#uxhdimg").length <= 0){
            x = true;
        }
        if(x){
            $("html").click();
            x = false;
        }
    }, 5000);
}
