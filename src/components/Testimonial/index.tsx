import {
  Column,
  Heading,
  Container,
  Grid,
  Card,
  Paragraph,
  Line,
} from "@app/system";
const items: any[] = [
  {
    name: "Luiz Bertolo",
    country: "Germany",
    review:
      "I had the unique opportunity to work with Sagar and Amazing Himalaya Treks on several occasions when my company took groups of students to Nepal. They are very accommodating and professional and I give the highest recommendation for their adventure services in Nepal. Would absolutely work with them again. Thank you!",
  },
  {
    name: "Bretta Schulzke",
    country: "Russia",
    review:
      "We have already booked our trip for the 2nd time at Jan and were again very enthusiastic about the organization. Everything worked beautifully; great guides, accommodation and vehicles perfect. We look forward to seeing you again... Namaste",
  },
];
const Testimonial = () => {
  return (
    <Column background="--testimonialBg" padding="60px 0px 60px 0px">
      <Container>
        <Column margin="0px 0px 60px 0px">
          <Heading fontSize="--fontLlg" fontWeight={700}>
            Client Reviews
          </Heading>
        </Column>
        <Grid container lg={2} columnGap={60}>
          {items?.map((item) => {
            return (
              <Grid key={item?.name} item>
                <Card padding="40px 30px" borderRadius={12}>
                  <Paragraph
                    lineHeight={28}
                    fontSize="--fontMd"
                    color="--greyBlack"
                  >
                    {item?.review}
                  </Paragraph>
                  <Line margin="30px 0px 0px 0px" />
                  <Column margin="30px 0px 0px 0px">
                    <Heading fontSize="--fontMd" tag="h5">
                      {item?.name}
                    </Heading>
                    <Paragraph color="--secondaryTextColor">
                      {item?.country}
                    </Paragraph>
                  </Column>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Column>
  );
};

export default Testimonial;
