const Templates = ({ templates, setMeme }) => {
  return (
    <div className="templates">
      {templates.map((temp) => {
        return (
          <div
            key={temp.id}
            className="template"
            onClick={() => {
              setMeme(temp);
            }}
          >
            <div
              style={{ backgroundImage: `url(${temp.url})` }}
              className="image"
            ></div>
          </div>
        );
      })}
      <p style={{ textAlign: "center" }}>Created By Ansh Sawant</p>
    </div>
  );
};

export default Templates;
