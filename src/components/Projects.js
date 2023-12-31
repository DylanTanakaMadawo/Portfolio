import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/portfolioimg.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/artistimg.png";
import projImg4 from "../assets/img/suncrestimg2.png";
import projImg5 from "../assets/img/web-img1.jpg";
import projImg6 from "../assets/img/basaimg.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      projectLink: "https://dylanmadawo.netlify.app/",
    },
    {
      title: "Personal Websites",
      description: "Design & Development",
      imgUrl: projImg2,
      projectLink: "https://dylanmadawo.netlify.app/",
    },
    {
      title: "Business Websites",
      description: "Design & Development",
      imgUrl: projImg3,
      projectLink: "https://artist-site-zw.netlify.app/",
    },
    {
      title: "Digital Marketing Website",
      description: "Design & Development",
      imgUrl: projImg4,
      projectLink: "https://suncrestsolar.netlify.app/",
    },
    {
      title: "E-Commerce Websites",
      description: "Design & Development",
      imgUrl: projImg5,
      projectLink: "https://dylanmadawo.netlify.app/",
    },
    {
      title: "Job Search App",
      description: "Design & Development",
      imgUrl: projImg6,
      projectLink: "https://basa-zw.netlify.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Projects I have done include websites for Businesses or
                    personal websites. I have also created fun chatting apps,
                    inspired by apps such as What's App from Meta. I have made
                    E-Commerce websites for small businesses around my area and
                    got really good feedback from both client and their users.
                    You will find some of the projects I have done on the tabs I
                    have created below.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
