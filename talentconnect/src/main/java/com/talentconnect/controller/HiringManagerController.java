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
	public List<JobRequest> getJobRequestDetails() {
		return hiringManagerService.getJobRequestDetails();

	}

	@PostMapping("/saveJobRequestDetails")
	public JobRequest saveJobRequestDetails(@RequestBody JobRequest jobRequestDetails) {
		return hiringManagerService.saveJobRequestDetails(jobRequestDetails);

	}

}
