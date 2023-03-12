import { Row, Column, Paragraph, Container } from "@app/system";
import TopHeader from "./topHeader";
import Nav from "./nav";
import styles from "@app/styles/Home.module.css";
const Header = () => {
  return (
    <Column>
      <TopHeader />
      <Column className={styles.headerWrapper}>
        <Container>
          <Row
            justifyContent="space-between"
            alignItems="center"
            padding="20px 0px"
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
    </Column>
  );
};

export default Header;
