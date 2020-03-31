import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import Handsontable from 'handsontable';
import objectAssign from 'object-assign';

const CLASS_NAME = 'handsontable-notes';

export default class HandsontableNotes extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * Default value.
     */
    value: PropTypes.object,
    /**
     * The change handler.
     */
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: null,
    onChange: noop
  };

  constructor(inProps) {
    super(inProps);
    this.data = [
      ['', 'Tesla', 'Mercedes', 'Toyota', 'Volvo'],
      ['2019', 10, 11, 12, 13],
      ['2020', 20, 11, 14, 13],
      ['2021', 30, 15, 12, 13]
    ];
  }

  componentDidMount() {
    window.Handsontable = Handsontable;;
    this.hot = window.hot = new Handsontable(this.container, {
      licenseKey: 'non-commercial-and-evaluation',
      title:"Hot title",
      data: Handsontable.helper.createSpreadsheetData(15, 20),
      width: '100%',
      height: 220,
      colHeaders: true,
      manualColumnResize: true,
      manualRowResize: true,
      stretchH: 'all',
      rowHeaders: true,
      fixedRowsTop: 2,
      fixedColumnsLeft: 2,
      customBorders: [
        {
          range: {
            from: {
              row: 1,
              col: 1
            },
            to: {
              row: 3,
              col: 4
            }
          },
          left: {},
          right: {},
          top: {},
          bottom: {}
        }
      ],
    });
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div
        ref={(container) => (this.container = container)}
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}></div>
    );
  }
}
