package com.talentconnect.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

import com.talentconnect.models.JobRequest;

@Component
public class TalentAcquisitionService {

	@Autowired
	private MongoTemplate mongoTemplate;

	public List<JobRequest> getJobRequestDetails() {

		return mongoTemplate.findAll(JobRequest.class);
	}

}
