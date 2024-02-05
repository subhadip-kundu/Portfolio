/*
    Type
    0 -> Languages
    1 -> Libraries & Frameworks
    2 -> Tools & Platforms

    Level
    0 -> Basic
    1 -> Intermediate
    2 -> Advanced
*/

import html from "../../Assets/Images/skills/html.png";
import css from "../../Assets/Images/skills/css.png";
import js from "../../Assets/Images/skills/js.png";
import cpp from "../../Assets/Images/skills/cpp.png";
import java from "../../Assets/Images/skills/java.png";
import mongo from "../../Assets/Images/skills/mongo.png";
import react from "../../Assets/Images/skills/react.png";
import node from "../../Assets/Images/skills/node.png";
import express from "../../Assets/Images/skills/express.png";
import tailwind from "../../Assets/Images/skills/tailwind.png";
import git from "../../Assets/Images/skills/git.png";
import vscode from "../../Assets/Images/skills/vscode.png";
import figma from "../../Assets/Images/skills/figma.png";
import github from "../../Assets/Images/skills/github.png";

const skills = [
	{name: "HTML", img: html, type: 0, level: 1},
	{name: "CSS", img: css, type: 0, level: 1},
	{name: "JavaScript", img: js, type: 0, level: 1},
	{name: "CPP", img: cpp, type: 0, level: 0},
	{name: "Java", img: java, type: 0, level: 0},
	{name: "mongoDB", img: mongo, type: 0, level: 1},
	{name: "React", img: react, type: 1, level: 1},
	{name: "Node", img: node, type: 1, level: 1},
	{name: "Express", img: express, type: 1, level: 1},
	{name: "Tailwind", img: tailwind, type: 1, level: 1},
	{name: "Git", img: git, type: 2, level: 0},
	{name: "Github", img: github, type: 2, level: 1},
	{name: "VSCode", img: vscode, type: 2, level: 2},
	{name: "Figma", img: figma, type: 2, level: 0},
];

export default skills;
