import { Subject } from "rxjs";

const subject = new Subject();
export const messageService = {
  sendMessage: (message) => subject.next({ text: message }),
  clearMessages: () => subject.next(),
  getMessage: () => subject.asObservable(),
};

const modalSubject=new Subject();

export const modalOpenService={
  loadModal: (type) => modalSubject.next({ text: type }),
  getLoadModal: () => modalSubject.asObservable(),
}