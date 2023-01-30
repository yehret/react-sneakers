function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">The best sneakers shop</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img className="mr-10" width={18} height={18} src="img/cart.svg" alt="cart" />
            <span>1205 UAH</span>
          </li>
          <li>
            <img width={18} height={18} src="img/user.svg" alt="user" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">All Sneakers</h1>

        <div className="d-flex">
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneaker" />
            <h5>Male Sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>6 999 UAH</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneaker" />
            <h5>Male Sneakers Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>6 999 UAH</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Sneaker" />
            <h5>Male Sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>4 599 UAH</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneaker" />
            <h5>Sneakers Puma X Aka Boku Future Ride</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>7 599 UAH</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
