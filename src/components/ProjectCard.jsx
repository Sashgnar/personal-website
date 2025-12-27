import React from 'react';

export default function ProjectCard({ project }) {
    const isPrivate = project.isPrivate;
    const Wrapper = project.html_url ? 'a' : 'div';

    // Choose status badge style
    let statusClass = 'status-private';
    if (project.status === 'Production' || project.status === 'User Ready') statusClass = 'status-production';
    if (project.status === 'In Development') statusClass = 'status-development';

    return (
        <Wrapper
            href={project.html_url}
            target={project.html_url ? "_blank" : undefined}
            rel={project.html_url ? "noopener noreferrer" : undefined}
            className={`card ${project.html_url ? 'card-interactive' : 'card-static'}`}
        >
            <div className="mb-4">
                <span className={`status-badge ${statusClass}`}>
                    {project.isPrivate ? 'Private • ' : ''}{project.status}
                </span>
                <div className="flex justify-between items-start mt-2">
                    <h3 className="card-title">
                        {project.name}
                    </h3>
                </div>
            </div>

            <p className="card-description">
                {project.description}
            </p>

            <div className="tags-container">
                <span className="tag tag-primary">
                    {project.language || 'Code'}
                </span>
                {project.tags && project.tags.map(tag => (
                    <span key={tag} className="tag">
                        {tag}
                    </span>
                ))}
            </div>
        </Wrapper>
    );
}
