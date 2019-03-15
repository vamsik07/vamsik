import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import moment from 'moment';

const CustomTooltip = (props) => {
  if(props.active)  {
    return Math.round(props.payload[0].value);
  }
  return null;  
}

class Temperatures extends PureComponent {
 
  render() {
    const { data } = this.props;
    return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="name"      
          interval={78}
          allowDataOverflow={true}
          tickFormatter = {(unixTime) => {
            return moment(unixTime).format('HH:mm')
          }
          }
/>
        <YAxis
          dataKey="pv"
          type="number" 
          domain={[dataMin => (Math.floor(dataMin/5)*5), dataMax => (Math.ceil(dataMax/5)*5)]}
          tickFormatter = {(item) => {
            return Math.round(item);
          }}
        />
        <Tooltip content={<CustomTooltip/>}/>
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.temperature.tempdata
  };
}

export default connect(
  mapStateToProps
)(Temperatures);