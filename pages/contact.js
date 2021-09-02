/* Framework */
import React from "react";

/* Bootstrap Components */
import { Container, Row, Col } from "reactstrap";

/* Components */
import Loader from "../utilities/loader/Loader";
import Navigation from "../components/Navigation";
import Buttons from "../components/Buttons";

class Contact extends React.Component {
  constructor(data) {
    super(data);
    this.state = {
      links: [
        {
          id: "0",
          emoji: "🔗",
          title: "LinkedIn",
          link: "/",
        },
        {
          id: "2",
          emoji: "🔗",
          title: "Twitter",
          link: "/",
        },
        {
          id: "3",
          emoji: "🔗",
          title: "Email",
          link: "/",
        },
      ],
    };
  }

  render() {
    const { links } = this.state;

    return (
      <>
        <Loader />

        <main>
          <Navigation />

          <Container className="py-5 my-5">
            <Row noGutters>
              <Col lg={{ size: 9 }}>
                <h2 className="display-4 py-2">🖖🏻 Contact</h2>
              </Col>
            </Row>

            <Row noGutters>
              <Col lg={{ size: 9 }}>
                {links.map((data) => (
                  <Buttons
                    key={data.id}
                    emoji={data.emoji}
                    title={data.title}
                    link={data.link}
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

export default Contact;
