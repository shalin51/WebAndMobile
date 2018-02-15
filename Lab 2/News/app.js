var users=[{
    "username":"admin",
    "password":"1234"
}]

$(document).ready(function(){
    
let url= "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=1d80e2b0b05f4482bd45c58f963de95b" 
    localStorage.setItem("users",JSON.stringify(users) )

})

function Search(){
    let topic=$("#txtSearch").val() 

    if(new RegExp("^[A-z]*$").test(topic)){
    
        fetch("https://newsapi.org/v2/everything?q="+topic+"&apiKey=1d80e2b0b05f4482bd45c58f963de95b").then(res=>
            res.json()
        )
        .then(data=>{
            debugger   
            $('#list').html(``)
            $("#lblTopic").text(topic) 
            data.articles.forEach((article,i)=>{
            $('#list').append(` 
            <div class="row" style=" border-color:#dfddfd;border-style: double">
                    <P class="col-lg-8" style="padding-bottom:2px;padding-top:2px"><h3> ${article.description}</h3></P>
                    <a href=${article.url}><img class="img-responsive" src=${article.urlToImage} /></a>
            </div>
            `)
        })
        })
    } 
    else{
        alert("Enter Valid Topic: "+topic)
    }  
}
function validateUser(){
    let username=$("#username").val()
    let password=$("#password").val() 
    let index=users.findIndex(user=> user.username==username)
    if(index>=0){
        if(users[index].password=password){
            window.location.assign("news.html")
        }else{
            alert("enter valid password")
        }      
    }else{
        alert("Enter valid username")
    }  
}


function addUser(){
    users=localStorage.getItem('users')
    JSON.parse(users)
    let username=$("#rUsername").val()
    let password=$("#rEmail").val() 
    users.push({
        username:username,
        password:password
    })
    localStorage.setItem('users',JSON.stringify(users))

    
}