<%--
  Created by IntelliJ IDEA.
  User: 李喜生
  Date: 2015-06-25
  Time: 上午 10:17
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>游戏发行后台管理系统</title>
    <link href="${pageContext.request.contextPath}/resources/css/style.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/jquery.min.js"></script>
    <script type="text/javascript">
        $(function () {
            $("input[name='username']").focus()
        })
    </script>
</head>
<body class="loginbg">
<div class="login_box">
    <div class="title"><h1>游戏发行后台管理系统</h1></div>
    <form action="${pageContext.request.contextPath}/usr/resources/login" method="post">
        <div class="login_div">
            <div class="login_name"><input type="text" name="username" /></div>
            <div class="login_passw"><input type="password" name="password"/></div>
        </div>
        <div class="login_btn"><input type="submit" name="button" id="button" value="登录" /></div>
    </form>
</div>
</body>
</html>
