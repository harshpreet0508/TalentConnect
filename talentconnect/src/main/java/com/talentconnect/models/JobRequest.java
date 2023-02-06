package com.talentconnect.models;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
@Document("jobRequest")
public class JobRequest {

	@Id
	@MongoId
	private Long jobId;

	private Integer reqNumber;

	private String grade;

	private String hmmSId;

	private String hmEmailId;

	private String glCode;

	private String jdUrl;

	private Integer reqNoOpenings;

	private String hmName;

	private String jobStatus;

	private String primarySkillSet;

	private String secondarySkillSet;

	private String goodToHaveSkillSet;

	private Integer locationId;

	private String location;

	private String designation;

	 @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
	private Date jobCreatedDate;

	private String jobCreatedBy;

	 @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
	private Date jobLastUpdatedDate;

	private String jobLastUpdatedBy;

	private String comments;

	private Boolean assigned;

	private String taResourceID;

	private String taEmailID;

}
