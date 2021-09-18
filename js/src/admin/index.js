/*
 * This file is part of justoverclock/custom-html-widget
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
    app.extensionData
      .for('justoverclock-custom-html-widget')
      .registerSetting(function () {
        const warningMessage = app.translator.trans('justoverclock-custom-html-widget.admin.warningmessage');
        const warnintTitle = app.translator.trans('justoverclock-custom-html-widget.admin.warningtext');
        // anteprima in tempo reale
        $("textarea").keyup(function() {
          const srcdoccontent = $("#htmltext").val();
          $("#liveoutp").attr("srcdoc", srcdoccontent);
        });
        //fine anteprima in tempo reale
        return (
            <div className="Form-group settingscustomhtml">
                <label>{warnintTitle}</label>
                <aside class="customhtmlwarning">{warningMessage}</aside>
              <div class="textandprw">
                <textarea id="htmltext" className="FormControl customhtmlbox" bidi={this.setting('justoverclock-custom-html-widget.customCode')}/>
                <iframe class="liveoutp" id="liveoutp"></iframe>
              </div>
              </div>
        );
    });
});
