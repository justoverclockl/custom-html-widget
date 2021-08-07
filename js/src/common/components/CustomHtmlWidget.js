/*
 * This file is part of justoverclock/last-tweet.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import Widget from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';

export default class LastTweetWidget extends Widget {
  oncreate(vnode) {

  }

  className() {
    return 'custom-html-widget';
  }

  icon() {
    // Widget icon.
    return 'far fa-file-code';
  }

/*  title() {
    // Widget title.
    return app.translator.trans('justoverclock-custom-html-widget.forum.widget-title');
  }*/

  content() {
    const customCode = app.forum.attribute('justoverclock-custom-html-widget.customCode');
    const rawCode = document.getElementById('wghtml').innerHTML(customCode);
    return (
      <div class="htmlwidget" id="wghtml">{rawCode}</div>
    );
  }
}
