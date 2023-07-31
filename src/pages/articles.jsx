import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Article from "../components/articles/article";

import INFO from "../data/user";
import SEO from "../data/seo";

import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from "../data_center/article-actions";

import "./styles/articles.css";

const Articles = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.articles.data);
	useEffect(() => {
		window.scrollTo(0, 0);
    dispatch(fetchData());
	}, [dispatch]);

	const currentSEO = SEO.find((item) => item.page === "articles");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Articles | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="articles" />
				<div className="content-wrapper">
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="articles-main-container">
						<div className="title articles-title">
            {INFO.articles.title}
						</div>

						<div className="articles-container">
							<div className="articles-wrapper">
								{data.map((article, index) => (
									<div
										className="articles-article"
										key={article._id}
									>
										<Article
											key={(index + 1).toString()}
											date={'2023-07-01'}
											title={article.title}
											description={article.description}
											link={"/article/" + article._id}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Articles;
