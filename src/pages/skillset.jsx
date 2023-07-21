import { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/skillset.css"
import Skills from "../components/skills/skills";

const Skillset = () => {
  useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

  const currentSEO = SEO.find((item) => item.page === "skillset");

  return (
    <>
      <Helmet>
        <title>{`Skillset | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description}/>
        <meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
      </Helmet>

      <div className="page-content">
				<NavBar active="skillset" />
				<div className="content-wrapper">
					<div className="skillset-logo-container">
						<div className="skillset-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="skillset-container">
						<Skills />
					</div>

					<div className="socials-container">
						<div className="skillset-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
    </>
  )
}

export default Skillset;