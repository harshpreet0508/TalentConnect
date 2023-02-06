package com.talentconnect.service;

import java.util.List;
import java.util.OptionalLong;

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

	public JobRequest saveJobRequestDetails(JobRequest jobRequestDetails) {

		OptionalLong maxJobRequestID = mongoTemplate.findAll(JobRequest.class).stream()
				.filter(a -> a.getJobId() != null).mapToLong(JobRequest::getJobId).max();

		if (maxJobRequestID.isPresent()) {
			jobRequestDetails.setJobId(maxJobRequestID.getAsLong() + 1l);
		} else {
			jobRequestDetails.setJobId(1l);
		}

		return mongoTemplate.save(jobRequestDetails, "jobRequest");
	}

}
