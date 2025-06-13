import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './layout.module.css';

function Layout({ children }) {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.mainContent}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
