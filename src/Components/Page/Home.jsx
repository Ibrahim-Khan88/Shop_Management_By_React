import { useEffect, useState } from 'react';
import classes from './../../styles/Home.module.css'
import { useNavigate } from 'react-router-dom';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchProducts } from '../../Services/ProductService';


// eslint-disable-next-line react/prop-types
export default function Home() {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchInputValue, setSearchInputValue] = useState('');
    const navigate = useNavigate();

    const handleButtonClick = () => {
        // Navigate to the desired route when the button is clicked
        navigate('/add-product');
        
    };

    const getSearchData = (e) => {
        const inputValue = e.target.value; 
        setSearchInputValue(inputValue); 
       // debouncedGetSearchData(inputValue);
    }

    useEffect(() => {

        const fetchUser = async () => {
            try {
                const products = await fetchProducts();
                setUsers(products);
                console.log('products :>> ', products);
            } catch (error){
                setError(true)
            } finally {
                setIsLoading(false);
            }
        }

        fetchUser();

    }, []);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
          console.log(searchInputValue);
        }, 1000);
        console.log('outside code :>> ',);
        return () => {
            console.log('terminated :>> ', delayDebounceFn);
            clearTimeout(delayDebounceFn)
        }
      }, [searchInputValue]);


    return (
        <>
            {/* <h1 id='test' className={ `${classes.title_1} title mt-80`}>{HomeTitle} </h1>
            <h1>{subtitle} </h1> */}

            <div className={`${classes._container}`}>
                <div className={`${classes.products}`}>
                    <div className={`${classes.input_add_button_container}`}>
                        <input onChange={getSearchData} type="text" className={`${classes.search_box}`} placeholder="Search by product name" value={searchInputValue} />
                        <button className={`${classes.add_product_button}`} onClick={handleButtonClick}>Add Product</button>
                    </div>
                    {!isLoading ?
                        <table id={`${classes.product_table}`}>
                            <tbody>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Unit</th>
                                    <th>Price</th>
                                </tr>
                                {
                                    users.map((user, index) => (
                                        <>
                                            <tr key={index}>
                                                <td>{user.first_name}</td>
                                                <td>{user.username}</td>
                                                <td>KG</td>
                                                <td>452.00</td>
                                            </tr>
                                        </>
                                    ))}
                            </tbody>
                        </table> :
                        <FontAwesomeIcon icon={faSpinner} className="loading-spinner-icon" />
                    }
                    {error && <h1>Loading</h1>}
                </div>
            </div>

            {/* <HomeSubsection className="mt-80"/> */}
        </>

    )
}


