import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  HandleNextQuestion,
  HandlePreviousQuestion,
  HandleCorrectAnswerSelection,
} from "./mcqBodyButtonEventHandlers";

interface McqBodyProps {
    
}
 
const McqBody: FunctionComponent<McqBodyProps> = () => {
    return ( <p>Flowgear Quiz Content</p> );
}
 
export default McqBody;