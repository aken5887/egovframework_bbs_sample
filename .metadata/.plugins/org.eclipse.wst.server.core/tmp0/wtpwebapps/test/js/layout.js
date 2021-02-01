$(function(){
	//공통 : GNB
	$("ul.nav>li").hover(function(){    
        $(this).addClass("hover");
        $('ul:first',this).css('display', 'block');    
		$(".sub_menu_container").css('display', 'block');    
    }, function(){    
        $(this).removeClass("hover");
        $('ul:first',this).css('display', 'none');    
		$(".sub_menu_container").css('display', 'none');    
    });
	
	//공통 : selectbox를 위한 selectric 플러그인
	if ( $('.sel').length ) { 	//컨텐츠의 기본 셀렉트박스
		$('.sel').selectric({
		   inheritOriginalWidth: true, //텍스트 길이에 따라 selectbox의 길이가 가변적임
		});
	}
	
	if ( $('.sel02').length ) { //search_area 영역의 selectbox를 위한 클래스 선언 
		$('.sel02').selectric({ 		   
		});
	}
	//공통 :  datepicker 
	if ( $('.datepickerSday, .datepickerEday').length ) { 
		console.log('date');
		$( ".datepickerSday, .datepickerEday" ).datepicker({
			dateFormat: 'yy-mm-dd',
			monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			dayNames: ['일','월','화','수','목','금','토'],
			dayNamesShort: ['일','월','화','수','목','금','토'],
			dayNamesMin: ['일','월','화','수','목','금','토'],
			showMonthAfterYear: true,
			yearSuffix: '년',

			changeYear:true,//년도 월 셀렉트
			changeMonth:true,
			buttonText:'달력',
			showOn:"both",buttonImage: "/img/icon_calendar.png",buttonImageOnly:true,
		});

		//$('.datepickerSday').val(moment().add('month',-1).add('day',1).format('YYYY-MM-DD'));
		//$('.datepickerEday').val(moment().format('YYYY-MM-DD'));
	}

	//공통 : 그래프 시간별,일별,주별,월별 선택 tab	
	$('.graph_tab li').on('click',function() {	
        if ($(this).hasClass("on")) {            
        } else {				
			$(this).addClass('on');
			$(this).siblings().removeClass('on');			
        }
		
	})
	
	// 공통 : search area 영역
	$('.search_area .sel_box .sel_label').on('click',function(){
		
		if ($(this).hasClass('selected')) {	//선택된 창이 이미 펼쳐저 있는 경우 접고 끝낸다.
			$(this).siblings('.section_category').stop().hide();
			$(this).removeClass('selected');

		} else {
			$('.sel_box .sel_label').removeClass('selected');
			$('.section_category').stop().hide(); //다른sel_box가 열려있는 경우 모두 접는다.
			
			$(this).addClass('selected');	//클릭한 sel_box에 'selected'클래스 부여
			$(this).siblings('.section_category').stop().show();
		
		}
		return false;
	})
	
	$('.section_category .btn_closeC').on('click',function() {
		$('.section_category').hide();
		$('.sel_box .sel_label').removeClass('selected');
	})

	$('.section_category .cate_step li').on('click',function() {
		if (!$(this).hasClass('on')){
			$(this).addClass('on').siblings().removeClass('on');
		}
	})

	 $(document).click(function (e){
		var container = $(".section_category");
		if( container.has(e.target).length === 0) {
			$('.sel_box .sel_label').removeClass('selected');
			container.stop().hide();
			console.log('close');
		}
	});
	
	//테이블 리스트 중, checkbox가 있는 리스트에서 all을 선택할 경우
	$('.checkAll').click(function() {
		var t_name = $(this).closest('table').attr('id');		
		//console.log(t_name);
		var sub_chk = "#" + t_name + " .checkMe"
		
		if ($(this).is(":checked")) {
			$(sub_chk).prop('checked', true);			
		} else {
			$(sub_chk).prop('checked', false);			
		}
	})
	//테이블 리스트 중, 체크박스에 모두 체크된 경우, 전체선택도 체크, 하나이상 체크되지 않은경우 전체선택 해제
	$('.checkMe').click(function() {
		var t_name = $(this).closest('table').attr('id');			
		var all_chk = "#" + t_name + " .checkAll"		
		var cnt_chk = $('#'+t_name+' .checkMe').length;
		var cnt_chked = $('#'+t_name+' .checkMe:checked').length;
		
		if(cnt_chk == cnt_chked) {
			$(all_chk).prop('checked', true);
		} else {
			$(all_chk).prop('checked', false);
		}
	})
	
	//(s) 알림 설정
	//알림팝업 > 탭메뉴
	$('.tabs li').on('click',function() {
		$(this).addClass('on').siblings().removeClass('on');
		var tab_idx = $(this).index();
		$('.tab_pane').eq(tab_idx).siblings().hide();
		$('.tab_pane').eq(tab_idx).show();
		
	})

	//공통 : 알림팝업 > 실시간 알림 ON/OFF
	$('.btn_realtime').on('click',function() {
		$(this).toggleClass('on');
	});
	$('.btn_realtime').on('click',function() {
		$(this).toggleClass('on');
	});
	
	//공통 : 실시간 알림 > 닫기버튼
	$('.realtime_wrap .btn_close').on('click',function() {
		//$('.realtime_wrap').slideUp('200');		
		$('.realtime_wrap').hide();	
	});
	
	//nav > 알림설정: 라디오버튼 선택여부에 따라 보여지는 화면 변경
    $("input:radio[name='radio_keyword']").on('change',function() {
		var $rad = $("input:radio[name='radio_keyword']");
		var ridx = $rad.index($rad.filter(':checked'));	  
		//console.log(ridx);
		if (ridx == 0) {
			$('.keyword_wrap').hide();
		} else if (ridx == 1) {
			$('.keyword_wrap').show();
		}
	})
	
	//nav > 알림설정 > 관심 키워드 알림 선택
	$('.keyword_wrap>.keyword_list>.word').on('click',function() {		
		if ($(this).hasClass('on')) {	//관심키워드 해제
			$(this).removeClass('on');
			$('.keyword_wrap>.keyword_select').children('#'+$(this).attr('id')).remove();			
			$(".keyword_select:not(:has(span))").append('<p class="info_txt">관심 키워드를 선택하세요.</p>');
			
		} else {	//관심 키워드 선택
			//$(".keyword_select:contains('관심 키워드를 선택하세요.')").empty();	//초기 안내문구가 있는경우, 안내문구를 삭제하고 관심키워드를 추가한다.
			 $(".keyword_select").find(".info_txt").remove();	//초기 안내문구가 있는경우, 안내문구를 삭제하고 관심키워드를 추가한다.
			$(this).clone().appendTo(".keyword_select");		//선택된 키워드를 복제하고 클래스 "on"부여함.
			$(this).addClass('on');
		}
	})
	
	//nav > 알림설정 > 관심 키워드 알림 : 선택된 키워드 해제
	//clone(복제)된 경우, 아래와 같이 호출함
	$(document).on("click",".keyword_wrap>.keyword_select>span",function(){  	
		$(this).remove();
		$('.keyword_wrap>.keyword_list').children('#'+$(this).attr('id')).removeClass('on');
		$(".keyword_select:not(:has(span))").append('<p class="info_txt">관심 키워드를 선택하세요.</p>');
	})
	
	//nav > 알림설정 > 관심 키워드 알림 > 전체해제
	$('.btn_keyword_all').on('click',function() {
		$('.keyword_wrap>.keyword_select').empty();
		$(".keyword_select:not(:has(span))").append('<p class="info_txt">관심 키워드를 선택하세요.</p>');
		$('.keyword_wrap>.keyword_list>.word').removeClass('on');
	})
	
	$('.keyword_sort li').on('click',function() {
		$(this).addClass('on').siblings().removeClass('on');
	})
	/*(e) 알림 설정 */

	// 팝업신규등록 | 팝업위치 선택
	$('.selectYear').click(function(){
		$('.yyList').slideToggle();
		$(this).toggleClass('on');
	})
	
	// 연도 선택
	$('.keyword_sort li').on('click',function() {
		$(this).addClass('on').siblings().removeClass('on');
	})

	var mzPrevList = $(".mzPrevList ul").bxSlider({
		controls : true,
		auto: false,
		autoControls: false,
		stopAutoOnClick: true,
		pager: false,
		maxSlides : 4,
		moveSlides : 1,
		slideMargin : 30,
		autoHover : true,
		slideWidth: 150,
		shrinkItems : true,
		prevText : "<",
		nextText : ">",
		touchEnabled : false,
		//웹접근성 추가
		onSliderLoad: function(){
			$(".bx-clone").find("a").prop("tabIndex","-1");
		},
		onSlideAfter: function(){
			$(".mmzSlider").children("div").each(function(){
				if($(this).attr("aria-hidden") == "false"){
					$(this).find("a").attr("tabIndex","0");
				}else{
					$(this).find("a").attr("tabIndex","-1");
				}
			});
		}
	});
	// 웹 접근성
	$('.mzPrevList ul').focusin(function () {
		mainMmz.stopAuto();
	});

	$(".sliderWrapper").bxSlider({
		controls : false,
		auto: true,
		pause : 6000,
		autoControls: false,
		autoHover: true,
		pager: true,
		touchEnabled : false
	})

	var mainMmz = $(".mmzSlider").bxSlider({
		controls : false,
		auto: true,
		autoControls: true,
		stopAutoOnClick: true,
		autoControlsCombine: true,
		pager: true,
		touchEnabled : false,
		pause: 5000,
		startText : '▶',
		stopText : '||',
		//웹접근성 추가
		onSliderLoad: function(){
			//$(".bx-clone").find("a").prop("tabIndex","-1");
			$(".mmzSlider .article").find("a").prop("tabIndex","-1");
		},
		onSlideAfter: function(){
			$(".mmzSlider").children("div").each(function(){
				if($(this).attr("aria-hidden") == "false"){
					$(this).find("a").attr("tabIndex","0");
				}else{
					$(this).find("a").attr("tabIndex","-1");
				}
			});
		}
	});
	// 웹 접근성
	$('.mmzSlider a').focusin(function () {
		mainMmz.stopAuto();
	});

	

	var pzoneSlider = $(".pzoneSlider").bxSlider({
		controls : false,
		auto: true,
		autoControls: true,
		stopAutoOnClick: true,
		autoControlsCombine: true,
		pager: true,
		touchEnabled : false,
		pause: 5000,
		startText : '▶',
		stopText : '||',
		//웹접근성 추가
		onSliderLoad: function(){
			//$(".bx-clone").find("a").prop("tabIndex","-1");
			$(".pzoneSlider .article").find("a").prop("tabIndex","-1");
		},
		onSlideAfter: function(){
			$(".pzoneSlider").children("div").each(function(){
				if($(this).attr("aria-hidden") == "false"){
					$(this).find("a").attr("tabIndex","0");
				}else{
					$(this).find("a").attr("tabIndex","-1");
				}
			});
		}
	});
	// 웹 접근성
	$('.pzoneSlider a').focusin(function () {
		pzoneSlider.stopAuto();
	});

	$('.viewAllTree').on('click', function(){
		$('.allMenu').fadeIn('fast');
		$('.allMenu').css({'overflow':'auto'})
		$('body').css({'overflow-y':'hidden'});
		$(".allMenu .menu li:first-child a").focus();
		return false;
	})

	$('.closeAllMenu').on('click', function(){
		$('.allMenu').fadeOut('fast');
		$('body').css({'overflow-y':'auto'});
	})

	$('.viewForm').on('click', function(){
		$('.totalSearch').fadeIn('fast');
		$('body').css({'overflow-y':'hidden'});
		$("#search_keyword").focus();
	})
	
	$('.closeSearch').on('click', function(){
		$('.totalSearch').fadeOut();
		$('body').css({'overflow-y':'auto'});
		$(".viewForm").focus();
	})

	$('.allMenu .menu > ul > li').on('click',function(){	
		if (!$(this).hasClass('active')){
			$(this).addClass('active').siblings().removeClass('active');
			//$(this).children('ul').slideDown();
		} else {
			$(this).removeClass('active');
			//$(this).children('ul').slideUp();
		}
	})

	// 메인 - 오늘의 보도자료 불러오기
	$('#refreshWrap').load('/news/todaynews.do');
	// 메인 - 오늘의 보도자료 수동 새로고침
	$(".refreshBtn").click(function() {
		$('#refreshWrap').load('/news/todaynews.do').fadeIn();
	})

	// 최상단 알림 영역의 시청하기 버튼 클릭 시 iframe 재생 창 발생
	$('.movieFlex .viewMovie').on('click', function(){
		$('.movieBox').fadeIn('fast');
		$('body').css({'overflow-y':'hidden'});
		return false;
	})
	// 최상단 알림 영역의  iframe 재생 창 X 버튼 클릭 시 레이어 창 닫힘 (닫히면서 일시정지됨-363라인 참조)
	$('.movieBox .closeMovieBox').on('click', function(){
		$('.movieBox').fadeOut('fast');
		$('body').css({'overflow-y':'auto'});
		return false;
	})
	// 헤더영역(시그니처영역)  버튼 클릭 시 알림영역(내부 콘텐츠 포함) 표시
	$('.controllerTopToggle a').on('click', function(){
		$('.toggleTop').slideDown(600);
		$('.movieFlex').fadeIn();
		$('.controller').show();
		return false;
	})
	// 공지보기 클릭 시 알림 영역에서 공지 콘텐츠를 보여줌
	$('.openNoticeToggle').on('click', function(){
		$('.noticeImage').show();
		$('.onAirContent').hide();
		return false;
	})
	// 생방송보기 클릭 시 알림 영역에서 생방송 콘텐츠를 보여줌
	$('.openMovieToggle').on('click', function(){
		$('.noticeImage').hide();
		$('.onAirContent').show();
		return false;
	})

})


