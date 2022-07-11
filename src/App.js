import styles from './App.module.scss';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import LinkList from './components/LinkList/LinkList';
import MyLink from './components/MyLink/MyLink';

function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.content}>
        <div className={styles.container}>
          <Input />
          <MyLink />
        </div>
        <LinkList />
      </div>
    </div>
  );
}

export default App;
