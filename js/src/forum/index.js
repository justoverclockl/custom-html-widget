import app from 'flarum/forum/app';
import registerWidget from '../common/registerWidget';

app.initializers.add('justoverclock/custom-html-widget', () => {
  registerWidget(app);
});
