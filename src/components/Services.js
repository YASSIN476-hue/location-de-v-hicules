import React from 'react';

function Services() {
  return (
    <section id="services">
      <div className="container mt-5">
        <h2>Nos Services</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://source.unsplash.com/random/300x200/?car" className="card-img-top" alt="Location courte durée" />
              <div className="card-body">
                <h5 className="card-title">Location courte durée</h5>
                <p className="card-text">Pour vos déplacements quotidiens ou vos escapades urbaines.</p>
              </div>
            </div>
          </div>
          {/* Répétez pour d'autres services */}
        </div>
      </div>
    </section>
  );
}

export default Services;