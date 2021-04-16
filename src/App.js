import logo from './logo.svg';
import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const images = [
  { src: "https://i.ibb.co/fHRRPCv/mainul01.png" },
  { src: "https://i.ibb.co/MVzyt6t/mainul02.png" },
  { src: "https://i.ibb.co/R9Ns7HS/mainul03.png"},
  { src: "https://i.ibb.co/Sd0q6Fq/mainul04.png"},
  { src: "https://i.ibb.co/k8zS9YM/mainul05.png" },
  { src: "https://i.ibb.co/gdbpbST/mainul06.png"}
];



function App() {
  const settings = {
    dots: true,
    dotsClassName:'slick-dots slick-thumb',
    className:' m-auto w-75',
    infinite: true,
    arrows:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect:true, 
    customPaging: function (i) {
      
      return (
        <a className="">
        {<img src={images[i].src} style={{height:'30px',width:'100px'}} className="w-100  bg-secondary" />}  
     
         
  
        </a>
      );
    },

     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          focusOnSelect:true,
          slidesToScroll:1,
          infinite: true,
          dotsClassName:'slick-dots slick-thumb',
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          focusOnSelect:true,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          focusOnSelect:true,
          slidesToScroll: 1
        }
      }
    ]
    

  };
  return (
  <>
  <div className="bg-secondary full-screen"  >
  <h1>Slider</h1>
  
  <div className="">
        <h2> Single Item</h2>
        <Slider {...settings} >
          <div className="w-100" >
          <img className=" w-100"style={{height:'400px'}} src="https://i.ibb.co/fHRRPCv/mainul01.png" />
          </div>
          <div className="w-100">
          <img className=" w-100"style={{height:'400px'}} src="https://i.ibb.co/MVzyt6t/mainul02.png" />
          </div>
          <div className="w-100">
          <img className=" w-100"style={{height:'400px'}} src="https://i.ibb.co/R9Ns7HS/mainul03.png" />
          </div>
          <div className="w-100 ">
          <img className=" w-100"style={{height:'400px'}} src="https://i.ibb.co/Sd0q6Fq/mainul04.png" />
          </div>
          <div className="w-100">
          <img className=" w-100" style={{height:'400px'}} src="https://i.ibb.co/k8zS9YM/mainul05.png" />
          </div>
          <div className="w-100 ">
          <img className="w-100" style={{height:'400px'}} src="https://i.ibb.co/gdbpbST/mainul06.png" />
          </div>
        </Slider>
      </div>
      </div>
    </>
  );
}

export default App;
