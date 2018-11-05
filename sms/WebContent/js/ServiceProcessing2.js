$(function(){
    $("#button input[value=保存]").click(function(){
	    $.ajax({
	    	url:"save_Processing",
	    	data:$("form").serialize(),
	    	type:"post",
	    	success:function(data){
	    		if(data.val==1){
	    			alert("保存成功");
	    		}else{
	    			alert("保存失败");
	    		}
			},
			error:function(data){				
			},
	    });
    });
 });

$(function(){ 
	   var day = new Date(); 
	   var time=" "+day.getHours()+":"+day.getMinutes()+":"+day.getSeconds();
	   var Year = 0; 
	   var Month = 0; 
	   var Day = 0; 
	   var CurrentDate = ""; 
	   //初始化时间 
	   //Year       = day.getYear();//有火狐下2008年显示108的bug 
	   Year       = day.getFullYear();//ie火狐下都可以 
	   Month      = day.getMonth()+1; 
	   Day        = day.getDate(); 
	   
	   CurrentDate += Year + "-"; 
	   if (Month >= 10 ) 
	   { 
	    CurrentDate += Month + "-"; 
	   } 
	   else
	   { 
	    CurrentDate += "0" + Month + "-"; 
	   } 
	   if (Day >= 10 ) 
	   { 
	    CurrentDate += Day ; 
	   } 
	   else
	   { 
	    CurrentDate += "0" + Day ; 
	   } 
	   $("input[name='ser.processingTime']").val(CurrentDate+time); 
	});