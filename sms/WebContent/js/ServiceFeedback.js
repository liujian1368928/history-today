function huanye(obj)
  { var page=$(".pageno").val();
	var lastpage=$(".lastpage").val();
	  if(obj=="first")
	  {
		  $(".pageno").val(1);
	 	fenye();
	  }else if(obj=="previou")
	  {
	   page=page-1;
	    if(page==0)
		  {
		  page=1;
		  }
		  $(".pageno").val(page);
		fenye();
	  }else if(obj=="next")
	  {
	  if(page!="")
		  {
	page=parseInt(page)+1;
    $(".pageno").val(page);
    fenye();
		  }
	  if(page>lastpage)
		{
		$(".pageno").val(lastpage);
		}
		
		
	  }else if(obj=="lastpage")
	  {
			 $(".pageno").val(lastpage);
			 fenye();
	  }
	
  }

  function fenye(){
  var url="fenye_Processing";
			$.ajax({
				url:url,
				data:$("#fenye").serialize(),
				type:"post",
				dataType:"json",
				success: function(data) {	
					$(".input").remove();
					for(var i=0;i<data.pagesize;i++){//in data.list			
						if(i<data.list.length){	
						 var $msg=$("<tr class='input'>"
									+"<td><input type='hidden' unselectable='on' value='"+data.list[i].id+"'>" 
									+"<input type='text' unselectable='on' value='"+data.list[i].serviceId+"' class='input-text lh30'  size='30'></td>"
									+"<td><input type='text' unselectable='on' value='"+data.list[i].serviceCustomer+"' class='input-text lh30'  size='30'></td>" 
									+"<td><input type='text' unselectable='on' value='"+data.list[i].serviceRequest+"' class='input-text lh30'  size='30'></td>" 
									+"<td><input type='text' unselectable='on' value='"+data.list[i].serviceType+"' class='input-text lh30'  size='30'></td>" 
									+"<td><input type='text' unselectable='on' value='"+data.list[i].serviceFounder+"' class='input-text lh30'  size='30'></td>"
									+"<td><input type='text' unselectable='on' value='"+data.list[i].serviceCreateTime+"' class='input-text lh30'  size='30'></td>"
						 			+"<td><input type='button' value='反馈'class='ext_btn' onclick='Delete("+data.list[i].id+")'></td></tr>");	
							}else{
						 var $msg=$("<tr class='input'>"
								+"<td><input type='text' unselectable='on'  class='input-text lh30'  size='30'>"
								+"<input type='text' unselectable='on'  class='input-text lh30'  size='30'></td>" 
								+"<td><input type='text' unselectable='on'  class='input-text lh30'  size='30'></td>" 
								+"<td><input type='text' unselectable='on'  class='input-text lh30'  size='30'></td>" 
								+"<td><input type='text' unselectable='on'  class='input-text lh30'  size='30'></td>"
								+"<td><input type='text' unselectable='on'  class='input-text lh30'  size='30'></td>"
					 			+"<td></td></tr>");
							}
						 $("#table").append($msg);
						//,
			
					}
					
				},
				error : function() { //请求失败后要执行的代码
				
				}				
			});		

  }

/*$(function(){
	$(".input input[value=删除]").click(function(){
		var val=$(this).attr("name");
		if (confirm("确定删除")==true){
		      $.ajax({            
		            type:"POST",   //post提交方式默认是get
		           // url:"delete_Processing?id="+val,
		            data:"",   //序列化               
		            success:function(data) { 
		 				if(data.val==1){
		 					window.location.reload();
		 				}else{
		 					alert("添加失败")
		 				}
		              },
		            error:function(data) {      // 设置表单提交出错                 
		               // $("#showMsg").html(request);  //登录错误提示信息
		            },
		          
		        });
			}else{
			return false;
			}
		
	});
});
*/
	/*});
});*/

$(function(){//当五个框都为空时
	$("#button input[value=搜索]").click(function(){
		      $.ajax({            
		            type:"POST",   //post提交方式默认是get
		            url:"search_Processing",
		            data:$("#fenye").serialize()+"&"+$("#form").serialize(),   //序列化               
		            success:function(data) { 
						$(".input").remove();
						$(".lastpage").val(data.page);
						$(".pageno").val(1);
						for(var i=0;i<data.pagesize;i++){//in data.list					
							if(i<data.list.length){		
							 var $msg=$("<tr class='input'>"
										+"<td><input type='hidden' unselectable='on' value='"+data.list[i].id+"'>" 
										+"<input type='text' unselectable='on' value='"+data.list[i].serviceId+"' class='input-text lh30'  size='30'></td>"
										+"<td><input type='text' unselectable='on' value='"+data.list[i].serviceCustomer+"' class='input-text lh30'  size='30'></td>" 
										+"<td><input type='text' unselectable='on' value='"+data.list[i].serviceRequest+"' class='input-text lh30'  size='30'></td>" 
										+"<td><input type='text' unselectable='on' value='"+data.list[i].serviceType+"' class='input-text lh30'  size='30'></td>" 
										+"<td><input type='text' unselectable='on' value='"+data.list[i].serviceFounder+"' class='input-text lh30'  size='30'></td>"
										+"<td><input type='text' unselectable='on' value='"+data.list[i].serviceCreateTime+"' class='input-text lh30'  size='30'></td>"
							 			+"<td><input type='button'class='ext_btn' value='反馈' onclick='Delete("+data.list[i].id+")'</td></tr>");	
							 $("#table").append($msg);
							//,
							}
							
						}
						
		              },
		            error:function(data) {      // 设置表单提交出错                 
		               // $("#showMsg").html(request);  //登录错误提示信息
		            },
		          
		        });
	});
});
//日历控件
$(function(){
Calendar.setup({
    inputField : "J_time_start",
    ifFormat   : "%Y-%m-%d",
    showsTime  : false,
    timeFormat : "24"
});
Calendar.setup({
    inputField : "J_time_end",
    ifFormat   : "%Y-%m-%d",
    showsTime  : false,
    timeFormat : "24"
});
$('.J_preview').preview(); //查看大图
$('.J_cate_select').cate_select({top_option:lang.all}); //分类联动
$('.J_tooltip[title]').tooltip({offset:[10, 2], effect:'slide'}).dynamic({bottom:{direction:'down', bounce:true}});

});