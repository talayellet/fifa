import { Overview } from '@fifa-gui/fifa-app-2-libs';
import styles from './app.module.scss';

export function App() {
  return (
    <div className={styles['appRoot']}>
      <Overview />
    </div>
  );
}

export default App;
