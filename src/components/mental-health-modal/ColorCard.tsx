// components/mental-health-modal/ColorCard.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface ColorCardProps {
  color: 'pink' | 'yellow' | 'blue';
  title: string;
  options?: string[];
  selectedOption?: string | null;
  onSelect: (option: string) => void;
  showSubOptions?: boolean;
  inputType?: 'text' | 'options';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const colorConfig = {
  pink: { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-800' },
  yellow: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-800' },
  blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800' },
};

export const ColorCard: React.FC<ColorCardProps> = ({
  color,
  title,
  options,
  selectedOption,
  onSelect,
  showSubOptions = false,
  inputType = 'options',
  placeholder,
  value,
  onChange,
}) => {
  const config = colorConfig[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`p-6 rounded-lg border-2 ${config.bg} ${config.border} ${config.text} mb-4`}
    >
      <h3 className="font-semibold mb-4 text-lg">{title}</h3>
      
      {inputType === 'text' ? (
        <input
          type="text"
          value={value || ''}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
      ) : (
        <div className="space-y-2">
          {options?.map((option) => (
            <button
              key={option}
              onClick={() => onSelect(option)}
              className={`w-full p-3 text-left rounded-md transition-colors ${
                selectedOption === option 
                  ? 'bg-white bg-opacity-50 font-medium' 
                  : 'hover:bg-white hover:bg-opacity-30'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      <AnimatePresence>
        {showSubOptions && selectedOption && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-4 border-t border-white border-opacity-30"
          >
            {/* Sub-options would be rendered here based on the selected option */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};