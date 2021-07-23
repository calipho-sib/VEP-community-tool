import FeatureViewerComponent from "./components/FeatureViewer";
import nextprotLogo from "./utils/icons/nextprot-logo.png";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <img src={nextprotLogo} className="logo" alt="neXtProt logo" />
      <FeatureViewerComponent />
    </div>
  );
};

export default App;
