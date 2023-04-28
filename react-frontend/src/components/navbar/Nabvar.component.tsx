import { ProximaLogo } from './../../assets/index'
const Nabvar = () => {
  return (
    <div className="navbar bg-base-100 ">
      <div className="flex-1 space-x-2">
        <img src={ProximaLogo} className="min-w-12 min-h-12 max-w-12 max-h-12" alt="logo" />
        <p className='text-3xl font-semibold text-proximaColor max-sm:hidden'>PROXIMA</p>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <p>About Us</p>
          </li>
          <li tabIndex={0}>
            <p>
              Nearshoring
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </p>
            <ul className="bg-base-100 p-2">
              <li>
                <p>Submenu 1</p>
              </li>
              <li>
                <p>Submenu 2</p>
              </li>
            </ul>
          </li>
          <li tabIndex={0}>
            <p>
              Insurtech
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </p>
            <ul className="bg-base-100 p-2">
              <li>
                <p>Submenu 1</p>
              </li>
              <li>
                <p>Submenu 2</p>
              </li>
            </ul>
          </li>
          <li>
            <p>Careers</p>
          </li>
          <li>
            <button className="btn-primary btn text-white">Button</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nabvar;
