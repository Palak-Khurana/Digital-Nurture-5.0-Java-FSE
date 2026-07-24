function Welcome() {

  function showMessage(msg) {
    alert(msg);
  }

  return (
    <div>
      <h2>Welcome Example</h2>

      <button onClick={() => showMessage("Welcome")}>
        Say Welcome
      </button>
    </div>
  );
}

export default Welcome;