import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Shipping() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-gray-50 text-gray-800 p-6 lg:p-12">
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <h1
            className="text-3xl lg:text-5xl font-bold mb-6 text-center transition-transform transform hover:scale-105 hover:text-blue-600"
            data-aos="zoom-in"
          >
            SHIPPING POLICY
          </h1>

          <h2
            className="text-2xl lg:text-4xl font-bold mb-4 transition-colors duration-300 hover:text-blue-500"
            data-aos="fade-right"
          >
            ETA: ESTIMATED TIME OF ARRIVAL:
          </h2>
          <p
            className="text-lg lg:text-xl mb-4 transition-opacity duration-300 hover:opacity-80"
            data-aos="fade-up"
          >
            Estimated time of arrival or delivery timeline will be between 4 to
            5 working days from the date of order.
          </p>

          <h2
            className="text-2xl lg:text-4xl font-bold mb-4 transition-colors duration-300 hover:text-blue-500"
            data-aos="fade-right"
          >
            DOMESTIC / LOCAL SHIPPING IN INDIA:
          </h2>
          <p
            className="text-lg lg:text-xl mb-4 transition-opacity duration-300 hover:opacity-80"
            data-aos="fade-up"
          >
            We understand how important it is for you to get your items quickly,
            so we make every effort to process your order within one business
            day.
          </p>

          <ul className="list-disc list-inside mb-4 text-lg lg:text-xl">
            <li
              className="mb-2 transition-all duration-300 hover:text-blue-500 hover:scale-105"
              data-aos="fade-left"
            >
              All prepaid orders come with Free Shipping.
            </li>
            <li
              className="mb-2 transition-all duration-300 hover:text-blue-500 hover:scale-105"
              data-aos="fade-left"
            >
              Cash on delivery (COD) orders above ₹500 will get free shipping.
            </li>
            <li
              className="mb-2 transition-all duration-300 hover:text-blue-500 hover:scale-105"
              data-aos="fade-left"
            >
              Rs. 70 shipping will be applicable on COD orders below ₹500.
            </li>
            <li
              className="mb-2 transition-all duration-300 hover:text-blue-500 hover:scale-105"
              data-aos="fade-left"
            >
              Delivery usually takes 3 to 4 working days for domestic orders.
            </li>
            <li
              className="mb-2 transition-all duration-300 hover:text-blue-500 hover:scale-105"
              data-aos="fade-left"
            >
              All orders processed by the next business day.
            </li>
            <li
              className="mb-2 transition-all duration-300 hover:text-blue-500 hover:scale-105"
              data-aos="fade-left"
            >
              We ship by the most reliable and popular shipping.
            </li>
            <li
              className="mb-2 transition-all duration-300 hover:text-blue-500 hover:scale-105"
              data-aos="fade-left"
            >
              We do not have control over the shipment once it leaves us; please
              contact us for any type of information.
            </li>
            <li
              className="mb-2 transition-all duration-300 hover:text-blue-500 hover:scale-105"
              data-aos="fade-left"
            >
              All orders come with shipment tracking numbers.
            </li>
            <li
              className="mb-2 transition-all duration-300 hover:text-blue-500 hover:scale-105"
              data-aos="fade-left"
            >
              Shipping times are subject to location, distance, and our
              logistics partners. Please order in advance to avoid any festival
              rush.
            </li>
            <li
              className="mb-2 transition-all duration-300 hover:text-blue-500 hover:scale-105"
              data-aos="fade-left"
            >
              If your location is not served by any private courier company,
              then your order will get shipped by India Post.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
