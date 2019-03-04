import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';


// const styles = theme => ({
//   button: {
//     margin: theme.spacing.unit,
//   },
//   input: {
//     display: 'none',
//   },
// });

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

const phoneCarriers = [
  {
    value: 'tmobile',
    label: 'T-mobile',
  },
  {
    value: 'verizon',
    label: 'Verizon',
  },
  {
    value: 'sprint',
    label: 'Sprint',
  },
  {
    value: 'att',
    label: 'AT&T',
  },
];

class Form extends React.Component {
  state = {
    summonerName: "",
    phoneNum: "",
    phoneCarrier: "",
    maxHour: "",
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) =>{
    e.preventDefault();
    this.onSubmit(this.state);
  };

  render(){
    const { classes } = this.props;
    return (
      <div>
      <TextField
        required
        // id="standard-required"
        name="summonerName"
        label="Summoner's Name"
        margin="normal"
        value={this.state.summonerName}
        onChange={e => this.change(e)}
      />
      <br/>
      <TextField
        required
        // id="standard-required"
        name="phoneNum"
        label="Phone Number"
        margin="normal"
        value={this.state.phoneNum}
        onChange={e => this.change(e)}
      />

      <br/>
      <TextField
        required
        // id="standard-required"
        name="phoneCarrier"
        label="phoneCarrier"
        margin="normal"
        value={this.state.phoneCarrier}
        onChange={e => this.change(e)}
      />

      <TextField
          id="standard-select-carrier"
          select
          label="Phone Carrier"
          className={classes.textField}
          value={this.state.phoneCarrier}
          onChange={this.handleChange('phoneCarrier')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your phone carrier."
          margin="normal"
      >
      <select>
        {this.state.phoneCarriers.map((option) => <option key={option.value} value={option.value}>)}
      </select>
          // <MenuItem key={option.value} value={option.value}>
          //   {option.label}
          // </MenuItem>
        // ))}
      </TextField>

      <br/>
      <TextField
        required
        // id="standard-required"
        name="maxHour"
        label="Max number of hours"
        // margin="normal"
        value={this.state.maxHour}
        onChange={e => this.change(e)}
      />
      </div>



      // <form>
      //  Summoner's Name:<br />
      //  <input
      //  name = "summonerName"
      //  placeholder="Summoner's Name"
      //  value={this.state.summonerName}
      //  onChange={e => this.change(e)}
      //  />
      //  <br /> <br />
      //  Phone Number:<br />
      //  <input
      //  name = "phoneNum"
      //  placeholder="Phone Number"
      //  value={this.state.phoneNum}
      //  onChange={e => this.change(e)}
      //  />
      //  <br /><br />
      //  Phone Carrier:<br />
      //  <input
      //  name = "phoneCarrier"
      //  placeholder="Phone Carrier"
      //  value={this.state.phoneCarrier}
      //  onChange={e => this.change(e)}
      //  />
      //  <br /><br />
      //  Max number of hours playing League/day: <br />
      //  <input
      //  name = "maxHour"
      //  placeholder="Max hour(s): "
      //  value={this.state.maxHour}
      //  onChange={e => this.change(e)}
      //  />
      //  <br />
      //  <button onClick={e => this.onSubmit(e)}>
      //       Submit
      //   </button>
      // </form>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);

// function ContainedButtons(props) {
//   return (
//     <div>
//     <button onClick={e => this.onSubmit(e)}>
//       Submit
//     </button>
//     </div>
//   )
// }
