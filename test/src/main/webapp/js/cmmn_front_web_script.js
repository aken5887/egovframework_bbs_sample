/**
 * 
 */

function Get_list_view(s_code,param1,param2,param3,param4,param5) {
	
	var val = s_code.toLowerCase();
	
	if(val.indexOf('s') != -1){
		s_code = s_code.toLowerCase();
	}
	
	if(typeof param5 != 'undefined' && param5 != ''){
		var encodeKeyword = encodeURI(param5);
		param1 += '&keyword=' + encodeKeyword;
	}
	
	if (s_code == "s043"){
		location.href ="/news/story_news_list.do?bs_code="+s_code+"&sel="+param1+"&page="+param2;
	}else if(s_code == "daily" || s_code == "C070" || s_code == "C071" || s_code == "C072" || s_code == "C073" || s_code == "C046" || s_code == "C045" || s_code == "C058"){
		location.href ="/news/news_tv.do?s_code="+s_code+"&page="+param2+"&SchYear="+param3+"&SchMonth=";		
	}else if(s_code == "s046"){
		location.href ="/news/hot_news_list.do?bs_code="+s_code+"&sel="+param1+"&page="+param2;	
	}else if(s_code == "s017"){
		location.href ="/briefing/brief_gongbo.do?"+param1;	
	}else if(s_code == "s003"){
		location.href ="/briefing/brief_sigun.do?"+param1;	
	}else if(s_code == "W001"){
		location.href ="/news/webtoon_list.do?"+param1;	
	}else if(s_code == "s018"){
		location.href ="/briefing/brief_psigun.do?"+param1;	
	}else if(s_code == "s013"){
		location.href ="/briefing/brief_gg.do?"+param1;	
	}else if(s_code == "s026"){
		location.href ="/briefing/brief_ggi.do?"+param1;	
	}else if(s_code == "s027"){
		location.href ="/briefing/brief_today.do?"+param1;	
	}else if(s_code == "s028"){
		location.href ="/briefing/brief_gongbo.do?"+param1;	
	}else if(s_code == "C076" || s_code == "C083" || s_code == "C071" || s_code == "C056" || s_code == "C094" || s_code == "C116"){
		location.href ="/news/domin_list.do?s_code="+s_code+"&page="+param2+"&SchYear="+param3+"&SchMonth="+param4+"&c_type=N";	
	}else if(s_code == "s011"){
		location.href ="/valley_list.do?"+param1;	
	}else {
		location.href ="/news/news_list.do?s_code="+s_code+"&page="+param2+"&SchYear="+param3+"&SchMonth="+param4+"&c_type=N";
	}
	
}

function Get_list_view_M(s_code,param1,param2,param3,param4) {
	location.href ="/news/news_tv.do?s_code="+s_code+"&page="+param2+"&SchYear="+param3+"&SchMonth="+param4+"&c_type=M";
}

function Go_Link_View(param,param2,param3) { //v2.0
	
	if (param3 == "S017") {
		location.href = "/briefing/brief_gongbo_view.do?BS_CODE=" + param3
				+ "&number=" + param;
	} else if (param3 == "S003") {
		location.href = "/briefing/brief_sigun_view.do?BS_CODE=" + param3
				+ "&number=" + param;
	} else if (param3 == "S018") {
		location.href = "/briefing/brief_psigun_view.do?BS_CODE=" + param3
				+ "&number=" + param;
	} else if (param3 == "S013") {
		location.href = "/briefing/brief_gg_view.do?BS_CODE=" + param3
				+ "&number=" + param;
	} else if (param3 == "S015") {
		location.href = "/news/news_policy_view.do?BS_CODE=" + param3
				+ "&number=" + param;
	} else if (param3 == "S016") {
		location.href = "/news/news_policy_view.do?BS_CODE=" + param3
				+ "&number=" + param;
	} else if (param3 == "S042") {
		location.href = "/news/sports_news_view.do?BS_CODE=" + param3
				+ "&number=" + param;
	} else if (param3 == "S043") {
		location.href = "/news/story_news_view.do?BS_CODE=" + param3
				+ "&number=" + param;
	} else if (param3 == "C070" || param3 == "C071" || param3 == "C072"
			|| param3 == "C073") {
		location.href = "/news/news_detail_m.do?number=" + param + "&s_code="
				+ param3;
	} else if (param3 == "S044") {
		location.href = "/news/official_news_view.do?BS_CODE=" + param3
				+ "&number=" + param;
	} else if (param3 == "S046") {
		location.href = "/news/hot_news_view.do?BS_CODE=" + param3
				+ "&number=" + param + "&sel=" + param2;
	} else if (param3 == "W001") {
		location.href = "/news/webtoon_view.do?number=" + param
				+ "&&page=1&Cat=&Cat2=";
	} else {
		if (param2 == "M") {
			if (param3 == "C048" || param3 == "C049" || param3 == "C052") {
				param3 = "daily";
			}else{
				param3 = param3;
			}
			location.href = "/news/news_detail_m.do?number=" + param
					+ "&s_code=" + param3;
		} else {
			location.href = "/news/news_detail.do?number=" + param
					+ "&s_code=" + param3;
		}
	}
	
}

