import { connect } from '@alife/sail';
import Render from './render';

const propsFactory = props => {
  // gets(props, {});
  return props;
};

export default connect((Render), propsFactory);
