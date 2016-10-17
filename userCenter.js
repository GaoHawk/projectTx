/*
* @Author: Administrator
* @Date:   2016-10-12 13:37:51
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-15 17:56:48
*/

var userHtml = `

  <form id='login-form' class="mui-input-group">
    <div class="mui-input-row">
      <label>账号</label>
      <input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
    </div>
    <div class="mui-input-row">
      <label>密码</label>
      <input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
    </div>
  </form>

  <div class="mui-content-padded">
    <!-- <button id='login' class="mui-btn mui-btn-block mui-btn-primary"></button>-->
    <a id="logA" class="no-tab mui-btn mui-btn-block mui-btn-primary" href="#" style="display:block;">登录</a>
    <h4 class="waring" style="color:red;text-align:center;display:none;">登陆信息不能为空</h4>
    <div class="link-area"><a id='reg' class="mui-tab-item" href="#userReg">注册账号</a>
    </div>
  </div>
  <div class="mui-content-padded oauth-area">

  </div>

`;
