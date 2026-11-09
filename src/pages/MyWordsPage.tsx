import { PageHeader } from '../components/ui';
import { SkillTabs } from '../components/SkillHeader';
import MyWords from '../components/MyWords';

export default function MyWordsPage() {
  return (
    <div>
      <SkillTabs active="vocabulary" />
      <PageHeader title="My words" subtitle="Add your own words (word = sentence = meaning) and review them as flashcards." />
      <MyWords />
    </div>
  );
}
