/*
 * This file is part of justoverclock/last-tweet.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */
import app from 'flarum/forum/app';
import Widget from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';

export default class LastTweetWidget extends Widget {
    oncreate(vnode) {
        document.getElementById('wghtml').innerHTML = app.forum.attribute('justoverclock-custom-html-widget.customCode');
    }

    className() {
        return 'custom-html-widget';
    }

    icon() {
        // Widget icon.
        return 'far fa-file-code';
    }

    content() {
        return <div class="htmlwidget" id="wghtml"></div>;
    }
}
