import React from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import axios from "axios";

 class Search extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      result: null
    };
  }

  get_result = async () => {
    console.log("here");
    const url = "http://106.15.232.250/advancedSearch.php";
    const payload = {"term":"'Cowden Disease'[disease]","num":"1","step":"1"};
    const _result = await axios.post(url, payload)
    .then((res) => {return res.data})
    .then((res) => {return res.data})
    .then((res) => {return JSON.stringify(res)});
    console.log(_result)
    this.setState({result : _result});
  }

  async componentDidMount() {
  }

  render() {
    return (
      <div>
        <InputGroup className="mb-3" style={{width: "50%"}}>
            <Form.Control
              placeholder="Disease"
              aria-label="Disease"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2" onClick={this.get_result}>
              Button
            </Button>
          </InputGroup>
          <div>{this.state.result}</div>
      </div>
    );
  }
}

export default Search;
