import * as Style from './style.js';
import { PieChart } from './Components/PieChart/index.js';
import {BarChart} from './Components/BarChart/index.js';
import { AreaChart } from './Components/AreaChart/index.js';
import { CandlestickChart } from './Components/CandlestickChart/index.js';
import { LineChart } from './Components/LineChart/index.js';
import { GeoChart } from './Components/GeoChart/index.js';

function App() {

  return (
    <Style.Container>
      <PieChart/>
      <BarChart/>
      <AreaChart/>
      <CandlestickChart/>
      <LineChart/>
      <GeoChart/>
    </Style.Container>
  );
}

export default App;
