webpackHotUpdate(6,{

/***/ 1415:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(542);

var _Layout = __webpack_require__(1393);

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = __webpack_require__(1413);

var _campaign2 = _interopRequireDefault(_campaign);

var _web = __webpack_require__(804);

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = __webpack_require__(1417);

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = __webpack_require__(796);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Concierge\\Downloads\\prod\\kickstart\\pages\\campaigns\\show.js?entry';


var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    (0, _classCallCheck3.default)(this, CampaignShow);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          balance = _props.balance,
          manager = _props.manager,
          minimumContribution = _props.minimumContribution,
          requestsCount = _props.requestsCount,
          approversCount = _props.approversCount;

      var items = [{
        header: manager,
        meta: 'Address of Manager',
        description: 'The manager created this campaign and create request to withdraw money',
        style: { overflowWrap: 'break-word' }
      }, {
        header: minimumContribution,
        meta: 'Minimum Contribution(wei)',
        description: 'You must contribute at least this much wei to become an approver'
      }, {
        header: requestsCount,
        meta: 'Number of Requests',
        description: 'A request tries to withdraw money from the contract. Request must be approved by approver'
      }, {
        header: approversCount,
        meta: ' Number of Approvers',
        description: 'Number of people who have already donated to the campaign'
      }, {
        header: _web2.default.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance(ether)',
        description: 'The balance is how much money this campaign has left to spend.'
      }];
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, ' Campaign Show'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, ' View Requests ')))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary, summary2, requestsCount, approversCount, manager;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                _context.next = 6;
                return campaign.methods.minimumContribution().call();

              case 6:
                summary2 = _context.sent;
                _context.next = 9;
                return campaign.methods.getRequestsCount().call();

              case 9:
                requestsCount = _context.sent;
                _context.next = 12;
                return campaign.methods.approversCount().call();

              case 12:
                approversCount = _context.sent;
                _context.next = 15;
                return campaign.methods.manager().call();

              case 15:
                manager = _context.sent;
                return _context.abrupt('return', {
                  address: props.query.address,
                  minimumContribution: summary2.toString(),
                  balance: summary[1].toString(),
                  requestsCount: requestsCount.toString(),
                  approversCount: approversCount.toString(),
                  manager: summary[4]
                });

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIkxheW91dCIsIkNhbXBhaWduIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiTGluayIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsImNhbXBhaWduIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5Iiwic3VtbWFyeTIiLCJnZXRSZXF1ZXN0c0NvdW50IiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUSxBQUFNLEFBQU07O0FBQ3BCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBUyxBQUFXOzs7Ozs7O0ksQUFFZDs7Ozs7Ozs7Ozs7a0NBb0JPO21CQU9QLEtBUE8sQUFPRjtVQVBFLEFBRVQsaUJBRlMsQUFFVDtVQUZTLEFBR1QsaUJBSFMsQUFHVDtVQUhTLEFBSVQsNkJBSlMsQUFJVDtVQUpTLEFBS1QsdUJBTFMsQUFLVDtVQUxTLEFBTVQsd0JBTlMsQUFNVCxBQUVGOztVQUFNO2dCQUNKLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFIRixBQUdlLEFBQ2I7ZUFBTSxFQUFDLGNBTEcsQUFDWixBQUlRLEFBQWU7QUFKdkIsQUFDRSxPQUZVO2dCQU9aLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFWVSxBQU9aLEFBR2U7QUFIZixBQUNFO2dCQUlGLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFmVSxBQVlaLEFBR2U7QUFIZixBQUNFO2dCQUlGLEFBQ1UsQUFDUjtjQUZGLEFBRU8sQUFDTDtxQkFwQlUsQUFpQlosQUFHZTtBQUhmLEFBQ0U7Z0JBS08sY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFNBRDVCLEFBQ1MsQUFBNEIsQUFDbkM7Y0FGRixBQUVPLEFBQ0w7cUJBekJKLEFBQWMsQUFzQlosQUFHZSxBQUdqQjtBQU5FLEFBQ0U7MkNBS0csQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFJQyxBQUNOOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNFLG1DQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDQztBQUREO2NBREYsQUFDRSxBQUNDLEFBQUssQUFHTixnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQywwQ0FBZ0IsU0FBUyxLQUFBLEFBQUssTUFBL0IsQUFBcUM7b0JBQXJDO3NCQVBOLEFBQ0UsQUFLRSxBQUNFLEFBR0o7QUFISTs0QkFHSCxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0k7QUFESjtBQUFBLHlCQUNLLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLFNBQVI7b0JBQUE7c0JBQUE7QUFBQTtTQWpCbEIsQUFDRSxBQUVJLEFBVUUsQUFDSSxBQUNFLEFBQ0UsQUFDRSxBQVNuQjs7Ozs7MkdBdEY0QixBOzs7OzttQkFFckI7QSwyQkFBVyx3QkFBUyxNQUFBLEFBQU0sTUFBZixBLEFBQXFCOzt1QkFDaEIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQSxBQUE4Qjs7bUJBQTlDO0E7O3VCQUNpQixTQUFBLEFBQVMsUUFBVCxBQUFpQixzQixBQUFqQixBQUF1Qzs7bUJBQXhEO0E7O3VCQUNzQixTQUFBLEFBQVMsUUFBVCxBQUFpQixtQkFBakIsQUFBb0MsQTs7bUJBQTFEO0E7O3VCQUN1QixTQUFBLEFBQVMsUUFBVCxBQUFpQixpQkFBakIsQUFBa0MsQTs7bUJBQXpEO0E7O3VCQUNnQixTQUFBLEFBQVMsUUFBVCxBQUFpQixVQUFqQixBQUEyQixBOzttQkFBM0M7QTs7MkJBR0ssTUFBQSxBQUFNLE1BRFgsQUFDaUIsQUFDckI7dUNBQXFCLFNBRmpCLEFBRWlCLEFBQVMsQUFDOUI7MkJBQVMsUUFBQSxBQUFRLEdBSGIsQUFHSyxBQUFXLEFBQ3BCO2lDQUFlLGNBSlgsQUFJVyxBQUFjLEFBQzdCO2tDQUFlLGVBTFgsQUFLVyxBQUFlLEFBQzlCOzJCQUFTLFFBTkwsQUFNSyxBQUFRLEE7QUFOYixBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWHFCLEEsQUEwRjNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvQ29uY2llcmdlL0Rvd25sb2Fkcy9wcm9kL2tpY2tzdGFydCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Concierge\\Downloads\\prod\\kickstart\\pages\\campaigns\\show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Concierge\\Downloads\\prod\\kickstart\\pages\\campaigns\\show.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns\\show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5iNmI2YTQ1NmQ4MGI4OWVkNTIzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/M2QwYjdlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0NhcmQsIEdyaWQsIEJ1dHRvbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMyc7XHJcbmltcG9ydCBDb250cmlidXRlRm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtJztcclxuaW1wb3J0IHsgTGlua30gZnJvbSAnLi4vLi4vcm91dGVzJztcclxuXHJcbmNsYXNzIENhbXBhaWduU2hvdyBleHRlbmRzIENvbXBvbmVudHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKXtcclxuXHJcbiAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xyXG4gICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKTtcclxuICAgIGNvbnN0IHN1bW1hcnkyID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5taW5pbXVtQ29udHJpYnV0aW9uKCkuY2FsbCgpO1xyXG4gICAgY29uc3QgcmVxdWVzdHNDb3VudCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0UmVxdWVzdHNDb3VudCgpLmNhbGwoKTtcclxuICAgIGNvbnN0IGFwcHJvdmVyc0NvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5hcHByb3ZlcnNDb3VudCgpLmNhbGwoKTtcclxuICAgIGNvbnN0IG1hbmFnZXIgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLm1hbmFnZXIoKS5jYWxsKCk7XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICBhZGRyZXNzOiBwcm9wcy5xdWVyeS5hZGRyZXNzLFxyXG4gICAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiBzdW1tYXJ5Mi50b1N0cmluZygpLFxyXG4gICAgICBiYWxhbmNlOiBzdW1tYXJ5WzFdLnRvU3RyaW5nKCksXHJcbiAgICAgIHJlcXVlc3RzQ291bnQ6IHJlcXVlc3RzQ291bnQudG9TdHJpbmcoKSxcclxuICAgICAgYXBwcm92ZXJzQ291bnQ6YXBwcm92ZXJzQ291bnQudG9TdHJpbmcoKSxcclxuICAgICAgbWFuYWdlcjogc3VtbWFyeVs0XVxyXG4gICAgfTtcclxuICB9XHJcblxyXG5yZW5kZXJDYXJkcygpe1xyXG4gIGNvbnN0e1xyXG4gICAgYmFsYW5jZSxcclxuICAgIG1hbmFnZXIsXHJcbiAgICBtaW5pbXVtQ29udHJpYnV0aW9uLFxyXG4gICAgcmVxdWVzdHNDb3VudCxcclxuICAgIGFwcHJvdmVyc0NvdW50XHJcbiAgfSA9IHRoaXMucHJvcHM7XHJcbiAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcjogbWFuYWdlcixcclxuICAgICAgbWV0YTogJ0FkZHJlc3Mgb2YgTWFuYWdlcicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIG1hbmFnZXIgY3JlYXRlZCB0aGlzIGNhbXBhaWduIGFuZCBjcmVhdGUgcmVxdWVzdCB0byB3aXRoZHJhdyBtb25leScsXHJcbiAgICAgIHN0eWxlOntvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJ31cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcjogbWluaW11bUNvbnRyaWJ1dGlvbixcclxuICAgICAgbWV0YTogJ01pbmltdW0gQ29udHJpYnV0aW9uKHdlaSknLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ1lvdSBtdXN0IGNvbnRyaWJ1dGUgYXQgbGVhc3QgdGhpcyBtdWNoIHdlaSB0byBiZWNvbWUgYW4gYXBwcm92ZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBoZWFkZXI6IHJlcXVlc3RzQ291bnQsXHJcbiAgICAgIG1ldGE6ICdOdW1iZXIgb2YgUmVxdWVzdHMnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ0EgcmVxdWVzdCB0cmllcyB0byB3aXRoZHJhdyBtb25leSBmcm9tIHRoZSBjb250cmFjdC4gUmVxdWVzdCBtdXN0IGJlIGFwcHJvdmVkIGJ5IGFwcHJvdmVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaGVhZGVyOiBhcHByb3ZlcnNDb3VudCxcclxuICAgICAgbWV0YTonIE51bWJlciBvZiBBcHByb3ZlcnMnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ051bWJlciBvZiBwZW9wbGUgd2hvIGhhdmUgYWxyZWFkeSBkb25hdGVkIHRvIHRoZSBjYW1wYWlnbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcjp3ZWIzLnV0aWxzLmZyb21XZWkoYmFsYW5jZSwgJ2V0aGVyJyksXHJcbiAgICAgIG1ldGE6J0NhbXBhaWduIEJhbGFuY2UoZXRoZXIpJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdUaGUgYmFsYW5jZSBpcyBob3cgbXVjaCBtb25leSB0aGlzIGNhbXBhaWduIGhhcyBsZWZ0IHRvIHNwZW5kLidcclxuICAgIH1cclxuICBdO1xyXG4gIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xyXG59XHJcblxyXG5cclxuICByZW5kZXIoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGgzPiBDYW1wYWlnbiBTaG93PC9oMz5cclxuICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMH0+XHJcbiAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2FyZHMoKX1cclxuXHJcbiAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezZ9PlxyXG4gICAgICAgICAgICAgICAgPENvbnRyaWJ1dGVGb3JtICBhZGRyZXNzPXt0aGlzLnByb3BzLmFkZHJlc3N9Lz5cclxuICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHNgfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeT4gVmlldyBSZXF1ZXN0cyA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICA8L0dyaWQuUm93PlxyXG5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25TaG93O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jYW1wYWlnbnMvc2hvdy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTtBQU9BO0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBT0E7QUFDQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUZBO0FBS0E7QUFFQTtBQUdBO0FBTEE7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7O0FBS0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBSEE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBU0E7Ozs7Ozs7Ozs7QUFwRkE7QUFBQTs7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==