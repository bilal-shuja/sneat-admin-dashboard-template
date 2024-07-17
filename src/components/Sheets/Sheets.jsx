import React,{useState} from 'react';
import UpdateModal from '../Modals/UpdateModal';

const Sheets = () => {

  function SheetData(){

    const [showModal , setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    return(
      <>
      <div className="table-responsive text-nowrap">
      <table className="table">
        <thead>
          <tr>
            <th>Articles</th>
            <th>Client</th>
            <th>Users</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="table-border-bottom-0">
          <tr>
            <td><i className="fab fa-angular fa-lg text-danger me-3" /> <strong>Angular Project</strong></td>
            <td>Albert Cook</td>
            <td>
              <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                  <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                </li>
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                  <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                </li>
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                  <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                </li>
              </ul>
            </td>
            <td><span className="badge bg-label-primary me-1">Active</span></td>
            <td>
              <div className="dropdown">
                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                  <i className="bx bx-dots-vertical-rounded" />
                </button>
                <div className="dropdown-menu">
                  <button className="dropdown-item" onClick={handleShow}><i className="bx bx-edit-alt me-1" /> Edit</button>
                  <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td><i className="fab fa-react fa-lg text-info me-3" /> <strong>React Project</strong></td>
            <td>Barry Hunter</td>
            <td>
              <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                  <img src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                </li>
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                  <img src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                </li>
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                  <img src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                </li>
              </ul>
            </td>
            <td><span className="badge bg-label-success me-1">Completed</span></td>
            <td>
              <div className="dropdown">
                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                  <i className="bx bx-dots-vertical-rounded" />
                </button>
                <div className="dropdown-menu">
                <button className="dropdown-item" onClick={handleShow}><i className="bx bx-edit-alt me-1" /> Edit</button>

                  <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-2" /> Delete</a>
                </div>
              </div>
            </td>
          </tr>

        </tbody>
      </table>
 
 {
  showModal?
  <UpdateModal
  showModal = {showModal}
setShowModal = {setShowModal}
  /> 
  :
  null
}
    </div>
    </>

    )


  }
  return (
    <>
     <div className="scroll-view-component scrollbar-secondary-component">

<div className="content-wrapper">
  <div className="container-xxl flex-grow-1 container-p-y">
    <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Tables /</span> Basic Tables</h4>
    <div className="card">
      <h5 className="card-header">Table Basic</h5>
    <SheetData/>
    </div>

  </div>

  <div className="content-backdrop fade" />
</div>
</div>

    </>
  )
}

export default Sheets