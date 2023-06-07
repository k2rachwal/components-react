import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import Sidebar from "./components/Sidebar";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";
import CounterPage2 from "./pages/C2";

function App() {


return (
<div className="container grid mx-auto grid-cols-6 mt-4">
<Sidebar/>
    <div className="col-span-5">
        <Route path='/accordion'>
            <AccordionPage />
         </Route>
        <Route path='/dropdown'>
            <DropdownPage />
        </Route>
        <Route path='/buttons'>
            <ButtonPage />
        </Route>
        <Route path='/modal'>
            <ModalPage />
        </Route>
        <Route path='/table'>
            <TablePage />
        </Route>
        <Route path='/counter'>
            <CounterPage initialCount={10} />
            <CounterPage2 initialCount={0}/>
        </Route>
    
    </div>
    
</div>);
};

export default App;
