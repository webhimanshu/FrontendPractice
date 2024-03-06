import React from 'react'
import useSWR from 'swr'

const fetcher = async function(url){
    const data  = await fetch(url);
    const json = await data.json();
    return json;
}

const Fetching = () => {
      const {data , error , isLoading} =  useSWR('https://sum-server.100xdevs.com/todos' , fetcher);

      if (error) return <div>failed to load</div>
      if (isLoading) return <div>loading...</div>
      return <div>hello, you have {data.todos.length} todos!</div>
}

export default Fetching