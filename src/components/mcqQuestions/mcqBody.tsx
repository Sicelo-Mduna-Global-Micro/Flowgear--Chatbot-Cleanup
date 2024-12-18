import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    goToNextQuestion,
    goToPreviousQuestion,
} from "./mcqBodyNavigationHandlers";

import {selectOption} from "./mcqBodySelectedOptionHandler";

interface McqBodyProps {
    
}
 
const McqBody: FunctionComponent<McqBodyProps> = () => {
    return ( <p>Flowgear Quiz Content</p> );
}
 
export default McqBody;