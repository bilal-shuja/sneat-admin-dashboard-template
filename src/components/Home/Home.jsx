import React from 'react'

const Home = () => {
  return (
    <>
{/* Content wrapper */}
<div className="scroll-view-component scrollbar-secondary-component">

<div className="content-wrapper">
  {/* Content */}
  <div className="container-xxl flex-grow-1 container-p-y">
    <div className="row">
      <div className="col-lg-12 mb-4 order-0">
        <div className="card">
          <div className="d-flex align-items-end row">
            <div className="col-sm-7">
              <div className="card-body">
                <h5 className="card-title text-primary">Congratulations John! 🎉</h5>
                <p className="mb-4">
                  You have done <span className="fw-bold">72%</span> more sales today. Check your new badge in
                  your profile.
                </p>
                <a href="javascript:;" className="btn btn-sm btn-outline-primary">View Badges</a>
              </div>
            </div>
            <div className="col-sm-5 text-center text-sm-left">
              <div className="card-body pb-0 px-0 px-md-4">
                <img src="../assets/img/illustrations/man-with-laptop-light.png" height={140} alt="View Badge User" data-app-dark-img="illustrations/man-with-laptop-dark.png" data-app-light-img="illustrations/man-with-laptop-light.png" />
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>

  </div>
  {/* / Content */}
</div>
{/* Content wrapper */}
</div>


    </>
  )
}

export default Home