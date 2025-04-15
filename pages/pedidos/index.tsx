import React, { useState, useContext, useEffect } from "react";
import Head from "next/head";
import { AuthContext } from "../../contexts/AuthContext";
import { FaMotorcycle, FaEye, FaEyeSlash, FaPlus } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setupAPIClient } from "../../services/api"
import Modal from "react-modal";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
type Pedido = {
  id: string;
  descricao: string;
  status: string;
  Interacao: Interacao[];
  tipo: string;
  usuarioId: string;
  created_at: string;
  usuario: {
    proces_number: string;
    tipo_pagamento: string;
  };
};

type Interacao = {
  id: string;
  conteudo: string;
  autorId: string;
  servicoId: string;
  criado_em: string;
  tipo: string;
};

export default function Dashboard() {
  const [orders, setOrders] = useState<Pedido[]>([]);
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [description, setDescription] = useState('');
  const { user } = useContext(AuthContext);
  const [newInteractionContent, setNewInteractionContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const apiClient = setupAPIClient();

  useEffect(() => {
    if (user && user.role) {
     const fetchOrders =  async ()=> {
        setIsLoading(true);
        try {
          const url = user.role === "ADMIN" ? "/pedidos" : `/pedido_user/${user.id}`;
          const response = await apiClient.get(url, {
            headers: { Authorization: `Bearer ${user.token}` },
          });
          const filteredOrders = response.data.filter((order: Pedido) => order.status === "PENDENTE");
          setOrders(filteredOrders);
        } catch (error) {
          console.error("Erro ao buscar pedidos:", error);
          toast.error("Erro ao carregar pedidos");
        } finally {
          setIsLoading(false);
        }
      }

      fetchOrders();
    }
  }, [user]);

  function toggleExpand(orderId: string) {
    setExpandedOrderId(prev => (prev === orderId ? null : orderId));
  }

  async function handleAddInteraction(orderId: string, usuarioId: string, message: string) {
    if (!newInteractionContent) {
      toast.warning('Por favor, insira o conteúdo da interação.');
      return;
    }

    try {
      const response = await apiClient.post('/interacoes', {
        conteudo: newInteractionContent,
        autorId: user.id,
        servicoId: orderId,
        tipo: user.role,
      }, {
        headers: { Authorization: `Bearer ${user.token}` },
      });

      if (response.status === 201) {
        const tipoInteracao = response.data.interacao.tipo;
        const destinatarioId = tipoInteracao === "ADMIN" ? usuarioId : "a38791cb-87ba-4644-823e-23bcd0919a89";
        
       
        
        setNewInteractionContent("");
        setOrders(orders.map(order => 
          order.id === orderId ? { ...order, Interacao: [...order.Interacao, response.data] } : order
        ));
        toast.success("Interação adicionada com sucesso!");
      } else {
        toast.error('Erro ao adicionar. Tente novamente ou contacte o suporte.');
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      toast.error('Ocorreu um erro inesperado. Tente novamente.');
    }
  }

  async function confirmAndCloseOrder(orderId: string) {
    if (window.confirm("Tem certeza de que deseja fechar este pedido?")) {
      await closeOrder(orderId);
    }
  }

  async function closeOrder(orderId: string) {
    try {
      const response = await apiClient.put('/pedido', 
        {
          id: orderId,
          status: 'CONCLUIDO',
        },
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
      
      if (response.status === 200 || response.status === 201) {
        toast.success('Pedido fechado com sucesso!');
        setOrders(orders.filter(order => order.id !== orderId));
      } else {
        toast.error('Erro ao fechar pedido. Tente novamente.');
      }
    } catch (error) {
      console.error("Erro ao fechar o pedido:", error);
      toast.error('Ocorreu um erro inesperado. Tente novamente.');
    }
  }

  function handleAddOrder() {
    setShowForm(true);
  }

  async function sendRequest() {
    if (!selectedService || !description) {
      toast.warning('Por favor, selecione um serviço e insira uma descrição.');
      return;
    }

    try {
      const response = await apiClient.post('/pedido', {
        tipo: selectedService,
        descricao: description,
        usuarioId: user.id,
        status: 'PENDENTE',
      }, {
        headers: { Authorization: `Bearer ${user.token}` },
      });

      if (response.status === 201) {
        toast.success('Pedido enviado com sucesso!');
        setSelectedService('');
        setDescription('');
        setShowForm(false);
        setOrders([...orders, response.data]);
      } else {
        toast.error('Erro ao fazer Pedido, tente de novo!');
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      toast.error('Erro ao fazer Pedido, tente de novo!');
    }
  }

  return (
    <>
      <Head>
        <title>Dashboard - RDB Transportes</title>
      </Head>
      <Sidebar>
        <Header />
        <div className="dashboard-container">
        <ToastContainer position="top-right" autoClose={5000} />
        
        {isLoading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Carregando...</p>
          </div>
        ) : orders.length === 0 ? (
          <div className="no-orders-container">
            {user.role === 'ADMIN' ? (
              <>
                <h2>Não Há Pedidos Pendentes</h2>
                <p>Verifique se todos Pedidos foram concluidos com sucesso!</p>
              </>
            ) : (
              <>
                <h2>Não Há Pedidos Pendentes</h2>
                <p>Em que podemos ajudar?</p>
              </>
            )}
          </div>
        ) : (
          <div className="orders-list">
            {orders.map((item) => (
              <div key={item.id} className="order-container">
                {item.tipo && (
                  <div className="service-type">
                    <FaMotorcycle className="service-icon" /> 
                    {item.tipo === "SERVICO_30_DIAS" ? "SERVIÇO 30 +" : item.tipo}
                  </div>
                )}
            <div className="text-gray-400 text-sm mb-2">Nº: {item.usuario.proces_number} {item.usuario.tipo_pagamento}</div>

              <div className="text-gray-400 text-sm border-[#3fffa3] border-b-[1px] mb-2">
              {new Date(item.created_at).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
                <div className="order-description">{item.descricao}</div>
                <button 
                  onClick={() => toggleExpand(item.id)} 
                  className="expand-button"
                >
                  {expandedOrderId === item.id ? <FaEyeSlash /> : <FaEye />}
                </button>
                
                {expandedOrderId === item.id && (
                  <div className="order-details">
                    {item.Interacao.map((interacao) => (
                      <div
                        key={interacao.id}
                        className={`interaction-container ${
                          interacao.tipo === "ADMIN" ? "admin-interaction" : "client-interaction"
                        }`}
                      >
                        <div className="interaction-text">{interacao.conteudo}</div>
                        <div className="interaction-date">
                          {new Date(interacao.criado_em).toLocaleString()}
                        </div>
                      </div>
                    ))}
                    
                    {item.status === "PENDENTE" &&
                      ((user.role === "ADMIN") || 
                        (user.role !== "ADMIN" && item.Interacao.length > 0)) && (
                      <div className="new-interaction-container">
                        <textarea
                          className="new-interaction-input"
                          placeholder="Escreva uma nova interação"
                          value={newInteractionContent}
                          onChange={(e) => setNewInteractionContent(e.target.value)}
                        />
                        <button
                          className="send-button"
                          onClick={() => handleAddInteraction(item.id, item.usuarioId, newInteractionContent)}
                        >
                          Enviar
                        </button>
                      </div>
                    )}

                    {user.role === "ADMIN" && (
                      <button
                        className="close-order-button"
                        onClick={() => confirmAndCloseOrder(item.id)}
                      >
                        Terminar Serviço
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {user.role !== 'ADMIN' && (
          <button className="add-button" onClick={handleAddOrder}>
            <FaPlus /> Fazer pedido
          </button>
        )}

        <Modal
          isOpen={showForm}
          onRequestClose={() => setShowForm(false)}
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <div className="form-container">
            <div className="service-options">
              <button
                className={`option ${selectedService === 'SERVICO_24h' ? 'selected' : ''}`}
                onClick={() => setSelectedService('SERVICO_24h')}
              >
                Serviço 24H
              </button>
              
              <button
                className={`option ${selectedService === 'SERVICO_30_DIAS' ? 'selected' : ''}`}
                onClick={() => setSelectedService('SERVICO_30_DIAS')}
              >
                Serviço 30+
              </button>
              
              <button
                className={`option ${selectedService === 'SERVICO_ENTREGA' ? 'selected' : ''}`}
                onClick={() => setSelectedService('SERVICO_ENTREGA')}
              >
                Serviço de Entregas
              </button>
              
              <button
                className={`option ${selectedService === 'SERVICO_PESSOAL' ? 'selected' : ''}`}
                onClick={() => setSelectedService('SERVICO_PESSOAL')}
              >
                Serviço de Motorista Pessoal
              </button>
            </div>
            
            <textarea
              className="description-input"
              placeholder="Descrição do serviço"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            
            <button className="submit-button" onClick={sendRequest}>
              Enviar Pedido
            </button>
          </div>
        </Modal>
      </div>
      </Sidebar>

      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        body {
          background-color: #fff;
          color: white;
          font-family: Arial, sans-serif;
        }
        
        .dashboard-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          min-height: 100vh;
        }
        
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 50vh;
        }
        
        .spinner {
          width: 50px;
          height: 50px;
          border: 5px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: #3fffa3;
          animation: spin 1s ease-in-out infinite;
          margin-bottom: 20px;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .no-orders-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 50vh;
          text-align: center;
        }
        
        .no-orders-container h2 {
          color: #3fffa3;
          margin-bottom: 10px;
        }
        
        .orders-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 80px;
        }
        
        .order-container {
          background-color: #2e2e3e;
          border-radius: 8px;
          padding: 15px;
          position: relative;
        }
        
        .service-type {
          color: #3fffa3;
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .service-icon {
          font-size: 20px;
        }
        
        .order-description {
          margin-bottom: 10px;
          padding-left: 28px;
        }
        
        .expand-button {
          position: absolute;
          top: 15px;
          right: 15px;
          background: none;
          border: none;
          color: #3fffa3;
          font-size: 20px;
          cursor: pointer;
        }
        
        .order-details {
          margin-top: 15px;
          border-top: 1px solid #444;
          padding-top: 15px;
        }
        
        .interaction-container {
          padding: 10px;
          border-radius: 6px;
          margin-bottom: 10px;
        }
        
        .admin-interaction {
          background-color: #ffcccb;
          color: #1d1d2e;
        }
        
        .client-interaction {
          background-color: #cce5ff;
          color: #1d1d2e;
        }
        
        .interaction-text {
          margin-bottom: 5px;
        }
        
        .interaction-date {
          font-size: 12px;
          color: #666;
          text-align: right;
        }
        
        .new-interaction-container {
          display: flex;
          gap: 10px;
          margin-top: 15px;
        }
        
        .new-interaction-input {
          flex: 1;
          background-color: #101026;
          color: white;
          border: none;
          border-radius: 6px;
          padding: 10px;
          min-height: 80px;
          resize: vertical;
        }
        
        .send-button {
          background-color: #3fffa3;
          color: #1d1d2e;
          border: none;
          border-radius: 6px;
          padding: 0 15px;
          font-weight: bold;
          cursor: pointer;
          align-self: flex-start;
        }
        
        .close-order-button {
          background-color: #ff5c5c;
          color: white;
          border: none;
          border-radius: 6px;
          padding: 10px;
          width: 100%;
          font-weight: bold;
          cursor: pointer;
          margin-top: 15px;
        }
        
        .add-button {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #3fffa3;
          color: #1d1d2e;
          border: none;
          border-radius: 50px;
          padding: 15px 25px;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        
        .modal-content {
          background-color: #2e2e3e;
          border-radius: 8px;
          width: 90%;
          max-width: 500px;
          padding: 20px;
          position: relative;
          outline: none;
        }
        
        .form-container {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .service-options {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        
        .option {
          background-color: #1d1d2e;
          color: white;
          border: none;
          border-radius: 6px;
          padding: 10px;
          cursor: pointer;
          text-align: center;
        }
        
        .option.selected {
          background-color: #3fffa3;
          color: #1d1d2e;
          font-weight: bold;
        }
        
        .description-input {
          background-color: #101026;
          color: white;
          border: none;
          border-radius: 6px;
          padding: 15px;
          min-height: 120px;
          resize: vertical;
        }
        
        .submit-button {
          background-color: #3fffa3;
          color: #1d1d2e;
          border: none;
          border-radius: 6px;
          padding: 15px;
          font-weight: bold;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}