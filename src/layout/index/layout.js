import 'index.scss';

import header from '../../component/header/header.ejs';
import nav from '../../component/nav/nav.ejs';
import side from '../../component/side/side.ejs';
import footer from '../../component/footer/footer.ejs';

import layout from './index.ejs';


const component = {
    header: header(),
    "nav": nav(),
    "side": side(),
    "footer": footer()
}

const str = layout(component);
console.log( str );
export default str;
