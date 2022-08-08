import { Tab, Tabs } from 'react-bootstrap';
import styles from './styles.module.scss';

export function Navbar() {
  return (
    <nav className={styles.container}>
      <Tabs
        defaultActiveKey="Stats"
        className="tabs"
        style={{
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Tab eventKey="Todos" title="Todos" />
        <Tab eventKey="Inseto" title="Inseto" />
        <Tab eventKey="Sombrio" title="Sombrio" />
        <Tab eventKey="Dragão" title="Dragão" />
        <Tab eventKey="Elétrico" title="Elétrico" />
        <Tab eventKey="Fada" title="Fada" />
        <Tab eventKey="Lutador" title="Lutador" />
        <Tab eventKey="Fogo" title="Fogo" />
        <Tab eventKey="Voador" title="Voador" />
        <Tab eventKey="Fantasma" title="Fantasma" />
        <Tab eventKey="Planta" title="Planta" />
        <Tab eventKey="Terrestre" title="Terrestre" />
        <Tab eventKey="Gelo" title="Gelo" />
        <Tab eventKey="Normal" title="Normal" />
        <Tab eventKey="Psíquico" title="Psíquico" />
        <Tab eventKey="Pedra" title="Pedra" />
        <Tab eventKey="Aço" title="Aço" />
        <Tab eventKey="Água" title="Água" />
      </Tabs>
    </nav>
  );
}
