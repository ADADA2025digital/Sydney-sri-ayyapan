import React from "react";

const Banner = ({
  bannerData,
  className = "py-5 text-white about-banner-section position-relative",
}) => {
  return (
    <section className={className}>
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left: Breadcrumb */}
          <div className="text-center text-md-start">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 justify-content-center justify-content-md-start">
                <li className="breadcrumb-item">
                  <a href="/" className="text-white text-decoration-none">
                    {bannerData.breadcrumb.home}
                  </a>
                </li>
                <span className="heading mx-3">●</span>
                <li
                  className="breadcrumb-item active text-white-50"
                  aria-current="page"
                >
                  {bannerData.breadcrumb.current}
                </li>
              </ol>
            </nav>

            {/* Page Heading */}
            <h1 className="display-4 fw-bold text-white mt-4 mb-0 text-center text-md-start">
              {bannerData.pageTitle}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
