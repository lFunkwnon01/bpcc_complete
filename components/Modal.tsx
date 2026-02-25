import React, { useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl';
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, maxWidth = '4xl' }) => {
    // Close on ESC key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const maxWidthClasses = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '4xl': 'max-w-4xl',
        '6xl': 'max-w-6xl',
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div
                className={`relative bg-white rounded-2xl shadow-2xl ${maxWidthClasses[maxWidth]} w-full max-h-[90vh] overflow-hidden animate-modal-slide-up`}
            >
                {/* Header */}
                {title && (
                    <div className="sticky top-0 bg-white border-b border-gray-100 px-8 py-6 flex items-center justify-between z-10">
                        <h2 className="text-2xl font-serif font-bold text-primary italic">{title}</h2>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
                            aria-label="Close modal"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                )}

                {/* Close button (when no title) */}
                {!title && (
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-lg transition-all text-gray-400 hover:text-gray-600"
                        aria-label="Close modal"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}

                {/* Scrollable Content */}
                <div className="overflow-y-auto max-h-[calc(90vh-100px)] p-8">
                    {children}
                </div>
            </div>

            <style>{`
        @keyframes modal-slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-modal-slide-up {
          animation: modal-slide-up 0.3s ease-out;
        }
      `}</style>
        </div>
    );
};

export default Modal;
