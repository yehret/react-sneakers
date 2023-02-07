import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper clear">

      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All Sneakers</h1>
          <div className="searchBlock d-flex">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex">

          <Card label={'Male Sneakers Nike Blazer Mid Suede'} price={'6 999'} imgSrc={'/img/sneakers/1.jpg'}/>
          <Card label={'Male Sneakers Nike Air Max 270'} price={'6 999'} imgSrc={'/img/sneakers/2.jpg'}/>
          <Card label={'Male Sneakers Nike Blazer Mid Suede'} price={'4 599'} imgSrc={'/img/sneakers/3.jpg'}/>
          <Card label={'Sneakers Puma X Aka Boku Future Ride'} price={'7 599'} imgSrc={'/img/sneakers/4.jpg'}/>
 
        </div>

      </div>
    </div>
  );
}

export default App;