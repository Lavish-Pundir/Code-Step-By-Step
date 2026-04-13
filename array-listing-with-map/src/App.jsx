import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap'
import './App.css'

function App() {
  // const students = ["Anil", "sidhu", "anubhav", "anu"]
  const students = [
    {
      name: "Lavish kumar",
      email: "lavi@gmail.com",
      address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "23", city: "Delhi", country: "India" },
        { Hn: "34", city: "Gurgaon", country: "India" },
      ]
    },
    {
      name: "Gaurav kumar",
      email: "gaurav@gmail.com",
      // contact: "123"
      address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "23", city: "Delhi", country: "India" },
        { Hn: "34", city: "Gurgaon", country: "India" },
      ]
    },
    {
      name: "Ajeet kumar",
      email: "ajeet@gmail.com",
      // contact: "1234"
      address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "23", city: "Delhi", country: "India" },
        { Hn: "34", city: "Gurgaon", country: "India" },
      ]
    },
  ]

  // //map looping
  // students.map((item) => {
  //   console.log("my name is :", item);

  // })

  // // for loop use
  // for(let i = 0; i<students.length; i++) {
  //   console.log("in for loop my name", students[i])
  // }

  return (
    <div className='App'>
      <h1>Handle Array With Listing</h1>
      <Table striped variant='dark'>
        <thead>
          <tr>
            <th>Count</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          {
            students.map((data, index) => (   // key react kai virchualdom kai liye 
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>
                  <Table variant='dark' striped >
                    <tbody>
                      {
                        data.address.map((itom) =>
                          <tr>
                            <td>{itom.Hn}</td>
                            <td>{itom.city}</td>
                            <td>{itom.country}</td>
                          </tr>
                        )
                      }
                    </tbody>
                  </Table>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export default App