jQuery(document).ready(function($){
 
	vimeo_play_and_stop();
	
	function vimeo_play_and_stop(){
	
	    var f = $("#vimeo_iframe");
	            
	    if(!f || !f.attr("src") ) return;
	            
	    var url = f.attr("src").split("?")[0];
	                           
	    $("#play").click(function(){
	        
            var data = {
	            method : "setVolume",
	            value : 10
	        }
	                
	        f[0].contentWindow.postMessage(JSON.stringify(data), url); 
	            
	        var data = { 
	            method: "play",
	            value: 1 
	        };
	                
	        f[0].contentWindow.postMessage(JSON.stringify(data), url);
	                
	    });
	            
	    $("#stop").click(function(){
	               
	        var data = { 
	            method: "pause",
	            value: 1 
	        };
	                
	        f[0].contentWindow.postMessage(JSON.stringify(data), url);
	                
	    });
	}

	// 글로벌 메뉴 키보드 동작
	$('.menu> ul>li').keyup(function() {
		$(this).children('ul').show().parent().siblings().children('ul').hide();
	});
	
	$('.menu .sub').mouseleave(function(){
		$(this).hide();
	});
	
});

function setCookie( name, value, expiredays ) {
	var todayDate = new Date();
	todayDate.setDate( todayDate.getDate() + expiredays ); 
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

// 최상단 알림 닫기 버튼
function closePop() {
	if ( document.pop_form.chkbox.checked ){
		setCookie( "maindiv", "done" , 1 );
	}
	$('.toggleTop').slideUp(600);
	$('.movieFlex').fadeOut();
	$('.controller').hide();
	$('.controllerTopToggle').show();

}