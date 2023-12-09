import {useState } from 'react';
import classes from './../../styles/AddProduct.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function AddProduct() {

    const [productName, setProductName] = useState("");
    const [quantity, setQuantity] = useState();
    const [unitPrice, setUnitPrice] = useState();
    const [unit, setUnit] = useState();
    const navigate = useNavigate();

    const handleButtonClick = () => {
        // do post request
        toast.success('This is a success notification!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000, // Time in milliseconds after which the toast will be automatically closed
          });
        
    };

    const navigateTo = (component) => {
        component == 'Home' ? navigate('/') :  navigate('/add-product');
    }

    return (
        <>
            <div className={classes.container}>
                <div className={classes.form_container}>

                    <div className={`${classes.page_History} mb-12`}>
                        <span className='cursor-pointer' onClick={()=>navigateTo("Home")}>HOME</span>
                        <span className='pr-8 pl-8'><FontAwesomeIcon icon={faChevronRight} /></span>
                        <span className='cursor-pointer' onClick={()=>navigateTo("AddProduct")}>ADD PRODUCT</span>
                    </div>

                    <div className={`${classes.textInput} mb-12`}>
                        <input type="text"
                            placeholder="Product Name"
                            required
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)} />
                        <span>
                            {/* <FontAwesomeIcon icon={faUser} /> */}
                        </span>
                    </div>

                    <div className={`${classes.textInput} mb-12`}>
                        <input type="number"
                            placeholder="Quantity"
                            required
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)} />
                        <span>
                            {/* <FontAwesomeIcon icon={faUser} /> */}
                        </span>
                    </div>

                    <div className={`${classes.textInput} mb-12`}>
                        <input type="number"
                            placeholder="Unit Price"
                            required
                            value={unitPrice}
                            onChange={(e) => setUnitPrice(e.target.value)} />
                        <span>
                            {/* <FontAwesomeIcon icon={faUser} /> */}
                        </span>
                    </div>

                    <div className={`${classes.textInput} mb-12`}>
                        <input type="text"
                            placeholder="Unit"
                            required
                            value={unit}
                            onChange={(e) => setUnit(e.target.value)} />
                        <span>
                            {/* <FontAwesomeIcon icon={faUser} /> */}
                        </span>
                    </div>
                    <button className={`${classes.submit_button}`} onClick={handleButtonClick}>Add Product</button>
                </div>
            </div>
        </>
    )
}