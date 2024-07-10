import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css';

const BlogSection = () => {
  const blogPosts = [
    {
      imgSrc: "notification.svg",
      date: "05 Nov",
      title: "Lorem Ipsum is simply dummy",
      description: "Lorem ipsum dolor sit amet conse ctetur, adipi sicing elit. Nisi sapiente hic fugiat delectus dicta delectus dicta.",
      author: "Admin"
    },
    {
      imgSrc: "/messaging.svg",
      date: "19 Dec",
      title: "Lorem Ipsum is simply dummy",
      description: "Lorem ipsum dolor sit amet conse ctetur, adipi sicing elit. Nisi sapiente hic fugiat delectus dicta delectus dicta.",
      author: "Admin"
    },
    {
      imgSrc: "/authoriza.svg",
      date: "18 June",
      title: "Lorem Ipsum is simply dummy",
      description: "Lorem ipsum dolor sit amet conse ctetur, adipi sicing elit. Nisi sapiente hic fugiat delectus dicta delectus dicta.",
      author: "Admin"
    }
  ];

  return (
    <section className="blog" data-scroll-index="4">
      <Container>
        <div className="blog-head text-center">
          <h2>Blog</h2>
          <h6>latest articles</h6>
        </div>
        <Row>
          {blogPosts.map((post, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card className="h-100">
                <div className="img-wrapper">
                  <Card.Img variant="top" src={post.imgSrc} />
                </div>
                <Card.Body>
                  <div className="date">
                    <span>{post.date.split(' ')[0]} {post.date.split(' ')[1]}</span>
                  </div>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.description}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <a href="#0" className="user"><i className="fas fa-user"></i> {post.author}</a>
                    <a href="#0" className="more"><i className="fas fa-long-arrow-alt-right"></i></a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;
