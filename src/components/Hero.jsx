import React from 'react';
import sashPhoto from '../assets/sash.jpg';

export default function Hero() {
    return (
        <section className="hero">
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: '100%' }}>
                <div>
                    <h1 className="hero-title">
                        SASH<br />
                        STOLBA
                    </h1>
                    <div className="hero-subtitle">
            > ASPIRING IAM ENGINEER. FULL STACK & SECURITY.<br />
            > BASED IN PLOVDIV, BULGARIA.
                    </div>
                </div>

                <div style={{
                    width: '300px',
                    height: '400px',
                    overflow: 'hidden',
                    filter: 'grayscale(100%) contrast(1.2)',
                    border: '1px solid #333'
                }}>
                    <img
                        src={sashPhoto}
                        alt="Sash Stolba"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            </div>
        </section>
    );
}
