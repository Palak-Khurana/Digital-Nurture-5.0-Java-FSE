function SyntheticEvent() {

  function handleClick(e) {
    alert("I was clicked");
    console.log(e);
  }

  return (
    <div>
      <h2>Synthetic Event</h2>

      <button onClick={handleClick}>
        OnPress
      </button>
    </div>
  );
}

export default SyntheticEvent;