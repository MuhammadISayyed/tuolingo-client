import Nav from './components/Nav';
import Unit from './components/Unit';
import Lessons from './components/Lessons';
import Progress from './components/progress/index';
import '../index.css';

export default function App() {
  return (
    <div className="app">
      <Nav></Nav>
      <main>
        <Unit className></Unit>
        <Lessons></Lessons>
      </main>
      <Progress></Progress>
    </div>
  );
}
