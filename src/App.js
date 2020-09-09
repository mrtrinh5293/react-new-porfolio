import React from "react";
import Content from "./components/Content";
import ContentPageTwo from "./components/ContentPageTwo";
import OthersProjects from "./components/OthersProjects";
import SimpleReactLightbox from "simple-react-lightbox";
import { HashRouter as Router, Route } from "react-router-dom";
import Covid from "./components/sub-component/Covid";
import Covfee from "./components/sub-component/Covfee";
import Quizz from "./components/sub-component/Quizz";
import World from "./components/sub-component/World";
import Resume from "./components/Resume";

const options = {
  overlayColor: "rgb(25, 136, 124)",
  captionStyle: {
    captionColor: "#a6cfa5",
    captionFontFamily: "Raleway, sans-serif",
    captionFontSize: "22px",
    captionFontWeight: "300",
    captionFontStyle: "capitalize"
  },
  buttonsStyle: {
    buttonsBackgroundColor: "#1b5245",
    buttonsIconColor: "rgba(126, 172, 139, 0.8)"
  },
  autoplaySpeed: 1500,
  transitionSpeed: 900,
  showCaption: true,
  showThumbnails: true
};

function App() {
  return (
    <SimpleReactLightbox {...options}>
    
      <div className="App">
        <Router>
          <Route path="/" exact component={Content} />
          <Route path="/example-two/" component={ContentPageTwo} />
          <Route path="/others-projects/" component={OthersProjects} />
          <Route path="/covid-tracker/" component={Covid} />
          <Route path="/covfefe/" component={Covfee} />
          <Route path="/swift-quizz/" component={Quizz} />
          <Route path="/world-countries/" component={World} />
          <Route path="/resume/" component={Resume} />

        </Router>
      </div>
    </SimpleReactLightbox>
  );
}

export default App;
