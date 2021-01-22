//import components
import styled from "styled-components";

const Section = styled.main`
  margin: 60px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Paragraph = styled.p`
  font-size: 30px;
  line-height: 18px;
  color: #4a4a4a;
  margin-bottom: 20px;
`;

// multi line string
// Tag template literal
// Styled component named StyledButton
const About = () => (
  <Section>
    <Paragraph>ITS ALLA ABOUT THE ABOUT PAGE!</Paragraph>
  </Section>
);

export default About;
