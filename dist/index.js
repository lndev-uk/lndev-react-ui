'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "\n";
var variablesSCSS = { "main-font": "\"Quicksand\", sans-serif", "font-size-xs": "1", "font-size-sm": "1.4", "font-size-md": "1.8", "font-size-lg": "2.6", "font-size-xl": "3", "color-primary": "#af0f0f", "color-secondary": "#28252a", "color-tertiary": "#80938c", "color-quaternary": "#ccc6c3", "color-quinary": "#f9f4ef", "color-default": "#272727", "color-success": "#4caf50", "color-info": "#03a9f4", "color-warning": "#f0ad4e", "color-error": "#e73c3c", "color-lngrey": "#ccc6c3", "color-lngreengrey": "#80938c", "color-lndarkgrey": "#28252a", "color-lnred": "#af0f0f", "color-lnlightgrey": "#f9f4ef", "color-lnwhite": "#ffffff", "color-lnlblack": "#000000", "font-weight-light": "300", "font-weight-regular": "400", "font-weight-bold": "700", "breakpoint-xs": "320px", "breakpoint-sm": "540px", "breakpoint-md": "768px", "breakpoint-lg": "1024px", "breakpoint-xl": "1280px" };
styleInject(css);

var VariantList = ['default', 'primary', 'secondary', 'tertiary', 'quaternary', 'info', 'success', 'warning', 'error'];

var SizeList = ['xs', 'sm', 'md', 'lg', 'xl'];

var FontWeightList = ['light', 'regular', 'bold'];

var ColorList = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary', 'default', 'success', 'info', 'warning', 'error', 'lngrey', 'lngreengrey', 'lndarkgrey', 'lnred', 'lnlightgrey', 'lnwhite', 'lnlblack'];

var getVariables = function getVariables(name, list) {
  var obj = list.reduce(function (entry, key) {
    entry[key] = variablesSCSS[name + '-' + key];
    return entry;
  }, {});
  return obj;
};

var variables = {
  breakpoints: getVariables('breakpoint', SizeList),
  fontFamilies: { main: variablesSCSS['main-font'] },
  fontSizes: getVariables('font-size', SizeList),
  fontWeights: getVariables('font-weight', FontWeightList),
  colors: getVariables('color', ColorList)
};

function Loader(props) {
  var type = props.type,
      loading = props.loading;

  if (loading) {
    if (type === 'bar') {
      return React__default.createElement('div', { className: 'loadingBar' });
    } else {
      return React__default.createElement(
        'div',
        { className: 'loadingSpinner' },
        React__default.createElement('span', { className: 'loadingSpinner-inner' }),
        React__default.createElement('span', { className: 'loadingSpinner-inner' }),
        React__default.createElement('span', { className: 'loadingSpinner-inner' }),
        React__default.createElement('span', { className: 'loadingSpinner-inner' })
      );
    }
  }
  return null;
}

Loader.defaultProps = {
  loading: true
};

Loader.propTypes = {
  loading: PropTypes.bool,
  type: PropTypes.oneOf(['bar', 'spinner'])
};

function Badge(props) {
  var size = props.size,
      variant = props.variant,
      label = props.label;

  var sizeClassName = size ? 'badge--' + size : '';
  var variantClassName = 'badge--' + variant;

  return React__default.createElement(
    'span',
    { className: 'badge ' + variantClassName + ' ' + sizeClassName },
    label
  );
}

Badge.defaultProps = {
  variant: 'default'
};

Badge.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(SizeList),
  variant: PropTypes.oneOf(VariantList)
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

function Button(props) {
  var variant = props.variant,
      label = props.label,
      size = props.size,
      mobileFull = props.mobileFull,
      htmlType = props.htmlType,
      name = props.name,
      disabled = props.disabled,
      onClick = props.onClick;

  var onClickHandler = onClick ? onClick : function (e) {
    return null;
  };
  var sizeClassName = size ? 'button--' + size : '';
  var variantClassName = 'button--' + variant;
  var mobileFullClassName = mobileFull ? 'button--mobileFull' : '';
  var nameAttr = name ? { name: name } : {};
  var disabledAttr = disabled ? { disabled: 'disabled' } : {};
  return React__default.createElement(
    'button',
    _extends({
      type: htmlType
    }, nameAttr, disabledAttr, {
      className: 'button  ' + variantClassName + ' ' + sizeClassName + ' ' + mobileFullClassName,
      onClick: onClickHandler
    }),
    label
  );
}

Button.defaultProps = {
  variant: 'default',
  disabled: false
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  mobileFull: PropTypes.bool,
  size: PropTypes.oneOf(SizeList),
  variant: PropTypes.oneOf(VariantList),
  htmlType: PropTypes.oneOf(['button', 'submit', 'reset']),
  name: PropTypes.string,
  disabled: PropTypes.bool
};

// onTimeout a function that if defined will use a timer to call the callback
var Notification = React__default.forwardRef(function Notification(props, ref) {
  var _props$variant = props.variant,
      variant = _props$variant === undefined ? 'default' : _props$variant,
      children = props.children,
      _props$className = props.className,
      className = _props$className === undefined ? '' : _props$className;

  var typeClassName = 'notification--' + variant;

  return React__default.createElement(
    'div',
    { ref: ref, className: 'notification ' + typeClassName + ' ' + className },
    children
  );
});

Notification.propTypes = {
  variant: PropTypes.oneOf(VariantList),
  children: PropTypes.node.isRequired
};

function validateEmail(email) {
  var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEx.test(email);
}

