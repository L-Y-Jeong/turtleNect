import React from 'react';
import Layout from './Layout';
import './Home.css';
import './App.css';

function Home() {
  return (
    <Layout>
      <div className="camera-screen">
        <div className="camera-view">camera</div>
      </div>
    </Layout>
  );
}

export default Home;
