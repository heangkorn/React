import React from 'react';
import Student from './Student';

function App() {
  return (
    <>
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Laiheang" age={42} isStudent={false} />
    </>
  );
}

export default App;
