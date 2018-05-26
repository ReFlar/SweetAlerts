import app from 'flarum/app';
import OverrideDefaultFunctions from 'reflar/sweetalerts/OverrideDefaultFunctions'

app.initializers.add('reflar-sweetalerts', () => {
  OverrideDefaultFunctions();
});
