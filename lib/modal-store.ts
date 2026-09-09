import { atom } from "nanostores";

export interface ModalData {
  title?: string;
  subtitle?: string;
  plotId?: string;
  source?: string;
  intent?: string;
}

export interface ModalState {
  isOpen: boolean;
  modalData: ModalData;
}

export const $modalState = atom<ModalState>({
  isOpen: false,
  modalData: {},
});

export const $isQuickSearchOpen = atom<boolean>(false);
export const $quickSearchQuery = atom<string>("");

export function openModal(data: ModalData = {}) {
  $modalState.set({
    isOpen: true,
    modalData: data,
  });
}

export function closeModal() {
  $modalState.set({
    isOpen: false,
    modalData: {},
  });
}

export function openQuickSearch(initialQuery = "") {
  $quickSearchQuery.set(initialQuery);
  $isQuickSearchOpen.set(true);
}

export function closeQuickSearch() {
  $isQuickSearchOpen.set(false);
}
