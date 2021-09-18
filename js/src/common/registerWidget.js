/*
 * This file is part of justoverclock/custom-html-widget.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */
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
