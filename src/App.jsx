import { useState } from "react"

function App() {
  const[open,setOpen]=useState(false);
  const[theme,setTheme]=useState("light");
  return (
  <div className={`${theme} min-h-screen text-slate-900 dark:bg-myBG dark:text-myTxt`}>
    {/* Navbar */}
    <div className="flex items-center justify-between px-4">
    <div className="font-bold">Logo</div>
    {/* Desktop Nav */}
    <div className="hidden sm:flex gap-2">
      <span>Home</span>
      <span>About</span>
      <span>Contact</span>
      <button className="text-xl cursor-pointer" onClick={()=>setTheme(theme === "light" ?"dark":"light")}>{theme === "light" ? "🌞":"🌙"}</button>
    </div>
    <button className="text-xl cursor-pointer sm:hidden" onClick={()=>setOpen(!open)}>☰</button>
  </div>
  {/* Mobile Nav */}
    {open &&(<div className="flex flex-col items-center text-slate-900 dark:text-white gap-2 p-4 sm:hidden">
      <span>Home</span>
      <span>About</span>
      <span>Contact</span>
      <button className="text-xl cursor-pointer sm:hidden" onClick={()=>setTheme(theme === "light" ?"dark":"light")}>{theme === "light" ? "🌞":"🌙"}</button>

    </div>)}
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
