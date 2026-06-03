function UserCard({ name, email, avatar }) {
  return (
    <div className="card" style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <img src={avatar} alt={name} width={64} height={64} style={{ borderRadius: "50%" }} />
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default UserCard;
