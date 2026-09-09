"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

import { $modalState, openModal as openStoreModal, closeModal as closeStoreModal } from "./modal-store";
import { useStore } from "@nanostores/react";

interface ModalContextType {
  isOpen: boolean;
  modalData: {
    title?: string;
    subtitle?: string;
    plotId?: string;
    source?: string;
  };
  openModal: (data?: { title?: string; subtitle?: string; plotId?: string; source?: string }) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<{
    title?: string;
    subtitle?: string;
    plotId?: string;
    source?: string;
  }>({});

  const openModal = (data = {}) => {
    setModalData(data);
    setIsOpen(true);
    openStoreModal(data);
  };

  const closeModal = () => {
    setIsOpen(false);
    closeStoreModal();
  };

  return (
    <ModalContext.Provider value={{ isOpen, modalData, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  const storeState = useStore($modalState);

  if (context !== undefined) {
    return context;
  }

  // Fallback to Nano Store for standalone Astro React islands
  return {
    isOpen: storeState.isOpen,
    modalData: storeState.modalData,
    openModal: openStoreModal,
    closeModal: closeStoreModal,
  };
}
