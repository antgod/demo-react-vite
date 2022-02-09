import { connect } from '@alife/sail/src/index';
import Render from './render';

const propsFactory = props => {
  // gets(props, {});
  return props;
};

export default connect((Render), propsFactory);
