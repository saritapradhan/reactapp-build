import {useState,useEffect} from 'react';

export const LaunchTracker = () => {
    const [lunches, setLunches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error,setError]      = useState(null);

    useEffect(() =>{
        fetch("https://randomuser.me/api")
        .then((response)=>{
            if(!response.ok){
                throw new Error(`HTTP ${response.status}`);
            }
            return response.json();
            setLoading(false);
        })
        .then((data)=>{
            setLunches(data.results);
            setLoading(false);
        })
        .catch((err) =>{
            setError(err.message);
            setLoading(false);
        })
    },[]);

    return (
        <>
        {error && <p>{error}</p>}
        {loading && <p>Loading....</p>}
        {lunches && <div>
           <ul>
            {lunches.map((lunch,index) => (
                <li key={index}>
                        {lunch.email}
                </li>
                )
            )}
           </ul>
        </div>
        }
        </>
    );
}