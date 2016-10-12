var title = '这是div模式选项卡中的第1个子页面.';
var html = ("\n<div class=\"title\"> " + title + " </div>\n<div class=\"title\">何谓div模式的选项卡？\n  其实就是通过DIV模拟一个独立页面，通过DIV的显示、隐藏模拟不同页面的切换，典型的SPA模式；</div>\n<div class=\"title\">\n  这种模式适合简单业务系统，因为每个选项卡内容要写在一个DIV中，\n  若逻辑复杂，会导致当前页面DOM结构繁杂，造成webview响应缓慢，甚至崩溃；\n  因此若系统较复杂，需要下拉刷新等操作，推荐使用webview模式的选项卡；</div>\n");

var mainHead = "\n<a class=\"mui-pull-left logo_sy db pa\">\n  <img src=\"images/54ab7990ba321.png\" >\n</a>\n<div class=\"userdiv pa\">\n  <a class=\"mui-icon mui-icon-contact mui-tab-item\" href=\"#userCenter\">\n\n  </a>\n  <a class=\"mui-tab-item pa bl userName customColor\" href=\"#userCenter\">\n    <span class=\"bl rel conHeight\">用户中心</span>\n  </a>\n\n</div>\n";

