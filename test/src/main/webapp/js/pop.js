function layer_pop_open(w,h,lname,ltitle,lurl,opt,sc){var x=0;var y=0;if(opt=="CENTER"){x=(screen.availWidth/2)-(w/2)-150;y=(screen.availHeight/2)-(h/2)-100-100;}else if(opt=="MOUSE"){x=event.clientX;y=event.clientY;}else{x=20;y=20;}
var poptxt="";poptxt=poptxt+"<table width=\"100%\" height=\"100%\" cellspacing=\"1\" cellpadding=\"0\" bgcolor=\"#000000\">";poptxt=poptxt+"<tr>";poptxt=poptxt+"<td bgcolor=\"#EFEFEF\" height=\"20\">";poptxt=poptxt+"<table width=\"100%\" height=\"100%\" cellspacing=\"2\" cellpadding=\"0\">";poptxt=poptxt+"<tr>";poptxt=poptxt+"<td>&nbsp;<b>"+ltitle+"</b></td>";poptxt=poptxt+"<td width=\"20\"><a href=\"javascript:layer_pop_close('"+lname+"');\"><img src=\"/common/BtnLayerClose.gif\" border=\"0\"></a></td>";poptxt=poptxt+"</tr>";poptxt=poptxt+"</table>";poptxt=poptxt+"</td></tr><tr>";poptxt=poptxt+"<td bgcolor=\"#FFFFFF\">";poptxt=poptxt+"<iframe width=\"100%\" height=\"100%\" scrolling=\""+sc+"\" name=\""+lname+"_frm\" frameborder=\"0\" src=\""+lurl+"\"></iframe>";poptxt=poptxt+"</td></tr></table>";eval("document.all."+lname).style.display="block";eval("document.all."+lname).style.top=y+"px";eval("document.all."+lname).style.left=x+"px";eval("document.all."+lname).style.width=w+"px";eval("document.all."+lname).style.height=h+"px";eval("document.all."+lname).innerHTML=poptxt;}
function layer_pop_close(lname){eval("window."+lname+"_frm").location.href="about:blank";eval("window."+lname).style.display="none";}
function pop_open(w,h,lurl,opt,sc){var x=0;var y=0;if(opt=="CENTER"){x=(screen.availWidth/2)-(w/2);y=(screen.availHeight/2)-(h/2);}else if(opt=="MOUSE"){x=event.clientX;y=event.clientY;}else if(opt=="TL"){x=0;y=0;}
var t="";t=t+"scrollbars="+sc+",";t=t+"toolbar=no,";t=t+"location=no,";t=t+"resizable=no,";t=t+"status=no,";t=t+"menubar=no,";t=t+"resizable=no,";t=t+"width="+w+",";t=t+"height="+h+",";t=t+"left="+x+",";t=t+"top="+y;t=t+"";window.open(lurl,'popwin',t);}
function pop_open2(w,h,lurl,opt,sc){var x=0;var y=0;if(opt=="CENTER"){x=(screen.availWidth/2)-(w/2);y=(screen.availHeight/2)-(h/2);}else if(opt=="MOUSE"){x=event.clientX;y=event.clientY;}else if(opt=="TL"){x=0;y=0;}
var t="";t=t+"scrollbars="+sc+",";t=t+"toolbar=no,";t=t+"location=no,";t=t+"resizable=no,";t=t+"status=no,";t=t+"menubar=no,";t=t+"resizable=no,";t=t+"width="+w+",";t=t+"height="+h+",";t=t+"left="+x+",";t=t+"top="+y;t=t+"";window.open(lurl,'popwin2',t);}
function pop_img(w,h,lurl,sc){var x=(screen.availWidth/2)-(w/2);var y=(screen.availHeight/2)-(h/2);var t="";t=t+"scrollbars="+sc+",";t=t+"toolbar=no,";t=t+"location=no,";t=t+"resizable=no,";t=t+"status=no,";t=t+"menubar=no,";t=t+"resizable=no,";t=t+"width="+w+",";t=t+"height="+h+",";t=t+"left="+x+",";t=t+"top="+y;t=t+"";window.open(lurl,'popwin',t);}
function pop_cms(idx,w,h,sc,poset,potop,poleft){var x=0;var y=0;var h=h;if(poset=="0"){x=0;y=0;}else if(poset=="1"){x=(screen.availWidth/2)-(w/2);y=0;}else if(poset=="2"){x=screen.availWidth-w;y=0;}else if(poset=="3"){x=0;y=(screen.availHeight/2)-(h/2);}else if(poset=="4"){x=(screen.availWidth/2)-(w/2);y=(screen.availHeight/2)-(h/2);}else if(poset=="5"){x=screen.availWidth-w;y=(screen.availHeight/2)-(h/2);}else if(poset=="6"){x=0;y=screen.availHeight-h;}else if(poset=="7"){x=(screen.availWidth/2)-(w/2);y=screen.availHeight-h;}else if(poset=="8"){x=screen.availWidth-w;y=screen.availHeight-h;}else if(poset=="D"){x=potop;y=poleft;}
if(sc=="Y"){sc="yes";}else if(sc=="N"){sc="no";}else if(sc=="A"){sc="auto";}
var t="";t=t+"scrollbars="+sc+",";t=t+"toolbar=no,";t=t+"location=no,";t=t+"resizable=no,";t=t+"status=no,";t=t+"menubar=no,";t=t+"resizable=no,";t=t+"width="+w+",";t=t+"height="+h+",";t=t+"left="+x+",";t=t+"top="+y;t=t+"";var lurl="/popup/popup.do?number="+idx;var win_pop=window.open(lurl,'cmspop'+idx,t);win_pop.focus();}
function pop_cms_unite(idx,w,h,sc,poset,potop,poleft,mcode,scode){var x=0;var y=0;var h=h;if(poset=="0"){x=0;y=0;}else if(poset=="1"){x=(screen.availWidth/2)-(w/2);y=0;}else if(poset=="2"){x=screen.availWidth-w;y=0;}else if(poset=="3"){x=0;y=(screen.availHeight/2)-(h/2);}else if(poset=="4"){x=(screen.availWidth/2)-(w/2);y=(screen.availHeight/2)-(h/2);}else if(poset=="5"){x=screen.availWidth-w;y=(screen.availHeight/2)-(h/2);}else if(poset=="6"){x=0;y=screen.availHeight-h;}else if(poset=="7"){x=(screen.availWidth/2)-(w/2);y=screen.availHeight-h;}else if(poset=="8"){x=screen.availWidth-w;y=screen.availHeight-h;}else if(poset=="D"){x=potop;y=poleft;}
if(sc=="Y"){sc="yes";}else if(sc=="N"){sc="no";}else if(sc=="A"){sc="auto";}
var t="";t=t+"scrollbars="+sc+",";t=t+"toolbar=no,";t=t+"location=no,";t=t+"resizable=no,";t=t+"status=no,";t=t+"menubar=no,";t=t+"resizable=no,";t=t+"width="+w+",";t=t+"height="+h+",";t=t+"left="+x+",";t=t+"top="+y;t=t+"";if(mcode=="W")
{var lurl="/popup_unite/popup_unite.do?number="+idx;var win_pop=window.open(lurl,'cmsunite'+idx,t);win_pop.focus();}else if(mcode=="M")
{if(scode=="M")
{var lurl="/popup_unite/popup_sns_m.do?number="+idx;var win_pop=window.open(lurl,'cmsunite'+idx,t);win_pop.focus();}else if(scode=="G")
{var lurl="/popup_unite/popup_sns_g.do?number="+idx;var win_pop=window.open(lurl,'cmsunite'+idx,t);win_pop.focus();}}}
function onair_pop_cms(idx){var w=640;var h=520;var x=(screen.availWidth/2)-(w/2);var y=(screen.availHeight/2)-(h/2);var t="";t=t+"scrollbars=no,";t=t+"toolbar=no,";t=t+"location=no,";t=t+"resizable=no,";t=t+"status=no,";t=t+"menubar=no,";t=t+"resizable=no,";t=t+"width="+w+",";t=t+"height="+h+",";t=t+"left="+x+",";t=t+"top="+y;t=t+"";var lurl="/popup/pop_ontv_new.do?number="+idx;window.open(lurl,'onair'+idx,t);}
function onair_pop_livere(idx){var w=630;var h=768;var x=(screen.availWidth/2)-(w/2);var y=(screen.availHeight/2)-(h/2);var t="";t=t+"scrollbars=yes,";t=t+"toolbar=no,";t=t+"location=no,";t=t+"resizable=no,";t=t+"status=no,";t=t+"menubar=no,";t=t+"resizable=no,";t=t+"width="+w+",";t=t+"height="+h+",";t=t+"left="+x+",";t=t+"top="+y;t=t+"";var lurl="/livere_pop/gglive_pop2.do?number="+idx;window.open(lurl,'onair'+idx,t);}
function vod_open(theURL,winName){var sinist=(screen.availWidth/2)-(940/2);var toppo=(screen.availHeight/2)-(510);window.open(theURL,winName,'width=940,height=510,top='+toppo+',left='+sinist+',scrollbars=no');}
function vod_open_wide(theURL,winName){var sinist=(screen.availWidth/2)-(400/2);var toppo=(screen.availHeight/2)-(530);window.open(theURL,winName,'width=760,height=580,top='+toppo+',left='+sinist);}
function vod_open_child(theURL,winName){var sinist=(screen.availWidth/2)-(940/2);var toppo=(screen.availHeight/2)-(510);window.open(theURL,winName,'width=640,height=430,top='+toppo+',left='+sinist+',toolbar=no, location=no, status=no, menubar=no');}
function add_clickCount(menu)
{create_hiddenIframe();document.getElementById("mClickFrame").src="/MainClick_Counter.do?menu="+menu;}
function create_mck_form(menu)
{if(document.mck_frm==null||document.mck_frm==undefined)
{document.write("<form name='mck_frm' method='post' action='/MainClick_Counter.do'>");document.write("<input type='hidden' name='menu'>");document.write("</form>");}}
function create_hiddenIframe()
{if(document.getElementById("mClickFrame")!=null&&document.getElementById("mClickFrame")!=undefined)
{document.getElementById("mClickFrame").src="";}
else
{var ifr=document.createElement("iFrame");ifr.setAttribute("id","mClickFrame");ifr.setAttribute("name","mClickFrame");ifr.scrolling="no";ifr.frameBorder="0";ifr.width="0px";ifr.height="0px";ifr.style.display="none";document.body.appendChild(ifr);}}