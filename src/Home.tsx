import './App.css'
import { Button } from '@/components/ui/button'

function App() {
    
    return (
        <>
        {/* page2 */}
        <div className="max-w-screen-sm w-screen h-full bg-slate-900 flex justify-around flex-col">
        <div className="mx-20">
        <h1 className="text-xl text-slate-50 mb-4 -ml-4">What you need:</h1>
        <ul className="list-disc text-left ml-0">
        <li className="text-xl text-slate-200">750g bread flour</li>
        <li className="text-l text-slate-400 ml-4 list-none">+ a little extra for dusting</li>
        <li className="text-xl text-slate-200">7g instant yeast</li>
        <li className="text-xl text-slate-200">12g table salt</li>
        <li className="text-xl text-slate-200">480ml water</li>
        <li className="text-xl text-slate-200">25ml olive oil</li>
        <li className="text-l text-slate-400 ml-4 list-none mb-4">+ a splash extra for the tin</li>
        
        <li className="text-xl text-slate-200">A large mixing bowl</li>
        <li className="text-xl text-slate-200">A tea towel</li>
        <li className="text-xl text-slate-200">A clean surface</li>
        <li className="text-l text-slate-400 ml-4 list-none mb-4">for kneading on</li>
        
        <li className="text-xl text-slate-200">An oven</li>
        <li className="text-xl text-slate-200">A large loaf tin</li>
        <li className="text-l text-slate-400 ml-4 list-none mb-4">or similar casserole dish</li>
        
        <li className="text-xl text-slate-200">Dough scrapers</li>
        <li className="text-l text-slate-400 ml-4 list-none mb-4">optional, but very useful!</li>
        </ul>
        </div>
        <div className="mx-10">
        
        <Button variant="default" size="lg" className="w-full" >
        Continue
        </Button>
        </div>
        
        
        
        </>
    )
}

export default App
