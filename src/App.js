function Alert() {
  return (
    <div className="alert alert-info">
      <div className="text-white">
        <span>
          <i className="fa-solid fa-circle-info"></i>
        </span>
        <span>New software update available.</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Alert />
      <hr className="my-4" />
      <Alert />
    </>
  );
}

export default App;
