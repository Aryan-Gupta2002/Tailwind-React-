function App() {
  return (
  <div>
    <div className="flex items-center justify-between bg-slate-900 text-white px-4">
    <div className="font-bold">Logo</div>
    <div className="flex gap-2">
      <span>Home</span>
      <span>About</span>
      <span>Contact</span>
    </div>
  </div>
  <div className="grid grid-cols-2">
    <div className="bg-slate-500 p-4 rounded-xl">Feature1</div>
    <div>Feature2</div>
    <div>Feature3</div>
    <div>Feature4</div>
    <div>Feature5</div>
    <div>Feature6</div>
  </div>
  </div>
  
  )
}
// p-1 -> 0.25rem. p-2 -> 0.5rem
// flex-col ->flex-direction:column
export default App
