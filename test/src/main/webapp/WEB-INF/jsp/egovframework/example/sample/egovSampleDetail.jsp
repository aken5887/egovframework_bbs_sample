<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsp/egovframework/common.jsp" %>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>상세</title>
    <script type="text/javaScript">     
        /* 글 상세 화면 function */
           function fn_egov_selectList() {
           	document.detailForm.action = "<c:url value='/sample/egovSampleList.do'/>";
           	document.detailForm.submit();
        }
    </script>
</head>
<style>
	#chk-table tr td {
		border : 1px solid #e9e9e9;
	}
	
	#chk-table tr td:nth-child(1){
		background-color: #e9e9e9;
	}
</style>
<body>
  <form name="detailForm" method="post">
   <input name="selectedId" type="hidden" value="<c:out value='${param.selectedId }'/>"/>
   <div class="wrap">
   		<div class="pageTitle">
		<div class="contentWrap">
			<h1><span>Sample Detail</span></h1>
			<div class="currentPage">
				<ol>
					<li>Home</li>
					<li>Sample List</li>
				</ol>
			</div>
		</div>
		</div>
		<div class="contentWrap">	
			<div class="commonBoardFooter">
				<div class="btnSet text-right">
					<button type="button" class="btn btn-gray"onclick="javascript:void(0);">수정</button>
					<button type="button" class="btn btn-gray"onclick="javascript:confirm('삭제하시겠습니까?');">삭제</button>
					<button type="button" class="btn btn-gray"onclick="javascript:fn_egov_selectList();">목록</button>
				</div>
			</div>
			<div class="boardList_regular marginTop10">
				<div class="table">          
					<table id="chk-table"> 
						<caption class="bodo_hidden">샘플</caption>
					<colgroup>
						<col width="30%">
						<col width="70%">
					</colgroup>
						<tr>
							<td>NAME</td>
							<td>${sampleVO.name }</td>
						</tr>
						<tr>
							<td>REG_USER</td>
							<td>${sampleVO.regUser }</td>
						</tr>
						<tr>
							<td>DESCRIPTION</td>
							<td>${sampleVO.description }</td>
						</tr>
						<tr>
							<td>USE_YN</td>
							<td>${sampleVO.useYn }</td>
						</tr>
					</table>			
			</div>
			</div>
		</div>
	</div>
</form>
</body>
</html>
