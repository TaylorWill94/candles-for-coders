function NewCandle() {
  return (
    <div className="new-form">
      <h1>CREATE YOUR OWN CANDLE</h1>
      <form className="candle-form">
        <label htmlFor="name">NAME:</label>
        <br />
        <input type="text" id="text" placeholder="NAME ME" />
        <br />
        <label htmlFor="description">DESCRIPTION:</label>
        <br />
        <input type="text" id="description" placeholder="DESCRIBE ME" />
        <br />
        <label htmlFor="price">PRICE:</label>
        <br />
        <input type="number" id="price" placeholder="$$$" />
        <br />
        <label htmlFor="rating">RATING:</label>
        <br />
        <input type="number" id="rating" placeholder="5 STARS?" />
        <br />
        <label htmlFor="favorite">FAVORITE:</label>
        <br />
        <input type="checkbox" id="favorite" placeholder="FAV" />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default NewCandle;