function validateUrl(value) {
  var regEx = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
  return regEx.test(value);
}

function validator(rule, value) {
  var argument = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  switch (rule) {
    case 'required':
      return value !== '';
    case 'email':
      return validateEmail(value);
    case 'url':
      return validateUrl(value);
    case 'securePassword':
      return validateUrl(value);
    case 'min':
      return value >= argument;
    case 'max':
      return value <= argument;
    default:
      return true;
  }
}

function getErrorMessage(rule) {
  var argument = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  switch (rule) {
    case 'required':
      return 'This field is required';
    case 'email':
      return 'Must be a valid email';
    case 'url':
      return 'Must be a valid url';
    case 'securePassword':
      return 'Password sercurity rule not met.';
    case 'min':
      return 'Value must be greater than: ' + argument;
    case 'max':
      return 'Value must be less than: ' + argument;
    default:
      return 'Invalid field value';
  }
}

function inputReducer(state, action) {
  switch (action.type) {
    case 'TOUCHED':
      return _extends({}, state, { touched: true });
    case 'VALID':
      return _extends({}, state, { valid: true, error: '' });
    case 'INVALID_ERROR':
      return _extends({}, state, { valid: false, error: action.payload });
    case 'CHANGE':
      return _extends({}, state, action.payload);
    default:
      return state;
  }
}

function TextInput(props) {
  var id = props.id,
      name = props.name,
      label = props.label,
      type = props.type,
      required = props.required,
      value = props.value,
      onChange = props.onChange,
      placeholder = props.placeholder,
      min = props.min,
      max = props.max;

  var _useReducer = React.useReducer(inputReducer, {
    value: value,
    valid: true,
    touched: false,
    error: ''
  }),
      _useReducer2 = slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var hasErrorClass = '';
  if (state.touched && !state.valid) hasErrorClass = 'hasError';

  var validate = function validate(value) {
    var val = value.trim();
    if (required && !validator('required', val)) {
      return dispatch({
        type: 'INVALID_ERROR',
        payload: getErrorMessage('required')
      });
    }
    if (type === 'email' && !validator('email', val)) {
      return dispatch({
        type: 'INVALID_ERROR',
        payload: getErrorMessage('email')
      });
    }

    if (type === 'url' && !validator('url', val)) {
      return dispatch({
        type: 'INVALID_ERROR',
        payload: getErrorMessage('url')
      });
    }

    if (type === 'number' && min !== undefined && !validator('min', val, min)) {
      return dispatch({
        type: 'INVALID_ERROR',
        payload: getErrorMessage('min', min)
      });
    }

    if (type === 'number' && max !== undefined && !validator('max', val, max)) {
      return dispatch({
        type: 'INVALID_ERROR',
        payload: getErrorMessage('max', max)
      });
    }

    return dispatch({ type: 'VALID' });
  };

  var onChangeHandler = function onChangeHandler(e) {
    validate(e.target.value);
    dispatch({ type: 'CHANGE', payload: { value: e.target.value } });
    onChange(e);
  };
  var onFocusHandler = function onFocusHandler() {
    return dispatch({ type: 'TOUCHED' });
  };
  var onBlurHandler = function onBlurHandler(e) {
    return validate(e.target.value);
  };

  return React__default.createElement(
    'div',
    { className: 'TextInput ' + hasErrorClass },
    React__default.createElement(
      'label',
      { htmlFor: id },
      label,
      ' ',
      required ? React__default.createElement(
        'span',
        null,
        '*'
      ) : null
    ),
    React__default.createElement('input', {
      id: id,
      name: name,
      type: type,
      value: state.value,
      required: required,
      placeholder: placeholder,
      min: min,
      max: max,
      onFocus: onFocusHandler,
      onBlur: onBlurHandler,
      onChange: onChangeHandler,
      'aria-errormessage': 'error_' + id,
      'aria-required': required,
      'aria-invalid': !state.valid
    }),
    React__default.createElement(
      'small',
      { id: 'error_' + id },
      state.error ? state.error : '\xA0'
    ),
    props.children
  );
}

function useAnimation(ref, animationName, callback) {
  var _useState = React.useState(false),
      _useState2 = slicedToArray(_useState, 2),
      done = _useState2[0],
      setDone = _useState2[1];

  var _useState3 = React.useState(animationName),
      _useState4 = slicedToArray(_useState3, 2),
      animation = _useState4[0],
      setAnimation = _useState4[1];

  React.useEffect(function () {
    if (ref.current && !done) {
      ref.current.classList.add('animated', animation);
      var handleAnimationEnd = function handleAnimationEnd() {
        ref.current.classList.remove('animated', animation);
        ref.current.removeEventListener('animationend', handleAnimationEnd);

        if (typeof callback === 'function') callback(ref);
        setDone(true);
      };
      ref.current.addEventListener('animationend', handleAnimationEnd);
      return function () {
        if (ref.current) ref.current.removeEventListener('animationend', handleAnimationEnd);
      };
    }
  }, [ref.current, done]);

  var reset = function reset() {
    var overrideAnimation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    setDone(false);
    if (overrideAnimation) setAnimation(overrideAnimation);
  };
  return [done, reset];
}

var hooks = {
  useAnimation: useAnimation
};

exports.hooks = hooks;
exports.scss = variables;
exports.Loader = Loader;
exports.Badge = Badge;
exports.Button = Button;
exports.Notification = Notification;
exports.TextInput = TextInput;
//# sourceMappingURL=index.js.map
