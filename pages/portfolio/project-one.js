/* Framework */
import React from "react";

/* Bootstrap Components */
import { Container, Row, Col } from "reactstrap";

/* Components */
import Loader from "../../utilities/loader/Loader";
import Navigation from "../../components/Navigation";
import Headers from "../../components/portfolio/Headers";
import ProjectContent from "../../components/portfolio/ProjectContent";

class ProjectOne extends React.Component {
  constructor(data) {
    super(data);
    this.state = {
      content: [
        {
          id: "0",
          image: "/brand-placeholder.png",
          title: "Project One",
        },
      ],
      body: [
        {
          id: "0",
          heading: "Lorem duis ipsum irure",
          paragraph_one:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          paragraph_two:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          paragraph_three:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
    };
  }

  render() {
    const { content, body } = this.state;

    return (
      <>
        <Loader />
        <Navigation />
        <Container fluid>
          {content.map((data) => (
            <Headers key={data.id} image={data.image} title={data.title} />
          ))}
        </Container>

        <main>
          <Container>
            <Row noGutters>
              <Col lg={{ size: 12 }} className="content">
                {body.map((data) => (
                  <ProjectContent
                    key={data.id}
                    heading={data.heading}
                    paragraph_one={data.paragraph_one}
                    paragraph_two={data.paragraph_two}
                    paragraph_three={data.paragraph_three}
                  />
                ))}
              </Col>
            </Row>
          </Container>
        </main>
      </>
    );
  }
}

export default ProjectOne;
