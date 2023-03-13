import {
  Card,
  Flex,
  Container,
  Heading,
  Column,
  Paragraph,
  Line,
  Row,
} from "@app/system";

const Footer = () => {
  return (
    <Card background="--footerBg" padding="80px 0px 0px 0px">
      <Container>
        <Flex container padding="0px 0px 60px 0px">
          <Flex item lg={6}>
            <Heading fontSize="--fontMdLg" color="--white">
              Amazing Himalaya Trekking
            </Heading>
            <Column margin="15px 0px 0px 0px">
              <Paragraph
                color="--footerTextColor"
                fontSize="--fontSm"
                lineHeight={25}
                fontWeight={300}
              >
                Maharajgunj, Kathmandu, Nepal
              </Paragraph>
              <Paragraph
                color="--footerTextColor"
                fontSize="--fontSm"
                lineHeight={25}
                fontWeight={300}
              >
                +977-1-4016138, +977-9851082039
              </Paragraph>
              <Paragraph
                color="--footerTextColor"
                fontSize="--fontSm"
                lineHeight={25}
                fontWeight={300}
              >
                mail@infonepaltreks.com
              </Paragraph>
            </Column>
          </Flex>
          <Flex item lg={3}>
            <Column margin="0px 0px 15px 0px">
              <Heading fontSize="--fontMd" fontWeight={700} color="--white">
                Top Destinations
              </Heading>
            </Column>
            <Column>
              <Paragraph
                color="--footerTextColor"
                lineHeight={28}
                fontWeight={300}
              >
                Annapurna Circuit Trek
              </Paragraph>
              <Paragraph
                color="--footerTextColor"
                lineHeight={28}
                fontWeight={300}
              >
                Classic Nepal
              </Paragraph>
              <Paragraph
                color="--footerTextColor"
                lineHeight={28}
                fontWeight={300}
              >
                Culture & Trekking Tour
              </Paragraph>
              <Paragraph
                color="--footerTextColor"
                lineHeight={28}
                fontWeight={300}
              >
                Mardi Himal Trek
              </Paragraph>
              <Paragraph
                color="--footerTextColor"
                lineHeight={28}
                fontWeight={300}
              >
                Nepal Service Trips for students
              </Paragraph>
            </Column>
          </Flex>
          <Flex item lg={3}>
            <Column margin="0px 0px 15px 0px">
              <Heading fontSize="--fontMd" fontWeight={700} color="--white">
                Travel Info
              </Heading>
            </Column>
            <Column>
              <Paragraph
                color="--footerTextColor"
                lineHeight={28}
                fontWeight={300}
              >
                Visa Information
              </Paragraph>
              <Paragraph
                color="--footerTextColor"
                lineHeight={28}
                fontWeight={300}
              >
                FAQs
              </Paragraph>
              <Paragraph
                color="--footerTextColor"
                lineHeight={28}
                fontWeight={300}
              >
                Health
              </Paragraph>
              <Paragraph
                color="--footerTextColor"
                lineHeight={28}
                fontWeight={300}
              >
                Mardi Himal Trek
              </Paragraph>
              <Paragraph
                color="--footerTextColor"
                lineHeight={28}
                fontWeight={300}
              >
                Seasons
              </Paragraph>
            </Column>
          </Flex>
        </Flex>
      </Container>
      <Line background="--footerBorder" />
      <Row padding="15px 0px" justifyContent="center">
        <Paragraph
          fontSize="--fontMd"
          color="--footerTextColor"
          fontWeight={400}
        >
          © 2023 Amazing Himalayas. All Rights Reserved
        </Paragraph>
      </Row>
    </Card>
  );
};

export default Footer;
