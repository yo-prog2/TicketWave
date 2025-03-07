import COVER_IMAGE from './assets/image.png';
import LOGO from './assets/logo.png';

const colors = {
  primary: "#060606",
  background: "#083135", // This is the background color
  disbaled: "#D9D9D9",
  button: "#3C64B1"
};

const LoginPage = () => {
  return (
    <div className="w-screen h-screen" style={{ backgroundColor: colors.background }}>
      {/* Navbar */}
      <nav className="w-full bg-transparent fixed top-0 z-10 p-4">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-white text-xl font-semibold mr-3">Ticket Wave</p>
          <img src={LOGO} alt="Logo" className="h-12 w-auto" />
          
          {/* Centered Links (spaced away from the logo) */}
          <div className="hidden md:flex space-x-6">
            <a href="/login" className="text-white hover:underline">Home</a>
            <a href="/categories" className="text-white hover:underline">Categories</a>
            <a href="#" className="text-white hover:underline">About</a>
            <a href="#" className="text-white hover:underline">Contact</a>
          </div>

          {/* Buttons aligned to the right */}
          <div className="flex space-x-4 ml-auto">
            <button className="text-white px-4 py-2 rounded-md" style={{ backgroundColor: colors.button }}>Sign Up</button>
          </div>
        </div>
      </nav>

      {/* Content container (form + image) */}
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-center pt-20">
        {/* Left Side: Login Form */}
        <div className="w-full max-w-md h-auto bg-transparent flex flex-col p-8 justify-center items-center mx-auto md:ml-80">
          {/* Login Form */}
          <div className="w-full flex flex-col">
            <div className="mb-6">
              <h3 className="text-4xl font-semibold text-white mb-2">Log in</h3>
              <p className="text-base mb-2 text-white">Please enter your credentials.</p>
            </div>
            <div className="w-full flex flex-col">
              <input type="email" placeholder="Email" className="w-full text-white py-2 my-2 bg-transparent border-b border-white outline-none focus:outline-none" />
              <input type="password" placeholder="Password" className="w-full text-white py-2 my-2 bg-transparent border-b border-white outline-none focus:outline-none" />
            </div>
            <div className="w-full flex items-center justify-between my-4">
              <p className="text-sm text-[#8080D7] cursor-pointer underline">Terms & Conditions</p>
              <p className="text-sm text-[#8080D7] cursor-pointer underline">Forgot Password?</p>
            </div>
            <button
              className="w-40 text-white my-2 font-semibold rounded-md p-3 text-center cursor-pointer"
              style={{ backgroundColor: colors.background }}
            >
              Log in
            </button>
            <div className="w-full flex items-center mt-4">
              <p className="text-sm text-white ml-12">Don’t have an account?{' '}</p>
              <p className="text-sm text-[#FFFFFF] cursor-pointer underline">Sign up for free</p>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="hidden md:flex w-2/3 h-full items-center justify-start pl-10">
          <img src={COVER_IMAGE} alt="Cover" className="w-70 h-auto object-cover rounded-lg shadow-md" />
        </div>

      </div>

      {/* Footer inside the main container with same background color */}
      <footer className="w-full py-4 mt-auto" style={{ backgroundColor: colors.background }}>
        <div className="w-full max-w-7xl mx-auto flex justify-center items-center">
          <p className="text-white text-sm">&copy; 2025 Ticket Wave. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
