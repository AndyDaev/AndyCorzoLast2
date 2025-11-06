import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { IKImage } from 'imagekitio-react';
import { LanguageContext } from '../../context/LanguageContext';
import { workListEN, workListES } from '../../data/workList';
import './ProjectsFooter.css';

const ProjectsFooter = ({ excludeId }) => {
	const { language } = useContext(LanguageContext);
	const workList = language === 'EN' ? workListEN : workListES;

	const items = useMemo(() => {
		const filtered = typeof excludeId === 'number' ? workList.filter(p => p.id !== excludeId) : workList;
		return filtered.slice(0, 3);
	}, [workList, excludeId]);

	return (
		<div className="projects-footer">
			<div className="projects-footer-header">
				<h4>{language === 'EN' ? 'More projects' : 'Más proyectos'}</h4>
				<Link to="/work" className="see-all-link">{language === 'EN' ? 'See all' : 'Ver todos'}</Link>
			</div>
			<div className="projects-footer-grid">
				{items.map(item => (
					<Link key={`pf-${item.id}`} to={item.route} className="projects-footer-item">
						<div className="projects-footer-img">
							<IKImage
								src={item.image}
								transformation={[{ height: 700, width: 1100, quality: 80, format: 'auto' }]}
								lqip={{ active: true, quality: 20 }}
								alt={item.title}
								loading="lazy"
							/>
						</div>
						<div className="projects-footer-info">
							<span className="projects-footer-name">{item.title}</span>
							<span className="projects-footer-cat">{Array.isArray(item.category) ? item.category.join(' • ') : item.category}</span>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default ProjectsFooter;
