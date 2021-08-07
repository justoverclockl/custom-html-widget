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
import registerWidget from '../common/registerWidget';

app.initializers.add('justoverclock/custom-html-widget', () => {
    registerWidget(app);
});
