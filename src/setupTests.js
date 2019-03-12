import chai from 'chai'
import dirtyChai from 'dirty-chai'
import createChaiEnzyme from 'chai-enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

chai.use(dirtyChai).use(createChaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });