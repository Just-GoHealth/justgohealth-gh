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
  isCampusQuestion?: boolean;
  isReasonQuestion?: boolean;
  isTimeframeQuestion?: boolean;
  isNameQuestion?: boolean;
  isAgeQuestion?: boolean;
  isSexQuestion?: boolean;
  isGradeLevelQuestion?: boolean;
  isDepressionQuestion?: boolean;
  isSuicidalQuestion?: boolean;
  onAdvanceInput?: () => void;
  description?: string;
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
  isCampusQuestion = false,
  isReasonQuestion = false,
  isTimeframeQuestion = false,
  isNameQuestion = false,
  isAgeQuestion = false,
  isSexQuestion = false,
  isGradeLevelQuestion = false,
  isDepressionQuestion = false,
  isSuicidalQuestion = false,
  onAdvanceInput,
  description,
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
      {description && <p className="mb-4 text-sm">{description}</p>} {/* Display description */}
      
      {inputType === 'text' ? (
        isNameQuestion ? (
          <div className="flex items-center border-2 border-green-500 rounded-md p-1">
            <input
              type="text"
              value={value || ''}
              onChange={(e) => onChange?.(e.target.value)}
              placeholder={placeholder}
              className="w-full p-2 focus:outline-none text-black bg-transparent"
            />
            <button 
              onClick={onAdvanceInput}
              className="ml-2 p-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
            >
              &rarr;
            </button>
          </div>
        ) : (
          <input
            type="text"
            value={value || ''}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder={placeholder}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
        )
      ) : (
        <div className={`grid ${isCampusQuestion ? 'grid-cols-2 gap-4' : 'space-y-2'}`}>
          {isReasonQuestion ? (
            <div className="flex flex-wrap gap-4 justify-center">
              <div 
                onClick={() => onSelect('Exam/Quiz')}
                className={`flex flex-col items-center justify-center p-6 rounded-full bg-black text-white w-48 h-48 relative cursor-pointer 
                  ${selectedOption === 'Exam/Quiz' ? 'ring-4 ring-green-500' : 'hover:ring-2 hover:ring-gray-500'}`}
              >
                <span className="text-4xl font-bold">Exam/Quiz</span>
                <div className="flex flex-wrap justify-center gap-2 text-sm opacity-75">
                  {['WASSCE', 'BECE', 'NSMQ', 'GPA/CWA', 'INTERVIEW', 'DEFENSE'].map(subOption => (
                    <span
                      key={subOption} 
                      className={`px-3 py-1 rounded-full border ${selectedOption === subOption ? 'bg-white text-black' : 'border-white text-white'}`}
                    >
                      {subOption}
                    </span>
                  ))}
                </div>
              </div>
              <div 
                onClick={() => onSelect('After A Loss')}
                className={`flex flex-col items-center justify-center p-6 rounded-full bg-black text-white w-48 h-48 relative cursor-pointer 
                  ${selectedOption === 'After A Loss' ? 'ring-4 ring-green-500' : 'hover:ring-2 hover:ring-gray-500'}`}
              >
                <span className="text-4xl font-bold">After A Loss</span>
                <div className="flex flex-wrap justify-center gap-2 text-sm opacity-75">
                  {['BREAKUP', 'FAILURE', 'DEATH', 'STRESS', 'GRIEF', 'REJECTION'].map(subOption => (
                    <span
                      key={subOption} 
                      className={`px-3 py-1 rounded-full border ${selectedOption === subOption ? 'bg-white text-black' : 'border-white text-white'}`}
                    >
                      {subOption}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : isTimeframeQuestion ? (
            <div className="flex flex-wrap gap-4 justify-center">
              {options?.map((option) => {
                const [value, unit] = option.split(' ');
                return (
                  <div
                    key={option}
                    onClick={() => onSelect(option)}
                    className={`flex flex-col items-center justify-center w-36 h-36 rounded-full bg-black text-white cursor-pointer 
                      ${selectedOption === option ? 'ring-4 ring-green-500' : 'hover:ring-2 hover:ring-gray-500'}`}
                  >
                    <span className="text-4xl font-bold">{value}</span>
                    <span className="text-sm opacity-75">{unit}</span>
                  </div>
                );
              })}
            </div>
          ) : isAgeQuestion ? (
            <div className="flex flex-wrap gap-2 justify-center">
              {options?.map((option) => (
                <button
                  key={option}
                  onClick={() => onSelect(option)}
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 text-sm font-medium transition-colors
                    ${selectedOption === option 
                      ? 'bg-green-500 border-green-500 text-white' 
                      : 'border-gray-300 text-black hover:bg-gray-100'}
                  `}
                >
                  {option}
                </button>
              ))}
            </div>
          ) : isSexQuestion ? (
            <div className="flex flex-wrap gap-4 justify-center">
              {options?.map((option) => (
                <button
                  key={option}
                  onClick={() => onSelect(option)}
                  className={`w-40 p-3 text-center rounded-full transition-colors ${option === 'MALE'
                    ? (selectedOption === option ? 'bg-green-500 text-white' : 'bg-black text-white hover:bg-gray-800')
                    : (selectedOption === option ? 'bg-green-500 text-white' : 'bg-green-600 text-white hover:bg-green-700')
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          ) : isGradeLevelQuestion ? (
            <div className="flex flex-wrap gap-2 justify-center">
              {options?.map((option) => (
                <button
                  key={option}
                  onClick={() => onSelect(option)}
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 text-sm font-medium transition-colors
                    ${selectedOption === option 
                      ? 'bg-green-500 border-green-500 text-white' 
                      : 'border-gray-300 text-black hover:bg-gray-100'}
                  `}
                >
                  {option}
                </button>
              ))}
            </div>
          ) : isDepressionQuestion ? (
            <div className="grid grid-cols-2 gap-4">
              {options?.map((option) => (
                <button
                  key={option}
                  onClick={() => onSelect(option)}
                  className={`w-full p-3 text-center rounded-full transition-colors
                    ${selectedOption === option ? 'bg-green-500 text-white' : 'bg-black text-white hover:bg-gray-800'}
                  `}
                >
                  {option}
                </button>
              ))}
            </div>
          ) : isSuicidalQuestion ? (
            <div className="flex flex-wrap gap-4 justify-center">
              {options?.map((option) => (
                <button
                  key={option}
                  onClick={() => onSelect(option)}
                  className={`w-40 p-3 text-center rounded-full transition-colors ${option === 'Yes'
                    ? (selectedOption === option ? 'bg-green-500 text-white' : 'bg-black text-white hover:bg-gray-800')
                    : (selectedOption === option ? 'bg-green-500 text-white' : 'bg-green-600 text-white hover:bg-green-700')
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          ) : (
            options?.map((option) => (
              <button
                key={option}
                onClick={() => onSelect(option)}
                className={`w-full p-3 text-center rounded-full transition-colors ${isCampusQuestion ?
                  (selectedOption === option ? 'bg-green-500 text-white' : 'bg-black text-white hover:bg-gray-800') :
                  (selectedOption === option ? 'bg-white bg-opacity-50 font-medium' : 'hover:bg-white hover:bg-opacity-30')
                }`}
              >
                {option}
              </button>
            ))
          )}
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