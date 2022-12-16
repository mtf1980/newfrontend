import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav class='navbar navbar-light bg-dark'>
        <div class='container-fluid'>
          <div class='d-flex flex-row'>
            <Link class='navbar-brand' href='/home'>
              <img
                src='/images/company_logos/dcs-logo.png'
                alt=''
                height='45'
              />
            </Link>
            <div className=' row mt-2 ms-5'>
              <div className='col'>
                <Link
                  href='/documents'
                  className='d-flex flex-column text-center text-warning text-decoration-none'
                >
                  <div className='d-flex flex-column align-items-center position-relative'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='auto'
                      fill='currentColor'
                      className='bi bi-file-earmark-arrow-down'
                      viewBox='0 0 16 16'
                    >
                      <path d='M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z' />
                      <path d='M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z' />
                    </svg>
                    <span
                      class='badge badge-header bg-danger text-light position-absolute'
                      style={{ right: '10%' }}
                    >
                      77
                    </span>
                  </div>
                  <small>Documents</small>
                </Link>
              </div>
              <div className='col'>
                <Link
                  href='/home'
                  className='d-flex flex-column text-info text-decoration-none'
                >
                  <div className='d-flex flex-column align-items-center position-relative'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='auto'
                      fill='currentColor'
                      class='bi bi-person-circle'
                      viewBox='0 0 16 16'
                    >
                      <path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' />
                      <path
                        fill-rule='evenodd'
                        d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z'
                      />
                    </svg>
                    <span
                      class='badge badge-header bg-danger text-light position-absolute'
                      style={{ right: '15%' }}
                    >
                      20
                    </span>
                  </div>
                  <small>Appointments</small>
                </Link>
              </div>
              <div className='col'>
                <Link
                  href='/home'
                  className='d-flex flex-column text-center text-light text-decoration-none'
                >
                  <div className='d-flex flex-column align-items-center position-relative'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='auto'
                      fill='currentColor'
                      class='bi bi-list-task'
                      viewBox='0 0 16 16'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z'
                      />
                      <path d='M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z' />
                      <path
                        fill-rule='evenodd'
                        d='M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z'
                      />
                    </svg>
                    <span
                      class='badge badge-header bg-danger text-light position-absolute'
                      style={{ right: '-40%' }}
                    >
                      77
                    </span>
                  </div>

                  <small>Tasks</small>
                </Link>
              </div>
              <div className='col'>
                <Link
                  href='uploadFiles'
                  className='d-flex flex-column align-items-center justify-content-center text-primary fw-bold text-decoration-none'
                >
                  <div className='d-flex flex-column align-items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='auto'
                      fill='currentColor'
                      class='bi bi-upload'
                      viewBox='0 0 16 16'
                    >
                      <path d='M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z' />
                      <path d='M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z' />
                    </svg>
                  </div>

                  <small>Upload</small>
                </Link>
              </div>
            </div>
          </div>
          <div class='d-flex flex-row justify-content-right align-items-center'>
            <h5 className='me-2 mt-1 text-white'>Shakespeare Health Centre</h5>
            <Link href='/home' class='btn btn-outline-info me-2'>
              Change
            </Link>
            <Link href='/' class='btn btn-outline-success'>
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
