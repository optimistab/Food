import { useEffect , useState } from "react";
import yelp from "../api/yelp";


const useResults = () =>{
    const[results,setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async searchTerm => {
        console.log('api will get hit only one time');

        try {
        const response = await yelp.get('/search',{
            params: {
                limit: 50,
                term: searchTerm,
                location: 'chicago'
            }
        });
        setResults(response.data.businesses);
        } catch (err){
            // console.log(err);
            setErrorMessage('Something went wrong');
        }
    };

    // call search api when component is first rendered
    // searchApi('pasta'); indefinite loop of because setter rerenders function again and again
    // useeffect hook makes hit only when the component is first rerendered
    useEffect(() => {
        searchApi('pasta');
    },[]);

    return [searchApi,results,errorMessage];
};

export default useResults;