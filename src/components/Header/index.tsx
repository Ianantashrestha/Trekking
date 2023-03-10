import { Row, Column, Paragraph, Container } from "@app/system";
import TopHeader from "./topHeader";
import Nav from "./nav";
const Header = () => {
  return (
    <Column>
      <Container>
        <TopHeader />
        <Row
          justifyContent="space-between"
          alignItems="center"
          padding="30px 0px"
        >
          <Column>
            <Paragraph fontSize="--fontLg" fontWeight={800}>
              Amazing Himalaya Trekking
            </Paragraph>
          </Column>
          <Column>
            <Nav />
          </Column>
        </Row>
      </Container>
    </Column>
  );
};

export default Header;
