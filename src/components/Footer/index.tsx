import { Card, Flex, Container, Heading, Column, Paragraph } from "@app/system";

const Footer = () => {
  return (
    <Card background="--footerBg" padding="80px 0px 0px 0px">
      <Container>
        <Flex container>
          <Flex item lg={6}>
            <Heading fontSize="--fontMdLg" color="--white">
              Amazing Himalaya Trekking
            </Heading>
            <Column>
              <Paragraph color="--footerTextColor" fontSize="--fontSm">
                Maharajgunj, Kathmandu, Nepal
              </Paragraph>
              <Paragraph color="--footerTextColor" fontSize="--fontSm">
                +977-1-4016138, +977-9851082039
              </Paragraph>
              <Paragraph color="--footerTextColor" fontSize="--fontSm">
                mail@infonepaltreks.com
              </Paragraph>
            </Column>
          </Flex>
        </Flex>
      </Container>
    </Card>
  );
};

export default Footer;
