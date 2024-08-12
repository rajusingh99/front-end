
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';

const App = () => {
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [timer, setTimer] = useState(60);
  const [visible, setVisible] = useState(true);
  
  const bannerData = {
    description,
    link,
    timer,  
    visible
  };

  useEffect(() => {
    axios.get('http://localhost:5000/api/banner')
      .then(response => {
        const { description, link, timer, visible } = response.data;
        setDescription(description);
        setLink(link);
        setTimer(timer);
        setVisible(visible);
      })
      .catch(error => console.error('Error fetching banner data:', error));
  }, []);

  useEffect(() => {
    if (timer === 0) {
      // axios.put('http://localhost:5000/api/banner/update', { description, link, timer, visible })
      //   .then(response => {
      //     if (response.status === 200) {
      //       alert('Timer updated successfully');
      //     }
      //   })
      //   .catch(error => {
      //     console.error('Error updating timer:', error);
      //     alert('Error updating timer.');
      //   });
    }
  }, [timer]);

  return (
    <div className="App">
      <Banner {...bannerData} />
      <Dashboard 
        description={description}
        link={link}
        timer={timer}
        visible={visible}
        setDescription={setDescription}
        setLink={setLink}
        setTimer={setTimer}
        setVisible={setVisible}
      />
    </div>
  );
};

export default App;
