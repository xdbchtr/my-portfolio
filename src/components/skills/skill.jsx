import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

// import "../projects/styles/project.css";
import "./styles/skill.css"

const Skill = (props) => {
	const { logo, title, description, linkText, link } = props;

	return (
		<React.Fragment>
			<div className="skill">
				<Link to={link}>
					<div className="skill-container">
						<div className="skill-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="skill-title">{title}</div>
						<div className="skill-description">{description}</div>
						<div className="skill-link">
							<div className="skill-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="skill-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Skill;
