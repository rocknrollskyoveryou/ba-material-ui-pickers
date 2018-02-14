var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Toolbar, withStyles, Typography } from 'material-ui';

var PickerTitle = function PickerTitle(props) {
  var children = props.children,
      className = props.className,
      classes = props.classes,
      other = _objectWithoutProperties(props, ['children', 'className', 'classes']);

  return React.createElement(
    Toolbar,
    _extends({ className: classnames(classes.toolbar, className) }, other),
    children
  );
};

PickerTitle.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

PickerTitle.defaultProps = {
  className: ''
};

var styles = function styles(theme) {
  return {
    toolbar: {
      justifyContent: 'center',
      color: '#fff',
      backgroundColor: 'transparent'
    }
  };
};

export default withStyles(styles, { name: 'MuiPickersTitle' })(PickerTitle);