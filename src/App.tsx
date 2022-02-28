import 'src/App.css';
import Home from 'src/app/pages/Home';
import { ErrorBoundary } from 'src/hoc/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  );
}

export default App;
