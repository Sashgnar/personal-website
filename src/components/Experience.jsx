import React from 'react';

const experiences = [
    {
        id: 1,
        role: "FULL STACK DEVELOPER (CONTRACT)",
        company: "ONTARIO TECH UNIVERSITY",
        period: "11/2024 – 06/2025",
        bullets: [
            "Migrated legacy survey systems to LimeSurvey (Yii MVC)",
            "Engineered secure user management workflows and role-based access for researchers",
            "Customized themes and logic, preserving critical researcher data integrity",
            "Built JS plugins for enhanced functionality"
        ]
    },
    {
        id: 2,
        role: "SOFTWARE DEVELOPER & MANAGER",
        company: "BIKES FOR ALL",
        period: "2017 – PRESENT",
        bullets: [
            "Built e-commerce solutions acting as the technical lead",
            "Implemented secure authentication and authorization flows for internal systems",
            "Integrated Google Ads APIs for conversion tracking",
            "Wrote Python automation scripts for inventory management and supplier data ingestion"
        ]
    }
];

export default function Experience() {
    return (
        <section className="projects-section">
            <span className="section-label">EXPERIENCE</span>
            <div className="project-list">
                {experiences.map(exp => (
                    <div key={exp.id} className="project-item" style={{ cursor: 'default' }}>
                        <div className="project-info">
                            <h3 className="project-name" style={{ fontSize: '2.5rem' }}>{exp.company}</h3>
                            <ul className="feature-list" style={{ marginTop: '1rem' }}>
                                {exp.bullets.map((bullet, i) => (
                                    <li key={i} style={{ borderBottom: 'none', padding: '0.2rem 0', color: 'var(--text-dim)' }}>{bullet}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="project-meta">
                            <span className="project-status" style={{ border: 'none', padding: 0 }}>{exp.period}</span>
                            <div className="project-tags">
                                {exp.role}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
