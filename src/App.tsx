import { useState } from "react";
import { DashBoard } from "./componentes/Dashboard";
import { Header } from "./componentes/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { NewTransactionModal } from "./componentes/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root');
export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal (){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal= {handleOpenNewTransactionModal}/>
      <DashBoard />
      <NewTransactionModal
        onRequestClose={handleCloseNewTransactionModal}
        isOpen={isNewTransactionModalOpen}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}