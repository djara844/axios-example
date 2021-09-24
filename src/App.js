import AxiosDelete from './components/AxiosDelete';
import AxiosGet from './components/AxiosGet';
import AxiosPost from './components/AxiosPost';
import AxiosPut from './components/AxiosPut';

function App() {
  
  return (
    <div>
      <AxiosGet />
      <AxiosPost />
      <AxiosPut />
      <AxiosDelete />
    </div>
  );
}

export default App;
