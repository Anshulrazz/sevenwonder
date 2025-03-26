import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
}

export function Pagination({ currentPage, totalPages, onPageChange, className = '' }: PaginationProps) {
    const [manualPage, setManualPage] = React.useState(currentPage.toString());

    React.useEffect(() => {
        setManualPage(currentPage.toString());
    }, [currentPage]);

    const handleManualPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setManualPage(value);
    };

    const handleManualPageSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const page = parseInt(manualPage);
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <div className={`flex items-center justify-center gap-2 ${className}`}>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 text-gray-600 bg-white border rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous page"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            <form onSubmit={handleManualPageSubmit} className="flex items-center gap-2">
                <input
                    type="number"
                    min="1"
                    max={totalPages}
                    value={manualPage}
                    onChange={handleManualPageChange}
                    className="w-16 p-2 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label="Page number"
                />
                <span className="text-gray-600">of {totalPages}</span>
            </form>

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 text-gray-600 bg-white border rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next page"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
}
