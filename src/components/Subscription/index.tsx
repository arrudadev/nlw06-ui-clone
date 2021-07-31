import { Banner } from './Banner';
import { Container } from './Container';
import { Description } from './Description';
import { FormWrapper } from './FormWrapper';

export function Subscription() {
  return (
    <Banner>
      <Container>
        <Description />

        <FormWrapper />
      </Container>
    </Banner>
  );
}
