package com.talentconnect.service;

import java.util.List;
import java.util.OptionalLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import com.talentconnect.models.JobRequest;

@Component
public class HiringManagerService {

	@Autowired
	private MongoTemplate mongoTemplate;

	public List<JobRequest> getJobRequestDetails() {

		return mongoTemplate.findAll(JobRequest.class);
	}
	public List<JobRequest> getJobRequestDetailsByJobStatus(String jobStatus) {
		Query query = new Query();
		query.addCriteria(Criteria.where("jobStatus").is(jobStatus));
		return mongoTemplate.find(query,JobRequest.class);
		
	}
	
	public JobRequest getJobRequestDetailsById(Integer id) {
		Query query = new Query();
		query.addCriteria(Criteria.where("jobId").is(id));
		return mongoTemplate.findOne(query,JobRequest.class);
		
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
	public JobRequest updateJobRequestDetails(JobRequest jobRequestDetails,Integer id) {

//		Query query = new Query();
//		query.addCriteria(Criteria.where("jobId").is(id));
		JobRequest jobRequest = mongoTemplate.findById(id,JobRequest.class);
		jobRequest.setAssigned(jobRequestDetails.getAssigned());
		return jobRequest;
	}

}
