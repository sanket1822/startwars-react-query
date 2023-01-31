import React, { useState } from 'react'
import { usePaginatedQuery } from 'react-query';
import Planet from './Planet';

 

const fetchPlanets = async (page) => {
  let url = `https://swapi.dev/api/planets/?page=${page}`;
  const res = await fetch(url);
  return res.json();
}


const Planets = () => {
  const [page, setPage] =  useState(3);

  const {
    resolvedData,
    latestData,
    status
  } = usePaginatedQuery(["planets", page],() => fetchPlanets(page));
 
  return(
    <div>
      <h2>Planets</h2>
      


      {status === "error" && 
      (<div> Error while fetching the data</div>)}

      {status === "loading" && 
      (<div> loading data ...</div>)}

      {status === "success" && 
      (   <>     
          <button
           onClick={()=> setPage(old => Math.max(old - 1, 1))}
           disabled = {page === 1}>Previous Page</button>
          <span>{page}</span>
          <button
           onClick={()=> setPage(old => (!latestData || !latestData.next ? old : old + 1))}
           disabled={!latestData || !latestData.next}
          >Next Page</button>


          <div>
               {resolvedData.results.map(planet => <Planet  key= {planet.name} planet= {planet}/>)} 
          </div>
          </>
       )}
    </div>
  );


}
export default Planets;