import React, { useState } from "react";
import "./Home.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Page from "./Page";

const Home = () => {
  const [text, setText] = useState("");

  const [data, setData] = useState([]);
  const getMovie = (e) => {
    e.preventDefault();

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "52fb189dd9msh3c1a3ead94da21fp18cdeajsna1851c81b53f",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${text}%20`, options)
      .then((response) => response.json())
      .then((res) => setData(res.d))
      .catch((err) => console.error(err));
  };
  //console.log(data);

  const changeText = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <Navbar className="navbar-dark bg-dark " expand="lg">
        <Container fluid className="py-2">
          <Navbar.Brand href="/">Movie App</Navbar.Brand>
          <Navbar.Brand href="/popular" className="pop">
            Popular
          </Navbar.Brand>
          <Navbar.Brand href="/rated" className="rate">
            Top Rated
          </Navbar.Brand>
          <Navbar.Brand href="/upcoming" className="up">
            Upcoming
          </Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={text}
              onChange={changeText}
            />
            <Button variant="outline-success" onClick={getMovie}>
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>
      <Page />

      <div
        className="mycontainer"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginLeft: "0px",
          marginRight: "0px",
          width: "100%",
          justifyContent: "flex-start",
          paddingLeft: "auto",
          paddingRight: "auto",
        }}
      >
        {data.map((item, j) => (
          <div className="item">
            <Card
              key={j}
              style={{
                width: "15rem",
                height: "25rem",
                marginTop: "10px",
                marginLeft: ".5rem",
              }}
            >
              <Card.Img variant="top" height={200} src={item.i.imageUrl} />
              <div className="my">
                <b>{item.l} </b>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
