import { Row, Column, Paragraph, Container } from "@app/system";
const TopHeader = () => {
  return (
    <Column>
      <Container>
        <Row justifyContent="space-between" padding="5px 0px">
          <Column>
            <Paragraph fontSize="--fontXxs" fontWeight={400}>
              Registration No: 782/063
            </Paragraph>
          </Column>
          <Column>
            <Paragraph fontSize="--fontXxs" fontWeight={400}>
              mail@infonepaltreks.com
            </Paragraph>
          </Column>
        </Row>
      </Container>
    </Column>
  );
};

export default TopHeader;
