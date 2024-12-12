import SiteHeader from "./siteheader";
import Image from 'next/image'
import './styles/handyman.scss'


export default function Dashboard() {
    return (
        <div>
            <SiteHeader />
            <div className="min-h-screen flex items-center justify-center">
                <div className="handyman">
                    <section className="hero">
                        <div className="hero-image">
                            <Image
                                src="https://greenviewsolutions.net/_next/image?url=https%3A%2F%2Fimagedelivery.net%2FOHVtjf602XdHccCnziCADA%2F1c18d317-f7a3-42fc-993c-7f0e41866a00%2Fpublic&w=1920&q=80"
                                alt="Modern Kitchen Interior"
                                width={800}
                                height={600}
                                className="kitchen-image"
                            />
                        </div>
                        <div className="hero-content">
                            <h1>Your fence is our priority</h1>
                            <p>
                                We're here to help you with all your fencing needs. Whether it's
                                repairs, new installations, or regular maintenance, we've
                                got you covered.
                            </p>
                            <button className="cta-button">Get Started</button>
                        </div>
                    </section>

                    <section className="services" id="services">
                        <h2>Services</h2>
                        <div className="service-cards">
                            <div className="service-card">
                                <div className="icon">🔧</div>
                                <h3>Maintenance</h3>
                                <p>
                                    Keep your home running smoothly with regular tune-ups and maintenance
                                    checklists.
                                </p>
                            </div>
                            <div className="service-card">
                                <div className="icon">🛠️</div>
                                <h3>Repairs</h3>
                                <p>
                                    Fix the things that need fixing. From leaky faucets to torn window
                                    screens, we can handle it all.
                                </p>
                            </div>
                            <div className="service-card">
                                <div className="icon">⚡</div>
                                <h3>Upgrades</h3>
                                <p>
                                    Upgrade your space with new fixtures, appliances, and other home
                                    improvements.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="wood-section">
                        <div className="wood-background">
                            <Image
                                src="/placeholder.svg?height=400&width=1200"
                                alt="Wood Texture"
                                width={1200}
                                height={400}
                                className="wood-image"
                            />
                        </div>
                    </section>

                    <section className="cta-section">
                        <div className="cta-content">
                            <h2>Ready to get started?</h2>
                            <button className="cta-button">Get Started</button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}




