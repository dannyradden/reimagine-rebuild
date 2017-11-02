import React from 'react';
import { connect } from 'react-redux';
import { addSignatureToCampaign } from '../redux/actions/signature';
import GoogleButton from 'react-google-button';

const SignCampaign = (props) => {
  const { auth } = props;
  const { activeCampaign } = props;
  const user = auth && auth.user;
  const campaignId = activeCampaign && activeCampaign.campaign && activeCampaign.campaign._id;
  const sendUserSignature = (userId, campaignId) => {
    addSignatureToCampaign(userId, campaignId);
  };

  function renderContent() {
    if (auth.data === undefined) {
      return;
    }

    if (!auth.data.googleID) {
      return (
        <a className="google-button-signature" href="/auth/google">
          <GoogleButton label="Sign in to google to sign!" />
        </a>
      );
    }
    return (
      <button
        className="pure-button"
        onClick={() => {
          sendUserSignature(user.id, campaignId);
        }}
      >
        Sign the petition!
      </button>
    );
  }
  return (
    <div>
      <h1>Show your support!</h1>
      <div className="sign-campaign-wrapper">{renderContent()}</div>
    </div>
  );
};

export default connect(({ auth, activeCampaign }) => ({ auth, activeCampaign }), {
  addSignatureToCampaign
})(SignCampaign);
