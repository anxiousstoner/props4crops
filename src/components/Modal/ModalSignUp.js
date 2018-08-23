import React, { Component } from 'react';
import Modal from './Modal';
import { FormattedMessage } from 'react-intl';
import './ModalSignUp.less';

class ModalSignUp extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleModal} className="Modal__button">
          Sign up
        </button>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
            <div>
              <h1>Welcome to Smoke.Network Alpha</h1>
              <p className="Modal__about-bold">Smoke.Network Alpha runs on the Steem blockchain allowing our authors to earn real cryptocurrency that can be traded for Bitcoin and other altcoins.</p>
              <p className="Modal__about">
                  Steem is a blockchain-based rewards platform for publishers to monetize content and grow communities like ours. Steem has it's own smart token called STEEM. These tokens are distributed to content creators and curators daily as rewards, based on community voting. Smoke.Network is one of the first niche based front ends that plugs directly into the Steem chain allowing our authors to earn Steem for their contributions to Smoke.Network.   
                  <br /><br />
                  Due to the nature of the Steem blockchain you must first sign up for an account on Steemit.com, the official application of the Steem blockchain.
                  <br />
                  
              </p> 
            </div>
            <a target="_blank" rel="noopener noreferrer" href="https://steemit.com/pick_account">
              <button className="Modal__button">
                <FormattedMessage id="signup" defaultMessage="Sign up on Steemit!" />
              </button>
            </a>
        </Modal>
      </div>
    );
  }
}

export default ModalSignUp;
