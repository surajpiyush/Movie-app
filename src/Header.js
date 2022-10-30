import React, { useState } from "react";
import "./Home.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

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
  console.log(data);

  const changeText = (event) => {
    setText(event.target.value);
  };

  function Active(isActive) {
    return {
      color: isActive ? "green" : "yellow",
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "normal",
    };
  }

  return (
    <div className="App">
      <Navbar className="navbar-dark bg-dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Movie App</Navbar.Brand>
          <NavLink style={Active} to="popular">
            Popular
          </NavLink>
          <NavLink style={Active} to="upcoming">
            Upcoming
          </NavLink>
          <NavLink style={Active} to="rated">
            Top Rated
          </NavLink>
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
          paddingLeft: "3rem",
          paddingRight: "auto",
        }}
      >
        {data.map((item, j) => (
          <div className="item" key={j}>
            <img src={item.i.imageUrl} alt="pic" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