function Go_Page_View_RC(param,param2,param3,param4,param5,param6) { //v2.0
	if (param2 == "M"){
		if (param3 == "C048" || param3 == "C049" || param3 == "C052") {
			param3 = "daily";
		}else{
			param3 = param3;
		}
		location.href ="/news/news_detail_m.do?number="+param+"&s_code="+param3+"&page="+param4+"&SchYear="+param5+"&SchMonth="+param6;
	}else{
		location.href ="/news/news_detail.do?number="+param+"&s_code="+param3+"&page="+param4+"&SchYear="+param5+"&SchMonth="+param6;
	}
}

function goArticleSNS(mode,url){		
		
		var frm = document.frmSNS;
		var cont = frm.cont.value;
		var desc_t = frm.desc.value;
		var thum = frm.thum.value;
		var thum_fb = frm.thum_fb.value;
		var filter = "win16|win32|win64|mac";

		switch(mode){
			case "twitter":
				var link = "http://twitter.com/intent/tweet?text="+encodeURIComponent(cont)+' '+encodeURIComponent(url);
				window.open(link,"twitter",'location=1,scrollbars=auto,resizable=no,top=25,left=100,width=800,height=400');
			break;
                        
//			case "facebook":
//				var link = 'https://www.facebook.com/sharer/sharer.php?s=100&display=popup&p[url]='+encodeURIComponent(url);
//				window.open(link,"facebook",'width=640,height=500,left=100,top=25,location=no,menubar=no,status=no,scrollbars=no,resizable=no,toolbar=no');
//			break;
			case "facebook":
				var shareURL = encodeURIComponent(url);
				var popOption = "width=640,height=500,left=100,top=25,location=no,menubar=no,status=no,scrollbars=no,resizable=no,toolbar=no";
				var url = "https://www.facebook.com/dialog/share?app_id=140586622674265&display=popup&href="+shareURL;
				window.open(url,"facebook",popOption);
			break;

			case "metooday":
				var link = 'http://me2day.net/posts/new?new_post[body]="' + encodeURIComponent(cont) + '":' + encodeURIComponent(url) + '&new_post[tags]=' + encodeURIComponent("경기도뉴스포털");
				window.open(link,"metooday",'location=1,scrollbars=auto,resizable=no,top=25,left=100,width=1024,height=800');
			break;

			case "yozm":
				var link = "http://yozm.daum.net/api/popup/prePost?sourceid=54&link=" + encodeURIComponent(url) + "&prefix=" + encodeURIComponent(cont) + "&parameter="; 
				window.open(link,"yozm",'location=1,scrollbars=auto,resizable=no,top=25,left=100,width=640,height=500');
			break;

			case "cyworld":
				var link = 'http://csp.cyworld.com/bi/bi_recommend_pop.php?url='+encodeURIComponent(url)+'&title_nobase64='+encodeURIComponent(cont)+'&thumbnail=&summary_nobase64='+encodeURIComponent(cont)+'&writer='+encodeURIComponent("경기도뉴스포털");
				window.open(link,"cyworld",'location=1,scrollbars=auto,resizable=no,top=25,left=100,width=600,height=500');
			break;

			case "naver":
				var link = 'http://share.naver.com/web/shareView.nhn?url='+encodeURI(encodeURIComponent(url))+'&title='+encodeURIComponent(cont);
				window.open(link,"naver",'location=1,scrollbars=auto,resizable=no,top=25,left=100,width=500,height=600');
			break;

			case "google2":
				var link = 'http://www.google.com/bookmarks/mark?op=add&title='+encodeURIComponent(cont)+'&bkmk='+encodeURIComponent(url);
				window.open(link,"google2",'location=1,scrollbars=auto,resizable=no,top=25,left=100,width=1024,height=800');
			break;
			
			case "kakao":
				 if( navigator.platform  ){
					if( filter.indexOf(navigator.platform.toLowerCase())<0 ){
						kakao.link("talk").send({
							  msg : cont,
							  url : url,  
							  appid : "gnews.gg.go.kr",
							  appver : "2.0",
							  appname : "경기도뉴스포털",
							  type : "link"
						  });
					}else{
						alert("모바일웹에서만 지원하는 기능입니다.");
					}
				}
				break;
			
			case "kaostory":
				var link = 'https://story.kakao.com/share?text='+encodeURIComponent(cont)+'&url='+encodeURIComponent(url);
				window.open(link,"kaostory",'location=1,scrollbars=auto,resizable=no,top=25,left=100,width=640,height=500');
				break;

			default:
			break;
		}
	}

