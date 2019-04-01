import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const URL = 'https://www.ebi.ac.uk/QuickGO/services/ontology/go/terms/';

class AnnotationsInnerModal extends React.PureComponent
{
  constructor(props)
  {
    super(props);
    this.state = {
      modal: false,
      results: []
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle()
  {
    this.setState({
      modal: !this.state.modal
    });

    if(this.state.modal === false)
    {
        //this.loadData(this.props.id);
    }
  }

  componentDidMount()
  {
  }

  loadData(id)
  {
      const queryString = this.queryString(id);
      if (queryString === this.lastQuery) {
        //this.setState({ loading: false });
        return;
      }

      fetch(queryString)
        .then(response => response.json())
        .then(data => this.setState({
          results: data.results
          //loading: false,
        }))
        .catch(() => this.setState({ loading: false }));
      this.lastQuery = queryString;
  }

  queryString(id)
  {
    return URL + id;
  }

  render()
  {
    return (
      <div>
        <Button color="primary" size="sm" onClick={this.toggle}>Details</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size="lg">
        <ModalHeader toggle={this.toggle}>{this.props.id}</ModalHeader>
        <ModalBody>
          <br></br>
          <div>
                TODO
          </div>
          <br></br>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.toggle}>Close</Button>
        </ModalFooter>
        </Modal>
        </div>
    );
  }
}

export default AnnotationsInnerModal;
