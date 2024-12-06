import UserCard from "../UserCard";
const UsersList = ({ propUser }) => {
  return (
    <div>
      <h1>User List</h1>
      {/* nanti datanya disini di looping */}
      {propUser.map((user) => (
        <UserCard key={user}
        name={user.name} 
        age={user.age} 
        city={user.city} 
        avatar={user.avatar} />
      ))}
    </div>
  );
};

export default UsersList;
