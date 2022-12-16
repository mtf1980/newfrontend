import Header from '../../components/header/header';
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <Header />
      <div className='container '>
        <div
          className='row row-cols-4 vh-100
        justify-content-center'
        >
          <div className='col d-flex flex-column align-self-center'>
            <Link
              href='/documents'
              alt='documents filing'
              className='text-decoration-none '
            >
              <div className='card box-shadow text-secondary mb-3'>
                <div className='row g-0'>
                  <div className='col-4 d-flex flex-row align-items-center bg-warning bg-gradient rounded g0'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='auto'
                      height='40'
                      fill='currentColor'
                      className='bi bi-files text-white'
                      viewBox='0 0 16 16'
                    >
                      <path d='M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z' />
                      <path d='M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z' />
                    </svg>
                  </div>
                  <div className='col-8 d-flex flex-row align-items-center '>
                    <div className='card-body'>
                      <h5 className='card-title text-center'>
                        Document Management
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href='/home'
              alt='documents filing'
              className='text-decoration-none'
            >
              <div className='card box-shadow text-secondary mb-3'>
                <div className='row g-0'>
                  <div className='col-4 d-flex flex-row align-items-center bg-primary bg-gradient rounded g0'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='auto'
                      height='40'
                      fill='currentColor'
                      className='bi bi-files text-white'
                      viewBox='0 0 16 16'
                    >
                      <path d='M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z' />
                      <path d='M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z' />
                      <path d='M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z' />
                    </svg>
                  </div>
                  <div className='col-8 d-flex flex-row align-items-center '>
                    <div className='card-body'>
                      <h5 className='card-title text-center'>
                        Demand and Capacity
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href='/home'
              alt='documents filing'
              className='text-decoration-none'
            >
              <div className='card box-shadow text-secondary mb-3'>
                <div className='row g-0'>
                  <div className='col-4 d-flex flex-row align-items-center bg-success bg-gradient rounded g0'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='auto'
                      height='40'
                      fill='currentColor'
                      className='bi bi-files text-white'
                      viewBox='0 0 16 16'
                    >
                      <path d='M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5ZM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z' />
                    </svg>
                  </div>
                  <div className='col-8 d-flex flex-row align-items-center '>
                    <div className='card-body'>
                      <h5 className='card-title text-center'>
                        QOF &nbsp;&nbsp;&nbsp;Dashboard
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href='/home'
              alt='documents filing'
              className='text-decoration-none'
            >
              <div className='card box-shadow text-secondary mb-3'>
                <div className='row g-0'>
                  <div className='col-4 d-flex flex-row align-items-center bg-danger bg-gradient rounded g0'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='auto'
                      height='40'
                      fill='currentColor'
                      className='bi bi-files text-white'
                      viewBox='0 0 16 16'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z'
                      />
                      <path
                        fill-rule='evenodd'
                        d='M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z'
                      />
                    </svg>
                  </div>
                  <div className='col-8 d-flex flex-row align-items-center '>
                    <div className='card-body'>
                      <h5 className='card-title text-center'>
                        Diabetes Dashboard
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href='/home'
              alt='documents filing'
              className='text-decoration-none'
            >
              <div className='card box-shadow text-secondary mb-3'>
                <div className='row g-0'>
                  <div className='col-4 d-flex flex-row align-items-center bg-info rounded g0'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='auto'
                      height='40'
                      fill='currentColor'
                      className='bi bi-files text-white'
                      viewBox='0 0 16 16'
                    >
                      <path d='M8.5 1.5a.5.5 0 1 0-1 0v5.243L7 7.1V4.72C7 3.77 6.23 3 5.28 3c-.524 0-1.023.27-1.443.592-.431.332-.847.773-1.216 1.229-.736.908-1.347 1.946-1.58 2.48-.176.405-.393 1.16-.556 2.011-.165.857-.283 1.857-.241 2.759.04.867.233 1.79.838 2.33.67.6 1.622.556 2.741-.004l1.795-.897A2.5 2.5 0 0 0 7 11.264V10.5a.5.5 0 0 0-1 0v.764a1.5 1.5 0 0 1-.83 1.342l-1.794.897c-.978.489-1.415.343-1.628.152-.28-.25-.467-.801-.505-1.63-.037-.795.068-1.71.224-2.525.157-.82.357-1.491.491-1.8.19-.438.75-1.4 1.44-2.25.342-.422.703-.799 1.049-1.065.358-.276.639-.385.833-.385a.72.72 0 0 1 .72.72v3.094l-1.79 1.28a.5.5 0 0 0 .58.813L8 7.614l3.21 2.293a.5.5 0 1 0 .58-.814L10 7.814V4.72a.72.72 0 0 1 .72-.72c.194 0 .475.11.833.385.346.266.706.643 1.05 1.066.688.85 1.248 1.811 1.439 2.249.134.309.334.98.491 1.8.156.814.26 1.73.224 2.525-.038.829-.224 1.38-.505 1.63-.213.19-.65.337-1.628-.152l-1.795-.897A1.5 1.5 0 0 1 10 11.264V10.5a.5.5 0 0 0-1 0v.764a2.5 2.5 0 0 0 1.382 2.236l1.795.897c1.12.56 2.07.603 2.741.004.605-.54.798-1.463.838-2.33.042-.902-.076-1.902-.24-2.759-.164-.852-.38-1.606-.558-2.012-.232-.533-.843-1.571-1.579-2.479-.37-.456-.785-.897-1.216-1.229C11.743 3.27 11.244 3 10.72 3 9.77 3 9 3.77 9 4.72V7.1l-.5-.357V1.5Z' />
                    </svg>
                  </div>
                  <div className='col-8 d-flex flex-row align-items-center '>
                    <div className='card-body'>
                      <h5 className='card-title text-center'>
                        Asthma Dashboard
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
