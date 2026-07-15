import { Link } from "react-router-dom";
import { services } from "../../data";

const RecentServices = () => {
  return (
    <div className="sidebar-widget fade-in">
      <div className="sideber-title">
        <h4>Our Services</h4>
      </div>
      <ul>
        {services.slice(0, 5).map((item, index) => (
          <li
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={index * 200} // stagger delay for each card
            data-aos-duration="1000" // smooth animation duration
            data-aos-easing="ease-out-cubic" // smooth easing
            data-aos-once="true"
          >
            <Link to={`/service/${item.slug}`}>
              <span>{item.title} </span>
              <span className="icon">
                <i className="far fa-long-arrow-right"></i>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentServices;
