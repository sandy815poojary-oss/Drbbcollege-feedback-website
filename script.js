function login(){

let user=document.getElementById("user").value
let pass=document.getElementById("pass").value

if(user=="admin" && pass=="1234"){

window.location="dashboard.html"

}else{

alert("Invalid login")

}

}

function submitFeedback(){

let subject=document.getElementById("subject").value
let rating=document.getElementById("rating").value
let message=document.getElementById("message").value

let feedback={

subject,
rating,
message

}

let list=JSON.parse(localStorage.getItem("feedback")) || []

list.push(feedback)

localStorage.setItem("feedback",JSON.stringify(list))

alert("Feedback submitted")

}

if(document.getElementById("feedbackList")){

let data=JSON.parse(localStorage.getItem("feedback")) || []

let html=""

data.forEach(f=>{

html+=`<div>
<h3>${f.subject}</h3>
<p>${f.rating}</p>
<p>${f.message}</p>
</div>`

})

document.getElementById("feedbackList").innerHTML=html

}