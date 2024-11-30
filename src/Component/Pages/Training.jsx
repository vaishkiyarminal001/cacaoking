import React, { useState } from 'react';
import "./Training.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap'; // Corrected import
import t1 from "../Assets/t1.png";
import t2 from "../Assets/t2.png";
import t3 from "../Assets/t3.png";
import t4 from "../Assets/t4.png";
import t5 from "../Assets/t5.png"; // Added import for t5
import t6 from "../Assets/t6.png"; // Added import for t6
import t7 from "../Assets/t7.png"; // Added import for t7

const Training = () => {
  const [show, setShow] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [modalContent, setModalContent] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (content) => {
    setModalContent(content);
    setVideoUrl(content.video);
    setShow(true);
  };

  const trainingData = [
    {
      title: "How To Have Your Own Cacao Ceremony",
      author: "Andrew Anunciation",
      date: "March 3, 2021",
      description:
        "Here is a wonderful video of how to have your own cacao ceremony. Cacao Ambassador of Cacao King shows you how to have your own cacao ceremony. This video is helpful for everyone who would like to know how to have your own cacao ceremony.",
      categories: "cacao ceremony, cacao king, ceremonial cacao",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",  // YouTube video URL for this item
      image: t1,
      detailedText: `
        Thank you
        Cacao King || CacaoKing.com
      `,
    },
    {
      title: "How To Make Ceremonial Cacao",
      author: "Andrew Anunciation",
      date: "March 3, 2021",
      description:
        "Here is a wonderful video of how to make your own ceremonial cacao. Cacao King shows you how to make your own cup of ceremonial cacao. This video is helpful for everyone who would like to know how to make your own cup of ceremonial cacao.",
      categories: "cacao ceremony, cacao king, ceremonial cacao",
      video: "",  // No video for this item
      image: t2,
      detailedText: `
        Thank you
        Cacao King || CacaoKing.com
      `,
    },
    {
      title: "How to Use Crystals with Your Cacao Practice",
      author: "Paige Pichler",
      date: "August 26, 2020",
      description: "The sacred medicine of cacao helps us ground into our human experience, allowing us to feel safe while we open to our emotions. An excellent complement to your spiritual practices, drinking cacao can also help you connect more deeply with sacred objects like crystals.",
      categories: "cacao, crystals, spiritual practices",
      video: "https://www.youtube.com/embed/someOtherVideoId3",  // YouTube video URL for this item
      image: t3,
      detailedText: `
        When you're ungrounded, you may feel scattered, anxious or struggle to focus. These issues generally correlate with the root chakra, which holds our sense of safety, security, and connection.
        Mother Earth's medicine connects us more deeply with her unique energy that grounds and protects when we drink cacao. Literally inviting her energy into our bodies to counteract the fast-paced, frenzied state of modern life, cacao offers one of the most effective ways to ground your energy.
        Using specific crystals can amplify these benefits even further and you can customize your experience to what you need.
        Crystals such as lava stone, hematite, and shungite can aid in grounding practices.
      `,
    },
    {
      title: "How Cacao Affects Your Body",
      author: "John Smith",
      date: "August 25, 2023",
      description: "Discover how cacao impacts your physical and mental well-being.",
      categories: "health, wellness, cacao",
      video: "",  // No video for this item
      image: t4,
    },
    {
      title: "The Journey of Cacao Beans",
      author: "Emily Rose",
      date: "November 10, 2022",
      description: "A deep dive into the journey of cacao beans from farm to cup.",
      categories: "cacao farm, cacao beans, process",
      video: "",  // No video for this item
      image: t5,
    },
    {
      title: "Cacao in Ancient Civilizations",
      author: "Mark Lee",
      date: "January 12, 2024",
      description: "Explore how ancient civilizations used cacao for rituals and health.",
      categories: "ancient civilizations, cacao",
      video: "",  // No video for this item
      image: t6,
    },
    {
      title: "Modern Uses of Cacao",
      author: "Sara White",
      date: "July 22, 2024",
      description: "How cacao is used today in various wellness and culinary practices.",
      categories: "modern uses, wellness, culinary",
      video: "",  // No video for this item
      image: t7,
    },
  ];

  return (
    <div className="training-page">
      <div className="training-container">
        {trainingData.map((item, index) => (
          <div className="training-item" key={index}>
            <img src={item.image} alt={item.title} className="training-image" />
            <div className="training-content">
              <h2>{item.title}</h2>
              <p>
                <strong>by {item.author}</strong> | {item.date}
              </p>
              <p>{item.description}</p>
              <p>
                <em>Posted in {item.categories}</em>
              </p>
              <Button variant="primary" onClick={() => handleShow(item)}>
                Know More
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for detailed view */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="video-container" style={{ textAlign: "center" }}>
            {modalContent.video && (
              <iframe
                width="100%"
                height="315"
                src={videoUrl}
                title={modalContent.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
          <div className="modal-content-text">
            <p>{modalContent.description}</p>
            <p>{modalContent.detailedText}</p>
            <img src={modalContent.image} alt={modalContent.title} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Training;
