import React from "react";
// import Job from "./Job";
// import jobs from "../Services/Constants/jobs";
// import dateFormat from "../Services/Utils/dateFormat";

export default function Experience({ content, refProperty }) {
  return (
    <section style={{height:"85vh",display:"flex",justifyContent:"center"}} className='section-container experience-section' ref={refProperty}>


    <h2 className='section-title' >Freshers</h2>

    <h2 style={{color:"pink"}}> &#60; Aspiring Full Stack Developer | Exploring Entry-Level Roles &#62; </h2>

      {/* Original layout we can use after getting a job which fetch all the information from the json file */}
      {/* START */}

      {/* <h2 className='section-title'>{content.title}</h2>
      <div className='jobs-container'>
        {jobs.map((j, index) => (
          <Job
            key={index}
            companyName={j.companyName}
            companyLink={j.companyLink}
            date={`${dateFormat(j.date[0], content.language)} - ${dateFormat(j.date[1], content.language)}`}
            position={j.positionEN}
            tasks={j.tasksEN}
          />
        ))}
        <div className='time-line'></div>
      </div> */}

      {/* END */}

    </section>
  );
}


