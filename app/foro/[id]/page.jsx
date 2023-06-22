"use client"
import React from 'react'

async function getUsers(id){

  const response = await fetch (`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
  const data= await response.json();
  return data;
}

async function post({params}) {

  const POST = await getUsers(params.id)

  console.log(POST)
  return (
  <div className='bg-body-secondary'>

    <div className=' container pt-2'> 
      <h1 className='text-center '>Foro: {params.id}</h1>
      <div className='d-flex gap-3 flex-wrap'>
        {POST.map((post, index) => (
              <div key={index}  className="bg-white p-4 border fs-3" > 
                <div className='d-flex justify-content-between' > 
                    <h2 >{post.email} </h2>
                    <h2>ID:{post.id}</h2>
                </div>
                <div> 
                  <span><b>Comentario:</b></span>
                  <span> {post.body} </span>
                </div>
              </div>
           ))
          }
          </div>
    </div>
    </div>
  )
}

export default post