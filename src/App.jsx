import Nav from './components/Nav';
import Unit from './components/Unit';
import Lessons from './components/Lessons';
import Progress from './components/progress/index';
import '../index.css';

export default function App() {
  return (
    <div className="grid grid-auto-fit">
      <Nav></Nav>
      <main className="col-span-2">
        <Unit></Unit>
        <Lessons></Lessons>
      </main>
      <Progress></Progress>
    </div>
  );
}
