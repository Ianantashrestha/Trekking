import { Column, Heading, Container } from "@app/system";

const Testimonial = () => {
  return (
    <Column background="--testimonialBg" padding="60px 0px 60px 0px">
      <Container>
        <Column>
          <Heading fontSize="--fontLlg" fontWeight={700}>
            Client Reviews
          </Heading>
        </Column>
      </Container>
    </Column>
  );
};

export default Testimonial;
