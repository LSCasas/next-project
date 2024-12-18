import Devto from "./DevtoLogo";


const HeaderRegister = () => {
  return (
    <div className="bg-gray-800 p-2">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="navbar navbar-expand-sm">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <Devto height="4rem" width="3rem" />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderRegister;
