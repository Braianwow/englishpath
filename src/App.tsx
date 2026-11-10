import { useEffect } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import ModulePage from './pages/ModulePage';
import UnitLesson from './pages/UnitLesson';
import Grammar from './pages/Grammar';
import GrammarSheet from './pages/GrammarSheet';
import Vocabulary from './pages/Vocabulary';
import MyWordsPage from './pages/MyWordsPage';
import Exams from './pages/Exams';
import ExamPage from './pages/ExamPage';
import Practice from './pages/Practice';
import ProgressPage from './pages/ProgressPage';
import Assistant from './pages/Assistant';
import StudyPlan from './pages/StudyPlan';
import Reference from './pages/Reference';
import SettingsPage from './pages/SettingsPage';
import Workbook from './pages/Workbook';
import WorkbookUnit from './pages/WorkbookUnit';
import Readings from './pages/Readings';
import Listening from './pages/Listening';
import Speaking from './pages/Speaking';
import Conversation from './pages/Conversation';
import Writing from './pages/Writing';
import AccountPage from './pages/AccountPage';
import { initCloud } from './lib/cloud';
import { applyTheme, getSettings } from './store/progress';

export default function App() {
  useEffect(() => {
    applyTheme(getSettings().theme);
    initCloud();
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const fn = () => applyTheme(getSettings().theme);
    mq.addEventListener?.('change', fn);
    return () => mq.removeEventListener?.('change', fn);
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:moduleId" element={<ModulePage />} />
          <Route path="/learn/:unitId" element={<UnitLesson />} />
          <Route path="/grammar" element={<Grammar />} />
          <Route path="/grammar/:unitId" element={<GrammarSheet />} />
          <Route path="/workbook" element={<Workbook />} />
          <Route path="/workbook/:wid" element={<WorkbookUnit />} />
          <Route path="/vocabulary" element={<Vocabulary />} />
          <Route path="/my-words" element={<MyWordsPage />} />
          <Route path="/readings" element={<Readings />} />
          <Route path="/readings/:rid" element={<Readings />} />
          <Route path="/listening" element={<Listening />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/conversation" element={<Conversation />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/exam/:kind/:id?" element={<ExamPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/plan" element={<StudyPlan />} />
          <Route path="/reference" element={<Reference />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
