const Instructor = ({ instructor }) => {
    if (instructor) {
      const { image, name, description } = instructor;

    return (
        <>
          <img src={image} alt={name} style={{ width: "150px" }} />
          <div className="m-4">
            <h5 className="fw-bold">{name}</h5>
            {description}
          </div>
        </>
      );
    }
    return null;
  };
export default Instructor;