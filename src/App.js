import "./App.css";
import RandomGif from "./components/RandomGif";
import UserInputGif from "./components/UserInputGif";

function App() {
  return (
    <div className=" App background">
      <div className="heading">
        <h1>Random Gifs</h1>
      </div>
      <RandomGif />
      <UserInputGif />
    </div>
  );
}

export default App;