function info_print() {



	var initBody = document.body.innerHTML;

	window.onbeforeprint = function () {



		document.body.innerHTML = document.getElementById("web_print").innerHTML;

	}

	window.onafterprint = function () {



		document.body.innerHTML = initBody;



	}

	window.print();

}

//전체 검색
function fn_go_total_search(){
	
	//alert($("#search_keyword").val());
	var keyword = $("#search_keyword").val();
	
	/*for(i=0; i<document.GNBsearchForm.elements.length; i++) {
		var el = document.GNBsearchForm.elements[i];
		
		alert(el.type);
		alert(el.value);
		alert(el.name);
		
		return;
	}*/
	
	if(typeof keyword != 'undefined' && keyword != null && keyword != ''){
		keyword = encodeURI(keyword);
		document.GNBsearchForm.search_word.value = keyword;
		document.GNBsearchForm.kwd.value = keyword;
		$('catagorySelect').css('display','block');
		document.GNBsearchForm.action = "/search/search.do";
		document.GNBsearchForm.submit();
	}else{
		keyword = '';
		alert('검색어를 입력해 주세요.');
		return;
	}

}

//달력 유효성 체크

/*
 * 날짜포맷에 맞는지 검사
 */
function isDateFormat(d) {
    var df = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
    return d.match(df);
}

/*
 * 윤년여부 검사
 */
function isLeaf(year) {
    var leaf = false;

    if(year % 4 == 0) {
        leaf = true;

        if(year % 100 == 0) {
            leaf = false;
        }

        if(year % 400 == 0) {
            leaf = true;
        }
    }

    return leaf;
}

/*
 * 날짜가 유효한지 검사
 */
function isValidDate(d) {
    // 포맷에 안맞으면 false리턴
    if(!isDateFormat(d)) {
        return false;
    }

    var month_day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var dateToken = d.split('-');
    var year = Number(dateToken[0]);
    var month = Number(dateToken[1]);
    var day = Number(dateToken[2]);
    
    // 날짜가 0이면 false
    if(day == 0) {
        return false;
    }

    var isValid = false;

    // 윤년일때
    if(isLeaf(year)) {
        if(month == 2) {
            if(day <= month_day[month-1] + 1) {
                isValid = true;
            }
        } else {
            if(day <= month_day[month-1]) {
                isValid = true;
            }
        }
    } else {
        if(day <= month_day[month-1]) {
            isValid = true;
        }
    }

    return isValid;
}

$(function(){
	$('.viewForm').on('click', function(){
		$('.totalSearch').fadeIn('fast');
		$('body').css({'overflow-y':'hidden'});
		$("#search_keyword").focus();
	})
});



