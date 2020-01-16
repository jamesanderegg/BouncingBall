import React from 'react';
import { render } from 'react-dom';

import BouncingBall from './BouncingBall'

const App = () =>(
    <div>
        <svg width="800" height="600">
            <BouncingBall max_h={600} x={50}/>
        </svg>
    </div>
);

render(<App />, document.getElementById("root"));
