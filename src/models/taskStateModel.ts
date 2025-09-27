import type { TaskModel } from "./taskModel"

export type TaskStateModel = {
	tasks: TaskModel[];
	secondsRemaning: number;
	formattedSecondRemaning: string;
	activeTask: TaskModel | null;
	currentCycle: number;
	config: {
		workTime: number;
		shortBreak: number;
		longBreak: number;
		cycles: number;
	}
}