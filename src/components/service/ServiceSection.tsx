import { Link } from "react-router-dom";
import { services } from "../../data";

const ServiceSection = () => {
  return (
    <section className="service-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="fade-in">Welcome to Digixprt</span>
          <h2 className="char-animation">
            Digital Marketing Strategy<br/>
           Connect the Right Channels Around the Right Goals
          </h2>
          <p className="mt-3">
           We connect SEO, PPC, content, social media, and other digital channels
            around your business goals to reach the right audience,<br />generate qualified leads, and drive measurable growth.
          </p>
        </div>

        <div className="row">
          {services.slice(0, 4).map((service, index) => (
            <div
              key={service.id}
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={index * 200} // stagger delay for each card
              data-aos-duration="1000" // smooth animation duration
              data-aos-easing="ease-out-cubic" // smooth easing
              data-aos-once="true"
            >
              <div
                className={`service-card-items-1 ${
                  index % 2 === 0 ? "item_right_1" : "item_left_1"
                }`}
              >
                <div className={`service-icon color-${index + 1}`}>
                  <i className={service.iconClass}></i>
                </div>
                <div className="service-content">
                  <h3>
                    <Link to={`/service/${service.slug}`}>{service.title}</Link>
                  </h3>
                  <p>{service.description.slice(0, 70)}...</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
