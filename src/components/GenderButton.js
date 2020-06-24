import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const backgroundStyle = {
  red : 'linear-gradient(45deg, #FE6B8B 30%, #9b1e44 90%)',
  blue : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  grey : 'linear-gradient(45deg, #3e0011 30%, #3e0011 90%)',

};
const boxShadowStyle = {
  red : '0 3px 5px 2px rgba(255, 105, 135, .3)',
  blue : '0 3px 5px 2px rgba(33, 203, 243, .3)',
  grey : '0 3px 5px 2px rgba(33, 203, 243, .3)',
};

const styles = {
  root: {
    background: (props) =>
      backgroundStyle [props.color],
    border: 0,
    borderRadius: 3,
    boxShadow: (props) =>
      boxShadowStyle [props.color],
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: 8,
  },
};

function MyButtonRaw(props) {
  const { classes, color, ...other } = props;
  return <Button className={classes.root} {...other} />;
}

MyButtonRaw.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(['blue', 'red']).isRequired,
};

const GenderButtom = withStyles(styles)(MyButtonRaw);

export default function AdaptingHOC() {
  return (
    <React.Fragment>
      <GenderButtom 
      color="blue"
      label="Homme"
      primary={true}
      >Homme</GenderButtom>
      <GenderButtom color="red">Femme</GenderButtom>
      <GenderButtom color="grey">Autre</GenderButtom>
    </React.Fragment>
  );
}