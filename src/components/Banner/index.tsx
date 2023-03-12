import {
  Column,
  Grid,
  Container,
  Heading,
  Paragraph,
  Button,
  Row,
} from "@app/system";
import { BannerImage } from "@app/images";
import Image from "next/image";
interface BannerProps {}
const Banner = ({}: BannerProps) => {
  return (
    <Column padding="60px 0px">
      <Container>
        <Grid container lg={2} columnGap={50}>
          <Grid item>
            <Column>
              <Heading fontSize="--fontExl" lineHeight={65} fontWeight={800}>
                Experience the best Trekking
              </Heading>
              <Paragraph
                fontSize="--fontLg"
                color="--secondaryTextColor"
                lineHeight={28}
                margin="30px 0px 60px 0px"
              >
                Grab your passport and pack your suitcase for a
                once-in-a-lifetime adventure. Get along with nature and
                experience the best trekking journey with our wonderful guides
              </Paragraph>
              <Row columnGap={10}>
                <Button padding="20px 35px">Reserve Now</Button>
                <Button padding="20px 35px" outline color="--textColor">
                  Explore Places
                </Button>
              </Row>
            </Column>
          </Grid>
          <Grid item>
            <Image
              style={{ width: "100%" }}
              src={BannerImage}
              alt="banner image"
            />
          </Grid>
        </Grid>
      </Container>
    </Column>
  );
};

export default Banner;
