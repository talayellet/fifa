import { Overview } from '@fifa-gui/fifa-app-libs';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

export function App() {
  return (
    <div className={styles['appRoot']}>
      <Overview />
    </div>
  );
}

export default App;
