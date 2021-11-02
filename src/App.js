import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import generatePalette from "./colorHelpers"
import { Switch, Route } from 'react-router-dom';
import PaletteList from './PaletteList';

function App() {
  // console.log(generatePalette(seedColors[4]))
  function findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }
  return (
    <Switch>
      <Route exact path="/" render={() => <PaletteList palettes={seedColors} />} />
      <Route exact path="/palette/:id"
        render={(routeProps) => (<Palette

          palette={generatePalette(findPalette(routeProps.match.params.id))} />)} />
    </Switch>



    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
