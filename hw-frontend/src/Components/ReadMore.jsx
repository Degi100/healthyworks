import React, { useState } from "react";
import "../Components/content.scss";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const Content = () => {
  return (
    <div className="container">
      <h2>
        <ReadMore>
          Mit HealthyWork gesund in die Zukunft! Faktoren, wie der
          demographische Wandel, der Fachkräftemangel und die Zunahme von
          psychischen Erkrankungen, stellen Unternehmen vor großen
          Herausforderungen. Das Durchschnittsalter der Mitarbeiter steigt und
          der Wettbewerb um Fachkräfte wird immer stärker. Hinzu kommt, dass die
          Arbeitsunfähigkeitstage in den letzten 10 Jahren deutlich angestiegen
          sind. Immer mehr Mitarbeiter fallen, in der Regel für einen sehr
          langen Zeitraum, aufgrund von psychischen Erkrankungen aus. Das
          schlägt sich nicht nur in der Produktivität der Unternehmen nieder,
          sondern führt auch zu hohen Mehrkosten. Der Erhalt und die Bindung von
          Mitarbeitern bis ins hohe Alter sind wichtige Indikatoren um am Markt
          zu bestehen. Die Förderung der Mitarbeitergesundheit ist daher eine
          wichtige Aufgabe, der sich nicht nur große, sondern vor allem auch
          kleine und mittelständische Unternehmen stellen sollten. HealthyWork
          unterstützt Sie gerne bei dieser Aufgabe. Wir bieten Ihnen
          individuelle Lösungen zur betrieblichen Gesundheitsförderung, die
          speziell auf die Bedürfnisse und Ressourcen ihres Unternehmens
          zugeschnitten werden. Kommen Sie gerne auf uns zu. Kontakt 
        </ReadMore>
      </h2>
    </div>
  );
};

export default Content;
