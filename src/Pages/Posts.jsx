import React from "react";
import Post from "../components/Post";
const response=await fetch('http://walkie.test/api/posts',{
      method: "Get",
      headers: {
        'Content-Type': 'application/json',
        'Authorization' :'Bearer 25|ZwvrFrCwIPi8ozlgjYtxafcaVNgorn6j53veNQ0e'
      },
      
}).then(response => response.json())
.then(data => {
  // Handle the response data
  console.log(data);
})
.catch(error => {
  // Handle any errors
  console.error(error);
});
function Posts() {
  return (
    <>
      <Post />
      <Post />
      <Post />
      <Post />
    </>
  );
}

export default Posts;
