import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [todos, setTodos] = useState([])

	return (
		<div className="row d-flex flex-column">
			<div className="col-3 mx-auto mt-5"><strong>To Dos</strong></div>
			<input className="col-3 mx-auto mt-2" onKeyUp={(e)=>{
				if(e.key =="Enter"){
					let newTodos = e.target.value;
					setTodos([...todos, newTodos]); 
				}
			}}></input>
            {todos.map((todo, index)=>{
				return (
					<div key={index} className="col-3 mx-auto mt-1 bg-light d-flex justify-content-between align-items-center">
                    <div>{todo}</div>
					<button type="button" class="btn btn-danger" onClick={()=>{
					delete todos[{index}]}}><i class="fa-solid fa-trash-can"></i></button>
					</div>
				)
			})};
			<div >
  
 
			</div>

		</div>
	
	);
};

export default Home;
