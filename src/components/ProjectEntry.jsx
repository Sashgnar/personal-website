import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectEntry({ project }) {
    // Only link to detail page if project has details
    const hasDetails = project.details;
    const slug = project.slug || project.name.toLowerCase().replace(/[^a-z0-9]/g, '');

    const content = (
        <>
            <div className="project-info">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.description}</p>
            </div>

            <div className="project-meta">
                <span className="project-status">{project.status}</span>
                <div className="project-tags">
                    {project.tags.join(' / ')}
                </div>
            </div>
        </>
    );

    if (hasDetails) {
        return (
            <Link to={`/project/${slug}`} className="project-item">
                {content}
            </Link>
        );
    }

    return (
        <div className="project-item">
            {content}
        </div>
    );
}
