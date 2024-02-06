function Footer() {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "rgb(3, 3, 19)" }}
    >
      <div className="container p-4 pb-0">
        <section className>
          <div className="row">
            <div className="col-md-8 col-lg-8 col-xl-8 mt-3 pr-4">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Block Convey
              </h6>
              <p>
                <small>
                  At Block Convey, we are a dedicated team of blockchain
                  enthusiasts and technology experts, committed to helping
                  businesses leverage the power of blockchain to drive growth
                  and innovation. We provide comprehensive blockchain solutions
                  tailored to meet the unique needs of our clients across
                  various industries.
                </small>
              </p>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <i className="fa fa-home mr-3" /> New York, NY 10012, US
              </p>
              <p>
                <i className="fa fa-envelope mr-3" />{" "}
                <a href="mailto: info@blockconvey.com"> info@blockconvey.com</a>
              </p>
              <p>
                <i className="fa fa-phone mr-3" />{" "}
                <a href="tel:+ 01 234 567 88"> + 01 234 567 88</a>
              </p>
            </div>
          </div>
        </section>
        <hr className="my-3" />
        <section className="p-3 pt-0">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              <div className="p-3">
                <small>
                  © 2023 Copyright:
                  <a classname="footlink" href="https://www.blockconvey.com/">
                    www.blockconvey.com
                  </a>
                  . All rights reserved.
                </small>
              </div>
            </div>
            {/* <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end ">
              <a
                href="https://www.linkedin.com/company/block-convey-llc
      "
                className="btn m-1"
                role="button"
              >
                <i className="fa fa-linkedin-square" style={{ fontSize: 36 }} />
              </a>
              <a
                href="https://twitter.com/blockconvey?s=20"
                className="btn m-1"
                role="button"
              >
                <i className="fa fa-twitter" style={{ fontSize: 36 }} />
              </a>
              <a
                href="https://www.threads.net/@blockconvey?igshid=MzRlODBiNWFlZA%3D%3D"
                className="btn m-1 "
                role="button"
              >
                <i className="fa fa-instagram" style={{ fontSize: 36 }} />
              </a>
            </div> */}
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
