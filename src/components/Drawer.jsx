const Drawer = (props) => {
    return (
        <div style={{ display: 'none' }} className="overlay">
        <div className="drawer">
          <h2 className="mb-30 d-flex justify-between">Cart <img className="removeBtn" src="/img/remove-hovered.svg" alt="Remove" /></h2>

          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg">
              </div>
              <div className="mr-20 flex">
                <p className="mb-5">Male Sneakers Nike Blazer Mid Suede</p>
                <b>6 999 UAH</b>
              </div>
              <img className="removeBtn" src="/img/remove-hovered.svg" alt="Remove" />
            </div>

            <div className="cartItem d-flex align-center mb-20">
              <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg">
              </div>
              <div className="mr-20 flex">
                <p className="mb-5">Male Sneakers Nike Blazer Mid Suede</p>
                <b>6 999 UAH</b>
              </div>
              <img className="removeBtn" src="/img/remove-hovered.svg" alt="Remove" />
            </div>
          </div>

          <div className="cartTotalBlock">
            <ul>
              <li>
                  <span>Summ:</span>
                  <div></div>
                  <b>13 999 UAH</b>
                </li>
                <li>
                  <span>Tax 5%:</span>
                  <div></div>
                  <b>1 299 UAH</b>
                </li>
             </ul>
              <button className="greenButton">Order <img src="/img/arrow.svg" alt="arrow" /></button>
          </div>


        </div>
      </div>
    );
}

export default Drawer;