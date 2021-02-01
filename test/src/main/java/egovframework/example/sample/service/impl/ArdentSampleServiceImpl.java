package egovframework.example.sample.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.example.sample.service.ArdentSampleService;
import egovframework.example.sample.service.SampleDefaultVO;
import egovframework.example.sample.service.SampleVO;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("ardentSampleService")
public class ArdentSampleServiceImpl extends EgovAbstractServiceImpl implements ArdentSampleService{
	
	@Resource(name = "sampleDAO")
	private SampleDAO sampleDAO;

	@Override
	public SampleVO selectSample(SampleVO searchVO) throws Exception {
		return sampleDAO.selectSample(searchVO);
	}

	@Override
	public List<?> selectSampleList(SampleDefaultVO searchVO) throws Exception {
		return sampleDAO.selectSampleList(searchVO);
	}

	@Override
	public int selectSampleListTotCnt(SampleDefaultVO searchVO) { 
		return sampleDAO.selectSampleListTotCnt(searchVO);
	}
	
	

}
