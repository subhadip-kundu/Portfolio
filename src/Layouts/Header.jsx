import React from "react";
import favicon from "../Assets/Images/logo.png";
import socialGitHub from "../Assets/Images/social/github.svg";
import socialLinkedIn from "../Assets/Images/social/linkedin.svg";

export default function Header({content, showHeader,goTo}) {

	return (
		<header className='header' style={{display: showHeader ? "flex" : "none"}}>
			<img className='header-logo' src={favicon} alt='Planet logo' onClick={() => goTo("home")}></img>
			<nav className='header-sections'>
				<p onClick={() => goTo("about")}>{content.about}</p>
				<p onClick={() => goTo("skills")}>{content.skills}</p>
				<p onClick={() => goTo("experience")}>{content.experience}</p>
				<p onClick={() => goTo("projects")}>{content.projects}</p>
				<p onClick={() => goTo("contact")}>{content.contact}</p>
			</nav>
			<nav className='social-links'>
				<a href='https://github.com/subhadip-kundu' target='_blank' rel='noreferrer'>
					<img alt='Link to GitHub profile' src={socialGitHub}></img>
				</a>
				<a href='https://www.linkedin.com/in/subhadip-kundu-/' target='_blank' rel='noreferrer'>
					<img alt='Link to LinkedIn profile' src={socialLinkedIn}></img>
				</a>
			</nav>
		</header>
	);
}
