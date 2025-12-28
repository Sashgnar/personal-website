import React from 'react';

export default function ProjectEntry({ project }) {
    const Wrapper = project.html_url ? 'a' : 'div';

    return (
        <Wrapper
            href={project.html_url}
            target={project.html_url ? "_blank" : undefined}
            rel={project.html_url ? "noopener noreferrer" : undefined}
            className="project-item"
        >
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

            {project.image && (
                <img
                    src={project.image}
                    alt={project.name}
                    className="project-image-preview"
                />
            )}
        </Wrapper>
    );
}
