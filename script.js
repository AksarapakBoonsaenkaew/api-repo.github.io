const request = new XMLHttpRequest();
request.open("GET","https://aksarapakboonsaenkaew.github.io/api-repo.github.io/api-test.json")
request.send();
request.onload = ()=>{
    console.log(request);
} 