import img from "./photo.png";
function About(){
    return <div>
        <img src={img} id="image"></img>
        <span id="profile-name">Rashedul Hasan</span>
        <div class="profile-form">
  
  <div class="form-group">
    <label for="first-name">First Name</label>
    <input type="text" id="first-name" value="Rashedul" readonly/>
  </div>

  <div class="form-group">
    <label for="last-name">Last Name</label>
    <input type="text" id="last-name" value="Hasan" readonly/>
  </div>

 
  <div class="form-group full">
    <label for="email">Email</label>
    <input type="email" id="email" value="Rashedul@example.com" readonly/>
  </div>

  <div class="form-group full">
    <label for="phone">Phone</label>
    <input type="tel" id="phone" value="+1 234 567 890" readonly/>
  </div>

  <div class="form-group full">
    <label for="date-joining">Date of Joining</label>
    <input type="date" id="date-joining" value="2025-01-15" readonly/>
  </div>
</div>

  
    </div>
}

export {About};