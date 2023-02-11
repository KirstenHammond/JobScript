import React, { useState, useEffect } from "react";
import axios from "axios";

import { useCoverLetterContext } from "providers/CoverLetterProvider";
import { useResumeContext } from "providers/ResumeProvider";
import { useAuthContext } from "providers/AuthProvider";
import { useJobDescContext } from "providers/JobDescProvider";

export default function JobListItem(props) {
  const { coverLetterText, jobTitle, companyName, jobDescText } = props;
  const { user } = useAuthContext();
  const { setCoverLetterText, setGenerateButtonVisible } = useCoverLetterContext();
  const { setJobDescText, setJobTitle, setCompanyName } = useJobDescContext();
  const { setUploadedFile } = useResumeContext();

  const showResumeJobDescCoverLetter = () => {
    setCoverLetterText(coverLetterText);
    setJobDescText(jobDescText);
    setCompanyName(companyName);
    setJobTitle(jobTitle);
    //hide generate cover letter button
    setGenerateButtonVisible(false);

    axios.post(`api/joblist/pullResume`, user)
      .then((res) => {
        setUploadedFile(res.data.text);
      });
  }
  return (
    <button
      onClick={showResumeJobDescCoverLetter}
      className="job-list-item"
    >
    <strong>{jobTitle}</strong>
    <br></br>
    {companyName}
    </button>
  );
}
