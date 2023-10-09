import React, { useState } from 'react';

const EmailandPhone = () => {
    const [showEmailField, setShowEmailField] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('718-913-6133'); // Replace with your number or dynamic value
  
    return (
      <div>
        {/* Button to show email field */}
        <button onClick={() => setShowEmailField(!showEmailField)}>Email</button>
        {showEmailField && <input type="email" placeholder="doubledragonnyc@gmail.com" />}
  
        <br /><br />
  
        {/* Button to call number */}
        <button onClick={() => window.location.href = `tel:${phoneNumber}`}>Call {phoneNumber}</button>
      </div>
    );
  }
  
  export default EmailandPhone;