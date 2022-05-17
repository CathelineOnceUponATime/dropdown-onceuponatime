"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _tools = require("./tools");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Sass/main.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @param {String} label name of label
 * @param {String} name id of select HTML element
 * @param {Object} obj object contain fields
 * @param {string} field1 field of dropdown
 * @param {string} field2 field of dropdown optionnal
 * @component
 */
function Dropdown(_ref) {
  let {
    label,
    name,
    obj,
    field1,
    field2
  } = _ref;
  let tab;
  const multidim = !(field2 === (null, undefined));

  if (multidim) {
    tab = (0, _tools.objectToTab)(obj, field1, field2);
  } else {
    tab = (0, _tools.objectToTab)(obj, field1);
  }

  const [selected, setSelected] = (0, _react.useState)('');

  const handleChange = e => {
    setSelected(e.target.value);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown"
  }, /*#__PURE__*/_react.default.createElement("label", null, " ", label, " "), /*#__PURE__*/_react.default.createElement("select", {
    id: name,
    className: "select-menu",
    value: selected,
    onChange: handleChange
  }, multidim ? tab.map(tab2Val => /*#__PURE__*/_react.default.createElement("option", {
    value: tab2Val[1],
    key: tab2Val[1]
  }, tab2Val[0])) : tab.map(tab1Val => /*#__PURE__*/_react.default.createElement("option", {
    value: tab1Val,
    key: tab1Val
  }, tab1Val))));
}

Dropdown.propTypes = {
  label: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  obj: _propTypes.default.array.isRequired,
  field1: _propTypes.default.string.isRequired,
  field2: _propTypes.default.string
};
var _default = Dropdown;
exports.default = _default;