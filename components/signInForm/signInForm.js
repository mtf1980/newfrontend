import Link from 'next/link';
export default function SignInForm() {
  return (
    <div className='container '>
      <div className='row row-cols-4 vh-100 justify-content-center'>
        <div className='col d-flex flex-column align-self-center'>
          <div className='bg-light p-3 rounded shadow'>
            <form className='w-100 m-auto'>
              <img
                class='mb-4 img-fluid'
                src='/images/company_logos/dcs2.png'
                alt='Data Care Solutions Ltd Logo'
              ></img>
              <div className='form-floating mb-2'>
                <input
                  type='text'
                  className='form-control bg-light'
                  id='username'
                  placeholder='tariq'
                />
                <label for='username'>Username</label>
              </div>
              <div className='form-floating mb-2'>
                <input
                  type='password'
                  className='form-control bg-light'
                  id='password'
                  placeholder='Password'
                />
                <label for='password'>Password</label>
              </div>

              <div className='checkbox mb-2'>
                <label>
                  <input type='checkbox' value='remember-me' /> Remember me
                </label>
              </div>
              <div className='text-center'>
                <Link
                  href='/home'
                  className='w-100 btn btn btn-success '
                  type='submit'
                >
                  Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
