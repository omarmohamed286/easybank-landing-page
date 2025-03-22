type Props = {
  classes?: string;
};
const RequestInviteButton = ({ classes }: Props) => {
  return (
    <button className={`request-invite-btn ${classes}`}>Request Invite</button>
  );
};

export default RequestInviteButton;
