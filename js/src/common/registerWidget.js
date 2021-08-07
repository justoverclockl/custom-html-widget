
import Widgets from 'flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets';

import CustomHtmlWidget from './components/CustomHtmlWidget';

export default function (app) {
  new Widgets()
    .add({
      key: 'CustomHtml',
      component: CustomHtmlWidget,
      isDisabled: false,
      isUnique: true,
      placement: 'end',
      position: 1,
    })
    .extend(app, 'justoverclock-custom-html-widget');
}
