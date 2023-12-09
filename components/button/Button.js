"use client";


function Button(props) {
  const deleteHandler =async ()=>{
    try {
      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id": props.id
});

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

await fetch("http://localhost:3000/api/products", requestOptions)
alert("Successfully Deleted")
  
    } catch (error) {
      
    }
  }
  return (
    <>
     <button onClick={deleteHandler}>{props.title}</button> 
    </>
  )
}

export default Button
