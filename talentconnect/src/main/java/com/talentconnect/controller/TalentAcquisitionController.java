package com.talentconnect.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.talentconnect.models.JobRequest;
import com.talentconnect.service.TalentAcquisitionService;

@RestController
@RequestMapping("/api/talentAcquisition")
public class TalentAcquisitionController {

	@Autowired
	private TalentAcquisitionService talentAcquisitionService;

	@GetMapping("/getJobRequestsDetails")
	public List<JobRequest> getJobRequestDetails() {
		return talentAcquisitionService.getJobRequestDetails();

	}

	@PostMapping("/saveJobRequestDetails")
	public JobRequest saveJobRequestDetails(@RequestBody JobRequest jobRequestDetails) {
		return talentAcquisitionService.saveJobRequestDetails(jobRequestDetails);

	}

}
