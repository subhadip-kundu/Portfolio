import React from "react";
import Button from "./Button";
import social from "../Services/Constants/social";

export default function Contact({ content, refProperty }) {
  return (
    <section className='section-container contact-section' ref={refProperty}>
      <h2 className='section-title'>{content.title}</h2>
      <p className='contact-text'>{content.paragraph}</p>
      <p className='mail'>Subhadipkundu1107@gmail.com</p>
      <Button value={content.button} type='solid' link='mailto:Subhadipkundu1107@gmail.com' />
      <div className='all-social-links'>
        {social.map((s, index) => (
          <a key={index} href={s.link} target='_blank' rel='noreferrer'>
            <img alt={s.name} src={s.img}></img>
          </a>
        ))}
      </div>
    </section>
  );
}
