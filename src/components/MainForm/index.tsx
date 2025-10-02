import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { PlayCircleIcon } from "lucide-react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";


export function MainForm() {
	
  return (
	<div>
		<form className="form" action="">
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