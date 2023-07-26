for get 

CRUD
<br>
C = create //POST
R =  read  //GET
u = update //PUT
D = delete //DELETE


```
app.post("/",(req,res)=>{
    console.log("name");
});
```
when form with method `post` got submit/login 

* "/" is the url where it get directed 
* and res/ respone method is added to respone the "/" url what to show in that url  

for example

```
app.post("/api/user/login",(req,res)=>{
    res.send("<h1>hello world</h1>")
});
```
* Here with url `/api/user/login`
- we get respone with page with element `hello world`

* REST (Representational state transfer) is an API that defines a set of functions that programmers can use to send requests and receive responses using the HTTP protocol methods such as GET and POST.