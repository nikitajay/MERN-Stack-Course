
// Importing Table component from react-bootstrap to display data in tabular format
import Table from 'react-bootstrap/Table';
//Button component from react-bootstrap to create clickable buttons
import Button from 'react-bootstrap/Button';
// Importing Col component from react-bootstrap for column layout inside form rows
import Col from 'react-bootstrap/Col';
// Importing Form component from react-bootstrap to build the input form
import Form from 'react-bootstrap/Form';
// Importing Row component from react-bootstrap to create horizontal rows inside form
import Row from 'react-bootstrap/Row';
// Importing ToastContainer and toast from react-toastify to show success/error notifications
import { ToastContainer, toast } from 'react-toastify';
// Importing axios library to make HTTP API calls (POST, DELETE)
import axios from "axios"
// Importing custom CSS file for additional styling
import "./../style.css"
// Importing useEffect and useState hooks from React
import { useState } from 'react';
import { useEffect } from 'react';
// Importing Modal component from react-bootstrap to show delete confirmation popup
import Modal from 'react-bootstrap/Modal';
import AuthNavBar from '../components/AuthNavBar';

function Item() {
    // useState - hook, we can store value in useState and that we can update
    // useEffect - side effect perform - each page lod it will be call useEffect
    // useMemo
    // useCallback
    // useRef


    // State to store the item name entered by user
    const [itemName, setItemName] = useState()// 1 Use State Hook
    // State to store the description entered by user
    const [descripition, setDescripition] = useState()
    // State to store the purchase price entered by user
    const [purchasePrice, setPurchasePrice] = useState()
    // State to store the selling price entered by user
    const [sellingPrice, setSellingPrice] = useState()
    // State to store the quantity entered by user
    const [quantity, setQuantity] = useState()
    // State to store the unit selected  by user(kg,box,etc)
    const [unit, setUnit] = useState()
    // State to store the list of all items fetched from the API
    const [itemData, setItemData] = useState()

    // Async function to handle form submission and send data to the backend API
    async function SubmitForm(e) {
        try {

            // Prevent the default form submission behavior (page reload)
            e.preventDefault();
            // Creating an object with all form field values to send to the API
            const data = {
                // Mapping itemName state to 'name' field
                name: itemName,
                // Mapping discription state to 'decription' field
                decription: descripition,
                // Mapping sellingPrice state to 'sellingPrice' field
                sellingPrice: sellingPrice,
                // Mapping purchasePrice state to 'purchasePrice' field
                purchasePrice: purchasePrice,
                // Mapping quantity state to 'quantity' field
                quantity: quantity,
                // Mapping unit state to 'unit' field
                unit: unit,
            };


            // Logging the form data to the console for debugging
            console.log(data, "form submitted");
            // Sending a POST request to the backend API to create a new item
            const apiResponse = await axios
                .post("http://localhost:9090/api/create-item", data)
                // Logging success message when request is successful
                .then(console.group("yes")).
                // Logging error if the request fails
                catch((error) => console
                    .log(error))
            // Logging the full API response to the console
            console.log(apiResponse)
            // Calling getAllItemsData to refresh the item list after creating a new item
            getAllItemsData();

            // Showing a success toast notification after form is submitted successfully
            toast.success("Form submitted", {
                // Setting toast position to top-right corner
                position: "top-right",
                // Toast will auto close after 5000 milliseconds (5 seconds)
                autoClose: 5000,
                // Showing the progress bar inside the toast
                hideProgressBar: false,
                // Disabling close on click behavior
                closeOnClick: false,
                // Toast will pause when user hovers over it
                pauseOnHover: true,
                // Allowing the toast to be draggable
                draggable: true,
                // No custom progress value, using default
                progress: undefined,
                // Setting the toast theme to light
                theme: "light",
            });

        } catch (error) {
            // Logging any error that occurs during form submission
            console.log(error)
        }

    }


    // Async arrow function to fetch all items from the backend API
    const getAllItemsData = async () => {
        try {
            // API Integration - fetch function
            // Calling the GET API to fetch all items from the backend
            const apiResponse = await fetch("http://localhost:9090/api/get-all-item")
            // Converting the API response to JSON format
            const responseData = await apiResponse.json()
            // Storing the fetched items array into itemData state
            setItemData(responseData.data)

            // Logging the full response data to the console for debugging
            console.log(responseData)


        } catch (error) {
            // Logging any error that occurs while fetching items
            console.log(error)

        }
    };
    // useEffect runs once when the component mounts (empty dependency array [])
    useEffect(() => {
        // Calling getAllItemsData to load all items when the page first loads
        getAllItemsData();
    }, []);


    console.log(
        itemData, "itemData ==>"
    )
    // State to control the visibility of the delete confirmation modal (true = show, false = hide)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    // State to store the id of the item that user wants to delete
    const [id, setId] = useState()

    // Function to open the delete confirmation modal and store the selected item's id
    const opneDeleteModel = (id) => {
        try {
            // Function to open the delete confirmation modal and store the selected item's id
            setShow(true);
            // Storing the id of the item to be deleted in the id state
            setId(id)


            // Logging the item id to the console for debugging
            console.log(id, "id==")
            // Logging a message to confirm the delete function was called
            console.log("call delete function")
        } catch (error) {
            // Logging any error that occurs while opening the delete modal
            console.log(error)
        }
    }
    // Async function to send DELETE request to the API and remove the item
    const handleDelete = async () => {
        try {
            // Logging the id of the item being deleted for debugging
            console.log(-id, "_id")
            // Sending a DELETE request to the backend API with the item id in the URL
            const apiResponse = await axios.delete(`http://localhost:9090/apI/delete-item/${id}`)
            // Closing the delete confirmation modal after successful deletion
            setShow(false)
            // Logging the API response to the console for debugging
            console.log(apiResponse)
            // Refreshing the item list after deletion to reflect the updated data
            getAllItemsData();

        } catch (error) {
            // Logging any error that occurs during item deletion
            console.log(error)
        }
    }

    return (
        <>
     

            {/* ToastContainer renders the toast notification popup on the screen */}
            <ToastContainer
                // Setting the default position of all toasts to top-right
                position="top-right"
                // Auto closing toast after 5000 milliseconds
                autoClose={5000}
                // Showing the progress bar inside the toast
                hideProgressBar={false}
                // Newer toasts will not appear on top of older ones
                newestOnTop={false}
                // Disabling close on click for the toast
                closeOnClick={false}
                // Disabling right-to-left layout for the toast
                rtl={false}
                // Toast will pause when the browser window loses focus
                pauseOnFocusLoss
                // Allowing the toast to be draggable by the user
                draggable
                // Toast will pause when user hovers over it
                pauseOnHover
                // Setting the toast theme to light
                theme="light"
            />

            {/* Page heading showing the title of the CRUD application */}
            <h1 className='text-danger text-center my-5'> <b>Manage Items</b></h1>
            {/* Main container div to center and wrap the content */}
            <div className="container">
                {/* Bootstrap row to divide the page into two columns */}
                <div className="row">
                    {/* Left column - contains the Create Item form */}
                    <div className="col-md-6">
                        {/* Heading for the create item form section */}
                        <h3 className="border text-center">Create Item</h3>

                        {/* Bootstrap Form component to collect item details from the user */}
                        <Form className="my-5">
                            {/* First row containing Item Name and Description fields */}
                            <Row className="mb-3">
                                {/* Form group for Item Name input field */}
                                <Form.Group as={Col} controlId="formGridEmail">
                                    {/* Label for the Item Name input */}
                                    <Form.Label>Item Name</Form.Label>
                                    {/* Text input for entering item name, updates itemName state on change */}
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Item Name"
                                        onChange={(event) => setItemName(event.target.value)}
                                        value={itemName}
                                    />
                                </Form.Group>
                                {/* Form group for Description input field */}
                                <Form.Group as={Col} controlId="formGridZip">
                                    {/* Label for the Description input */}
                                    <Form.Label>Descripition</Form.Label>
                                    {/* Text input for entering description, updates discription state on change */}
                                    <Form.Control type="text" placholer="Enter descripition"
                                        onChange={(event) => setDescripition(event.target.value)}
                                        value={descripition}
                                    />
                                </Form.Group>
                            </Row>
                            {/* Second row containing Purchase Price and Selling Price fields */}
                            <Row className="mb-3">
                                {/* Form group for Purchase Price input field */}
                                <Form.Group as={Col} controlId="formGridPassword">
                                    {/* Label for the Purchase Price input */}
                                    <Form.Label>purchase Price</Form.Label>
                                    {/* Number input for entering purchase price, updates purchasePrice state on change */}
                                    <Form.Control type="Number" placeholder="Enter Purchase Price"
                                        onChange={(event) => setPurchasePrice(event.target.value)}
                                        value={purchasePrice}
                                    />
                                </Form.Group>
                                {/* Form group for Selling Price input field */}
                                <Form.Group as={Col} controlId="formGridAddress1">
                                    {/* Label for the Selling Price input */}
                                    <Form.Label>Selling Price</Form.Label>
                                    {/* Number input for entering selling price, updates sellingPrice state on change */}
                                    <Form.Control type="Number" placeholder="Enter Selling Price"
                                        onChange={(event) => setSellingPrice(event.target.value)}
                                        value={sellingPrice}
                                    />
                                </Form.Group>
                            </Row>
                            {/* Third row containing Quantity and Unit fields */}
                            <Row className="mb-3">
                                {/* Form group for Quantity input field */}
                                <Form.Group as={Col} controlId="formGridCity">
                                    {/* Label for the Quantity input */}
                                    <Form.Label>Quantity</Form.Label>
                                    {/* Number input for entering quantity, updates quantity state on change */}
                                    <Form.Control type="Number" placholder="Enter Quantity"

                                        onChange={(event) => setQuantity(event.target.value)}
                                    />
                                </Form.Group>
                                {/* Form group for Unit dropdown selection */}
                                <Form.Group as={Col} controlId="formGridState">
                                    {/* Label for the Unit dropdown */}
                                    <Form.Label>Unit</Form.Label>
                                    {/* Dropdown select for choosing unit type, updates unit state on change */}
                                    <Form.Select defaultValue="Choose Unit" value={unit}
                                        onChange={(event) => setUnit(event.target.value)}
                                    > {/* Default placeholder option */}
                                        <option>Choose Unit</option>
                                        {/* Option for Piece unit */}
                                        <option>Pice</option>
                                        {/* Option for Box unit */}
                                        <option>Box</option>
                                        {/* Option for Kilogram unit */}
                                        <option>Kg</option>
                                        {/* Option for Gram unit */}
                                        <option>Gram</option>
                                        {/* Option for litter unit */}
                                        <option>Litter</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                            {/* Centered div to hold the submit button */}
                            <div className="text-center">
                                {/* Submit button that calls SubmitForm function when clicked */}
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="w-50"
                                    onClick={SubmitForm}
                                >
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </div>

                    {/* Right column - contains the items table */}
                    <div className="col-md-6">
                        {/* Heading for the items list section */}
                        <h3 className="border text-center">Get Items</h3>

                        {/* Bootstrap Table to display all fetched items with striped, bordered, hover styles */}
                        <Table striped bordered hover>
                            {/* Table header row with column names */}
                            <thead>
                                <tr>
                                    {/* Serial number column */}
                                    <th>Id</th>
                                    {/* Item name column */}
                                    <th>Item Name</th>
                                    {/* Description column */}
                                    <th>Discription</th>
                                    {/* Purchase price column */}
                                    <th>Purchase Price</th>
                                    {/* Selling price column */}
                                    <th>Selling price</th>
                                    {/* Quantity column */}
                                    <th>Quantity</th>{/* Unit column */}
                                    <th>Unit</th>
                                    { /* Action buttons column (Edit / Delete) */}
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    itemData &&
                                    itemData.map((each, index) => {
                                        return (
                                            <tr>

                                                {/* Displaying serial number (index + 1 to start from 1) */}
                                                <td>{index + 1}</td>
                                                {/* Displaying item name */}
                                                <td>{each.name}</td>
                                                {/* Displaying item description */}
                                                <td>{each.decription}</td>
                                                {/* Displaying purchase price */}
                                                <td>{each.purchasePrice}</td>
                                                {/* Displaying selling price */}
                                                <td>{each.sellingPrice}</td>
                                                {/* Displaying quantity */}
                                                <td>{each.quantity}</td>
                                                {/* Displaying unit */}
                                                <td>{each.unit}</td>
                                                {/* Action column with Edit and Delete buttons */}
                                                <td className="d-flex">
                                                    {/* Edit button - currently no functionality attached */}
                                                    <button className="btn btn-success"> Edit </button>
                                                    {/* Delete button - calls openDeleteModel with item's _id when clicked */}
                                                    <button className='btn btn-danger mx-2'
                                                        onClick={() => opneDeleteModel(each._id)}
                                                    >
                                                        {" "}
                                                        Delete
                                                    </button>
                                                </td>

                                            </tr>

                                        );
                                    }
                                    )}




                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>{/* Delete confirmation Modal - shown when user clicks Delete button */}
            <Modal show={show} onHide={handleClose}>
                {/* Modal header with close button and title */}
                <Modal.Header closeButton>
                    {/* Title of the modal */}
                    <Modal.Title>Delete confirmation</Modal.Title>
                </Modal.Header>
                {/* Modal body showing the confirmation message */}
                <Modal.Body>Are you sure wan to delete this Item</Modal.Body>
                {/* Modal footer with Yes and No buttons */}
                <Modal.Footer>
                    {/* Yes button - calls handleDelete to confirm and delete the item */}
                    <Button variant="secondary" onClick={handleDelete}>
                        Yes
                    </Button>
                    {/* No button - calls handleClose to cancel and close the modal */}
                    <Button variant="primary" onClick={handleClose}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Item
