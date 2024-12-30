import './App.css';
import Class1 from './Class1.jsx';
function Form(){
    
    return(
    <div>
    <h2>This is a sample form</h2>
    <form className='fr'>
        <label htmlFor='name'>Name:</label>
        <input type="text" id='name'/><br/>
        <label htmlFor="email">Email:</label>
        <input type="email" id='email'/><br />
        <label htmlFor="pass">Password:</label>
        <input type="password" id='pass'/><br />
        <label htmlFor="dob">DOB:</label>
        <input type="date"  id="dob" /><br />
        <label htmlFor="">Gender:</label>
        <input type='radio'/><label >male</label>
        <input type='radio'/><label >female</label>
    </form>
    <Class1/>
    </div>
    )

}
export default Form