/*
* @Author: Administrator
* @Date:   2016-10-15 13:39:24
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-15 15:59:12
*/

var userPage =`
<div class="uctopkuang_div">
      <div class="uc_usericon fl"><img src="http://img-home.49app.com/wap/platfor/images/userphoto2.png"></div>
        <div class="username_div fl">
          <p class="yhm_p" style="display:none;">用户名</p>
            <p class="yhm_p2" id="username">欢迎登陆</p>
        </div>
      <a href="#userCenter" class="quitbtn_a db fr mui-tab-item" style="font-size: 70%;" >退 出</a>

    </div>
    <div class="zjlbtop_div">
          <div class="zjlbhead">最近领取的礼包</div>
        </div>

      <ul class="zjlb_ul" id="libao_content">

          <li><span class="zjlbspan02 ell">《弑天刃》日常礼包</span><span class="zjlbspan04 ell">2016-10-11 14:00:44</span><a href="javascript:void(0);" onclick="takeGift(416, this)" class="zjlbspan05 ell" style="display:none;">详情</a></li></ul>

      <div class="zjlbtop_div">
            <div class="zjlbhead">热门游戏推荐</div>

          </div>
     <div class="rmyxtjtop_div">
          <ul class="rmyxlb_ul" id="recommend_game">
             <li><div class="rmyxicon fl"><a href="#tabbar-game-detail" class="mui-tab-item"><img src="http://img-home.49app.com/./Uploads/2016-05/574d60aedcd8a.png"></a></div><div class="rmyxcon_right fl"><p class="rmyxtj_p1">幻灵仙域</p> <p class="rmyxtj_p2">修仙 | 69M</p><a href="game.apk" download="game.apk" class="rmyxtj_a db">下载</a></div></li>
             <li style="margin-right:0;"><div class="rmyxicon fl"><a href="#tabbar-game-detail" class="mui-tab-item"><img src="images/baye.jpg"></a></div><div class="rmyxcon_right fl"><p class="rmyxtj_p1">霸业</p> <p class="rmyxtj_p2">SLG | 82M</p><a href="game.apk" download="game.apk" class="rmyxtj_a db">下载</a></div></li>
             <li><div class="rmyxicon fl"><a href="#tabbar-game-detail" class="mui-tab-item"><img src="images/userPage/jxqy1.png"></a></div><div class="rmyxcon_right fl"><p class="rmyxtj_p1">剑侠情缘</p> <p class="rmyxtj_p2">游戏助手 | M</p><a href="http://down.49app.com/download/heziyy/android/0.0/49you_b_appbox_007.apk" download="game.apk" class="rmyxtj_a db">下载</a></div></li>
             <li style="margin-right:0;"><div class="rmyxicon fl"><a href="#tabbar-game-detail" class="mui-tab-item"><img src="images/fbys.png"></a></div><div class="rmyxcon_right fl"><p class="rmyxtj_p1">风暴要塞</p> <p class="rmyxtj_p2">策略类 | 99M</p><a href="game.apk" download="game.apk" class="rmyxtj_a db">下载</a></div></li>
             <li><div class="rmyxicon fl"><a href="#tabbar-game-detail" class="mui-tab-item"><img src="http://img-home.49app.com/./Uploads/2015-12/565e569840a9a.png"></a></div><div class="rmyxcon_right fl"><p class="rmyxtj_p1">洛神域</p> <p class="rmyxtj_p2">ARPG | 90M</p><a href="http://down.49app.com/download/lsy/android/v1.0/49you_b_lsy001.apk" download="game.apk" class="rmyxtj_a db">下载</a></div></li>
             <li style="margin-right:0;"><div class="rmyxicon fl"><a href="#tabbar-game-detail" class="mui-tab-item"><img src="images/wdqk.png"></a></div><div class="rmyxcon_right fl"><p class="rmyxtj_p1">武道乾坤</p> <p class="rmyxtj_p2">角色扮演 | 142M</p><a href="http://down.49app.com/download/lyxzxjsy/android/0.0/49you_b_xjsyzf001.apk" download="game.apk" class="rmyxtj_a db">下载</a></div></li>
             <li><div class="rmyxicon fl"><a href="#tabbar-game-detail" class="mui-tab-item"><img src="images/userPage/jxqy2.png"></a></div><div class="rmyxcon_right fl"><p class="rmyxtj_p1">剑侠情缘</p> <p class="rmyxtj_p2">ARPG | 59.6M</p><a href="http://down.49app.com/download/tlztzf/android/0.0/49you_b_tlzt001.apk" download="game.apk" class="rmyxtj_a db">下载</a></div></li>
             <li style="margin-right:0;"><div class="rmyxicon fl"><a href="#tabbar-game-detail" class="mui-tab-item"><img src="images/yjmt.png"></a></div><div class="rmyxcon_right fl"><p class="rmyxtj_p1">一剑灭天</p> <p class="rmyxtj_p2">角色扮演 | 33.1MM</p><a href="http://down.49app.com/download/llwzf/android/1.0/49you_m_llwgmzs001.apk" download="game.apk" class="rmyxtj_a db">下载</a></div></li>
             <li><div class="rmyxicon fl"><a href="#tabbar-game-detail" class="mui-tab-item"><img src="http://img-home.49app.com/Uploads/2015-05/555b11b249b07.png"></a></div><div class="rmyxcon_right fl"><p class="rmyxtj_p1">梦幻西游</p> <p class="rmyxtj_p2">角色扮演 | 225.7M</p><a href="http://down.49app.com/download/mhxy/android/0.0/49you_b_mhxy001.apk" download="game.apk" class="rmyxtj_a db">下载</a></div></li>
             <li style="margin-right:0;"><div class="rmyxicon fl"><a href="#tabbar-game-detail" class="mui-tab-item"><img src="http://img-home.49app.com/Uploads/2015-08/55cda7cb43b4e.png"></a></div><div class="rmyxcon_right fl"><p class="rmyxtj_p1">天魔</p> <p class="rmyxtj_p2">休闲 | 55MM</p><a href="http://down.49app.com/download/tmzf/android/0.0/49you_m_tm008.apk" download="game.apk"  class="rmyxtj_a db">下载</a></div></li>
             </ul>

         </div>
`;
