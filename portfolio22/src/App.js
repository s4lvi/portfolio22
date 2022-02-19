import logo from './logo.svg';
import './App.css';
import ProjectList from './ProjectList/ProjectList';
import ProjectInfo from './ProjectInfo/ProjectInfo';

function App() {
  return (
    <div className="page">
      <div className="inner-page">
        <div className="title">salvi / codeweekend portfolio</div>
        <hr />
        <div className="content">
          <div className="content-left">
            <ProjectList />
          </div>
          <div className="content-right">
            <ProjectInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;