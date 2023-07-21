import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/cf7b623f8414e3edc674eacbe49160c8.png"
								alt="metrodarta"
								className="work-image"
							/>
							<div className="work-title">PT. Metrodata, Tbk</div>
							<div className="work-subtitle">
								Application Developer Associate
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>
						
            <div className="work">
							<img
								src="https://pbs.twimg.com/profile_images/1182221752316776449/YEtVyDZe_400x400.jpg"
								alt="metrodarta"
								className="work-image"
							/>
							<div className="work-title">SanberCode</div>
							<div className="work-subtitle">
								Back End Developer
							</div>
							<div className="work-duration">2021 - 2022</div>
						</div>
            
            <div className="work">
							<img
								src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/1e68f0110dcf7dc26f8e4efa25577378.jpg"
								alt="samudera"
								className="work-image"
							/>
							<div className="work-title">PT. Samudera Indonesia</div>
							<div className="work-subtitle">
								Full Stack Developer Intern
							</div>
							<div className="work-duration">2020</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
