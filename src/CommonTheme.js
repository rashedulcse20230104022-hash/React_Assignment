import bg1 from "./Article.jpg"
import bg2 from "./Profile.jpg"
function Background1(){
  return<div>
    <img src={bg1} className="Background-theme"></img>
  </div>
  
}

function Background2(){
  return<div>
    <img src={bg2} className="Background-theme"></img>
  </div>
  
}



export {Background1,Background2};