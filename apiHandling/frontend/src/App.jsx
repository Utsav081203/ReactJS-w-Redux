import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  
  // const [products, error, loading] = customReactQuery('/api/products');
  // we have in built react query that could do the same upon just package installation

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  // upon initial rendering/ when this component mounts, we need to do api request and display
  // mounting case is handled by useEffect

  useEffect(() => {
    // to control old requests (cancel them)
    const controller = new AbortController();


    // if using promise is restricted for axios (.then())
    // we need to halt till rendering the data comes
    // we can use promise and do the did
    // but if we want to use await aysnc

    // ; if used for differentiating code from previous written one
    ;(async() => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get('/api/products?search=' + search, {
          signal: controller.signal, // this signal cancels old requests over same url but sends it to catch block
          // we can send configurations here like headers.
        });
        // if url is invalid, the response won't be fetched
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if(axios.isCancel(error)) {
          console.log('Request Cancelled', error.message);
          return;
        }
        setError(true);
        setLoading(false);
      }
    })()
    // immmediately invoked function expression
    // first parenthesis has definiton
    // second has for invoking function
    // used for making and invoking function spontaneously

    return () =>{
      controller.abort();
      // to avoid race condition
      // in race condtition, many calls including previous ones would have raced to update a component in the react dom
      // to avoid that effect of updation from old calls in the dom
      // to avoid that race condition, we use this
      // output of requests will come sequentially

      // ** in order to CANCEL the old calls, de bouncing is used
    }
    // clean up method
    // when component mounts, it must unmount too when old calls that were forcing mounting should terminate
    // if it is re run then changes from old calls are unmounted and new ones are adapted
    // so abort mounting from old calls
  }, [search]);
  // everytime the search changes (which is by input)
  // the api call is made
  // low performance

  // if(error)
  // {
  //   return (<h1>Something went wrong!</h1>);
  // }

  // if(loading)
  // {
  //   return (<h1>Loading....</h1>)
  // }

  return (
    <>
      <input type="text" placeholder='Search'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />

      {/* conditional rendering */}
      {loading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong!</h1>}
      {/* {products.length>0 && <h1>Number of Products are: {products.length}</h1>} */}

      <h1>Number of Products are: {products.length}</h1>;
    </>
  )
}

export default App

const customReactQuery = (urlPath) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // upon initial rendering/ when this component mounts, we need to do api request and display
  // mounting case is handled by useEffect

  useEffect(() => {
    // if using promise is restricted for axios (.then())
    // we need to halt till rendering the data comes
    // we can use promise and do the did
    // but if we want to use await aysnc

    // ; if used for differentiating code from previous written one
    ;(async() => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(urlPath);
        // if url is invalid, the response won't be fetched
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })()
    // immmediately invoked function expression
    // first parenthesis has definiton
    // second has for invoking function
    // used for making and invoking function spontaneously
  }, []);

  return [products, error, loading];
}