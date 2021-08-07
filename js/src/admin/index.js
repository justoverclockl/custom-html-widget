/*
 * This file is part of justoverclock/last-tweet.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import registerWidget from '../common/registerWidget';
import app from 'flarum/admin/app';

app.initializers.add('justoverclock/custom-html-widget', () => {
    registerWidget(app);
    app.extensionData.for('justoverclock-custom-html-widget').registerSetting(function () {
        return (
            <div className="Form-group settingscustomhtml">
                <label>Custom Html Code</label>
                <aside class="customhtmlwarning">
                    Injecting unknown HTML creates a potential security risk for your website. Write your own html or choose a secure code from
                    trusted website. Remember also tu use correct width (to fit the widget sidebar).
                </aside>
                <textarea className="FormControl customhtmlbox" bidi={this.setting('justoverclock-custom-html-widget.customCode')}></textarea>
            </div>
        );
    });
});
