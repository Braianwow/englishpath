import { PageHeader } from '../components/ui';
import { SkillTabs } from '../components/SkillHeader';
import MyWords from '../components/MyWords';

export default function MyWordsPage() {
  return (
    <div>
      <SkillTabs active="vocabulary" />
      <PageHeader title="Mis palabras" subtitle="Agregá tus propias palabras (palabra = oración = significado) y repasalas como tarjetas." />
      <MyWords />
    </div>
  );
}
