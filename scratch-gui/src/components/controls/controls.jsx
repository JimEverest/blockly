import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { defineMessages, injectIntl, intlShape } from 'react-intl';

import GreenFlag from '../green-flag/green-flag.jsx';
import StopAll from '../stop-all/stop-all.jsx';
import ClearAlarm from '../clear-alarm/index.jsx';
import TurboMode from '../turbo-mode/turbo-mode.jsx';

import styles from './controls.css';

const messages = defineMessages({
  goTitle: {
    id: 'gui.controls.go',
    defaultMessage: 'Go',
    description: 'Green flag button title'
  },
  stopTitle: {
    id: 'gui.controls.stop',
    defaultMessage: 'Stop',
    description: 'Stop button title'
  },
  clearAlarmTitle: {
    id: 'gui.controls.clearAlarm',
    defaultMessage: 'Clear alarm',
    description: 'Clear alarm'
  }
});

const Controls = function (props) {
  const {
    active,
    className,
    intl,
    onGreenFlagClick,
    onStopAllClick,
    onClearAlarm,
    turbo,
    ...componentProps
  } = props;
  return (
    <div
      className={classNames(styles.controlsContainer, className)}
      {...componentProps}
    >
      <GreenFlag
        active={active}
        title={intl.formatMessage(messages.goTitle)}
        onClick={onGreenFlagClick}
      />
      <StopAll
        active={active}
        title={intl.formatMessage(messages.stopTitle)}
        onClick={onStopAllClick}
      />
      <ClearAlarm
        title={intl.formatMessage(messages.clearAlarmTitle)}
        onClick={onClearAlarm}
      />
      {turbo ? (
        <TurboMode />
      ) : null}
    </div>
  );
};

Controls.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  intl: intlShape.isRequired,
  onGreenFlagClick: PropTypes.func.isRequired,
  onStopAllClick: PropTypes.func.isRequired,
  onClearAlarm: PropTypes.func.isRequired,
  turbo: PropTypes.bool
};

Controls.defaultProps = {
  active: false,
  turbo: false
};

export default injectIntl(Controls);
