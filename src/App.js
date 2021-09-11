import ss1 from './ss1.png';
import ss2 from './ss2.png';
import ss3 from './ss3.png';
import ss4 from './ss4.png';
import ss5 from './ss5.png';
import ss6 from './ss6.png';
import ss7 from './ss7.png';

import './App.css';
import { Carousel } from 'react-carousel-minimal';

function App() {

  const data = [
    {
      image: ss1,
      caption: ""
    },
    {
      image: ss2,
      caption: ""
    },
    {
      image: ss3,
      caption: ""
    },
    {
      image: ss4,
      caption: ""
    },
    {
      image: ss5,
      caption: ""
    },
    {
      image: ss6,
      caption: ""
    },
    {
      image: ss7,
      caption: ""
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }

  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h2>Food Waste Recycler​</h2>
        <p>MSc in IT – 2021 June Batch​</p>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
