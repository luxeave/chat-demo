import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '673332cb2d104100aa4cb1d7' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
    };

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Talkbot Demo #01</h1>
      {/* Your content goes here */}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    color: '#333',
  },
};

export default App;
