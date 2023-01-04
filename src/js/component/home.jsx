import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [todos, setTodos] = useState([])

	return (
		<div className="row d-flex flex-column">
			<div className="col-3 mx-auto mt-5"><strong>To Dos</strong></div>
			<input className="col-3 mx-auto mt-2" placeholder="Add To Do" onKeyUp={(e)=>{
				if(e.key =="Enter" && e.target.value.trim() !=""){
					setTodos([...todos, e.target.value]); 
					e.target.value="";
				}
			}}></input>
            {todos.map((todo, index)=>{
				return (
					<div key={index} className="col-3 mx-auto mt-1 bg-light d-flex justify-content-between align-items-center">
                    <div>{todo}</div>
					<button type="button" className="btn btn-danger" onClick={()=>{
						let newTodos = [];
						for(let x=0; x<todos.length; x++){
							if(x!=index){
								newTodos.push(todos[x])
							}
						}
						setTodos(newTodos);
					
					}}><i className="fa-solid fa-trash-can"></i></button>
					</div>
				)
			})};
			<div >
  
 
			</div>

		</div>
	
	);
};

export default Home;
