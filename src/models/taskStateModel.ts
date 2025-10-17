import type { TaskModel } from "./taskModel";

export type TaskStateModel = {
    tasks: TaskModel[];
    secondsRemaining: number;
    formattedSecondsRemaining: string;
    activeTask: TaskModel | null;
	currencyCycle: number;
    config: {
        workTime: number;
        shortBreakTime: number;
        longBreakTime: number;
    };
};