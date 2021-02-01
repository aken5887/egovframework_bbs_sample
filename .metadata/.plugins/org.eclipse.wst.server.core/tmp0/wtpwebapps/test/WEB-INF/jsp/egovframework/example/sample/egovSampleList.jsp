<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsp/egovframework/common.jsp" %>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>샘플목록</title>
    <script type="text/javaScript">     
        /* 글 상세 화면 function */
        function fn_egov_select(id) {
        	document.listForm.selectedId.value = id;
           	document.listForm.action = "<c:url value='/sample/egovSampleDetail.do'/>";
           	document.listForm.submit();
        }
    </script>
</head>
<body>
  <form name="listForm" method="post">
   <input name="selectedId" type="hidden" value=""/>
   <div class="wrap">
   		<div class="pageTitle">
		<div class="contentWrap">
			<h1><span>Sample List</span></h1>
			<div class="currentPage">
				<ol>
					<li>Home</li>
					<li>Sample List</li>
				</ol>
			</div>
		</div>
		</div>
		<div class="contentWrap">	
			<div class="boardSearch detailsSearch">
				<span>검색조건</span>
				<span class="seperate"></span>
				<div class="sel_wrap">				
					<select name="search" title="검색조건선택" style="width:80px;">
						<option value="1">NAME</option>
						<option value="2">REG_USER</option>
					</select>	
				</div> 
				<input id="keyword" name="keyword" title="검색어입력" onkeydown="if (event.keyCode == 13) alert('enter key!');'" placeholder="검색어를 입력하세요" type="text" value="">
				<button type="button" class="btn_search" onclick="#">검색</button>
			</div>
			<div class="boardList_regular marginTop10">
				<div class="tatalCount marginBottom10">Total : 총갯수  ${paginationInfo.totalRecordCount }건</div>
					<div class="table">          
						<table id="chk-table"> 
							<caption class="bodo_hidden">샘플</caption>
						<colgroup>
							<col width="8%">
							<col width="14%">
							<col width="10%">
							<col width="*">
							<col width="7%">
						</colgroup>
						<thead>
							<tr>
								<th>ID</th>
								<th>NAME</th>
								<th>REG_USER</th>
								<th>DESCRIPTION</th>
								<th>USE_YN</th>
							</tr>
						</thead>
						<tbody>
							<c:forEach var="result" items="${resultList }">
								<tr style="cursor: pointer;" onclick="javascript:fn_egov_select('${result.id}')">
									<td class="text-center">${result.id}</td>
									<td class="text-center">${result.name}</td>
									<td class="text-center">${result.regUser}</td>
									<td class="text-center">${result.description}</td>
									<td class="text-center">${result.useYn}</td>
								</tr>
							</c:forEach>
						</tbody>
						</table>			
					</div>
				<div>
				</div>
			</div>
		</div>
		<div class="commonBoardFooter">
			<!--paging -->
			<div class="pagination">
				<ul class="clearfix">
					<li class="p_img page-first"><a href="#" onclick="fn_link_page(1); return false;">처음</a></li>
					<li class="p_img page-prev"><a href="https://gnews.gg.go.kr/briefing/brief_gongbo.do?subject_Code=MOBI#" onclick="fn_link_page(1); return false;">이전</a></li>
					<li class="on"><a href="#" title="1번 선택됨">1</a></li>&nbsp;<li>
					<a href="#" onclick="#;">2</a></li>&nbsp;<li>
					<a href="#" onclick="#;">3</a></li>&nbsp;<li>
					<a href="#" onclick="#;">4</a></li>&nbsp;<li>
					<a href="#" onclick="#;">5</a></li>&nbsp;<li>
					<li class="p_img page-next"><a href="#" onclick="fn_link_page(11); return false;">다음</a></li>
					<li class="p_img page-last"><a href="#" onclick="fn_link_page(31); return false;">마지막</a></li>
				</ul>
			</div>			
			<!-- (e)paging -->
		</div>
	</div>
</form>
</body>
</html>
