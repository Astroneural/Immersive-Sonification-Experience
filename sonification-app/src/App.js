import React, {useState} from "react"
// import api from './api'
import { useDropzone } from 'react-dropzone';
import './App.css'; // You can create this CSS file for styling
import './UploadVid.css';

const App = () => {
  // const [Transactions, setTransactions] = useState([]);
  // const [formData, setFormData] = useState({
  //   amount:'',
  //   category:'',
  //   description:'',
  //   is_income:false,
  //   date:''
  // });

  // const fetchTransactions = async () => {
  //   const response = await api.get('/transactions/');
  //   setTransactions(response.data)
  // };

  // useEffect(() => {
  //   fetchTransactions();
  // }, []);

  // const handleInputChange = (event) => {
  //   const value = event.target.type = 'checkbox' ? event.target.checked:event.target.value;
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: value,
  //   }); 
  // };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   await api.post('/transactions/', formData);
  //   fetchTransactions()
  //   setFormData({
  //     amount:'',
  //     category:'',
  //     description:'',
  //     is_income:false,
  //     date:''
  //   });
  // };
  const [backgroundVideo, setBackgroundVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const objectURL = URL.createObjectURL(file);
    setBackgroundVideo(objectURL);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'video/*',
  });

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="upload-container">
      {backgroundVideo && (
        <div className="background-video">
          {isPlaying && (
            <video autoPlay loop muted className="video-element">
              <source src={backgroundVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}
      <div className="bottom-bar">
        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          <p className="dropzone-text">Upload Video</p>
        </div>
        <button onClick={togglePlay} className="control-button">
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );

 
};



export default App;
