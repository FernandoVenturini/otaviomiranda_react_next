export  type TaskModel = {
	id: string;
	name: string;
	duration: number;
	startDate: number;
	completeDate?: number | null; // Quando o timer chega ao final
	interruptDate?: number | null; // Quando o usuario interrompe a tarefa
	type: 'workTime' | 'short-break' | 'long-break';
}