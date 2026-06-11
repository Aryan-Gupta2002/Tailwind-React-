function App() {
  return (
  <div>
    {/* Navbar */}
    <div className="flex items-center justify-between bg-slate-900 text-white px-4">
    <div className="font-bold">Logo</div>
    {/* Desktop Nav */}
    <div className="hidden sm:flex gap-2">
      <span>Home</span>
      <span>About</span>
      <span>Contact</span>
    </div>
    <button>☰</button>
    {/* Mobile Nav */}
    <div className="flex gap-2">
      <span>Home</span>
      <span>About</span>
      <span>Contact</span>
    </div>
  </div>
  <div className="grid sm:grid-cols-2 md:grid-cols-3 text-white p-6 gap-6 text-center font-semibold sm:text-sm ">
    <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all duration-500">Feature1</div>
    <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105">Feature2</div>
    <div className="bg-slate-500 p-4 rounded hover:bg-slate-600">Feature3</div>
    <div className="bg-slate-500 p-4 rounded hover:bg-slate-600">Feature4</div>
    <div className="bg-slate-500 p-4 rounded hover:bg-slate-600">Feature5</div>
    <div className="bg-slate-500 p-4 rounded hover:bg-slate-600">Feature6</div>
  </div>
  </div>
  
  )
}
// p-1 -> 0.25rem. p-2 -> 0.5rem
// flex-col ->flex-direction:column
// sm:grid-cols-2, means anything bigger than a sm(small screen)
// will have 2 columns, lesser than sm will have 1 column
export default App
