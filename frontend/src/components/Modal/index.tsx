import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    children: React.ReactNode;
}

export function Modal({ isOpen, onClose, onConfirm, title, children }: ModalProps) {
    
    if (!isOpen) {
        return null;
    }

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={onClose}
        >
            <div 
                className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md"
                onClick={(e) => e.stopPropagation()} 
            >
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                
                <div className="mb-6">
                    {children}
                </div>

                <div className="flex justify-end gap-4">
                    <button
                        onClick={onClose}
                        className="btn btn-secondary"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={onConfirm}
                        className="btn btn-danger"
                    >
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    );
}
