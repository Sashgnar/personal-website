import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../data/projects.json';

export default function ProjectDetail() {
    const { slug } = useParams();
    const project = projectsData.find(p => p.name.toLowerCase().replace(/[^a-z0-9]/g, '') === slug);

    if (!project) {
        return (
            <div className="container">
                <div className="detail-header">
                    <Link to="/" className="back-link">← BACK</Link>
                    <h1>PROJECT NOT FOUND</h1>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <nav>
                <Link to="/" className="logo">SASHGNAR/DEV</Link>
                <a href="mailto:sashstolba@gmail.com">SASHSTOLBA@GMAIL.COM</a>
            </nav>

            <div className="detail-header">
                <Link to="/" className="back-link">← BACK TO PROJECTS</Link>
            </div>

            <article className="project-detail">
                <header className="detail-hero">
                    <div className="detail-meta">
                        <span className="project-status">{project.status}</span>
                        <span className="detail-lang">{project.language}</span>
                    </div>
                    <h1 className="detail-title">{project.name}</h1>
                    <p className="detail-tagline">{project.description}</p>
                    {project.url && (
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="live-site-link"
                        >
                            VISIT LIVE SITE →
                        </a>
                    )}
                </header>

                {project.details && (
                    <section className="detail-content">
                        <h2>OVERVIEW</h2>
                        <p>{project.details.overview}</p>

                        {project.details.features && (
                            <>
                                <h2>KEY FEATURES</h2>
                                <ul className="feature-list">
                                    {project.details.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {project.details.tech && (
                            <>
                                <h2>TECH STACK</h2>
                                <div className="tech-tags">
                                    {project.details.tech.map((t, i) => (
                                        <span key={i} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                            </>
                        )}

                        {project.details.images && project.details.images.length > 0 && (
                            <section className="detail-gallery">
                                <h2>SCREENSHOTS</h2>
                                <div className="gallery-grid">
                                    {project.details.images.map((img, i) => (
                                        <img key={i} src={img} alt={`${project.name} screenshot ${i + 1}`} />
                                    ))}
                                </div>
                            </section>
                        )}
                    </section>
                )}

                <div className="detail-tags">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                    ))}
                </div>
            </article>

            <footer>
                <p>SASH STOLBA © 2025</p>
            </footer>
        </div>
    );
}
