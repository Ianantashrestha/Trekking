import {
  Button,
  Column,
  Heading,
  Row,
  Container,
  Grid,
  Paragraph,
} from "@app/system";
import { AnnapurnaImage, CultureImage, LocationPin, Clock } from "@app/images";
import Image from "next/image";
import Link from "next/link";
const topDestinations: any[] = [
  {
    title: "Annapurna Circuit Trek",
    destination: "Nepal",
    days: 15,
    image: AnnapurnaImage,
  },
  {
    title: "Culture & Trekking Tour",
    destination: "Nepal",
    days: 14,
    image: CultureImage,
  },
  {
    title: "Mardi mountain Trek",
    destination: "Nepal",
    days: 15,
    image: AnnapurnaImage,
  },
  {
    title: "Classic Nepal",
    destination: "Nepal",
    days: 14,
    image: CultureImage,
  },
];
const TopDestination = () => {
  return (
    <Column margin="0px 0px 60px 0px">
      <Container>
        <Row justifyContent="space-between" margin="0px 0px 30px 0px">
          <Heading fontSize="--fontLlg" fontWeight={700}>
            Top Destination
          </Heading>
          <Button
            outline
            background="--f5f5f5"
            color="--secondaryTextColor"
            padding="10px 30px"
            fontSize="--fontXs"
            borderRadius={30}
          >
            View all destination
          </Button>
        </Row>
        <Grid container columnGap={20} lg={4}>
          {topDestinations?.map((item) => (
            <Grid key={item?.title} item>
              <Image
                style={{ width: "100%" }}
                src={item?.image}
                alt={item?.title}
              />
              <Column margin="10px 0px 0px  0px">
                <Heading fontSize="--fontLg" tag="h3" fontWeight={700}>
                  <Link href="/">{item?.title}</Link>
                </Heading>
                <Row columnGap={20} margin="10px 0px 0px 0px">
                  <Row columnGap={5}>
                    <Image
                      style={{ height: 20, width: 20 }}
                      src={Clock}
                      alt={item?.title}
                    />
                    <Paragraph color="--secondaryTextColor" fontSize="--fontSm">
                      {item?.days}
                    </Paragraph>
                  </Row>
                  <Row columnGap={5}>
                    <Image
                      style={{ height: 20, width: 20 }}
                      src={LocationPin}
                      alt={item?.title}
                    />
                    <Paragraph color="--secondaryTextColor" fontSize="--fontSm">
                      {item?.destination}
                    </Paragraph>
                  </Row>
                </Row>
              </Column>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Column>
  );
};

export default TopDestination;
