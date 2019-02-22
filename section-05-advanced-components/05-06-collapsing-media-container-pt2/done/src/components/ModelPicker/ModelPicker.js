import React from 'react';
import './ModelPicker.css'
import ModelPickerCollapse from '../ModelPickerCollapse/ModelPickerCollapse';
import {
    Row,
    Col
} from 'reactstrap';
class ModelPicker extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<h2>Pick the model you want to build</h2>);
    }
}

export default ModelPicker;
