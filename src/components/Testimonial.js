import React, { useState } from "react";

const Testimonial = ({
  name,
  title,
  expandTextLink,
  firstSnippet,
  secondSnippet,
  thirdSnippet,
}) => {
  const [expand, setExpand] = useState(false);
  return (
    <div
      onClick={() => setExpand(!expand)}
      className={expandTextLink && "read-more"}
    >
      <p>
        {firstSnippet}
        <em>{expand ? "" : expandTextLink}</em>
      </p>
      <p>{expand && secondSnippet}</p>

      <p>{expand && thirdSnippet}</p>
    </div>
  );
};

export default Testimonial;
