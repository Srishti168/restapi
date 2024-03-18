const express=require("express");
const app=express();
app.listen(8080, () => {
    console.log('server listening on port 8080');
});
app.post("/bhfl",(req,resp)=>
{
   const numbers=[];
   const alphabets=[];
for(const key in req.json["data"])
  {
    if(key.isalpha())
      alphabets.append(key);
    else
      numbers.append(key);
  }
   resp.send(JSON.stringify(
   {
     "is_success":True,
     "user_id":"Srishti",
     "email":"srishti1385.be21@chitkara.edu.in",
     "roll_number":"2110991385",
     "numbers":numbers,
     "alphabets":alphabets
   }))
})
