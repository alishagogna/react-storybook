import Button from './components/Button/Button'

function App() {
  return (
    <div className="App">
      <Button variant='primary' style={{margin:'10px'}}>Primary</Button>
      <Button variant='secondary' style={{margin:'10px'}}>Secondary</Button>
      <Button variant='success' style={{margin:'10px'}}>Success</Button>
      <Button variant='danger' style={{margin:'10px'}}>Danger</Button>
    </div>
  );
}

export default App;
