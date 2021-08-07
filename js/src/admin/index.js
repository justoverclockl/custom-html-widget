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
      const warningMessage = app.translator.trans('justoverclock-custom-html-widget.admin.warningmessage');
      const warnintTitle = app.translator.trans('justoverclock-custom-html-widget.admin.warningtext');
        return (
            <div className="Form-group settingscustomhtml">
                <label>{warnintTitle}</label>
                <aside class="customhtmlwarning">{warningMessage}</aside>
                <textarea className="FormControl customhtmlbox" bidi={this.setting('justoverclock-custom-html-widget.customCode')}></textarea>
            </div>
        );
    });
});
