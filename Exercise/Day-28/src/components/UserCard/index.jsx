const UserCard = (props) => {
    const {name, age, city, avatar} = props;

  return (
    <div>
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{city}</p>
    </div>
  );
};

export default UserCard;
