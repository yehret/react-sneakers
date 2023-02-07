const Card = (props) => {
    return (
        <div className="card">
            <div className="favotite">
              <img src="/img/heart-unliked.svg" alt="heart-unliked" />
            </div>
            <img width={133} height={112} src={props.imgSrc} alt="Sneaker" />
            <h5>{props.label}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>{props.price} UAH</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
        </div>
    );
}

export default Card;