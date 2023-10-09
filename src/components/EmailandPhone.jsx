import React from 'react';

const EmailandPhone = () => {
    const emailAddress = "doubledragonnyc@gmail.com";
    const phoneNumber = '718-913-6133';

    return (
      <div>
        {/* Button to open default email client with prefilled address */}
        <button onClick={() => window.location.href = `mailto:${emailAddress}`}>Email</button>
  
        <br /><br />
  
        {/* Button to call number */}
        <button onClick={() => window.location.href = `tel:${phoneNumber}`}>Call {phoneNumber}</button>
      </div>
    );
}
  
export default EmailandPhone;
