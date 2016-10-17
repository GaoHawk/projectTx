<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>游戏发行后台管理系统</title>
    <link href="${pageContext.request.contextPath}/resources/css/style.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/jquery.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/jquery.reveal.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/ajaxfileupload.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/form/user.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/js.js"></script>
    <%
    String  fileName=request.getParameter("fileName");
    %>
    <script language="javascript">
        var ss;
        var fileName="<%=fileName%>";
        if(fileName.indexOf(".")>0){
            if(window.opener.document.getElementById("uppic").value == '')
            {
                window.opener.document.getElementById("uppic").value += fileName;
            }
            else
            {
                window.opener.document.getElementById("uppic").value += "," + fileName;
            }
            window.close();
        }
    </script>
</head>
<body>
                    <form method="post" action="${pageContext.request.contextPath}/res/addFile" id="add" enctype="multipart/form-data">
                        <div class="r_form clearfix">
                            <label class="labels_w">上传 </label>
                        </div>
                        <div class="r_form clearfix" style="margin-left:10px">
                            <input type='text' name='filepath' id='img' class='inputs file-input' readonly="readonly"/>
                            <a class='btn upload_btn'>
                                <input type="file" data-url="${pageContext.request.contextPath}/upload/file" id="file_img" name="file" class="file"
                                       onchange="document.getElementById('img').value=this.value"/>上传...
                            </a>
                        </div>
                        <br/>
                        <!-- Unnamed (提交按钮) -->
                        <div class="r_form clearfix">
                            <a href="javascript:document.getElementById('add').submit();" class="btn add_btn">保存</a>
                            <a href="#" class="btn del_btn close-reveal">关闭</a>
                        </div>
                    </form>
</body>
</html>





