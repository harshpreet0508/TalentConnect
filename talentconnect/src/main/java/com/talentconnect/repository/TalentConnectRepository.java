package com.talentconnect.repository;
import com.talentconnect.models.JobRequest;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TalentConnectRepository extends MongoRepository<JobRequest, String> {
	
	
}
