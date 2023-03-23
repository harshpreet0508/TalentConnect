package com.talentconnect.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.talentconnect.models.JobRequest;
import com.talentconnect.service.HiringManagerService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/hiringManager")
public class HiringManagerController {

	@Autowired
	private HiringManagerService hiringManagerService;

	@GetMapping("/getJobRequestsDetails")
	public List<JobRequest> getJobRequestDetailsByJobStatus(@RequestParam String jobStatus) {
		return hiringManagerService.getJobRequestDetailsByJobStatus(jobStatus);

	}

	@PostMapping("/saveJobRequestDetails")
	public JobRequest saveJobRequestDetails(@RequestBody JobRequest jobRequestDetails) {
		return hiringManagerService.saveJobRequestDetails(jobRequestDetails);

	}
	
	@PutMapping("/updateJobRequestDetails")
	public JobRequest updateJobRequestDetails(@RequestParam Integer id,@RequestBody JobRequest jobRequestDetails) {
		return hiringManagerService.updateJobRequestDetails(jobRequestDetails,id);

	}
	
	@GetMapping("/getJobRequestsDetailsByID")
	public JobRequest getJobRequestDetailsByID(@RequestParam Integer id) {
		return hiringManagerService.getJobRequestDetailsById(id);

	}


}
