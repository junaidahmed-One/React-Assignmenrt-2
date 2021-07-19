import React,{useState} from 'react';

const Form = ( ) => {
    const [userRegistration,setUserRegistration]=useState(
        {
            FirstName:"",
            LastName:"",
            email:"",
            subject:"React"
        }
    );

    const [records,setRecords]=useState([]);
    const handleInput=(e) =>{
        const name=e.target.name;
        const value=e.target.value;
        console.log(name,value);
        setUserRegistration({...userRegistration,[name] :value})

    }

    
    const handleSubmit =(e) => {
        e.preventDefault();

        const newRecord ={ ...userRegistration, id:new Date().getTime().toString()}
        setRecords([...records,newRecord])
    }


    return (
        <div>
            <div className="center">
            <h1>Registration</h1>
            <form action="" onSubmit={handleSubmit}>
            <div className="txt_field">
                <label htmlFor="FirstName"></label>
                <input type="text" placeholder="First Name" autoComplete="off" name="FirstName" 
                value={userRegistration.FirstName}
                onChange={handleInput}
                id="FirstName"></input>
            </div>

            <div className="txt_field">
                <label htmlFor="LastName"></label>
                <input type="text" placeholder="Last Name" autoComplete="off" name="LastName" 
                value={userRegistration.LastName}
                onChange={handleInput}
                id="SecondName"></input>
            </div>

            <div className="txt_field">
                <label htmlFor="Email"></label>
                <input type="text" placeholder="Email" autoComplete="off" name="email" 
                value={userRegistration.email}
                onChange={handleInput}
                id="Email"></input>
            </div>

            <div>
                <label htmlFor="subject" className="sub">Subject</label>
                
                <select name="subject" value={userRegistration.subject}
                onChange={handleInput}>
                    <option value='React'>React</option>
                    <option value='Angular'>Angular</option>
                    <option value='NodeJs'>Node Js</option>
                    <option value='Java'>Java</option>
                </select>
            </div>

            <div>
                <button className="submit" type="submit">Register</button>
            </div>
            </form>
            </div>

            <div className="details">
                {
                    records.map((curElem)=>{
                        const{id,FirstName,LastName,email,subject}=curElem;
                        return(
                            
                            <div key={curElem.id}>
                            <p id="thnkB">Thank You For Registering</p>
                            <p id="emoD">Your Details 👇</p>
                            <p>First Name: {FirstName}</p>
                            <p>Last Name: {LastName}</p>
                            <p>Email: {email}</p>
                            <p>Subject: {subject}</p>
                        </div>
                        )
                        
                        
                    }

                    )
                }
            </div>

        </div>
    )
}

export default Form; 