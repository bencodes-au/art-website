import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-base-200 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Art Website</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="btn btn-ghost">
              Store
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="btn btn-ghost">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/about" className="btn btn-ghost">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="btn btn-ghost">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
