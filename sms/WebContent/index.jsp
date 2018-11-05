<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="js/jquery-1.8.3.js"></script>
</head>
<script>
function get(){
var data=$("#form").serialize();
 $.ajax({            
            type:"POST",   //post提交方式默认是get
            url:"date2",
            data:data,   //序列化               
            dataType:"json",
            success:function(data) { 
            	$("#cs table").remove();
		 				for(var i in data.result){
		 					$("#cs").append("<table><tr><td>"+data.result[i].des+"<td><tr><td><img src="+data.result[i].pic+"></td><tr><table>");
		 				}
		              },
		            error:function(data) {  
		            	for(var i in data){
		            		//$("#cs").html("你好");
		            		$("#cs").text(data[i]);
		            	}
		            	//alert(data);// 设置表单提交出错                 
		               // $("#showMsg").html(request);  //登录错误提示信息
		            },
		          
		        });
}
	</script>
<body>

	<form id="form">
	输入月份<input type="text" name="mouth">
	输入天<input type="text" name="day">
	<input type="button" value="查询" onclick="get()">
	</form>
	<div id="cs"></div>
</body>
</html>