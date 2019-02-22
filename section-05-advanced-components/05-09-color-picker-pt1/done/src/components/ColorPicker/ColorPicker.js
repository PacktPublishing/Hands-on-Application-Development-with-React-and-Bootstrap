import React from 'react';
import './ColorPicker.css';
import classnames from 'classnames';
class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const selectedVehicleData = this.props.vehicleData.filter((vehicle) => vehicle.detailKey === this.props.selectedVehicle)[0];
        if(selectedVehicleData){
            return <div className="colorBox">
                <table>
                    <tbody>
                        <tr>
                            {selectedVehicleData.colors.map(
                                function(color, i){
                                    return <td key={"colorPicker-" + color[1]}>
                                        
                                     </td>
                                }, this)}
                        </tr>
                    </tbody>
                </table>
            </div>
        } else {
            return null;
        }
    }
}

export default ColorPicker;
