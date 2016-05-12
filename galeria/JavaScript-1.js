<br>
<style type="text/css"><br>
<!--<br>
body {margin:0; padding:0; background:#fff;}<br>
#slidebox{position:relative; border:1px solid #ccc; margin:40px auto;overflow:hidden;}<br>
#slidebox, #slidebox ul {width:600px;height:300px;}<br>
#slidebox, #slidebox ul li{width:600px;height:300px;}<br>
#slidebox ul li{position:relative; left:0; background:#eee; float:left;list-style: none; padding:15px 28px;  font-family:Verdana, Geneva, sans-serif; font-size:13px;}<br>
#slidebox .next, #slidebox .previous{position:absolute; z-index:2; display:block; width:21px; height:21px;top:139px;}<br>
#slidebox .next{right:0; margin-right:10px; background:url(slidebox_next.png) no-repeat left top;}<br>
#slidebox .next:hover{background:url(slidebox_next_hover.png) no-repeat left top;}<br>
#slidebox .previous{margin-left:10px; background:url(slidebox_previous.png) no-repeat left top;}<br>
#slidebox .previous:hover{background:url(slidebox_previous_hover.png) no-repeat left top;}<br>
#slidebox .thumbs{position:absolute; z-index:2; bottom:10px; right:10px;}<br>
#slidebox .thumbs a{display:block; margin-left:5px; float:left; font-family:Verdana, Geneva, sans-serif; font-size:9px; text-decoration:none; padding:2px 4px; background:url(slidebox_thumb.png); color:#fff;}<br>
#slidebox .thumbs a:hover{background:#fff; color:#000;}<br>
#slidebox .thumbs .thumbActive{background:#fff; color:#000; display:block; margin-left:5px; float:left; font-family:Verdana, Geneva, sans-serif; font-size:9px; text-decoration:none; padding:2px 4px;}<br>
--><br>
 <br>
 <br>
<script src="jquery-1.5.2.min.js" type="text/javascript"></script><br>
<script src="jcarousellite_1.0.1c5.js" type="text/javascript"></script><br>
<script type="text/javascript"><br>
 <br>
$(function() {<br>
    $("#slidebox").jCarouselLite({<br>
        vertical: false,<br>
        hoverPause:true,<br>
        btnPrev: ".previous",<br>
        btnNext: ".next",<br>
        visible: 1,<br>
        start: 0,<br>
        scroll: 1,<br>
        circular: true,<br>
        auto:1000,<br>
        speed:500,             <br>
        btnGo:<br>
            [".1", ".2",<br>
            ".3", ".4"],<br>
         <br>
        afterEnd: function(a, to, btnGo) {<br>
                if(btnGo.length <= to){<br>
                    to = 0;<br>
                }<br>
                $(".thumbActive").removeClass("thumbActive");<br>
                $(btnGo[to]).addClass("thumbActive");<br>
            }<br>
    });<br>
});<br>
</script><br>
 <br>
<div id="slidebox"><br>
<div class="next"></div><br>
<div class="previous"></div><br>
<div class="thumbs"><br>
<a href="1.jpg" onclick="" class="1">1</a><br>
<a href="2.jpg" onclick="" class="2 thumbActive">2</a><br>
<a href="3.jpg" onclick="" class="3 ">3</a><br>
<a href="4.jpg" onclick="" class="4">4</a><br>
</div><br>
    <ul><br>
        <li>content 1</li><br>
        <li>content 2</li><br>
        <li>content 3</li><br>
        <li>content 4</li><br>
    </ul><br>
</div><br>