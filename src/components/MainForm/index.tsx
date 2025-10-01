import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { PlayCircleIcon } from "lucide-react";


export function MainForm() {
	const {setState} = useTaskContext();

	function handleClick() {
		setState(prevState => {
			return {
				...prevState,
				formattedSecondsRemaining: '25:00',
			}
		});
	};
  return (
	<div>
		<form className="form" action="">
			<button type="button" onClick={handleClick}>CLICAR</button>
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