import './App.css';
import Header from './components/Header/Header'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SeverityOfAtypia from './pages/SeverityOfAtypia/SeverityOfAtypia';
import RiskClarification from './pages/RiskClarification/RiskClarification';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <li><a href='/riskClarification'>Калькулятор уточнения риска злокачественности образования щитовидной железы с цитологической картиной неонкоцитарной фолликулярной неоплазии</a> </li>
        <br />
        <li><a href='/severityOfAtypia'>Калькулятор оценки степени выраженности атипии цитологической картины неонкоцитарной фолликулярной неоплазии</a> </li>
      </div>,     
    },
    {
      path: "/riskClarification",
      element: <RiskClarification />,     
    },
    {
      path: "/severityOfAtypia",
      element: <SeverityOfAtypia />,     
    },
  ])

  return (
    <>
      <Header />
      <div className='container' style={{marginTop: '80px'}}>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App;
