import { CommunityEvent } from '../components/CommunityEvent';
import { Editions } from '../components/Editions';
import { Methodology } from '../components/Methodology';
import { Scholarship } from '../components/Scholarship';
import { Subscription } from '../components/Subscription';
import { Technologies } from '../components/Technologies';
import { Testimonials } from '../components/Testimonials';

export default function Home() {
  return (
    <main>
      <Subscription />

      <Scholarship />

      <Technologies />

      <Methodology />

      <Editions />

      <Testimonials />

      <CommunityEvent />
    </main>
  );
}
