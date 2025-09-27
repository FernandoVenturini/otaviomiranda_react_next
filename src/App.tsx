import { Home } from './pages/Home';

import './styles/theme.css';
import './styles/global.css';
import { useState } from 'react';
import type { TaskStateModel } from './models/TaskStateModel';
import { TaskContext } from './contexts/TaskContext';


const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25 * 60,
    shortBreakTime: 5 * 60,
    longBreakTime: 15 * 60,
  },
}

export function App() {
  const [state, setState] = useState(initialState);
  
  return (
	<TaskContext.Provider value={{ outraCoisa: 321 }}>
		<Home />
	</TaskContext.Provider>
  );

};

