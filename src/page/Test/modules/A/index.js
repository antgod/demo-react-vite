import { connect } from '@alife/sail';
// import { gets } from '@alife/sail-util';
import Render from './render';

const propsFactory = props => {
  // gets(props, {});
  return props;
};

export default connect((Render), propsFactory);
