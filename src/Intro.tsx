import './App.css'
import { Drawer } from 'vaul'
import { PlayCircle } from "lucide-react"

export default function Intro() {
    // const [count, setCount] = useState(0)
    
    return (
        <>

        <h1 className="text-xl text-slate-50 mb-4">What you need:</h1>
        <ul className="list-disc text-left">
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
        </>
    )
}