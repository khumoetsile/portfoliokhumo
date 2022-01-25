import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./GalleryReact.css";
import Mokoka from "../TabMenu/images/mokoka.PNG";
import MMS from "../TabMenu/images/MMS.PNG";

const portfolio = [
  {
    name: "My best client",
    category: ["all", "frontend", "ux-ui"],
    url: "https://mokokastransport.co.bw",
    images: {Mokoka}
  },
  {
    name: "My favorite case",
    category: ["all", "mobile", "ux-ui"],
    url: "testststststs",
    images: {MMS}
  },
  {
    name: "A old job",
    category: ["all", "frontend"],
    url: "testststststs",
    images: {Mokoka}
  },
  {
    name: "It is a really cool website",
    category: ["all", "frontend", "ux-ui"],
    url: "testststststs",
    images: {Mokoka}
  },
  {
    name: "Something more",
    category: ["all", "others"],
    url: "testststststs",
    images: {Mokoka}
  }
];
console.log(portfolio)

function GalleryReact() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map(p => ({
      ...p,
      filtered: p.category.includes(filter)
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <>
      <div className="portfolio__labels">
        <a href="/#" active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </a>
        <a
          href="/#"
          active={filter === "frontend"}
          onClick={() => setFilter("frontend")}
        >
          Frontend
        </a>
        <a
          href="/#"
          active={filter === "mobile"}
          onClick={() => setFilter("mobile")}
        >
          Mobile
        </a>
        <a
          href="/#"
          active={filter === "ux-ui"}
          onClick={() => setFilter("ux-ui")}
        >
          UX/UI
        </a>
        <a
          href="/#"
          active={filter === "others"}
          onClick={() => setFilter("others")}
        >
          Others
        </a>
      </div>
      {/* <div className="portfolio__container">
        {projects.map(item =>
          item.filtered === true ? <span key={item.name}>{item.name}</span> : ""
        )}
      </div> */}

        <Container>
        
            <Row>
            {projects.map(item =>
                item.filtered === true ? 
                <Col sm={4} className="portfolio-item">
                
                <img src={item.images} alt={item.image} className="portfolio-img" /><a target="_blank" href={item.url} key={item.name}>{item.name}<hr/></a>
                    
                </Col>
                : ""
                )}
            </Row>
        </Container>
    </>
  );
}

export default GalleryReact;
