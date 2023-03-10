import { Row, Column, Paragraph } from "@app/system";
const TopHeader = () => {
  return (
    <Row justifyContent="space-between">
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
  );
};

export default TopHeader;
