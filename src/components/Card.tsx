const Card = ({ repo }: any) => {
  return (
    <div>
      <div>
        <h1>{repo.name}</h1>
        <p>{repo.description}</p>
        <p>{repo.language}</p>
      </div>
    </div>
  );
};

export default Card;
