import { AdvancedExample } from "./Article"
import { Background1,Background2} from './CommonTheme';
import {About} from "./Profile";
function Profile_page(){
    return <div> 
       <Background2/>
       <About/>
    </div>
}


function Article_page(){
    return <div>
        <Background1/>
        <AdvancedExample/>
    </div>
}


export {Profile_page,Article_page};

