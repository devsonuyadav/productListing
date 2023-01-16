import { useLocation } from "react-router-dom";
import { Products } from "../redux/types";

const ProductDetails = () => {
  const { state }: any = useLocation();

  const { club, price, leaders, partners } = state;
  return (
    <div className="details">
      <img src={state.club.coverUrl} />
      <p>Name : {club?.name}</p>
      <p>price : {price}</p>
      <p>type : {club.type}</p>

      <p>place : {club.place}</p>
      <p>{club.description}</p>
      <h4>Meetings</h4>
      <div className="meeting">
        {club.meetings.map((meeting: any, index: number) => (
          <p key={index}>
            {new Date(meeting.startedAt).toLocaleString()}-
            {new Date(meeting.endedAt).toLocaleString()}
          </p>
        ))}
      </div>

      <h4>Leaders</h4>
      <div className="meeting">
        {leaders.map((leader: any, index: number) => (
          <p key={index}>Name : {leader.name}</p>
        ))}
      </div>

      <h4>Partners</h4>

      {partners.map((partner: any, index: number) => (
        <p key={index}>Name : {partner.name}</p>
      ))}
    </div>
  );
};

export default ProductDetails;
