import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {
  
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {props.interviewers.map(interviewer => <InterviewerListItem id={interviewer.id} name={interviewer.name} avatar={interviewer.avatar} selected={interviewer.id === props.interviewer} setInterviewer={props.setInterviewer}></InterviewerListItem>)}
      </ul>
    </section>
  );
};