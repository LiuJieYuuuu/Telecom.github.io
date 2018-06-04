// JavaScript Document
var marquee=0;
		
		$("document").ready(function(){
			$("#header_go").mouseenter(function(){
				$("#happy_go").css("display","block");
			});
			$("#happy_go").mouseleave(function(){
				$("#happy_go").css("display","none");
			});
			$("#header_go_m").mouseenter(function(){
				$("#happy_go_m").css("display","block");
			});
			$("#header_go_m").mouseleave(function(){
				$("#happy_go_m").css("display","none");
			});
			$("#header_go_x").mouseenter(function(){
				$("#happy_go_x").css("display","block");
			});
			$("#happy_go_x").mouseleave(function(){
				$("#happy_go_x").css("display","none");
			});
			$(".adver").mouseenter(function(){
				$("#scroll_ad").removeClass("scroll_move");
			});
			$(".adver").mouseleave(function(){
				$("#scroll_ad").addClass("scroll_move");
			});
			
			
			$(".b_r_1 > li:first").mouseenter(function(){
				$(this).removeClass("b_r_11");
				$(this).addClass("b_r_11h");
				$(".b_r_1 > li:first a").css("color","#ff8200");
				
				$(".b_r_1 > li:last").removeClass("b_r_12h");
				$(".b_r_1 > li:last").addClass("b_r_12");
				$(".b_r_1 > li:last a").css("color","#999");
				
				$(".b_r_btn1").css("display","block");
				$(".b_r_btn2").css("display","block");
				
				$("#b_r_2_c").css("display","none");
				$("#b_r_2").css("display","block");
			});
			$(".b_r_1 > li:last").mouseenter(function(){
				$(this).removeClass("b_r_12");
				$(this).addClass("b_r_12h");
				$(".b_r_1 > li:last a").css("color","#ff8200");
				
				$(".b_r_1 > li:first").removeClass("b_r_11h");
				$(".b_r_1 > li:first").addClass("b_r_11");
				$(".b_r_1 > li:first a").css("color","#999");
				
				$(".b_r_btn1").css("display","none");
				$(".b_r_btn2").css("display","none");
				
				$("#b_r_2").css("display","none");
				$("#b_r_2_c").css("display","block");
			});
			
			
			$(".mm").click(function(){
				$(".mm").attr("href","https://www.baidu.com");
				$(".mm").attr("target","_blank");
			});
			$("#help").click(function(){
				$("#product").removeClass("s_specify");
				$("#help").addClass("s_specify");
			});
			$("#product").click(function(){
				$("#product").addClass("s_specify");
				$("#help").removeClass("s_specify");
			});
			
			
			
			$(".province").mouseenter(function(){
				$(".p_area").css("display","block");
			});
			
			$(".province").mouseleave(function(){
				$(".p_area").css("display","none");
			});
			$(".p_area").mouseenter(function(){
				$(".p_area").css("display","block");
			});
			$(".p_area").mouseleave(function(){
				$(".p_area").css("display","none");
			});
			
			
			$(".b_r_33_s").hover(
				function(){
					$(".b_r_33_h").slideDown(500);
				},
				function(){
					$(".b_r_33_h").slideUp(500);
				}
			);
			
			$(".b_r_33_h>ul>li").click(function(){
				var number=parseFloat($(this).html());
				$(".b_r_33_h + span").html(number);
			});
			
			
			$(".b_r_41").mouseenter(function(){
				$(this).removeClass("b_r_41_bg");
				$(this).addClass("b_r_41_bgh");
				$(this).css("color","#ff8200");
			});
			$(".b_r_41").mouseleave(function(){
				$(this).removeClass("b_r_41_bgh");
				$(this).addClass("b_r_41_bg");
				$(this).css("color","#999");
			});
			$(".b_r_42").mouseenter(function(){
				roll_stop();
			});
			$(".b_r_42").mouseleave(function (){
				roll_start();
			});
			merquee();
			rolling();
			
			$(window).scroll(function(){
				var y=$(window).scrollTop();
				var top1=(460 + y) + "px";
				$("#advertising").animate({top:top1},16);
			});
			$(".con_1_middle > a").addClass("c_m_btn");
			
			$(".c_m_2").mouseenter(function(){
				$(".con_1_middle > a").removeClass("c_m_btn");
			});
			$(".c_m_2").mouseleave(function(){
				$(".con_1_middle > a").addClass("c_m_btn");
			});
			$(".con_1_middle > a").mouseenter(function(){
				$(".con_1_middle > a").removeClass("c_m_btn");
			});
			$(".con_1_middle > a").mouseleave(function(){
				$(".con_1_middle > a").addClass("c_m_btn");
			});
			
			
			//最下方按钮转变
			$(".f_m_11 + img").click(function(){
				if($(this).attr("src").match("x.png")=="x.png"){
					$(this).attr("src","./images/s.png");
					$(".f_m_11").css("height","84px");
				}else{
					$(this).attr("src","./images/x.png");
					$(".f_m_11").css("height","64px");
				}
			});
			
			//广告消失
			$("#advertise_x").click(function(){
				$("#advertising").fadeOut(400);
			});
			
		});
		/*中央右侧下部滚动字：开始*/
		function merquee(){
			$.each($(".b_r_marquee > a"),function(){
				marquee+=$(this).width()+20;
			});
			marquee+=169;
			$(".b_r_marquee").css("width",marquee);
		}
		var roll_w=0;
		var t;
		function rolling(){
			$(".b_r_42").scrollLeft(roll_w++);
			t=setTimeout(rolling,16);
			if(roll_w==marquee)
				roll_w=0;
		}
		function roll_stop(){
			clearTimeout(t);
		}
		function roll_start(){
			setTimeout(rolling,16);
		}
		/*滚动结束*/
		
		
		/*
		中央背景图片的淡入淡出
		开始
		*/
		var number=1;
		var bg_img="#advertise_img";
		function bg_moveOut(){
			$.each($(".a_p > ul > li"),function(){
				$(this).click(function(){
					$(".a_p > ul > li").eq(number-1).removeClass("a_p_hover");
					$(bg_img+number).css("display","none");
					number=parseInt($(this).attr("rel"))+1;
					$(bg_img+number).css("display","block");
					$(".a_p > ul > li").eq(number-1).addClass("a_p_hover");
					return false;
				});
			});
			$(bg_img+number).fadeOut(200);
			$(".a_p > ul > li").eq(number-1).removeClass("a_p_hover");
			number++;
			if(number==6)
				number=1;
			$(bg_img+number).fadeIn(200);
			$(".a_p > ul > li").eq(number-1).addClass("a_p_hover");
			setTimeout("bg_moveOut()",2000);
			
		}
		/*结束*/
		
		/*中央左侧菜单栏*/
		var MenuBar=".b_m",b_cen=".b_center_",i=1,menu_h="b_mh";
		function menu(){
			var AllMenu=MenuBar+i;
			var AllCenter=b_cen+i;
			var Menu_h=menu_h+i;
//			alert($(AllCenter).outerHeight());
			if($(AllCenter).outerHeight()<420){
				$(AllCenter).css("height","418px");
			}
			$(AllMenu).hover(
				function(){
					$(AllCenter).css("display","block");
				},
				function(){
					$(AllCenter).css("display","none");
				}
			);
			$(AllCenter).hover(
				function(){
					$(this).css("display","block");
					$(AllMenu).addClass(Menu_h);
				},
				function(){
					$(this).css("display","none");
					$(AllMenu).removeClass(Menu_h);
				}
			);
			i++;
			if(i<=7)
				menu();
			else
				return false;
		}
		/*菜单栏结束*/
		
		window.onload=function(){
			menu();
			setTimeout("bg_moveOut()",2000);
		}



		//极客中间图片轮播
		var content_m1=document.getElementsByClassName("c_m_2");
		var t3,t4;
		content_m1[0].scrollLeft=403;
		function content_move_r(){
			content_m1[0].scrollLeft+=13;
			t3=setTimeout(content_move_r,16);
			if(content_m1[0].scrollLeft%403==0)
				clearTimeout(t3);
			if(content_m1[0].scrollLeft>=806)
				content_m1[0].scrollLeft=0;
		}
		function content_move_l(){
			content_m1[0].scrollLeft-=13;
			t4=setTimeout(content_move_l,16);
			if(content_m1[0].scrollLeft%403==0)
				clearTimeout(t4);
			if(content_m1[0].scrollLeft<=1)
				content_m1[0].scrollLeft=806;
		}
		
		//中央图片下方小轮播
		var body2_r=document.getElementById("b2_right1");
		body2_r.scrollLeft=1010;
		var t1,t2;
		function b2_r_move(){
			body2_r.scrollLeft+=10;
			t1=setTimeout(b2_r_move,16);
			if(body2_r.scrollLeft%1010==0)
				clearTimeout(t1);
			if(body2_r.scrollLeft>2019)
				body2_r.scrollLeft=0;
		}
		function b2_l_move(){
			body2_r.scrollLeft-=10;
			t2=setTimeout(b2_l_move,16);
			if(body2_r.scrollLeft%1010==0)
				clearTimeout(t2);
			if(body2_r.scrollLeft<1)
				body2_r.scrollLeft=2020;
		}
		
		
		//中央右侧切换滚动条
		var right_m=document.getElementById("b_r_2");
		var tt,td;
		right_m.scrollLeft=224;
		function move_r(){
			right_m.scrollLeft+=16;
			tt=setTimeout(move_r,16);
			if(right_m.scrollLeft%224==0)
				clearTimeout(tt);
			if(right_m.scrollLeft>447)
				right_m.scrollLeft=0;
		}
		function move_l(){
			right_m.scrollLeft-=16;
			td=setTimeout(move_l,16);
			if(right_m.scrollLeft%224==0)
				clearTimeout(td);
			if(right_m.scrollLeft<1)
				right_m.scrollLeft=448;
		}
		//选择区域框
		var area=document.getElementById("province");
		function redirectProvince(object){
			area.innerHTML=object.innerHTML;
		}
		//顶部搜索框默认内容
		function blurr(object){
			object.value="iPhone 7";
		}
		function focuss(object){
			object.value="";
		}
	