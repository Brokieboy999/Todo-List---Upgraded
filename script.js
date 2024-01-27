let allTodos = document.querySelector(".todos")
let addBtn = document.getElementById("add")


addBtn.addEventListener("click", function(e){
    e.preventDefault()
    let todoName = document.getElementById('todoName').value
   if(!todoName){
        alert("Todo Field cannot be Empty")
   }else{
    console.log(todoName);
    
    let li = document.createElement("li")
    let deleteButton = document.createElement("button")
    deleteButton.innerHTML = `&#10006;`
    li.textContent = todoName
    li.appendChild(deleteButton)
    allTodos.appendChild(li)
 
    document.querySelectorAll(".todos li").forEach((n)=>{
        n.addEventListener("click", function(){
            n.classList.toggle("liStyle")
            saveTodos()
        })
    })

    deleteButton.addEventListener("click", function(){
        deleteButton.parentElement.remove()
        console.log('gg');
    })

    saveTodos()
  
}
})

const saveTodos = () =>{
    localStorage.setItem("data", allTodos.innerHTML)
    
}

const showTodos = () =>{
    allTodos.innerHTML = localStorage.getItem("data")
}

showTodos()

document.querySelectorAll(".todos li").forEach((n)=>{
    n.addEventListener("click", function(){
       
        n.classList.toggle("liStyle")
        saveTodos()
    })
})

document.querySelectorAll('.todos li button').forEach((p)=>{
    p.addEventListener("click", function(){
        p.parentElement.remove()
        console.log('gg');
    })
})