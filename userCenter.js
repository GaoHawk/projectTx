/*
* @Author: Administrator
* @Date:   2016-10-12 13:37:51
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-12 14:29:31
*/

var userHtml = `
<div class="mui-content">
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
  <form class="mui-input-group">
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell">
        自动登录
        <div id="autoLogin" class="mui-switch">
          <div class="mui-switch-handle"></div>
        </div>
      </li>
    </ul>
  </form>
  <div class="mui-content-padded">
    <button id='login' class="mui-btn mui-btn-block mui-btn-primary">登录</button>
    <div class="link-area"><a id='reg' class="mui-tab-item" href="#tab-userReg">注册账号</a>
    </div>
  </div>
  <div class="mui-content-padded oauth-area">

  </div>
</div>
`;
