import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { PlayCircleIcon } from "lucide-react";


export function MainForm() {

	function handleCreateNewTask(event: React.FormEvent) {
		event.preventDefault();
		console.log("DEU CERTO!");
	}
	
  return (
	<div>
		<form onSubmit={handleCreateNewTask} className="form" action="">
          <div className="formRow">
            <DefaultInput 
              labelText="task"
              id="menuInput" 
              type="text"
              placeholder="Digite aqui..."/>
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor !</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon/>} color="green"/>
          </div>
        </form>
	</div>
  )
}