import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState({"label":"","done":false});
	const [todos, setTodos] = useState([])

	useEffect(() => {
		getTodos();
	  }, []);
	
	  const getTodos = async () => {
		const response = await fetch("https://assets.breatheco.de/apis/fake/todos/user/jantgg" );
		const data = await response.json();setTodos(data);};
	
	  const updateTodos = async () => {
		const response = await fetch("https://assets.breatheco.de/apis/fake/todos/user/jantgg" , {
			method: "PUT",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(
			 todos.concat([inputValue]))});
		if (response.ok) {getTodos()}};


	return (
		<div className="row d-flex flex-column">
			<div className="col-3 mx-auto mt-5"><strong>To Dos</strong></div>
			<input className="col-3 mx-auto mt-2" 
				placeholder="Add To Do" 
				value={inputValue.label}
				onChange={(e) => setInputValue({"label":e.target.value,"done":false})}
				onKeyUp={(e)=>{
				if(e.key =="Enter" && e.target.value.trim() !=""){
					updateTodos()
				}
			}}></input>
            {todos.map((todo, index)=>{
				return (
					<div key={index} className="col-3 mx-auto mt-1 bg-light d-flex justify-content-between align-items-center">
                    <div>{todo.label}</div>
					<button type="button" className="btn btn-danger" onClick={()=>{
						 setTodos(
							todos.filter((t, currentIndex) => index != currentIndex)
						  )
						
					
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
