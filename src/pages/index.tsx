import { CommunityEvent } from '../components/CommunityEvent';
import { Editions } from '../components/Editions';
import { Footer } from '../components/Footer';
import { Methodology } from '../components/Methodology';
import { MissionContent } from '../components/MissionContent';
import { Missions } from '../components/Missions';
import { Schedule } from '../components/Schedule';
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

      <Missions />

      <MissionContent />

      <Schedule />

      <Footer />
    </main>
  );
}
