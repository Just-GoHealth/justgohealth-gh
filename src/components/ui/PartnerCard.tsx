import React from 'react';

interface PartnerCardProps {
  name: string;
  textColor: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ name, textColor }) => {
  return (
    <div className={`p-2 rounded-lg text-lg md:text-3xl font-medium`} style={{ color: textColor }}>
      {name}
    </div>
  );
};

export default PartnerCard;
