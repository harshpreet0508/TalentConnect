package com.talentconnect.models;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Document("jobRequest")
@NoArgsConstructor
@AllArgsConstructor
public class JobRequest {

	private int jobId;

	private int reqNumber;

	private String grade;

	private String hmmSId;

	private String hmEmailId;

	private String glCode;

	private String fdUrl;

	private int reqNoOpenings;

	private String hmName;

	private String jobStatus;

	private String primarySkillSet;

	private String secondarySkillSet;

	private String goodToHaveSkillSet;

	private int locationId;

	private String location;

	private String designation;

	private Date jobCreatedDate;

	private String jobCreatedBy;

	private Date jobLastUpdatedDate;

	private String jobLastUpdatedBy;

	private String comments;

	private Boolean assigned;

	private String taResourceID;

	private String taEmailID;

}
