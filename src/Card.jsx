import profilePic from './assets/saerosoft_white.jpg'
function Card(){
 return(
  <div className="card">
     <img className="card-image"src={profilePic} alt="profile picture"></img>
     <h2 className="card-title">Bro Code</h2>
     <p className='card-text'>I am a student and play game every day</p>
   </div>
 )

}
export default Card