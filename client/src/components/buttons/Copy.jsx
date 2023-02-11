import React, { useState } from 'react';
import classnames from 'classnames';
import { useCoverLetterContext } from 'providers/CoverLetterProvider';

export default function Copy(props) {
  const { coverLetterText } = useCoverLetterContext();
  const [copySuccess, setCopySuccessState] = useState(false);
  const copyStateClass = classnames('copy', {
    'copy-success': copySuccess,
  });
  const handleCopy = () => {
    navigator.clipboard.writeText(coverLetterText);
    setCopySuccessState('Cover Letter copied to clipboard.');
  };

  return (
    <>
      <p className={copyStateClass}>{copySuccess}</p>
      <button className='coverletter-btn' onClick={handleCopy}>
        Copy
      </button>
    </>
  );
}
