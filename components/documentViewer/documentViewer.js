import Link from 'next/link';

export default function DocumentViewer() {
  return (
    <div className='container-fluid'>
      <div className='row bg-success'>
        <div className='col d-flex flex-row justify-content-start text-light'>
          <p className='fs-5'>Mrs. Samuel Smith</p>
          <p className='fs-5'> &nbsp;|&nbsp;</p>
          <p className='fs-5'> DOB: 07-01-1958</p>
          <p className='fs-5'> &nbsp;|&nbsp; </p>
          <p className='fs-5'> NHS: 1234567890</p>
          <p className='fs-5'> &nbsp;|&nbsp; </p>
          <p className='fs-5'>
            Address: 18 Howard Road, Indigo Land, Hillingdon, London, WC1 1BS
          </p>
        </div>
      </div>
      <div className='clearfix'>
        <div className='row justify-content-center'>
          <div
            className='col-2 bg-light rounded shadow '
            style={{
              maxHeight: '100vh',
              overflowX: 'auto',
              overflowY: 'scroll',
            }}
          >
            <div className='p2 mt-1 '>
              <h5 className='text-muted text-center'>Documents</h5>
            </div>
            <div className='d-block'>
              <div className='list-group border-bottom '>
                <Link
                  href='#'
                  class='list-group-item list-group-item-action active py-3 lh-sm'
                  aria-current='true'
                >
                  <div class='w-100 align-items-center justify-content-between'>
                    <p class='mb-1'>Letter</p>
                  </div>
                  <div class='col-10 mb-1 mt-3 small'>19-11-2022</div>
                </Link>
                <Link
                  href='#'
                  class='list-group-item list-group-item-action  py-3 lh-sm'
                  aria-current='true'
                >
                  <div class='d-flex w-100 align-items-center justify-content-between'>
                    <p class='mb-1'>Letter</p>
                  </div>
                  <div class='col-10 mb-1 mt-3 small'>19-11-2022</div>
                </Link>
                <Link
                  href='#'
                  class='list-group-item list-group-item-action  py-3 lh-sm'
                  aria-current='true'
                >
                  <div class='d-flex w-100 align-items-center justify-content-between'>
                    <p class='mb-1'>Letter</p>
                  </div>
                  <div class='col-10 mb-1 mt-3 small'>19-11-2022</div>
                </Link>

                <Link
                  href='#'
                  class='list-group-item list-group-item-action py-3 lh-sm'
                  aria-current='true'
                >
                  <div class='d-flex w-100 align-items-center justify-content-between'>
                    <p class='mb-1 '>Letter</p>
                  </div>
                  <div class='col-10 mb-1 mt-3 small'>19-11-2022</div>
                </Link>
                <Link
                  href='#'
                  class='list-group-item list-group-item-action py-3 lh-sm'
                  aria-current='true'
                >
                  <div class='d-flex w-100 align-items-center justify-content-between'>
                    <p class='mb-1'>Letter</p>
                  </div>
                  <div class='col-10 mb-1 mt-3 small'>19-11-2022</div>
                </Link>
                <Link
                  href='#'
                  class='list-group-item list-group-item-action  py-3 lh-sm'
                  aria-current='true'
                >
                  <div class='d-flex w-100 align-items-center justify-content-between'>
                    <p class='mb-1'>scan</p>
                  </div>
                  <div class='col-10 mb-1 mt-3 small'>19-11-2022</div>
                </Link>
                <Link
                  href='#'
                  class='list-group-item list-group-item-action  py-3 lh-sm'
                  aria-current='true'
                >
                  <div class='d-flex w-100 align-items-center justify-content-between'>
                    <p class='mb-1'>Email</p>
                  </div>
                  <div class='col-10 mb-1 mt-3 small'>19-11-2022</div>
                </Link>
                <Link
                  href='#'
                  class='list-group-item list-group-item-action  py-3 lh-sm'
                  aria-current='true'
                >
                  <div class='d-flex w-100 align-items-center justify-content-between'>
                    <p class='mb-1'>Letter</p>
                  </div>
                  <div class='col-10 mb-1 mt-3 small'>19-11-2022</div>
                </Link>
                <Link
                  href='#'
                  class='list-group-item list-group-item-action  py-3 lh-sm'
                  aria-current='true'
                >
                  <div class='d-flex w-100 align-items-center justify-content-between'>
                    <p class='mb-1'>Docman Hub</p>
                  </div>
                  <div class='col-10 mb-1 mt-3 small'>19-11-2022</div>
                </Link>
                <Link
                  href='#'
                  class='list-group-item list-group-item-action  py-3 lh-sm'
                  aria-current='true'
                >
                  <div class='d-flex w-100 align-items-center justify-content-between'>
                    <p class='mb-1'>Docman Hub</p>
                  </div>
                  <div class='col-10 mb-1 mt-3 small'>19-11-2022</div>
                </Link>
                <Link
                  href='#'
                  class='list-group-item list-group-item-action  py-3 lh-sm'
                  aria-current='true'
                >
                  <div class='d-flex w-100 align-items-center justify-content-between'>
                    <p class='mb-1'>Docman Hub</p>
                  </div>
                  <div class='col-10 mb-1 mt-3 small'>19-11-2022</div>
                </Link>
                <Link
                  href='#'
                  class='list-group-item list-group-item-action  py-3 lh-sm'
                  aria-current='true'
                >
                  <div class='d-flex w-100 align-items-center justify-content-between'>
                    <p class='mb-1'>Letter</p>
                  </div>
                  <div class='col-10 mb-1 mt-3 small'>19-11-2022</div>
                </Link>
                <Link
                  href='#'
                  class='list-group-item list-group-item-action  py-3 lh-sm'
                  aria-current='true'
                >
                  <div class='d-flex w-100 align-items-center justify-content-between'>
                    <p class='mb-1'>Email</p>
                  </div>
                  <div class='col-10 mb-1 mt-3 small'>19-11-2022</div>
                </Link>
                <Link
                  href='#'
                  class='list-group-item list-group-item-action  py-3 lh-sm'
                  aria-current='true'
                >
                  <div class='d-flex w-100 align-items-center justify-content-between'>
                    <p class='mb-1'>Letter</p>
                  </div>
                  <div class='col-10 mb-1 mt-3 small'>19-11-2022</div>
                </Link>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='ratio ratio-1x1'>
              <iframe src='https://docs.google.com/gview?url=https://www.adobe.com/support/ovation/ts/docs/ovation_test_show.ppt&embedded=true' />
            </div>
          </div>

          <div className='col-4 d-flex flex-column align-items-stretch bg-light '>
            <form>
              <div className='d-flex flex-row justify-content-center  my-1 '>
                <h5 className='text-muted'>Document Details</h5>
              </div>
              <textarea
                type='text'
                value='09 Feb 2019 Unscheduled University College Hospital London A&E​'
                className='form-control bg-warning text-dark fw-bold  text-center d-warp warp-text'
                id='full-document-name'
                rows='1'
              />
              <hr />

              <div className='row g-2 align-items-center'>
                <div className='col-6'>
                  <label for='date' className='col-form-label'>
                    Event date:
                  </label>
                  <select
                    class='form-select bg-light'
                    aria-label='Default select example'
                  >
                    <option selected>09 Feb 2019 | 95%</option>
                    <option value='1'>23 Oct 2022 | 65%</option>
                    <option value='2'>19 Sep 2022 | 23%</option>
                    <option value='3'>25 May 2021 | 19%</option>
                  </select>
                </div>

                <div className='col-6'>
                  <label for='description' className='col-form-label'>
                    Description:
                  </label>
                  <select
                    class='form-select bg-light'
                    aria-label='Default select example'
                  >
                    <option selected>Unscheduled | 98%</option>
                    <option value='1'>Letter | 78%</option>
                    <option value='2'>DNA | 13%</option>
                    <option value='3'>Result| 19%</option>
                  </select>
                </div>
              </div>

              <div className='row g-2 align-items-center mt-1'>
                <div className='col-12'>
                  <label for='organisation' className='col-form-label'>
                    Organisation:
                  </label>
                  <select
                    class='form-select bg-light'
                    aria-label='Default select example'
                  >
                    <option selected>
                      University College Hospital London | 95%
                    </option>
                    <option value='1'>Wexham Park Hospital | 65%</option>
                    <option value='2'>St. Georges Hospital | 23%</option>
                    <option value='3'>Hillingdon Hospital | 10%</option>
                  </select>
                </div>
              </div>
              <div className='row g-2 align-items-center mt-1'>
                <div className='col-6'>
                  <label for='department' className='col-form-label'>
                    Department:
                  </label>
                  <select
                    class='form-select bg-light'
                    aria-label='Default select example'
                  >
                    <option selected>A&E | 95%</option>
                    <option value='1'>UCC | 65%</option>
                    <option value='2'>Cardiology | 23%</option>
                    <option value='3'>Rheumatology | 10%</option>
                  </select>
                </div>
                <div className='col-6'>
                  <label for='department' className='col-form-label'>
                    Assign to:
                  </label>
                  <select
                    class='form-select bg-light'
                    aria-label='Default select example'
                  >
                    <option selected>None</option>
                    <option value='1'>Reception</option>
                    <option value='2'>Nurse</option>
                    <option value='3'>GP</option>
                  </select>
                </div>
              </div>

              <div className='col-12'>
                <label for='eventcode' className='col-form-label'>
                  Event Code:
                </label>
                <select
                  class='form-select bg-light'
                  aria-label='Default select example'
                >
                  <option selected>Did not attend | 95%</option>
                  <option value='1'>Seen in A&E</option>
                </select>
              </div>
              <hr className='mt-3' />
              <div className='text-center'>
                <label for='notes' className='col-form-label'>
                  Notes
                </label>
              </div>
              <textarea
                className='form-control bg-light'
                id='notes'
                rows='2'
              ></textarea>
              <hr className='mt-3' />
              <div className='text-center'>
                <label for='codes' className='col-form-label'>
                  Codes
                </label>
              </div>
              <select
                className='form-select bg-light'
                multiple
                size='5'
                id='codes'
                aria-label='multiple select example'
              >
                <option selected>Malignant Neoplasm of the chroid</option>
                <option value='1'>bowel infection</option>
                <option value='2'>Diabetes</option>
                <option value='3'>thyroid disease</option>
                <option value='4'>Visually impaired</option>
                <option value='5'>late onset diabetes of the young</option>
              </select>
              <div className='row d-flex flex-row justify-content-end g-2 mt-3'>
                <div className='col-3'>
                  <button type='button' className='btn btn-success'>
                    File document
                  </button>
                </div>
                <div className='col-4'>
                  <button type='button' class='btn btn-danger'>
                    Reject document
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
