import { Scholarship } from '../components/Scholarship';
import { Subscription } from '../components/Subscription';
import { Technologies } from '../components/Technologies';

export default function Home() {
  return (
    <main>
      <Subscription />

      <Scholarship />

      <Technologies />
    </main>
  );
}
