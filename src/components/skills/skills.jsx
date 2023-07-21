import Skill from "./skill";

import INFO from "../../data/user";

import "./styles/skills.css";

const Skills = () => {
  return (
    <div className="all-skills-container">
      {INFO.skillSet.map((project, index) => (
				<div className="all-skills-skill" key={index}>
					<Skill
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
    </div>
  )
}

export default Skills