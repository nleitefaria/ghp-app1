import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

//const URL = 'https://www.ebi.ac.uk/QuickGO/services/ontology/go/TODO';

class GeneOntologyTermsModal extends React.PureComponent
{
  constructor(props)
  {
    super(props);
    this.state = {
      modal: false
  };

  this.toggle = this.toggle.bind(this);
}

  toggle()
  {
    this.setState({
      modal: !this.state.modal
    });
  }

  render()
  {
    return (
      <div>
        <Button color="primary" size="sm" onClick={this.toggle}>Details</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>{this.props.id}</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.toggle}>Close</Button>
        </ModalFooter>
        </Modal>
        </div>
    );
  }
}

export default GeneOntologyTermsModal;
