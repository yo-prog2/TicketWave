import COVER_IMAGE from './assets/image.png';
import LOGO from './assets/logo.png';
import c1 from './assets/c1.jpg';
import c2 from './assets/c2.jpg';
import c3 from './assets/c3.jpg';


const colors = {
  primary: "#060606",
  background: "#083135",
  disabled: "#D9D9D9",
  button: "#3C64B1"
};

const CategoriesPage = () => {
  return (
    <div className="w-screen h-screen" style={{ backgroundColor: colors.background }}>
      {/* Navbar */}
      <nav className="w-full bg-transparent fixed top-0 z-10 p-4">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-white text-xl font-semibold mr-3">Ticket Wave</p>
          <img src={LOGO} alt="Logo" className="h-12 w-auto" />
          
          {/* Centered Links */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-white hover:underline">Home</a>
            <a href="/categories" className="text-white hover:underline">Categories</a>
            <a href="#" className="text-white hover:underline">About Us</a>
            <a href="#" className="text-white hover:underline">Contact</a>
          </div>

          {/* Buttons aligned to the right */}
          <div className="flex space-x-4 ml-auto">
            <button className="text-white px-4 py-2 rounded-md" style={{ backgroundColor: colors.button }}>
            <a href="/login" >Login</a>
                </button>
            <button className="text-white px-4 py-2 rounded-md" style={{ backgroundColor: colors.button }}>Sign Up</button>
          </div>
        </div>
      </nav>

      {/* Categories Section */}
      <div className="w-full h-full flex flex-col items-start justify-center pt-32 pl-60"> {/* Added padding-left here for alignment */}
        {/* Header */}
        <h2 className="text-4xl font-semibold text-white mb-20">Spectacles</h2>

        {/* Categories Container */}
        <div className="w-full flex gap-8 pl-10">
          {/* Category 1 */}
<div className="w-60 h-80 bg-transparent flex flex-col items-center">
  <img src={c1} alt="Category 1" className="w-full h-56 object-cover rounded-lg shadow-md" /> {/* Increased height */}
  <p className="text-white mt-4">Touskié</p>
</div>

{/* Category 2 */}
<div className="w-60 h-80 bg-transparent flex flex-col items-center">
  <img src={c2} alt="Category 2" className="w-full h-56 object-cover rounded-lg shadow-md" /> {/* Increased height */}
  <p className="text-white mt-4">Nidhal saadi</p>
</div>

{/* Category 3 */}
<div className="w-60 h-80 bg-transparent flex flex-col items-center">
  <img src={c3} alt="Category 3" className="w-full h-56 object-cover rounded-lg shadow-md" /> {/* Increased height */}
  <p className="text-white mt-4">Gad El Maleh</p>
</div>

        </div>
      </div>
      <footer className="w-full py-4 mt-auto" style={{ backgroundColor: colors.background }}>
        <div className="w-full max-w-7xl mx-auto flex justify-center items-center">
          <p className="text-white text-sm">&copy; 2025 Ticket Wave. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CategoriesPage;
