$(function(){
				//qq移入出现二维码
				$(".p1").mousemove(function(){
					$(".qq1").css("display","block");				
				})
				$(".qq1").mousemove(function(){
					$(".qq1").css("display","block");
				})
				//qq移出二维码消失
				$(".p1").mouseleave(function(){
					$(".qq1").css("display","none");
				})
				//vx移入出现二维码
				$(".p2").mousemove(function(){
					$(".vx1").css("display","block");				
				})
				$(".vx1").mousemove(function(){
					$(".vx1").css("display","block");
				})
				//vx移出二维码消失
				$(".p2").mouseleave(function(){
					$(".vx1").css("display","none");
				})
				//底部qq移入出现二维码
				$(".p3").mousemove(function(){
					$(".qq2").css("display","block");				
				})
				$(".qq2").mousemove(function(){
					$(".qq2").css("display","block");
				})
				//底部qq移出二维码消失
				$(".p3").mouseleave(function(){
					$(".qq2").css("display","none");
				})
				//底部vx移入出现二维码
				$(".p4").mousemove(function(){
					$(".vx2").css("display","block");				
				})
				$(".vx2").mousemove(function(){
					$(".vx2").css("display","block");
				})
				//vx移出二维码消失
				$(".p4").mouseleave(function(){
					$(".vx2").css("display","none");
				})
				//悬浮点击
				$(".box6-top li:nth-child(1)").mousedown(function(){
					var scroll_offset = $("#b1").offset().top;
					$("body,html").animate({
						scrollTop: scroll_offset 
					},500)		
				})			
				$(".box6-top li:nth-child(2)").mousedown(function(){
					var scroll_offset = ($("#b2").offset().top);
					$("body,html").animate({
						scrollTop: scroll_offset 
					},500)		
				})
				$(".box6-top li:nth-child(3)").mousedown(function(){
					var scroll_offset = $("#b3").offset().top;
					$("body,html").animate({
						scrollTop: scroll_offset 
					},500)		
				})
				$(".box6-top li:nth-child(4)").mousedown(function(){
					var scroll_offset = ($("#b4").offset().top)-80;
					$("body,html").animate({
						scrollTop: scroll_offset 
					},500)		
				})
				$(".box6-top li:nth-child(5)").mousedown(function(){
					var scroll_offset = $("#b5").offset().top;
					$("body,html").animate({
						scrollTop: scroll_offset 
					},500)		
				})
				
				
				//顶部悬浮
				var t1=setInterval(function(){
					if($(window).scrollTop()>=70){
						$(".box6").css("top","0");					
						$(".box6-top li").css("color","black");
						if($(window).scrollTop()>=$("#b1").offset().top){
						$(".box6-top li").css("color","black");
						$(".box6-top li:nth-child(1)").css("color","#ffbc04");	
						
						}		
						if($(window).scrollTop()>=$("#b2").offset().top){
							$(".box6-top li").css("color","black");
							$(".box6-top li:nth-child(2)").css("color","#ffbc04");
							$(".box2-left").css("left","0");
							$(".box2-right").css("right","10%");
						}
						if($(window).scrollTop()>=$("#b3").offset().top){
							$(".box6-top li").css("color","black");
							$(".box6-top li:nth-child(3)").css("color","#ffbc04");
							$(".box3-left").css("left","0");
							$(".box3-right").css("right","0");
						}
						if($(window).scrollTop()>=($("#b4").offset().top)-105){						
							$(".box6-top li").css("color","black");
							$(".box6-top li:nth-child(4)").css("color","#ffbc04");
							$(".box4-left").css("left","0");
							$(".box4-right").css("right","0");
						}
						if($(window).scrollTop()>=$("#b5").offset().top){
							$(".box6-top li").css("color","black");
							$(".box6-top li:nth-child(5)").css("color","#ffbc04");
						}
					}else{
						$(".box6").css("top","-70px");
					}			
				},100)

				//移动端菜单
				$(".box1-caidan p:first-child").mousedown(function(){
					$(".box1-cd").css("right","0");
					$(".box1-caidan p:first-child").css("display","none");
					$(".box1-caidan p:last-child").css("display","block");
				})
				$(".box1-caidan p:last-child").mousedown(function(){
					$(".box1-cd").css("right","-1200px");
					$(".box1-caidan p:last-child").css("display","none");
					$(".box1-caidan p:first-child").css("display","block");
				})
				
				//移动端点击
				$(".box1-cd li:nth-child(1)").mousedown(function(){
					var scroll_offset = $("#b1").offset().top;
					$("body,html").animate({
						scrollTop: scroll_offset 
					},500)
					$(".box1-cd").css("right","-1200px");
					$(".box1-caidan p:last-child").css("display","none");
					$(".box1-caidan p:first-child").css("display","block");
				})
				$(".box1-cd li:nth-child(2)").mousedown(function(){
					var scroll_offset = $("#b2").offset().top;
					$("body,html").animate({
						scrollTop: scroll_offset 
					},500)	
					$(".box1-cd").css("right","-1200px");
					$(".box1-caidan p:last-child").css("display","none");
					$(".box1-caidan p:first-child").css("display","block");
				})
				$(".box1-cd li:nth-child(3)").mousedown(function(){
					var scroll_offset = $("#b3").offset().top;
					$("body,html").animate({
						scrollTop: scroll_offset 
					},500)	
					$(".box1-cd").css("right","-1200px");
					$(".box1-caidan p:last-child").css("display","none");
					$(".box1-caidan p:first-child").css("display","block");
				})
				$(".box1-cd li:nth-child(4)").mousedown(function(){
					var scroll_offset = $("#b4").offset().top;
					$("body,html").animate({
						scrollTop: scroll_offset 
					},500)	
					$(".box1-cd").css("right","-1200px");
					$(".box1-caidan p:last-child").css("display","none");
					$(".box1-caidan p:first-child").css("display","block");
				})
				$(".box1-cd li:nth-child(5)").mousedown(function(){
					var scroll_offset = $("#b5").offset().top;
					$("body,html").animate({
						scrollTop: scroll_offset 
					},500)
					$(".box1-cd").css("right","-1200px");
					$(".box1-caidan p:last-child").css("display","none");
					$(".box1-caidan p:first-child").css("display","block");
				})
			})