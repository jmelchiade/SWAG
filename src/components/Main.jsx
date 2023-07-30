import React, { useState } from "react";

const Main = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [introText, setIntroText] = useState({
    spanish: `Elijo hacer un proyecto individual y el tema que selecciono abordará los impactos de la inmigración. Quiero realizar una encuesta enfocada en identificar preferencias culturales y normas lingüísticas, como el uso del Spanglish en Norteamérica, el ser bilingüe o plurilingüe, y el sentido de nacionalismo y otros impactos psicológicos y filosóficos de la identidad que perduran principalmente en la primera generación en el extranjero. Entrevistaré a personas extranjeras de primera generación o aquellas que han vivido en los Estados Unidos durante al menos 5 años. Esto no se limitará a aquellos de ascendencia hispana o latina. Recopilar los datos de la encuesta, como la demografía de edad y etnia, ayudará a generar valores cuantitativos y, por lo tanto, visualización de datos. Lingüísticamente, me gustaría estudiar el comportamiento humano de los bilingües o plurilingües y sus impactos psicológicos, como si se sienten cómodos hablando abiertamente en el idioma de sus padres, en público o con amigos. Además, si disfrutan compartiendo música y comida de su cultura o si prefieren las normas, culturas, comidas y música occidentales (estadounidenses), etc. Planeo entrevistar a un puñado de personas para recopilar sus respuestas, junto con cualquier foto o imagen que pueda obtener. Algunos contenidos previstos para este proyecto son: una lista de individuos con su identidad étnica o herencia, imágenes de los alimentos, costumbres, música u otros elementos que prefieran, y un resumen para interpretar mis hallazgos en una página web.`,
    english: `I choose to do an individual project, and the topic I have chosen will address the impacts of immigration. I want to conduct a survey focused on identifying cultural preferences and linguistic norms, such as the use of Spanglish in North America, being bilingual or multilingual, and the sense of nationalism and other psychological and philosophical impacts of identity that mainly persist in the first generation abroad. I will interview first-generation immigrants or those who have lived in the United States for at least 5 years. This will not be limited to those of Hispanic or Latino heritage. Collecting survey data, such as age and ethnicity demographics, will help generate quantitative values and, therefore, data visualization. Linguistically, I would like to study the human behavior of bilinguals or multilinguals and their psychological impacts, such as whether they feel comfortable speaking openly in their parents' language, in public or with friends. Additionally, whether they enjoy sharing music and food from their culture or if they prefer Western (American) norms, cultures, cuisines, and music, etc. I plan to interview a handful of people to gather their responses, along with any photo or image I can obtain. Some planned content for this project includes: a list of individuals with their ethnic or heritage identity, images of preferred foods, customs, music, or other elements, and a summary to interpret my findings on a web page.`,
  });
  const [showSpanish, setShowSpanish] = useState(true);

  const handleTranslate = () => {
    setShowSpanish(!showSpanish);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (commentText.trim() === "") return;
    setComments([...comments, commentText]);
    setCommentText("");
  };

  return (
    <div className="main-container">
      <h1 className="title">SWAG</h1>
      <h2 className="subheader">Spanglish Web Application Generación 1</h2>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nVgOV4x7MmU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="intro-section">
        <button className="translate-button" onClick={handleTranslate}>
          {showSpanish ? "Translate to English" : "Translate to Spanish"}
        </button>
        <p className="intro-text">
          {showSpanish ? introText.spanish : introText.english}
        </p>
      </div>
      <div className="comments-section">
        <form className="comment-form" onSubmit={handleSubmitComment}>
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Leave a comment..."
          ></textarea>
          <button type="submit">Submit Comment</button>
        </form>
        {comments.map((comment, index) => (
          <div className="comment" key={index}>
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
