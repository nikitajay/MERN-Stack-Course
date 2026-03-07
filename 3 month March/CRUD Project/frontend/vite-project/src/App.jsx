import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { ToastContainer, toast } from 'react-toastify';

import "./style.css"
import { useEffect, useState } from 'react';




function App() {
  const [itemName, setItemName] = useState()//use state hook
  const [itemData, setData] = useState()
  console.log(itemName);


  const handleOnChange = (event) => {

    setItemName(event.target.value)

    console.log("Typing on input filed");
  };





  function submitform(e) {
    e.preventDefault();
    console.log("Form Sumitted");


    toast.success('Form Sumitted!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",

    });

  }
  const getallItemsData = async () => {
    try {
      const apiResponse = await fetch("http://localhost:9090/apI/get-all-item")
      const responseData = await apiResponse.json()
      setData(responseData.data)


      console.log(responseData)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getallItemsData();
  }, [])

  console.log(
    itemData, "itemData ==>"
  )
  return (
    <>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h2 className='text-danger text-center my-5'>CRUD - MERN Stack Project start</h2>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h3 className='border text-center'>Create Item</h3>

            <Form className='my-5'>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Item Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Item Name " onChange={() => handleOnChange(event)} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type='text' placeholder='Enter Description ' />
                </Form.Group>


              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Purchaes price</Form.Label>
                  <Form.Control type="number" placeholder="Enter Purchaes price" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAddress1">
                  <Form.Label>Selling price</Form.Label>
                  <Form.Control type="number" placeholder="Enter Selling price" />
                </Form.Group>

              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control type="number" placeholder="Enter quntity" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>unit</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>pice..</option>
                    <option>kg</option>
                    <option>Box</option>
                    <option>gram</option>
                    <option>litter</option>
                  </Form.Select>
                </Form.Group>


              </Row>
              <div className='text-center'>
                <Button variant="primary " type="submit" className='w-50' onClick={submitform}>
                  Submit
                </Button>
              </div>
            </Form>

          </div>
          <div className='col-md-6'>
            <h3 className='border text-center'> Get Items</h3>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Item Name</th>
                  <th>Description</th>
                  <th>Purchaes price</th>
                  <th>Selling price</th>
                  <th>Quantity</th>
                  <th>unit</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                
                {
                  itemData && itemData.map((each, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{each.name}</td>
                        <td>{each.decription}</td>
                        <td>{each.purchaesprice}</td>
                        <td>{each.quantity}</td>
                        <td>{each.SellingPrice}</td>

                        <td>{each.unit}</td>
                        <td className='d-flex'>
                    <button className='btn btn-success'>Edit</button>
                    <button className='btn btn-danger mx-2'>Delete</button>
                  </td>
                      </tr>
                    )
                  })
                }

              </tbody>
            </Table>

          </div>

        </div>
      </div>



    </>
  )
}


export default App
